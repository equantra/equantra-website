import Link from "next/link";

export default function WhenRailsHitsScalingLimitsContent() {
  return (
    <>
      <h2>Introduction: The Wall Every Successful Rails App Meets</h2>
      <p>
        Ruby on Rails is one of the best tools ever built for going from zero to
        a real product. That is not in dispute&mdash;Shopify, GitHub, and Stripe
        run enormous businesses on it. But success has a side effect: traffic,
        data, and concurrency grow, and eventually a Rails app that felt instant
        at launch starts sweating under load. Latency creeps up, the background
        queue backs up, and the fix is always the same&mdash;add more servers.
      </p>
      <p>
        This is not a &ldquo;Rails is bad&rdquo; article. It is an honest look at{" "}
        <strong>where Rails hits real scaling limits</strong>, why those limits
        exist, how far you can push Rails before they bite, and what the options
        are when scaling horizontally stops being economical. For a specific
        class of workloads&mdash;high concurrency and real-time&mdash;the answer
        increasingly points to Elixir and Phoenix.
      </p>
      <div className="rounded-xl border border-violet-500/20 bg-violet-600/10 p-6 my-6">
        <p className="!mb-0">
          <strong>Quick answer (TL;DR):</strong> Rails scales
          <em> horizontally</em>&mdash;you buy throughput with more processes and
          more machines. That works well until concurrency, WebSocket density, or
          real-time features dominate your workload, at which point the cost
          curve bends the wrong way. The BEAM (Elixir/Phoenix) scales those
          workloads <em>vertically</em> on a single node, which is where the
          economics flip.
        </p>
      </div>

      <h2>The Root Cause: Ruby&rsquo;s Concurrency Model</h2>
      <p>
        Almost every Rails scaling limit traces back to one design decision:
        Ruby&rsquo;s Global Interpreter Lock (GIL). Even on a many-core machine,
        a single Ruby process executes one thread of Ruby code at a time. Puma
        uses threads to overlap I/O waits, which helps for database- and
        network-bound work, but CPU-bound work in one request can stall the
        others in that process.
      </p>
      <p>
        The standard answer is to run multiple processes (Puma workers) and
        multiple machines behind a load balancer. Each worker is a full copy of
        your app in memory. So throughput scales&mdash;but linearly with RAM and
        machine count. There is nothing wrong with this until the ratio of
        servers to users gets expensive.
      </p>

      <h2>Where the Limits Actually Show Up</h2>

      <h3>1. WebSocket and Real-Time Density</h3>
      <p>
        This is the sharpest wall. Every open WebSocket in a Rails/ActionCable
        setup consumes a thread slot and leans on Redis for pub/sub across
        processes. As persistent connections climb into the tens and hundreds of
        thousands, you scale out aggressively and Redis becomes a bottleneck and
        a single point of failure. The BEAM, by contrast, was built to hold
        millions of concurrent connections on a single node&mdash;each connection
        is a lightweight process weighing a couple of kilobytes.
      </p>

      <h3>2. Background Job Throughput</h3>
      <p>
        Sidekiq is excellent, but at high volume you are running a fleet of
        worker processes plus Redis, tuning concurrency per queue, and watching
        for memory bloat. Job latency under burst becomes an operational
        concern. Elixir handles this in-process with Oban (Postgres-backed) and
        with lightweight processes for fan-out work&mdash;no separate worker
        fleet and no Redis to babysit.
      </p>

      <h3>3. CPU-Bound Request Work</h3>
      <p>
        Any request that does meaningful in-process computation&mdash;
        serialization of large payloads, in-memory aggregation, image or data
        processing&mdash;contends for the GIL. YJIT (Ruby 3+/4) has massively
        improved raw execution speed and closed much of the single-threaded gap,
        but it does not change the one-thread-at-a-time concurrency model. The
        BEAM runs these across all cores with preemptive scheduling so no single
        task can hog a scheduler.
      </p>

      <h3>4. Tail Latency Under Load</h3>
      <p>
        Rails average latency can look fine while p99 latency degrades badly
        under load, because a few slow requests block worker slots. The
        BEAM&rsquo;s preemptive scheduler is specifically designed to keep tail
        latency flat&mdash;it will not let one expensive operation starve
        thousands of cheap ones.
      </p>

      <h2>How Far Can You Push Rails First?</h2>
      <p>
        Before rewriting anything, exhaust the Rails scaling toolkit&mdash;most
        apps never actually need to leave. In order of leverage:
      </p>
      <ul>
        <li>
          <strong>Fix the database first.</strong> The overwhelming majority of
          &ldquo;Rails is slow&rdquo; problems are N+1 queries, missing indexes,
          and unbounded result sets&mdash;not the runtime. Profile before you
          scale.
        </li>
        <li>
          <strong>Cache aggressively.</strong> Fragment caching, HTTP caching,
          and Rails 8&rsquo;s Solid Cache remove entire categories of load.
        </li>
        <li>
          <strong>Tune Puma.</strong> Right-size worker and thread counts to your
          actual CPU and memory; misconfiguration is common.
        </li>
        <li>
          <strong>Move heavy work out of the request cycle.</strong> Push
          anything slow into background jobs.
        </li>
        <li>
          <strong>Scale horizontally.</strong> Add app servers behind a load
          balancer. This is Rails&rsquo; native scaling story and it goes a long
          way.
        </li>
      </ul>
      <p>
        If you have done all of this and the cost of the next order of magnitude
        is still dominated by concurrency or real-time load, that is the real
        signal&mdash;not a slow endpoint you never profiled.
      </p>

      <h2>When Phoenix Is the Right Escape Hatch</h2>
      <p>
        Phoenix runs on the same BEAM that was built at Ericsson to keep telecom
        switches online through millions of concurrent connections and hardware
        faults. That heritage is exactly what a scaling-limited Rails app needs:
        native multi-core concurrency, cheap connections, flat tail latency, and
        self-healing supervision trees. For the mechanics of why&mdash;processes,
        schedulers, and supervisors&mdash;see{" "}
        <Link
          href="/blog/what-is-the-beam-and-otp"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          What Is the BEAM and OTP
        </Link>
        .
      </p>
      <p>
        The move does not have to be all-or-nothing. The pragmatic path is to
        keep Rails for the CRUD it does well and migrate the concurrency-heavy
        surfaces to Phoenix incrementally&mdash;both apps sharing one
        database&mdash;as described in our{" "}
        <Link
          href="/blog/migrating-from-rails-to-phoenix-2026"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Rails to Phoenix migration guide
        </Link>
        . And if you are weighing the two frameworks for a greenfield decision,
        the full{" "}
        <Link
          href="/blog/ruby-on-rails-vs-phoenix-framework-2026"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Rails vs Phoenix comparison
        </Link>{" "}
        breaks down the trade-offs.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>At what scale does Ruby on Rails start to struggle?</h3>
      <p>
        There is no single number&mdash;it depends on workload shape, not user
        count. CRUD-heavy apps scale to very large traffic on Rails by adding
        servers and caching. The limits show up sooner for workloads dominated by
        persistent WebSocket connections, high background-job throughput, or
        CPU-bound in-process work, because those press against Ruby&rsquo;s
        single-threaded-per-process concurrency model.
      </p>

      <h3>Does YJIT fix Rails&rsquo; scaling problems?</h3>
      <p>
        YJIT significantly improves Ruby&rsquo;s raw execution speed and is worth
        enabling, but it does not change the concurrency model. One Ruby thread
        still executes at a time per process because of the Global Interpreter
        Lock, so YJIT helps per-request speed without removing the need to scale
        out for high concurrency.
      </p>

      <h3>Should I rewrite my Rails app in Phoenix to scale?</h3>
      <p>
        Rarely a full rewrite, and never as a first step. Exhaust database
        tuning, caching, and horizontal scaling first&mdash;most apps never need
        to leave Rails. If concurrency or real-time load still dominates your cost
        curve, migrate the affected surfaces to Phoenix incrementally while Rails
        keeps handling the rest.
      </p>

      <h3>Can Phoenix handle more concurrent connections than Rails?</h3>
      <p>
        Dramatically more, on a single node. The BEAM holds each connection in a
        lightweight process of a few kilobytes and schedules work across all CPU
        cores, so one Phoenix node can maintain hundreds of thousands to millions
        of concurrent connections. Rails scales connections by adding processes
        and machines, which costs far more per connection at that density.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "At what scale does Ruby on Rails start to struggle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There is no single number—it depends on workload shape, not user count. CRUD-heavy apps scale to very large traffic on Rails by adding servers and caching. The limits show up sooner for workloads dominated by persistent WebSocket connections, high background-job throughput, or CPU-bound in-process work, because those press against Ruby's single-threaded-per-process concurrency model.",
                },
              },
              {
                "@type": "Question",
                name: "Does YJIT fix Rails' scaling problems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "YJIT significantly improves Ruby's raw execution speed and is worth enabling, but it does not change the concurrency model. One Ruby thread still executes at a time per process because of the Global Interpreter Lock, so YJIT helps per-request speed without removing the need to scale out for high concurrency.",
                },
              },
              {
                "@type": "Question",
                name: "Should I rewrite my Rails app in Phoenix to scale?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rarely a full rewrite, and never as a first step. Exhaust database tuning, caching, and horizontal scaling first—most apps never need to leave Rails. If concurrency or real-time load still dominates your cost curve, migrate the affected surfaces to Phoenix incrementally while Rails keeps handling the rest.",
                },
              },
              {
                "@type": "Question",
                name: "Can Phoenix handle more concurrent connections than Rails?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dramatically more, on a single node. The BEAM holds each connection in a lightweight process of a few kilobytes and schedules work across all CPU cores, so one Phoenix node can maintain hundreds of thousands to millions of concurrent connections. Rails scales connections by adding processes and machines, which costs far more per connection at that density.",
                },
              },
            ],
          }),
        }}
      />

      <h2>Let Equantra Diagnose Your Scaling Wall</h2>
      <p>
        Not every scaling problem needs a new framework&mdash;and knowing the
        difference is worth a lot. At Equantra we work across both Ruby on Rails
        and Elixir Phoenix, so we can tell you honestly whether your bottleneck
        is a query, a config, or a genuine runtime limit that Phoenix would
        solve.
      </p>
      <p>Our team brings:</p>
      <ul>
        <li>
          Deep experience profiling and scaling production Rails applications
        </li>
        <li>
          Production Elixir Phoenix expertise for the workloads Rails cannot
          scale economically
        </li>
        <li>
          Incremental migration experience&mdash;no big-bang rewrites, no frozen
          roadmaps
        </li>
        <li>
          A dedicated team model with committed engineers, not a rotating pool of
          contractors
        </li>
      </ul>
      <p>
        <Link
          href="/hire-elixir-developers"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Hire Elixir developers
        </Link>{" "}
        to break through your scaling wall, or{" "}
        <Link
          href="/contact"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          get a free consultation
        </Link>{" "}
        to diagnose where your Rails app is actually bottlenecked.
      </p>
    </>
  );
}
