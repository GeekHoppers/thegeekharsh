import { Link } from '../router'
import { SEO } from '../components/SEO'

export function GmrCaseStudyPage() {
  return (
    <>
      <SEO
        title="GMR Web Platform Case Study — Harsh Sinha · The Geek Harsh"
        description="Engineering modular block architecture on AEM Edge Delivery Services with Universal Editor at Bluethink Inc. for GMR Group."
        path="/projects/gmr-web-platform"
      />

      <div className="w-full max-w-[1160px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
        {/* Breadcrumb & Navigation Back */}
        <nav aria-label="Breadcrumb" className="mb-space-md">
          <ol className="flex flex-wrap items-center gap-space-xs font-meta-tag text-meta-tag uppercase text-on-surface-variant">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>/</li>
            <li className="text-on-surface font-semibold">GMR Web Platform</li>
          </ol>
        </nav>

        {/* Case Study Header & Hero Block */}
        <header className="pb-space-xl">
          <div className="flex flex-col gap-space-sm mb-space-md">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                Case Study · Enterprise CMS &amp; Edge Architecture
              </span>
              <span className="text-outline">•</span>
              <span className="font-label-code text-label-code text-on-surface-variant">Bluethink Inc.</span>
            </div>
            <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-semibold leading-tight">
              GMR Web Platform: High-Scale Edge Delivery &amp; Universal Authoring
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Engineering modular block architecture on AEM Edge Delivery Services with Universal Editor. Delivering zero-overhead client logic, Algolia search integration, and Adobe Target experimentation for a Tier-1 enterprise web platform.
            </p>
          </div>

          {/* Metadata Ledger Strip */}
          <div className="bg-surface-container-low p-space-md rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-space-md shadow-sm mb-space-lg">
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Organization</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">Bluethink Inc.</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Production Role</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">Software Engineer</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Completion</span>
              <span className="font-body-sm text-body-sm font-semibold text-primary">2026</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Authoring &amp; Edge</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">Universal Editor · EDS</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Live Deployment</span>
              <a
                href="https://www.gmrgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-sm text-body-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                gmrgroup.com
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Visual Architecture Feature Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
            <div className="md:col-span-8 bg-surface-container rounded-xl p-space-lg shadow-sm flex flex-col justify-between overflow-hidden relative">
              <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline font-semibold">
                  AEM Block Decoration Pipeline
                </span>
                <span className="font-label-code text-label-code text-primary font-medium">Vanilla ES6+</span>
              </div>
              <div className="py-space-lg flex flex-col gap-space-sm">
                <div className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[1.25rem]">edit_document</span>
                    <span className="font-label-code text-label-code text-on-surface">Universal Editor Block Markup</span>
                  </div>
                  <span className="font-meta-tag text-meta-tag text-outline bg-surface-container px-2 py-0.5 rounded">
                    Edge Ingest
                  </span>
                </div>
                <div className="flex justify-center -my-1 text-primary">
                  <span className="material-symbols-outlined text-[1.25rem]">arrow_downward</span>
                </div>
                <div className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[1.25rem]">code</span>
                    <span className="font-label-code text-label-code text-on-surface">
                      decorate(block) Execution &amp; Universal Editor Hooks
                    </span>
                  </div>
                  <span className="font-meta-tag text-meta-tag text-primary bg-primary-container/20 px-2 py-0.5 rounded">
                    Client Runtime
                  </span>
                </div>
                <div className="flex justify-center -my-1 text-primary">
                  <span className="material-symbols-outlined text-[1.25rem]">arrow_downward</span>
                </div>
                <div className="p-space-sm bg-primary text-on-primary rounded-lg shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[1.25rem] text-primary-fixed">check_circle</span>
                    <span className="font-label-code text-label-code font-semibold text-on-primary">
                      Accessible, Fast UI (Sub-50ms Execution)
                    </span>
                  </div>
                  <span className="font-meta-tag text-meta-tag text-primary-fixed bg-black/20 dark:bg-white/20 px-2 py-0.5 rounded">
                    Production
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center text-outline font-meta-tag text-meta-tag pt-space-xs">
                <span>GMR Enterprise Digital Presence</span>
                <span>Edge Architecture</span>
              </div>
            </div>

            {/* Code Spec Card */}
            <div className="md:col-span-4 bg-inverse-surface text-inverse-on-surface rounded-xl p-space-lg shadow-md flex flex-col justify-between">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between pb-space-xs">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-secondary-fixed">
                    EDS Pipeline Structure
                  </span>
                  <span className="font-label-code text-meta-tag text-surface-dim">scripts.js</span>
                </div>
                <p className="font-label-code text-label-code text-surface-container-high leading-relaxed">
                  // Core Block Invocation
                  <br />
                  export default function decorate(block) &#123;
                  <br />
                  &nbsp;&nbsp;const rows = [...block.children];
                  <br />
                  &nbsp;&nbsp;const heroConfig = extractPillars(rows);
                  <br />
                  &nbsp;&nbsp;renderResponsiveGrid(block, heroConfig);
                  <br />
                  &#125;
                </p>
              </div>
              <div className="pt-space-md">
                <div className="bg-surface-variant/20 rounded p-space-sm">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-secondary-fixed block">
                    Architecture Pattern
                  </span>
                  <p className="font-body-sm text-body-sm text-surface-bright mt-0.5">
                    Modular client logic executing pure vanilla JavaScript decorating Universal Editor structured markup into responsive, accessible UI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Section: Context & The Enterprise Problem */}
        <section className="py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-3">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
                01 · Background
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                Enterprise Web Context
              </h2>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-space-lg">
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                Modern enterprise conglomerates manage expansive suites of corporate narratives, stock disclosures, business pillar portfolios, and press archives. Traditionally, maintaining these platforms under legacy monolithic CMS architectures resulted in substantial performance compromises: bloated DOM hierarchies, heavy client-side hydration delays, and sluggish authoring turnarounds.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                    <span className="material-symbols-outlined text-[1.25rem]">speed</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Optimal Edge Delivery</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Ensuring pure, lightweight client-side delivery on edge architecture without render-blocking bundles or hydration shifts on the critical rendering path.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                    <span className="material-symbols-outlined text-[1.25rem]">edit_note</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Universal Editor Authoring</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Built natively on Adobe Universal Editor for AEM Edge Delivery Services, providing content teams with true in-context WYSIWYG visual authoring and instant edge publication without document-based authoring dependencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Scope & Fidelity (Honest Role Attribution) */}
        <section className="py-space-xl bg-surface-container-low -mx-gutter-mobile lg:-mx-gutter px-gutter-mobile lg:px-gutter rounded-xl my-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-3">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
                02 · Scope &amp; Role
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                Engineering Ownership
              </h2>
              <div className="mt-space-md p-space-sm bg-surface-container-high rounded-lg">
                <p className="font-meta-tag text-meta-tag uppercase text-on-surface-variant font-semibold">
                  Design Collaboration Note
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Visual styling and design tokens were done by a teammate. My engineering mandate at Bluethink Inc. focused on block development, client logic, and interactive features.
                </p>
              </div>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-space-md">
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                In AEM Edge Delivery Services with Universal Editor, content authors edit components visually in-context while the edge pipeline serves pure, clean HTML. The frontend engineer writes modular JavaScript blocks that "decorate" the clean DOM structures into rich, interactive UI experiences.
              </p>
              {/* Block Inventory Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-sm pt-space-xs">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-meta-tag text-meta-tag uppercase text-outline">Block 01</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Hero Asset Block</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      Modular picture and media layout providing responsive picture element formatting and prioritized document asset loading.
                    </p>
                  </div>
                  <span className="mt-space-md inline-block font-label-code text-meta-tag text-primary">
                    Priority Decoration
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-meta-tag text-meta-tag uppercase text-outline">Block 02</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Pillars of Value</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      Multi-dimensional responsive layout for core metrics and values, parsing multi-column tabular content into accessible interactive cards.
                    </p>
                  </div>
                  <span className="mt-space-md inline-block font-label-code text-meta-tag text-primary">
                    Responsive Matrix
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-meta-tag text-meta-tag uppercase text-outline">Block 03</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">News &amp; Story Filter</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      Client-side interactive topic filter with URL query parameter synchronization, history navigation integration, and batch DOM updates.
                    </p>
                  </div>
                  <span className="mt-space-md inline-block font-label-code text-meta-tag text-primary">
                    Stateful DOM Filter
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-meta-tag text-meta-tag uppercase text-outline">Block 04</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Algolia Search</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      Integrated type-ahead query handling with debounce, keyboard navigation, and instant query execution across articles and corporate releases.
                    </p>
                  </div>
                  <span className="mt-space-md inline-block font-label-code text-meta-tag text-primary">
                    Search Lifecycle
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-meta-tag text-meta-tag uppercase text-outline">Block 05</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Universal Editor Hooks</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      In-context editing instrumentation with deliberate data-aue-* attributes throughout generated markup to enable seamless WYSIWYG authoring.
                    </p>
                  </div>
                  <span className="mt-space-md inline-block font-label-code text-meta-tag text-primary">
                    Adobe UE Ready
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-meta-tag text-meta-tag uppercase text-outline">Block 06</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Target Experiments</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      Dynamic variant containers for client-side experimentation and personalized block variations without layout shifts.
                    </p>
                  </div>
                  <span className="mt-space-md inline-block font-label-code text-meta-tag text-primary">
                    Variant Targeting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Conceptual Architecture Diagram */}
        <section className="py-space-xl">
          <div className="flex flex-col gap-space-sm mb-space-lg">
            <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
              03 · Systems Architecture
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Conceptual Edge Delivery Services Architecture
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              How in-context Universal Editor authoring connects with Edge Delivery Services to transform clean markup into high-performance, decorated block runtimes in the client browser.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-center justify-between pb-space-md mb-space-lg bg-surface-container-low -mx-space-lg -mt-space-lg px-space-lg py-space-sm rounded-t-xl">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface font-semibold">
                Pipeline Flow &amp; Lifecycle Stages
              </span>
              <span className="font-label-code text-label-code text-outline">Universal Editor · EDS Pipeline</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative">
              <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-meta-tag text-primary font-bold">STAGE 01</span>
                  <span className="material-symbols-outlined text-outline text-[1.25rem]">edit_note</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Universal Editor</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Authors edit components visually in-context using Adobe Universal Editor instrumentation.
                </p>
                <span className="font-label-code text-meta-tag text-outline mt-2">In-Context Authoring</span>
              </div>

              <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-meta-tag text-primary font-bold">STAGE 02</span>
                  <span className="material-symbols-outlined text-outline text-[1.25rem]">sync_alt</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">EDS Pipeline</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Generates semantic HTML with section wrappers, component instrumentation, and block anchors.
                </p>
                <span className="font-label-code text-meta-tag text-outline mt-2">Edge Delivery Pipeline</span>
              </div>

              <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-meta-tag text-primary font-bold">STAGE 03</span>
                  <span className="material-symbols-outlined text-outline text-[1.25rem]">cloud_done</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Edge CDN</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Static HTML distributed across edge locations with resilient caching and fast responses.
                </p>
                <span className="font-label-code text-meta-tag text-outline mt-2">Global Edge Delivery</span>
              </div>

              <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-meta-tag text-primary font-bold">STAGE 04</span>
                  <span className="material-symbols-outlined text-outline text-[1.25rem]">widgets</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Micro-Decoration</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  scripts.js resolves blocks, fetches standalone [block].js and hydrates asynchronously.
                </p>
                <span className="font-label-code text-meta-tag text-outline mt-2">decorate(block) Hook</span>
              </div>

              <div className="flex flex-col gap-space-xs bg-secondary-container/40 p-space-md rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-meta-tag text-secondary font-bold">STAGE 05</span>
                  <span className="material-symbols-outlined text-secondary text-[1.25rem]">bolt</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Integrations</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Algolia search queries executed; Adobe Universal Editor metadata wired for live editing.
                </p>
                <span className="font-label-code text-meta-tag text-secondary mt-2">Client Services</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Deep Technical Implementation Breakdown */}
        <section className="py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
                04 · Implementation
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Block Anatomy &amp; Engineering Patterns
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                In-depth breakdown of the mechanical implementation that ensures zero overhead, author safety, and live editorial interoperability.
              </p>
              <div className="mt-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline block mb-2">
                  Block Decoration Lifecycle
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  The edge pipeline compiles authored content into lightweight, semantic HTML structures. In the browser, pure vanilla JavaScript inspects each block element and decorates it into interactive UI modules without framework runtime overhead.
                </p>
                <div className="flex justify-between items-center text-on-surface font-label-code text-meta-tag mt-4 pt-2 border-t border-outline-variant">
                  <span>Universal Editor Block Markup</span>
                  <span className="text-primary">→ Decorated UI</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-space-xl">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[1.25rem]">code</span>
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider font-semibold">
                    Technical Pattern 01
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  The Edge Delivery Services Block Model
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Unlike React or Angular where components own internal virtual DOM representations, AEM EDS delivers pre-rendered semantic HTML blocks. The block function receives the clean HTML generated from Universal Editor authored content, decomposes it into structured layouts, and builds the intended accessibility and interactive tree in-place without tearing down DOM nodes.
                </p>
                <div className="bg-surface-container p-space-md rounded-lg font-label-code text-label-code text-on-surface overflow-x-auto">
                  <span className="text-outline">// blocks/pillars-of-value/pillars-of-value.js</span>
                  <br />
                  export default async function decorate(block) &#123;
                  <br />
                  &nbsp;&nbsp;const gridWrapper = document.createElement('div');
                  <br />
                  &nbsp;&nbsp;gridWrapper.className = 'pillars-grid';
                  <br />
                  &nbsp;&nbsp;[...block.children].forEach((row, idx) =&gt; &#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;const [headerCol, contentCol, metricCol] = [...row.children];
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;const card = transformToCard(headerCol, contentCol, metricCol, idx);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;gridWrapper.appendChild(card);
                  <br />
                  &nbsp;&nbsp;&#125;);
                  <br />
                  &nbsp;&nbsp;block.replaceChildren(gridWrapper);
                  <br />
                  &#125;
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[1.25rem]">aspect_ratio</span>
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider font-semibold">
                    Technical Pattern 02
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Universal Editor Instrumentation
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Enterprise content authors require visual WYSIWYG capabilities while maintaining the decoupling of Edge Delivery. By instrumenting every decorated element with deliberate <code className="font-label-code text-label-code bg-surface-container px-1 rounded">data-aue-type</code>, <code className="font-label-code text-label-code bg-surface-container px-1 rounded">data-aue-prop</code>, and <code className="font-label-code text-label-code bg-surface-container px-1 rounded">data-aue-resource</code> tokens, authors can point-and-click directly on the live edge preview to edit headlines, update media assets, and rearrange matrix items.
                </p>
                <div className="bg-surface-container p-space-md rounded-lg font-label-code text-label-code text-on-surface">
                  &lt;div class="pillar-card" <span className="text-primary font-bold">data-aue-type="component" data-aue-resource="urn:aemconnection:..."</span>&gt;
                  <br />
                  &nbsp;&nbsp;&lt;h3 <span className="text-primary font-bold">data-aue-prop="headline" data-aue-type="text"</span>&gt;Aviation Scale&lt;/h3&gt;
                  <br />
                  &nbsp;&nbsp;&lt;p <span className="text-primary font-bold">data-aue-prop="description" data-aue-type="richtext"</span>&gt;...&lt;/p&gt;
                  <br />
                  &lt;/div&gt;
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[1.25rem]">search</span>
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider font-semibold">
                    Technical Pattern 03
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Algolia Search &amp; Client-Side Filtering
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  For press releases and stories, I engineered an integrated search and filtering subsystem. Instead of packaging heavy third-party state managers, a lightweight pub/sub mechanism handles search input debouncing, executes asynchronous Algolia queries, dynamically updates result fragments, and coordinates with browser history via <code className="font-label-code text-label-code bg-surface-container px-1 rounded">history.pushState()</code> for shareable filter states.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Engineering Challenges & Solutions */}
        <section className="py-space-xl bg-surface-container-low -mx-gutter-mobile lg:-mx-gutter px-gutter-mobile lg:px-gutter rounded-xl my-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-3">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
                05 · Realities
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                Engineering Challenges &amp; Solutions
              </h2>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-space-md">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-error font-semibold">
                    Challenge 01
                  </span>
                  <span className="font-label-code text-meta-tag text-outline">Performance</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Eliminating Largest Contentful Paint (LCP) Delays on the Hero Block
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Because blocks hydrate asynchronously, a hero block that lazily appends high-resolution enterprise photography runs the risk of degrading LCP scores. The browser must not wait for JavaScript decoration before knowing it needs to discover the hero image.
                </p>
                <div className="bg-surface-container p-space-md rounded-lg">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold block mb-1">
                    Implemented Solution
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Engineered early DOM analysis in the global <code className="font-label-code text-meta-tag">scripts.js</code> loader that scans the top-most block before full decoration. It injects a <code className="font-label-code text-meta-tag">&lt;link rel="preload" as="image"&gt;</code> tag with <code className="font-label-code text-meta-tag">fetchpriority="high"</code> directly into document head, guaranteeing the browser pipeline fetches the hero asset during the very first critical rendering path pass.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-error font-semibold">
                    Challenge 02
                  </span>
                  <span className="font-label-code text-meta-tag text-outline">Resilience</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Defensive Block Normalization &amp; Visual Authoring Validation
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Content teams working in Universal Editor can configure optional fields, heterogeneous card counts, or nested rich-text nodes. A brittle block script would throw errors if optional data fields were omitted, breaking client hydration and leaving incomplete components.
                </p>
                <div className="bg-surface-container p-space-md rounded-lg">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold block mb-1">
                    Implemented Solution
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Architected a defensive normalization utility layer that validates element structures, safely extracts semantic elements (headers, links, pictures), and falls back gracefully when optional properties are omitted. If unexpected structures occur, the module isolates the malformed entry without breaking surrounding layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Verified Deliverables & Outcomes */}
        <section className="py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 flex flex-col gap-space-sm">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
                06 · Deliverables
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Deliverables &amp; Engineering Outcomes
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The engineering work delivered real-world functional capabilities that serve as core interactive infrastructure across the live enterprise web platform.
              </p>
              <ul className="flex flex-col gap-space-sm pt-space-xs text-on-surface font-body-sm text-body-sm">
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[1.15rem] mt-0.5">check_circle</span>
                  <span>
                    Production deployment of key modular blocks on the live public domain (
                    <a
                      href="https://www.gmrgroup.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-label-code text-meta-tag"
                    >
                      gmrgroup.com
                    </a>
                    ).
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[1.15rem] mt-0.5">check_circle</span>
                  <span>Standardized, reusable DOM decoration blueprints adopted by adjacent engineering workstreams.</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[1.15rem] mt-0.5">check_circle</span>
                  <span>Full Universal Editor instrumentation providing authors genuine real-time visual editing.</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[1.15rem] mt-0.5">check_circle</span>
                  <span>Lightweight Algolia search experience operating cleanly within strict edge performance budgets.</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline font-semibold">
                    Feature Deliverables
                  </span>
                  <span className="font-label-code text-meta-tag text-primary">Engineering Details</span>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <div className="p-space-sm bg-surface-container-low rounded-lg">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Algolia Search Integration</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Type-ahead querying with debounced inputs, dynamic result rendering, and URL query persistence.
                    </p>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-lg">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Adobe Target Experiments</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Dynamic client-side variant insertion enabling multi-variation personalization without UI flicker.
                    </p>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-lg">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Universal Editor Authoring Hooks</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Comprehensive data-aue attribute instrumentation supporting full WYSIWYG editing workflows.
                    </p>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-lg">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Modular Vanilla JS Decorators</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Standardized DOM manipulation blueprints adopted across the development team.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container p-space-sm rounded-lg flex items-center justify-between text-on-surface-variant font-label-code text-label-code">
                  <span>Repository Standards: AEM Edge Delivery Services</span>
                  <span className="text-primary font-medium">Semantic DOM &amp; Vanilla ES6+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Case Study Traversal Navigation */}
        <section className="py-space-md border-t border-outline-variant">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <Link
              to="/projects/garun-drishti"
              className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline group-hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[1rem]">arrow_back</span>
                  Previous Case / Research
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-2 group-hover:text-primary transition-colors">
                  Garun Drishti — Real-Time Threat Detection
                </h4>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Computer vision research and edge prototype for multi-modal security monitoring.
              </p>
            </Link>

            <Link
              to="/projects/oliver-wyman"
              className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-right md:text-left"
            >
              <div>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline group-hover:text-primary transition-colors flex items-center justify-end md:justify-start gap-1">
                  Next Project
                  <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-2 group-hover:text-primary transition-colors">
                  Oliver Wyman Digital Website Rebuild
                </h4>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                AEM 6.5 AMS custom components, Sling Models, HTL, and DAM workflow automation.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
