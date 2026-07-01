import Link from "next/link";

export default function RubyOnRailsVsPhoenix2026Content() {
  return (
    <>
      <h2>Introduction: The Renaissance of Server-Side Web Development</h2>
      <p>
        <strong>Ruby on Rails vs Phoenix Framework</strong> is the backend
        decision that defines most new web applications in 2026. If you are
        architecting a product this year, you are likely standing at a
        crossroads between these two giants. The web development industry has
        spent the last decade caught in a pendulum swing&mdash;moving from
        traditional server-rendered monolithic applications to highly decoupled
        architectures featuring massive JavaScript Single Page Applications
        (SPAs) communicating with complex microservices.
      </p>
      <div className="rounded-xl border border-violet-500/20 bg-violet-600/10 p-6 my-6">
        <p className="!mb-0">
          <strong>Quick answer (TL;DR):</strong> Choose <strong>Ruby on Rails</strong>{" "}
          when speed to MVP, a mature gem ecosystem, and standard CRUD features
          matter most. Choose the <strong>Phoenix Framework</strong> (Elixir)
          when real-time interactivity, massive concurrency, and fault tolerance
          are core to the product. Rails optimizes for developer velocity;
          Phoenix optimizes for runtime scale and reliability.
        </p>
      </div>
      <p>
        While SPAs have their place, the sheer operational overhead, the
        JavaScript fatigue, and the complexity of maintaining two distinct
        codebases (frontend and backend) have led to a massive renaissance in
        server-side rendered frameworks. Developers and businesses alike are
        rediscovering the joy, speed, and maintainability of the majestic
        monolith.
      </p>
      <p>
        At the absolute forefront of this movement are two incredibly powerful
        frameworks: <strong>Ruby on Rails</strong> and the{" "}
        <strong>Phoenix Framework</strong>.
      </p>
      <p>
        Both frameworks share a common goal: maximizing developer productivity
        and pushing complex logic back to the server, delivering HTML over the
        wire to create snappy, SPA-like experiences without the client-side
        bloat. However, their underlying philosophies, architectural
        foundations, and approaches to scaling could not be more different.
      </p>
      <p>
        This comprehensive guide will break down Ruby on Rails and Phoenix,
        diving deep into their architectures, front-end paradigms, performance
        metrics, and ideal use cases to help you make an informed, CEO-level
        architectural decision for your next project.
      </p>

      <h2>Ruby on Rails: The Monolith Masterclass</h2>
      <p>
        Created by David Heinemeier Hansson (DHH) in 2004, Ruby on Rails
        fundamentally altered the trajectory of web development. It powers
        massive platforms like Shopify, GitHub, Stripe, and Airbnb. In 2026,
        with the release of Rails 8, the framework is more relevant, mature, and
        powerful than ever before.
      </p>

      <h3>The Philosophy of Convention Over Configuration</h3>
      <p>
        At its core, Rails is built on the principle of &ldquo;Convention over
        Configuration&rdquo; (CoC) and the &ldquo;Don&rsquo;t Repeat
        Yourself&rdquo; (DRY) ethos. Rails makes highly opinionated assumptions
        about what you need to build a web application and how those pieces
        should fit together.
      </p>
      <p>
        Instead of forcing you to make dozens of low-level decisions about
        directory structures, database routing, or library integrations before
        writing a single line of business logic, Rails provides a predetermined
        &ldquo;happy path.&rdquo; This optimization for developer happiness
        means that a single developer can move from an empty directory to a
        deployed application with authentication, database models, and a
        functional front-end in a matter of hours.
      </p>

      <h3>Active Record: The Crown Jewel</h3>
      <p>
        The backbone of Rails is Active Record, its Object-Relational Mapping
        (ORM) system. Active Record seamlessly maps database tables to Ruby
        objects. It is incredibly intuitive and allows developers to write
        complex database queries using elegant, readable Ruby syntax. Active
        Record handles the heavy lifting of relationships, validations, and
        callbacks, allowing you to treat your database purely as a persistence
        layer for your domain logic.
      </p>

      <h3>Rails 8 and the &ldquo;Solid&rdquo; Revolution</h3>
      <p>
        In 2026, Rails has aggressively simplified deployment and
        infrastructure. The most significant leap forward is the introduction of
        the &ldquo;Solid&rdquo; stack: <strong>Solid Queue</strong>,{" "}
        <strong>Solid Cache</strong>, and <strong>Solid Cable</strong>.
      </p>
      <p>
        Historically, deploying a robust Rails app required managing a separate
        Redis server for background jobs, caching, and WebSockets. The Solid
        stack leverages modern database capabilities (including highly optimized
        SQLite for many production cases) to handle queues, caches, and
        real-time connections directly within the primary database. This means
        you can deploy a full-stack, real-time application with a single server
        and a single database, drastically reducing infrastructure complexity
        and costs.
      </p>

      <h2>Phoenix Framework: The Concurrent Champion</h2>
      <p>
        If Rails is the master of rapid, object-oriented prototyping, the
        Phoenix Framework is the champion of raw performance, real-time
        concurrency, and functional reliability. Built on the Elixir language,
        Phoenix was created by Chris McCord to solve the exact problems that
        traditional Ruby web servers struggled with: maintaining thousands of
        simultaneous, real-time connections.
      </p>

      <h3>The Foundation: Elixir and the BEAM</h3>
      <p>
        To understand Phoenix, you must understand Elixir and its runtime, the
        BEAM (the Erlang Virtual Machine). Erlang was built in the 1980s by
        Ericsson for the telecom industry to run massive telephone switches. It
        was designed from day one to be distributed, fault-tolerant, and capable
        of handling millions of concurrent connections without ever going
        offline.
      </p>
      <p>
        Elixir brings modern, beautiful, Ruby-inspired syntax to the Erlang VM.
        Unlike Ruby, which is object-oriented, Elixir is a functional
        programming language. There are no objects, no inherited state, and no
        hidden side effects. Data is immutable, and functions simply transform
        data from one state to another.
      </p>
      <p>
        The BEAM operates on the &ldquo;Actor Model.&rdquo; Instead of
        traditional threads (which can block each other), the BEAM spawns
        millions of micro-processes that weigh only a few kilobytes. These
        processes run concurrently, completely isolated from one another,
        communicating only via message passing. If one process encounters a
        fatal error and crashes, it dies silently and is instantly restarted by
        a &ldquo;Supervisor&rdquo; without affecting any other process in the
        application.
      </p>

      <h3>Phoenix LiveView: Revolutionizing the Frontend</h3>
      <p>
        Phoenix&rsquo;s killer feature is <strong>LiveView</strong>. LiveView
        allows you to build rich, real-time user interfaces with server-rendered
        HTML. When a user connects to a LiveView page, a persistent WebSocket
        connection is opened. As the state of the application changes on the
        server, LiveView calculates the exact minimal diff of the HTML and
        pushes only those changed bytes down the wire to the browser.
      </p>
      <p>
        This means you can build dynamic dashboards, real-time chat apps, or
        live-updating charts without writing any custom JavaScript, without
        building REST or GraphQL APIs, and without worrying about client-server
        state synchronization. The server is the single source of truth. If you
        are evaluating Phoenix for a subscription product, see our deep dive on{" "}
        <Link
          href="/blog/why-elixir-phoenix-is-the-best-framework-for-saas"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          why Elixir Phoenix is the best framework for SaaS
        </Link>
        .
      </p>

      <h3>Ecto: Explicit Data Handling</h3>
      <p>
        Unlike Active Record&rsquo;s implicit magic, Phoenix uses{" "}
        <strong>Ecto</strong> for database interactions. Ecto is not a
        traditional ORM; it is a database wrapper and query generator. It forces
        developers to be highly explicit. Data validation and transformation are
        handled by &ldquo;Changesets,&rdquo; completely decoupled from the
        database schema itself. While this requires more boilerplate code upfront
        compared to Rails, it results in highly predictable, easily testable data
        flows that are a joy to maintain in massive, decade-old codebases.
      </p>

      <h2>Head-to-Head: Architecture and Performance</h2>
      <p>
        When comparing these two giants, the differences often come down to how
        they handle state, speed, and architectural paradigms.
      </p>

      <h3>Object-Oriented Magic vs. Functional Explicitness</h3>
      <p>
        Ruby on Rails relies on the magic of Object-Oriented Programming (OOP).
        Objects encapsulate state, and Rails uses a lot of metaprogramming to
        dynamically generate methods on the fly. This makes writing code
        incredibly fast and fluid, but it can sometimes make debugging difficult
        when you need to track down exactly where a state change occurred in a
        massive monolithic application.
      </p>
      <p>
        Phoenix, being functional, is explicit. State is never hidden; it is
        explicitly passed from function to function. You always know exactly what
        data is coming in and what is going out. This makes the code inherently
        easier to test and refactor, though it requires a paradigm shift for
        developers who have spent their entire careers in OOP environments.
      </p>

      <h3>Concurrency and Throughput: Why Phoenix Outperforms Rails</h3>
      <p>This is where Phoenix undeniably outshines Rails.</p>
      <p>
        Ruby implements a Global Interpreter Lock (GIL). In simple terms, even if
        you have a multi-core processor, traditional Ruby can only execute one
        thread of Ruby code at a time per process. While web servers like Puma
        use threading to handle I/O-bound tasks well, CPU-intensive tasks can
        block the entire server process. (Note: Ruby 3 and 4&rsquo;s YJIT
        compiler has massively improved raw speed, but the core concurrency model
        remains.)
      </p>
      <p>
        Phoenix and the BEAM have no such limitations. The VM utilizes all CPU
        cores natively, utilizing preemptive scheduling to ensure no single
        process ever hogs the CPU. A single Phoenix server can easily handle
        millions of simultaneous WebSocket connections, routing millions of
        messages per second with microsecond latency. If your application relies
        heavily on constant, bidirectional real-time data streaming, Phoenix is
        in a class of its own.
      </p>

      <h2>Practical Case Study: Architecting a Service Marketplace</h2>
      <p>
        To ground this comparison in reality, let&rsquo;s look at a practical
        scenario. Imagine you are tasked with building a Minimum Viable Product
        (MVP) for a local household services booking platform&mdash;a system
        connecting clients with local service providers. Let&rsquo;s call this
        hypothetical platform <strong>FixlyPro.ca</strong>.
      </p>
      <p>
        This platform requires multi-role authentication (Clients, Providers,
        Admins), real-time notifications for booking confirmations, complex state
        management for job statuses (Pending, In Progress, Completed), and an
        intuitive dispatch dashboard.
      </p>
      <p>
        <strong>Building FixlyPro.ca with Ruby on Rails:</strong> If you choose
        Rails for the FixlyPro MVP, your speed to initial market launch will be
        unparalleled. You can leverage mature gems like <code>Devise</code> for
        immediate, secure, multi-role authentication. The domain logic of
        connecting clients to providers fits perfectly into Active Record&rsquo;s
        relational modeling. For booking reminders and background tasks, the
        built-in Solid Queue handles everything right in the database. Using
        Hotwire, you can make the application feel like a snappy SPA. A small
        team, or even a single full-stack developer, could architect, build, and
        deploy the FixlyPro MVP in a matter of weeks, focusing almost entirely on
        business value rather than boilerplate.
      </p>
      <p>
        <strong>Building FixlyPro.ca with the Phoenix Framework:</strong> If you
        choose Phoenix to build the FixlyPro MVP, you are investing heavily in a
        foundation that will scale flawlessly as the user base and feature
        complexity grow. You would utilize Phoenix LiveView to build the
        real-time tracking and admin dispatch dashboards. When a service provider
        clicks &ldquo;Arrived&rdquo; on their mobile device, the client&rsquo;s
        screen and the admin&rsquo;s dispatch board update instantly via
        WebSockets, without a single page reload or custom API endpoint required.
        Because Elixir is functional, the complex state transitions of a booking
        lifecycle become highly predictable data transformations. Furthermore,
        the fault-tolerance of the BEAM ensures that if one specific booking
        process throws an unexpected error, it will crash and restart in
        isolation&mdash;meaning other clients booking services simultaneously on
        the platform remain entirely unaffected.
      </p>

      <h2>Front-End Paradigms: Hotwire vs. LiveView</h2>
      <p>
        Both frameworks are leading the charge in
        &ldquo;HTML-over-the-wire,&rdquo; but their implementations differ.
      </p>
      <ul>
        <li>
          <strong>Rails Hotwire (Turbo &amp; Stimulus):</strong> Hotwire
          intercepts links and form submissions, makes an AJAX request, and then
          replaces specific parts of the DOM with the HTML response from the
          server. It is incredibly effective for standard CRUD applications and
          degrades gracefully. You supplement it with Stimulus, a modest
          JavaScript framework for when you need specific client-side
          interactivity (like toggling a modal).
        </li>
        <li>
          <strong>Phoenix LiveView:</strong> LiveView is a persistent WebSocket
          connection. The server holds the state of the UI. When state changes,
          the server computes a diff and pushes it to the client. LiveView is
          superior for highly interactive, continuously updating interfaces (like
          live charts, collaborative tools, or complex multi-step forms with live
          validation), as it completely bypasses the traditional HTTP
          request/response cycle.
        </li>
      </ul>

      <h2>Ecosystem, Community, and Talent Acquisition</h2>
      <p>
        The ecosystem around a framework is often just as important as the code
        itself.
      </p>
      <p>
        <strong>The Ruby on Rails Ecosystem:</strong> Rails boasts one of the
        most mature, battle-tested ecosystems in the world. The RubyGems
        repository contains hundreds of thousands of pre-built libraries solving
        almost every conceivable business problem. Whether you need to integrate
        Stripe billing, handle complex authorization, or generate PDFs, there is
        a well-maintained gem for it. Additionally, the talent pool for Rails is
        massive. Hiring experienced Rails developers to scale a team is generally
        a straightforward process.
      </p>
      <p>
        <strong>The Phoenix Ecosystem:</strong> The Elixir ecosystem (managed via
        the Hex package manager) is smaller but characterized by incredibly high
        quality. Because Elixir developers tend to lean toward explicitness,
        libraries are often beautifully documented and highly robust. Tools like
        Oban (for robust background jobs) and the Ash Framework (for declarative
        resource modeling) are world-class. However, Elixir is still a niche
        language compared to Ruby. While Elixir developers are often highly
        skilled senior engineers who sought out the language, the overall talent
        pool is smaller, which can make rapid hiring more challenging.
      </p>

      <h2>Feature Comparison Matrix</h2>
      <p>
        To summarize the differences, here is a high-level comparison matrix
        between the two frameworks in 2026:
      </p>

      <div className="overflow-x-auto my-8">
        <table>
          <thead>
            <tr>
              <th>Feature/Domain</th>
              <th>Ruby on Rails 8</th>
              <th>Phoenix Framework 1.8+</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Language</td>
              <td>Ruby (Object-Oriented)</td>
              <td>Elixir (Functional)</td>
            </tr>
            <tr>
              <td>Underlying VM</td>
              <td>CRuby / YJIT</td>
              <td>BEAM (Erlang VM)</td>
            </tr>
            <tr>
              <td>Concurrency Model</td>
              <td>Threading / GIL</td>
              <td>Actor Model / Lightweight Processes</td>
            </tr>
            <tr>
              <td>Database Wrapper</td>
              <td>Active Record (Implicit ORM)</td>
              <td>Ecto (Explicit Data Wrapper)</td>
            </tr>
            <tr>
              <td>Real-Time Strategy</td>
              <td>ActionCable / Solid Cable</td>
              <td>Phoenix Channels / WebSockets</td>
            </tr>
            <tr>
              <td>Frontend Strategy</td>
              <td>Hotwire (Turbo + Stimulus)</td>
              <td>Phoenix LiveView</td>
            </tr>
            <tr>
              <td>Learning Curve</td>
              <td>Gentle, highly intuitive</td>
              <td>Steeper, requires functional paradigm shift</td>
            </tr>
            <tr>
              <td>Speed to MVP</td>
              <td>Exceptionally Fast</td>
              <td>Fast</td>
            </tr>
            <tr>
              <td>Fault Tolerance</td>
              <td>Standard</td>
              <td>World-Class (Self-healing systems)</td>
            </tr>
            <tr>
              <td>Ecosystem Size</td>
              <td>Massive (RubyGems)</td>
              <td>Growing, High-Quality (Hex)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Verdict: Which Should You Choose?</h2>
      <p>
        Choosing between Ruby on Rails and the Phoenix Framework is not about
        finding the objectively &ldquo;better&rdquo; tool; it is about choosing
        the right architectural foundation for your specific business goals, team
        composition, and product requirements.
      </p>
      <p>
        <strong>You should choose Ruby on Rails if:</strong>
      </p>
      <ul>
        <li>
          <strong>Time to Market is Critical:</strong> You are a startup building
          an MVP and need to iterate rapidly to find product-market fit.
        </li>
        <li>
          <strong>You Rely Heavily on Integrations:</strong> Your application
          needs to connect to a vast array of third-party services, and you want
          to leverage pre-existing gems.
        </li>
        <li>
          <strong>You Have a Small Team:</strong> You want a framework designed to
          allow a single &ldquo;full-stack&rdquo; developer to handle complex,
          end-to-end features efficiently.
        </li>
        <li>
          <strong>Your App is Standard CRUD:</strong> The majority of your
          application revolves around creating, reading, updating, and deleting
          database records with standard web page navigations.
        </li>
      </ul>
      <p>
        <strong>You should choose the Phoenix Framework if:</strong>
      </p>
      <ul>
        <li>
          <strong>Real-Time is the Product:</strong> Your application relies on
          constant, bidirectional data flow (e.g., live dashboards, trading
          platforms, chat applications, dispatch systems).
        </li>
        <li>
          <strong>You Anticipate Massive Concurrency:</strong> You expect sudden,
          massive spikes in traffic or need to maintain hundreds of thousands of
          simultaneous connections without exponentially scaling your server
          costs.
        </li>
        <li>
          <strong>System Reliability is Paramount:</strong> You are building a
          system where downtime is unacceptable, and you need the fault-tolerant,
          self-healing nature of the BEAM.
        </li>
        <li>
          <strong>You Prefer Explicit, Functional Code:</strong> Your engineering
          team prefers the predictability, testability, and explicit data flow of
          functional programming over the implicit magic of object-oriented
          frameworks.
        </li>
      </ul>
      <p>
        Ultimately, both frameworks are phenomenal choices in 2026. Ruby on Rails
        remains the undisputed king of developer productivity and rapid SaaS
        deployment, while Phoenix stands as a modern marvel of concurrent,
        real-time web engineering. Assess your domain, understand your long-term
        scaling needs, and choose the tool that aligns with your engineering
        philosophy.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>Is Phoenix faster than Ruby on Rails?</h3>
      <p>
        Yes, for concurrency and real-time workloads Phoenix is dramatically
        faster. The BEAM VM runs lightweight processes across all CPU cores with
        preemptive scheduling, handling hundreds of thousands of simultaneous
        WebSocket connections with microsecond latency. Rails, constrained by
        Ruby&rsquo;s Global Interpreter Lock, is fast enough for typical CRUD
        traffic&mdash;and YJIT has closed much of the raw-speed gap&mdash;but it
        cannot match Phoenix on high-concurrency, bidirectional data flow.
      </p>

      <h3>Should I learn Rails or Phoenix in 2026?</h3>
      <p>
        Learn Rails if you want the fastest path to shipping products, the
        largest job market, and a vast library ecosystem. Learn Phoenix if you
        want to work on real-time, high-scale systems and are comfortable with
        functional programming. Many senior engineers learn both: Rails for
        rapid prototyping and Phoenix for performance-critical services.
      </p>

      <h3>Is Elixir harder to learn than Ruby?</h3>
      <p>
        For developers coming from object-oriented languages, Elixir has a
        steeper initial curve because it is functional&mdash;immutable data,
        pattern matching, and recursion instead of mutable objects and loops.
        Most experienced developers become productive in two to four weeks. The
        syntax itself is Ruby-inspired and approachable; the paradigm shift is
        the real adjustment.
      </p>

      <h3>Can Phoenix replace Ruby on Rails?</h3>
      <p>
        For real-time, high-concurrency, and fault-tolerant applications,
        Phoenix is the stronger choice and can fully replace Rails. For standard
        CRUD SaaS, content sites, and MVPs where time to market and ecosystem
        breadth dominate, Rails remains the more pragmatic option. They are
        complementary tools, not strict replacements.
      </p>

      <h3>Is Ruby on Rails still relevant in 2026?</h3>
      <p>
        Absolutely. Rails 8 with the Solid stack (Solid Queue, Solid Cache,
        Solid Cable) removes the Redis dependency and simplifies deployment to a
        single server and database. Combined with Hotwire, Rails remains one of
        the most productive frameworks for shipping full-stack web applications,
        and it still powers Shopify, GitHub, and Stripe at massive scale.
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
                name: "Is Phoenix faster than Ruby on Rails?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, for concurrency and real-time workloads Phoenix is dramatically faster. The BEAM VM runs lightweight processes across all CPU cores with preemptive scheduling, handling hundreds of thousands of simultaneous WebSocket connections with microsecond latency. Rails, constrained by Ruby's Global Interpreter Lock, is fast enough for typical CRUD traffic but cannot match Phoenix on high-concurrency, bidirectional data flow.",
                },
              },
              {
                "@type": "Question",
                name: "Should I learn Rails or Phoenix in 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Learn Rails if you want the fastest path to shipping products, the largest job market, and a vast library ecosystem. Learn Phoenix if you want to work on real-time, high-scale systems and are comfortable with functional programming. Many senior engineers learn both: Rails for rapid prototyping and Phoenix for performance-critical services.",
                },
              },
              {
                "@type": "Question",
                name: "Is Elixir harder to learn than Ruby?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For developers coming from object-oriented languages, Elixir has a steeper initial curve because it is functional—immutable data, pattern matching, and recursion instead of mutable objects and loops. Most experienced developers become productive in two to four weeks. The syntax itself is Ruby-inspired and approachable; the paradigm shift is the real adjustment.",
                },
              },
              {
                "@type": "Question",
                name: "Can Phoenix replace Ruby on Rails?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For real-time, high-concurrency, and fault-tolerant applications, Phoenix is the stronger choice and can fully replace Rails. For standard CRUD SaaS, content sites, and MVPs where time to market and ecosystem breadth dominate, Rails remains the more pragmatic option. They are complementary tools, not strict replacements.",
                },
              },
              {
                "@type": "Question",
                name: "Is Ruby on Rails still relevant in 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Rails 8 with the Solid stack (Solid Queue, Solid Cache, Solid Cable) removes the Redis dependency and simplifies deployment to a single server and database. Combined with Hotwire, Rails remains one of the most productive frameworks for shipping full-stack web applications, and it still powers Shopify, GitHub, and Stripe at massive scale.",
                },
              },
            ],
          }),
        }}
      />

      <h2>Let Equantra Build It for You</h2>
      <p>
        We have seen what happens when teams choose the right framework from day
        one versus having to rewrite later. At Equantra, Elixir Phoenix is one
        of our core specialties alongside Ruby on Rails, Django, and Next.js.
      </p>
      <p>
        Whether you are building a new SaaS product from scratch, migrating an
        existing application to Elixir for better performance, or need a
        dedicated development team to scale your engineering capacity, we can
        help.
      </p>
      <p>Our team brings:</p>
      <ul>
        <li>
          Production experience building and maintaining Elixir Phoenix
          applications
        </li>
        <li>
          End-to-end delivery from architecture design through deployment
          and ongoing support
        </li>
        <li>
          A dedicated team model where you get committed engineers, not a
          rotating pool of contractors
        </li>
        <li>
          US-focused service with engineers who understand your market and
          your timezone
        </li>
      </ul>
      <p>
        <Link
          href="/contact"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Get a free consultation
        </Link>{" "}
        to discuss your project, or{" "}
        <Link
          href="/services#software-development"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          explore our custom software development services
        </Link>{" "}
        to see how we work, or{" "}
        <Link
          href="/phoenix"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          hire Phoenix Framework developers
        </Link>{" "}
        directly.
      </p>
    </>
  );
}
