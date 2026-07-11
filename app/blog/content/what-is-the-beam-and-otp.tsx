import Link from "next/link";

export default function WhatIsTheBeamAndOtpContent() {
  return (
    <>
      <h2>What Is the BEAM?</h2>
      <p>
        The <strong>BEAM</strong> is the virtual machine that runs Erlang and{" "}
        <a
          href="https://elixir-lang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Elixir
        </a>
        . It was built at Ericsson to run telephone switches that must never go
        down, and that heritage shapes everything about it: massive concurrency,
        fault isolation, soft real-time latency, and hot code upgrades. When
        people say Elixir &ldquo;scales&rdquo; and &ldquo;self-heals,&rdquo; they
        are really talking about the BEAM.
      </p>
      <div className="rounded-xl border border-violet-500/20 bg-violet-600/10 p-6 my-6">
        <p className="!mb-0">
          <strong>In one sentence:</strong> The BEAM runs millions of tiny,
          isolated processes that share nothing and talk only by messages, and{" "}
          <strong>OTP</strong> is the battle-tested library of patterns
          (GenServer, supervisors) for wiring those processes into reliable
          systems.
        </p>
      </div>

      <h2>Lightweight Processes, Not OS Threads</h2>
      <p>
        A BEAM process is not an OS process or thread. It is an extremely cheap
        unit of concurrency&mdash;roughly 2&nbsp;KB of memory&mdash;so a single
        machine can run millions of them at once. Each process has its own heap,
        so garbage collection happens per-process and never pauses the whole
        system.
      </p>
      <p>
        Processes share no memory. They communicate by sending immutable
        messages to each other&rsquo;s mailboxes. This &ldquo;shared-nothing&rdquo;
        design is what makes concurrency on the BEAM safe by default&mdash;there
        are no data races to guard against with locks.
      </p>
      <pre>
        <code>{`# Spawn a process and send it a message
pid = spawn(fn ->
  receive do
    {:hello, from} -> send(from, :hi_back)
  end
end)

send(pid, {:hello, self()})`}</code>
      </pre>

      <h2>Preemptive Schedulers</h2>
      <p>
        The BEAM runs one scheduler per CPU core and multiplexes all those
        processes across them. Crucially, scheduling is <em>preemptive</em>: the
        VM interrupts a process after a small amount of work (reductions) so no
        single process can hog a core and starve the others. That is why BEAM
        systems keep low, predictable latency even under heavy load&mdash;the
        property that matters most for real-time apps.
      </p>

      <h2>What Is OTP?</h2>
      <p>
        <strong>OTP</strong> (Open Telecom Platform) is the set of libraries and
        design principles that turn raw processes into dependable systems. You
        rarely spawn bare processes in production Elixir&mdash;you use OTP
        abstractions, chiefly <strong>GenServer</strong> and{" "}
        <strong>supervisors</strong>.
      </p>

      <h3>GenServer: A Stateful Process With a Contract</h3>
      <p>
        A GenServer is a process that holds state and responds to synchronous
        calls and asynchronous casts through a standard set of callbacks. It is
        the workhorse of Elixir applications&mdash;caches, counters, connection
        pools, and background workers are all GenServers.
      </p>
      <pre>
        <code>{`defmodule Counter do
  use GenServer

  def start_link(initial), do: GenServer.start_link(__MODULE__, initial, name: __MODULE__)
  def increment, do: GenServer.cast(__MODULE__, :inc)
  def value, do: GenServer.call(__MODULE__, :value)

  @impl true
  def init(initial), do: {:ok, initial}

  @impl true
  def handle_cast(:inc, count), do: {:noreply, count + 1}

  @impl true
  def handle_call(:value, _from, count), do: {:reply, count, count}
end`}</code>
      </pre>

      <h3>Supervisors and &ldquo;Let It Crash&rdquo;</h3>
      <p>
        A supervisor is a process whose only job is to start, monitor, and
        restart other processes. Instead of writing defensive code for every
        possible failure, you let a process crash and trust its supervisor to
        restart it in a clean, known-good state. Failures become isolated and
        recoverable rather than cascading.
      </p>
      <pre>
        <code>{`children = [
  {Counter, 0},
  {MyApp.Cache, []}
]

# If a child crashes, restart just that child
Supervisor.start_link(children, strategy: :one_for_one)`}</code>
      </pre>
      <p>
        Supervisors nest into <strong>supervision trees</strong>: supervisors
        supervising supervisors, all the way down to workers. This tree is the
        backbone of a fault-tolerant Elixir system. Details are in the official{" "}
        <a
          href="https://hexdocs.pm/elixir/supervisor-and-application.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Elixir supervisor documentation
        </a>
        .
      </p>

      <h2>Why This Matters for Real Products</h2>
      <p>
        The BEAM and OTP are exactly why{" "}
        <Link
          href="/blog/phoenix-liveview-guide-2026"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Phoenix LiveView
        </Link>{" "}
        can hold hundreds of thousands of live connections, why a dropped
        WebSocket is a single isolated failure rather than a page-wide outage,
        and why Elixir is such a strong fit for real-time SaaS. We make that case
        in full in{" "}
        <Link
          href="/blog/why-elixir-phoenix-is-the-best-framework-for-saas"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          why Elixir Phoenix is the best framework for SaaS
        </Link>
        , and compare the runtime to alternatives in{" "}
        <Link
          href="/blog/elixir-vs-go-2026"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Elixir vs Go
        </Link>
        .
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>What is the BEAM in Elixir?</h3>
      <p>
        The BEAM is the Erlang virtual machine that Elixir compiles to and runs
        on. It provides lightweight isolated processes, per-core preemptive
        scheduling, message passing, and fault isolation&mdash;the runtime
        features behind Elixir&rsquo;s concurrency and reliability.
      </p>

      <h3>What is the difference between the BEAM and OTP?</h3>
      <p>
        The BEAM is the virtual machine&mdash;the engine that runs your code and
        schedules processes. OTP is the library of proven patterns (GenServer,
        supervisors, applications) built on top of the BEAM for structuring
        reliable, fault-tolerant systems. The BEAM is the runtime; OTP is how you
        build with it.
      </p>

      <h3>What is a GenServer?</h3>
      <p>
        A GenServer is an OTP behaviour for a stateful server process. It holds
        state and handles synchronous calls and asynchronous casts through
        standard callbacks (<code>init</code>, <code>handle_call</code>,{" "}
        <code>handle_cast</code>). It is the most common building block in Elixir
        applications.
      </p>

      <h3>What does &ldquo;let it crash&rdquo; mean?</h3>
      <p>
        &ldquo;Let it crash&rdquo; is the Elixir philosophy of not writing
        defensive code for every error. Instead, you let a process fail and rely
        on its supervisor to restart it in a clean state. Because processes are
        isolated, one crash does not corrupt or take down the rest of the system.
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
                name: "What is the BEAM in Elixir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The BEAM is the Erlang virtual machine that Elixir compiles to and runs on. It provides lightweight isolated processes, per-core preemptive scheduling, message passing, and fault isolation—the runtime features behind Elixir's concurrency and reliability.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between the BEAM and OTP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The BEAM is the virtual machine—the engine that runs your code and schedules processes. OTP is the library of proven patterns (GenServer, supervisors, applications) built on top of the BEAM for structuring reliable, fault-tolerant systems.",
                },
              },
              {
                "@type": "Question",
                name: "What is a GenServer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GenServer is an OTP behaviour for a stateful server process. It holds state and handles synchronous calls and asynchronous casts through standard callbacks (init, handle_call, handle_cast). It is the most common building block in Elixir applications.",
                },
              },
              {
                "@type": "Question",
                name: "What does 'let it crash' mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "'Let it crash' is the Elixir philosophy of not writing defensive code for every error. Instead, you let a process fail and rely on its supervisor to restart it in a clean state. Because processes are isolated, one crash does not take down the rest of the system.",
                },
              },
            ],
          }),
        }}
      />

      <h2>Build on the BEAM With Equantra</h2>
      <p>
        We build production Elixir Phoenix systems that lean on exactly these
        properties&mdash;concurrency, fault tolerance, and real-time delivery.
      </p>
      <p>
        <Link
          href="/hire-elixir-developers"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Hire Elixir developers
        </Link>
        , explore our{" "}
        <Link
          href="/phoenix"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Phoenix framework development
        </Link>{" "}
        practice, or{" "}
        <Link
          href="/contact"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          get a free consultation
        </Link>
        .
      </p>
    </>
  );
}
