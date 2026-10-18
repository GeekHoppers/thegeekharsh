import { Link } from '../router'
import { SEO } from '../components/SEO'

export function AboutPage() {
  return (
    <>
      <SEO
        title="About — Harsh Sinha · The Geek Harsh"
        description="Software engineer interested in building maintainable web experiences, solving backend and integration problems, and exploring practical applications of AI."
        path="/about"
        type="profile"
      />

      <div className="w-full max-w-[1160px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
        {/* Top Hero & Editorial Identity */}
        <section className="py-space-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Left Column: Editorial Statement */}
            <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
              <div className="flex items-center gap-space-xs">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-outline">
                  Profile / Engineering Rationale
                </span>
              </div>
              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
                A little about
                <br />
                <span className="text-primary italic font-serif">how I build.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                I’m Harsh Sinha, a software engineer interested in building maintainable web experiences, solving backend and integration problems, and exploring practical applications of AI.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs font-label-code text-label-code text-outline">
                <span className="px-space-sm py-1 bg-surface-container rounded-lg text-on-surface">
                  Noida, Uttar Pradesh, India
                </span>
                <span className="px-space-sm py-1 bg-surface-container rounded-lg text-on-surface">
                  AEM Core &amp; Edge
                </span>
                <span className="px-space-sm py-1 bg-surface-container rounded-lg text-on-surface">
                  Systems Integration
                </span>
              </div>
            </div>

            {/* Right Column: Geometric System Artifact (Architectural abstraction) */}
            <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
              <div className="relative w-full aspect-square bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between overflow-hidden shadow-sm">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-center text-outline font-label-code text-label-code">
                  <span>Architecture Overview</span>
                  <span className="material-symbols-outlined text-primary text-[1.25rem]">schema</span>
                </div>

                {/* Abstract Modular Architecture Visualization */}
                <div className="my-auto py-space-md flex flex-col gap-space-xs">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-surface-container-highest rounded-lg p-2.5 flex flex-col justify-between group hover:bg-primary-container hover:text-on-primary transition-all">
                      <span className="font-meta-tag text-meta-tag">LAYER.01</span>
                      <span className="font-label-code text-[0.7rem] font-medium">Edge Blocks</span>
                    </div>
                    <div className="h-16 col-span-2 bg-surface-container rounded-lg p-2.5 flex flex-col justify-between border-l-2 border-primary">
                      <span className="font-meta-tag text-meta-tag text-outline">DETAILS</span>
                      <span className="font-label-code text-[0.7rem] text-on-surface">Decoupled Delivery Pipeline</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-7 h-20 bg-primary-container text-on-primary-container rounded-lg p-2.5 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-meta-tag text-meta-tag opacity-80">CORE SERVICES</span>
                        <span className="material-symbols-outlined text-[1rem]">layers</span>
                      </div>
                      <span className="font-label-code text-[0.75rem] font-medium text-white">OSGi • Sling Models • JCR</span>
                    </div>
                    <div className="col-span-5 h-20 bg-surface-container-high rounded-lg p-2.5 flex flex-col justify-between">
                      <span className="font-meta-tag text-meta-tag text-outline">STATE</span>
                      <span className="font-label-code text-[0.7rem] text-on-surface">Idempotent Store</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-12 bg-surface-container rounded-lg flex items-center justify-center font-meta-tag text-meta-tag text-outline hover:text-primary transition-colors">
                      REST
                    </div>
                    <div className="h-12 bg-surface-container rounded-lg flex items-center justify-center font-meta-tag text-meta-tag text-outline hover:text-primary transition-colors">
                      GraphQL
                    </div>
                    <div className="h-12 bg-surface-container-highest rounded-lg flex items-center justify-center font-meta-tag text-meta-tag text-primary font-semibold">
                      MCP
                    </div>
                    <div className="h-12 bg-surface-container rounded-lg flex items-center justify-center font-meta-tag text-meta-tag text-outline hover:text-primary transition-colors">
                      Vision
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-space-xs font-meta-tag text-meta-tag text-outline border-t-0">
                  <span>DISCIPLINE: MODULARITY</span>
                  <span className="text-secondary font-medium">ENTERPRISE &amp; EDGE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Narrative: Professional Story */}
        <section className="py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-3 flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                01 / Narrative
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Background &amp; Discipline</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-space-xs">
                A deliberate journey focused on platform architecture, enterprise maintainability, and clean code.
              </p>
            </div>

            <div className="lg:col-span-9 flex flex-col gap-space-lg">
              <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm space-y-space-md">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold">
                      Domain: Enterprise Web
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-meta-tag text-meta-tag text-outline">Scale &amp; Content Architecture</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    My core engineering focus centers on building robust, scalable web platforms using Adobe Experience Manager—spanning both traditional AEM 6.5 Managed Services and modern AEM Edge Delivery Services. I specialize in translating complex content requirements into resilient custom components, modular Sling Models, adaptable Content Fragment schemas, and automated DAM workflows that decouple authoring velocity from production stability.
                  </p>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold">
                      Domain: Full-Stack &amp; Integration
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-meta-tag text-meta-tag text-outline">APIs &amp; Orchestration</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    Beyond the presentation layer, I work on full-stack systems engineering and middleware. This includes designing responsive portal interfaces, contributing to Python and Django backends, and bridging enterprise services via REST and GraphQL. More recently, this entails orchestrating emerging context layers—such as Model Context Protocol (MCP) servers—to establish structured conduits between disparate data sources and interactive interfaces.
                  </p>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold">
                      Domain: Applied AI &amp; Research
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-meta-tag text-meta-tag text-outline">Perception &amp; Edge Processing</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    My technical curiosity extends into applied machine learning, specifically computer vision systems. My past work explores real-time object detection (YOLO), spatial landmark analysis with MediaPipe, and biometric recognition pipelines. This research yielded a published book chapter examining automated physical security and campus safety prototypes running on constrained edge hardware.
                  </p>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold">
                      Philosophy: Engineering Ethos
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-meta-tag text-meta-tag text-outline">Pragmatism</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    Throughout every deployment, my baseline principle remains uncompromised: software must be understandable, maintainable, and inspectable. I deliberately reject resume-driven architecture in favor of clean abstractions, robust error boundaries, and self-documenting codebases that empower teams to operate with confidence long after the initial commit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths Grid (4x2 Restrained) */}
        <section className="py-space-xl">
          <div className="flex flex-col gap-space-sm mb-space-lg">
            <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
              02 / Competencies
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Core Strengths</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Systematic capabilities developed through production engagements, platform migrations, and collaborative problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-all">
              <div className="space-y-space-xs">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[1.25rem]">widgets</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Component &amp; Block Development</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Modular, high-performance UI blocks for AEM Edge Delivery and traditional HTL/Sling components built with semantic HTML.
                </p>
              </div>
              <span className="font-meta-tag text-meta-tag text-outline pt-space-sm">MODULARITY</span>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-all">
              <div className="space-y-space-xs">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[1.25rem]">sync_alt</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Frontend / Backend Integration</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Bridging client applications seamlessly with RESTful endpoints, OSGi services, and GraphQL persistent queries.
                </p>
              </div>
              <span className="font-meta-tag text-meta-tag text-outline pt-space-sm">INTERFACING</span>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-all">
              <div className="space-y-space-xs">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[1.25rem]">troubleshoot</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Debugging Workflows</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Isolating race conditions, cache invalidation discrepancies, replication errors, and platform rendering bottlenecks.
                </p>
              </div>
              <span className="font-meta-tag text-meta-tag text-outline pt-space-sm">ROOT-CAUSE</span>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-all">
              <div className="space-y-space-xs">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[1.25rem]">space_dashboard</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Content Modelling</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Architecting intuitive authoring dialogs, Universal Editor metadata setups, and clean Content Fragment hierarchies.
                </p>
              </div>
              <span className="font-meta-tag text-meta-tag text-outline pt-space-sm">AUTHOR-FIRST</span>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-all">
              <div className="space-y-space-xs">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[1.25rem]">manage_search</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">API &amp; Search Integration</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Implementing faceted enterprise search indices, indexing strategies, and optimized external service consumers.
                </p>
              </div>
              <span className="font-meta-tag text-meta-tag text-outline pt-space-sm">RETRIEVAL</span>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-all">
              <div className="space-y-space-xs">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[1.25rem]">terminal</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Technical Problem-Solving</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Deconstructing opaque failure states, edge-case platform behavior, and multi-tier network request failures.
                </p>
              </div>
              <span className="font-meta-tag text-meta-tag text-outline pt-space-sm">DIAGNOSTICS</span>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-all">
              <div className="space-y-space-xs">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[1.25rem]">biotech</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Research Experimentation</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Prototyping computer vision pipelines, measuring frame latency, and running disciplined algorithmic benchmarks.
                </p>
              </div>
              <span className="font-meta-tag text-meta-tag text-outline pt-space-sm">EMPIRICAL</span>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-all">
              <div className="space-y-space-xs">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[1.25rem]">speed</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Accessible, performant front-end</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Building responsive, fluid layouts with clean semantic markup, fast loading times, and intuitive keyboard and screen reader navigation.
                </p>
              </div>
              <span className="font-meta-tag text-meta-tag text-outline pt-space-sm">USABILITY</span>
            </div>
          </div>
        </section>

        {/* Technical Toolkit: Structured by Category */}
        <section className="py-space-xl">
          <div className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl shadow-sm">
            <div className="flex flex-col gap-space-xs mb-space-lg">
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                03 / Inventory
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Technical Toolkit</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Technologies, frameworks, and protocols utilized across enterprise production applications and research builds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs pb-space-xs">
                  <span className="material-symbols-outlined text-primary text-[1.25rem]">dns</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Enterprise Web</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['AEM 6.5', 'Edge Delivery Services', 'Sling Models', 'HTL / Sightly', 'OSGi', 'DAM Workflows', 'Universal Editor', 'JCR Architecture'].map((tech) => (
                    <span key={tech} className="font-meta-tag text-meta-tag bg-surface-container-lowest text-on-surface px-2.5 py-1 rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs pb-space-xs">
                  <span className="material-symbols-outlined text-primary text-[1.25rem]">code</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'HTML5 Semantic', 'CSS3 Modern', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="font-meta-tag text-meta-tag bg-surface-container-lowest text-on-surface px-2.5 py-1 rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs pb-space-xs">
                  <span className="material-symbols-outlined text-primary text-[1.25rem]">hub</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Backend &amp; APIs</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Java', 'Python', 'Django', 'RESTful APIs', 'GraphQL Queries', 'MCP (Model Context)'].map((tech) => (
                    <span key={tech} className="font-meta-tag text-meta-tag bg-surface-container-lowest text-on-surface px-2.5 py-1 rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs pb-space-xs">
                  <span className="material-symbols-outlined text-primary text-[1.25rem]">database</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Data &amp; Content</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Apache Jackrabbit', 'PostgreSQL', 'Content Fragments', 'JSON Store', 'Oak Indexes'].map((tech) => (
                    <span key={tech} className="font-meta-tag text-meta-tag bg-surface-container-lowest text-on-surface px-2.5 py-1 rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs pb-space-xs">
                  <span className="material-symbols-outlined text-primary text-[1.25rem]">visibility</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">AI &amp; Vision</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['OpenCV', 'YOLO (v5/v8)', 'MediaPipe', 'Edge ML Inferences', 'NumPy'].map((tech) => (
                    <span key={tech} className="font-meta-tag text-meta-tag bg-surface-container-lowest text-on-surface px-2.5 py-1 rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs pb-space-xs">
                  <span className="material-symbols-outlined text-primary text-[1.25rem]">construction</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Tools &amp; Pipeline</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Git', 'Apache Maven', 'Node.js', 'Webpack', 'Postman', 'CI/CD Automation'].map((tech) => (
                    <span key={tech} className="font-meta-tag text-meta-tag bg-surface-container-lowest text-on-surface px-2.5 py-1 rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Working Principles (Editorial 5 Core Rules) */}
        <section className="py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-4 flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                04 / Framework
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Working Principles</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-space-xs">
                Five non-negotiable guidelines governing how I write code, review pull requests, and communicate within technical teams.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:translate-x-1 transition-transform flex flex-col sm:flex-row gap-space-md items-start">
                <span className="font-meta-tag text-meta-tag text-primary bg-surface-container px-2.5 py-1 rounded-lg">01</span>
                <div className="space-y-space-xs flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Build for maintainability</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Code is read far more often than it is written. Every component, class, and utility function should be structured to welcome future maintainers without cognitive friction or surprise behaviors.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:translate-x-1 transition-transform flex flex-col sm:flex-row gap-space-md items-start">
                <span className="font-meta-tag text-meta-tag text-primary bg-surface-container px-2.5 py-1 rounded-lg">02</span>
                <div className="space-y-space-xs flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Keep implementations understandable</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Eliminate gratuitous abstractions, premature generalizations, and clever shorthand. Solving the concrete problem directly and legibly is infinitely more valuable than speculative flexibility.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:translate-x-1 transition-transform flex flex-col sm:flex-row gap-space-md items-start">
                <span className="font-meta-tag text-meta-tag text-primary bg-surface-container px-2.5 py-1 rounded-lg">03</span>
                <div className="space-y-space-xs flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Verify claims with evidence</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Ground technical choices in measurable facts, reproducible benchmarks, test coverage, and repeatable production observations rather than ideological consensus or vendor marketing.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:translate-x-1 transition-transform flex flex-col sm:flex-row gap-space-md items-start">
                <span className="font-meta-tag text-meta-tag text-primary bg-surface-container px-2.5 py-1 rounded-lg">04</span>
                <div className="space-y-space-xs flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Consider performance and accessibility</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Building accessible, lightweight, and fast web experiences is a foundational baseline requirement, never an afterthought to be retrofitted before launch.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:translate-x-1 transition-transform flex flex-col sm:flex-row gap-space-md items-start">
                <span className="font-meta-tag text-meta-tag text-primary bg-surface-container px-2.5 py-1 rounded-lg">05</span>
                <div className="space-y-space-xs flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Protect confidential information</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Strictly respect intellectual property, client operational privacy, and proprietary infrastructure boundaries across all personal showcases, talks, and open-source contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial CTA Section */}
        <section className="py-space-xl">
          <div className="bg-surface-container-high rounded-xl p-space-lg md:p-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
            <div className="space-y-space-xs max-w-xl">
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">Next Step</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Let’s connect.</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Interested in technical collaboration, enterprise web development, or engineering conversations?
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm w-full md:w-auto">
              <Link
                to="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-2.5 bg-primary text-on-primary font-body-sm text-body-sm rounded-lg hover:bg-secondary transition-colors shadow-sm"
              >
                <span>Explore projects</span>
                <span className="material-symbols-outlined ml-1 text-[1.1rem]">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-2.5 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg hover:bg-surface-container transition-colors shadow-sm"
              >
                <span>Contact me</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
