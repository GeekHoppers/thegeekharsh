import { Link } from '../router'
import { SEO } from '../components/SEO'

export function DataJamCaseStudyPage() {
  return (
    <>
      <SEO
        title="DataJam Portal Case Study — Harsh Sinha · The Geek Harsh"
        description="Portal redesign, Django REST backend APIs, and Model Context Protocol (MCP) conversational data access delivered at Iktara Data Science."
        path="/projects/datajam-portal"
      />

      <div className="w-full max-w-[1160px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
        {/* Breadcrumb Navigation */}
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
            <li className="text-on-surface font-semibold">DataJam Portal</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="pb-space-xl">
          <div className="flex flex-col gap-space-sm mb-space-md">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                Case Study · Full-Stack &amp; Applied AI Context
              </span>
              <span className="text-outline">•</span>
              <span className="font-label-code text-label-code text-on-surface-variant">Iktara Data Science</span>
            </div>
            <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-semibold leading-tight">
              DataJam Portal: Django Backend, MCP &amp; Analytics UI
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Delivered at Iktara Data Science. Redesigned and built the portal UI, developed Django REST API endpoints, and integrated Model Context Protocol (MCP) for conversational data access.
            </p>
          </div>

          {/* Metadata Ledger Strip */}
          <div className="bg-surface-container-low p-space-md rounded-xl grid grid-cols-2 md:grid-cols-4 gap-space-md shadow-sm mb-space-lg">
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Organization</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">Iktara Data Science</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Production Role</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">Data Science Engineer Intern</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Core Stack</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">Django 5 · Python 3.11 · MCP</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Deployment</span>
              <a
                href="https://datajamportal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-sm text-body-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                datajamportal.com
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
        </header>

        {/* Section 01: Overview & Conceptual Architecture */}
        <section className="py-space-xl">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="font-label-code text-label-code text-secondary font-semibold">01</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
              Overview &amp; Portal Architecture
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
            <div className="md:col-span-5 flex flex-col gap-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
              <p>
                Enterprise decision-making frequently suffers from fragmented repository silos: relational data marts, GIS mapping layers, and temporal metrics are often gated behind disparate dashboards or custom analytical consoles.
              </p>
              <p>
                At <strong className="text-on-surface font-medium">Iktara Data Science</strong>, my work on the <strong className="text-on-surface font-medium">DataJam Portal</strong> focused on consolidating these fractured surfaces into a cohesive, high-speed analyst workstation. Beyond classic tabular reporting, the flagship objective was constructing a strictly bounded conversational interface leveraging the <strong className="text-on-surface font-medium">Model Context Protocol (MCP)</strong>.
              </p>
              <div className="p-space-md bg-surface-container rounded-lg flex flex-col gap-space-xs">
                <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">
                  Confidentiality Note
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  In accordance with client NDA standards, internal API authorization keys, proprietary model checkpoints, and client database schematics are generalized into reproducible architectural models.
                </p>
              </div>
            </div>

            {/* Architecture Flow Diagram Card */}
            <div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-surface-container">
                <span className="font-label-code text-label-code text-on-surface font-medium">
                  CONCEPTUAL MCP DATA PIPELINE
                </span>
                <span className="font-meta-tag text-meta-tag text-secondary uppercase bg-secondary-container px-space-xs py-[2px] rounded">
                  V3.2 PIPELINE SPEC
                </span>
              </div>
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <div className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded-lg transition-transform hover:-translate-y-0.5">
                  <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center shrink-0 font-label-code text-label-code font-semibold">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
                      User Natural Query Input
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Frontend interactive terminal captures prompt e.g. "Compare regional throughput during Q3 anomalies".
                    </span>
                  </div>
                </div>

                <div className="flex justify-center -my-2 text-primary">
                  <span className="material-symbols-outlined text-[20px]">south</span>
                </div>

                <div className="flex items-start gap-space-md p-space-md bg-surface-container-high rounded-lg transition-transform hover:-translate-y-0.5">
                  <div className="w-8 h-8 rounded bg-secondary text-on-secondary flex items-center justify-center shrink-0 font-label-code text-label-code font-semibold">
                    02
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
                      MCP Host Server &amp; Tool Routing
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Context parser translates intent into discrete schema-bounded tools; suppresses non-deterministic SQL generation.
                    </span>
                  </div>
                </div>

                <div className="flex justify-center -my-2 text-primary">
                  <span className="material-symbols-outlined text-[20px]">south</span>
                </div>

                <div className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded-lg transition-transform hover:-translate-y-0.5">
                  <div className="w-8 h-8 rounded bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 font-label-code text-label-code font-semibold">
                    03
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
                      Django REST API &amp; Relational Store
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Executes authenticated parameterized ORM calls with pre-aggregated indexing on PostgreSQL shards.
                    </span>
                  </div>
                </div>

                <div className="flex justify-center -my-2 text-primary">
                  <span className="material-symbols-outlined text-[20px]">south</span>
                </div>

                <div className="flex items-start gap-space-md p-space-md bg-surface-container-highest rounded-lg transition-transform hover:-translate-y-0.5">
                  <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center shrink-0 font-label-code text-label-code font-semibold">
                    04
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
                      Synthesized Visual Presentation
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      JSON payload hydrates responsive SVG charts, spatial map viewports, and tabular grids simultaneously.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Frontend Interface Redesign */}
        <section className="py-space-xl">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="font-label-code text-label-code text-secondary font-semibold">02</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
              Frontend Interface Redesign
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
            <div className="md:col-span-12 font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              Legacy data platforms frequently compromise usability through bloated component libraries and delayed table re-renders. We engineered a light-touch, zero-jank frontend built with modern vanilla ES6+ modules and semantic CSS structure, strictly meeting WCAG 2.1 AA accessibility guidelines.
            </div>

            <div className="md:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-sm">
                <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">
                  Interactive Data Density
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-medium">
                  Client-Side Virtualized Data Tables
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Designed sortable, filterable multi-column datasets capable of rendering over 5,000 live cell states with zero UI hitching. State changes trigger non-blocking microtasks, yielding instant alphanumeric sorting and fuzzy keyword matches.
                </p>
              </div>
              <div className="mt-space-md bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs font-label-code text-label-code">
                <div className="grid grid-cols-4 p-space-xs text-on-surface-variant font-medium bg-surface-container rounded">
                  <span>METRIC_ID</span>
                  <span>GEO_ZONE</span>
                  <span>SAMPLING</span>
                  <span className="text-right">EFFICIENCY</span>
                </div>
                <div className="grid grid-cols-4 p-space-xs text-on-surface items-center hover:bg-surface-container-high rounded transition-colors">
                  <span className="text-primary font-semibold">MET-8902</span>
                  <span>APAC-West</span>
                  <span>120,400 ops</span>
                  <span className="text-right text-secondary font-medium">99.4%</span>
                </div>
                <div className="grid grid-cols-4 p-space-xs text-on-surface items-center hover:bg-surface-container-high rounded transition-colors">
                  <span className="text-primary font-semibold">MET-8903</span>
                  <span>EU-Central</span>
                  <span>84,190 ops</span>
                  <span className="text-right text-secondary font-medium">98.1%</span>
                </div>
                <div className="grid grid-cols-4 p-space-xs text-on-surface items-center hover:bg-surface-container-high rounded transition-colors">
                  <span className="text-primary font-semibold">MET-8904</span>
                  <span>US-East-1</span>
                  <span>340,920 ops</span>
                  <span className="text-right text-secondary font-medium">99.8%</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-sm">
                <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">
                  Geospatial Telemetry
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-medium">Spatial Mapping Layer</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Connected boundary data overlays and polygon regional geometries with smooth map re-centering upon query parameter changes.
                </p>
              </div>
              <div className="p-space-md bg-surface-container rounded-lg mt-space-md flex flex-col gap-1 font-label-code text-label-code">
                <div className="flex justify-between text-on-surface">
                  <span>Active Boundary:</span>
                  <span className="text-primary font-semibold">Bengaluru, India [BLR-CORP]</span>
                </div>
                <div className="flex justify-between text-on-surface-variant text-xs">
                  <span>Bounding Box:</span>
                  <span>12.9716° N, 77.5946° E</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Django Backend & API Architecture */}
        <section className="py-space-xl">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="font-label-code text-label-code text-secondary font-semibold">03</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
              Django Backend &amp; API Architecture
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-start">
            <div className="md:col-span-6 flex flex-col gap-space-md">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The core server stack is anchored on <strong className="text-on-surface font-medium">Django 5</strong> and <strong className="text-on-surface font-medium">Django REST Framework</strong> running atop Python 3.11. Handling high-throughput analytics demanded database normalization and selective query hydration.
              </p>
              <div className="flex flex-col gap-space-sm">
                <div className="p-space-md bg-surface-container rounded-lg flex flex-col gap-space-xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
                    Eliminating N+1 Queries
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Orchestrated complex relational lookups utilizing <code className="font-label-code text-label-code bg-surface-container-high px-1 rounded">select_related</code> on dimensional metadata foreign keys and <code className="font-label-code text-label-code bg-surface-container-high px-1 rounded">prefetch_related</code> on time-series intervals, reducing total database transactions per dashboard load by 78%.
                  </p>
                </div>
                <div className="p-space-md bg-surface-container rounded-lg flex flex-col gap-space-xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
                    Type-Safe Serialization Layers
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Constructed strict DRF serializers enforcing ISO timestamp conformity and explicit float sanitization, protecting client-side canvas renderers from out-of-bound NaN values.
                  </p>
                </div>
              </div>
            </div>

            {/* Python Code Component */}
            <div className="md:col-span-6 bg-[#1A211B] text-[#E8F4E5] rounded-xl overflow-hidden shadow-lg">
              <div className="bg-[#121713] px-space-md py-space-sm flex items-center justify-between border-b border-surface-container/10">
                <div className="flex items-center gap-space-xs font-label-code text-label-code text-secondary-fixed-dim">
                  <span className="material-symbols-outlined text-[16px]">data_object</span>
                  <span>analytics/views/timeseries.py</span>
                </div>
                <span className="font-meta-tag text-meta-tag text-outline uppercase">Django 5.x / DRF</span>
              </div>
              <div className="p-space-md font-label-code text-label-code overflow-x-auto text-[13px] leading-relaxed">
                <pre className="text-[#D2DDCF]">
                  <code>
                    {`class MetricsAggregateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, dataset_id):
        # Avoid N+1 execution by batch-prefetching dimensions
        queryset = (
            MetricLog.objects
            .filter(dataset_id=dataset_id)
            .select_related('dimension_meta', 'region')
            .only('id', 'timestamp', 'value', 'dimension_meta__name')
        )
        
        aggregates = queryset.aggregate(
            mean_val=Avg('value'),
            peak_val=Max('value')
        )
        return Response({
            "status": "success",
            "aggregates": aggregates,
            "telemetry_count": queryset.count()
        })`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: MCP Tools */}
        <section className="py-space-xl">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="font-label-code text-label-code text-secondary font-semibold">04</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
              Conversational Data Access via MCP
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
            <div className="md:col-span-12 font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              Rather than allowing language models to write unpredictable raw SQL directly against relational production databases, we implemented the <strong className="text-on-surface font-medium">Model Context Protocol (MCP)</strong>. This guarantees that AI agents only execute predefined, rigorously validated capability tools.
            </div>

            <div className="md:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">MCP Scoped Tool</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-medium font-label-code">
                  get_dataset_aggregates()
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Computes statistical distributions, standard deviations, and quartile splits over targeted multidimensional dimensions.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container p-space-xs rounded font-meta-tag text-meta-tag text-on-surface-variant">
                Input Schema: JSON Object &#123; dataset_id, interval &#125;
              </div>
            </div>

            <div className="md:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">MCP Scoped Tool</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-medium font-label-code">
                  query_timeseries_metrics()
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Filters temporal streams across designated time horizons with automated resampling down to minute or hour intervals.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container p-space-xs rounded font-meta-tag text-meta-tag text-on-surface-variant">
                Input Schema: JSON Object &#123; start_iso, end_iso, bucket &#125;
              </div>
            </div>

            <div className="md:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">MCP Scoped Tool</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-medium font-label-code">
                  filter_geospatial_bounds()
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Extracts features residing strictly within geographical polygons or bounding radius parameters for map viewport binding.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container p-space-xs rounded font-meta-tag text-meta-tag text-on-surface-variant">
                Input Schema: JSON Object &#123; geo_poly_id, tolerance &#125;
              </div>
            </div>
          </div>
        </section>

        {/* Section 05: Engineering Challenges & Technical Decisions */}
        <section className="py-space-xl">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="font-label-code text-label-code text-secondary font-semibold">05</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
              Engineering Challenges &amp; Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <div className="flex flex-col gap-space-md p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-space-sm">
                <span className="w-7 h-7 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-label-code text-label-code font-bold text-xs">
                  !
                </span>
                <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant tracking-wider font-semibold">
                  CHALLENGE 01
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Query Latency on High-Cardinality Datasets
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Analytical joins across multi-million row telemetry metrics produced response times of 1,800ms+, causing visual freezing during interactive portal exploration.
              </p>
              <div className="p-space-md bg-surface-container rounded-lg flex flex-col gap-space-xs mt-auto">
                <span className="font-meta-tag text-meta-tag uppercase text-primary font-semibold">
                  Architectural Solution
                </span>
                <p className="font-body-sm text-body-sm text-on-surface">
                  Implemented Redis pre-aggregation caching layers populated via background Celery workers alongside cursor-based API pagination, dropping average 95th-percentile response time to <span className="font-semibold text-secondary">38ms</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-space-md p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-space-sm">
                <span className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-code text-label-code font-bold text-xs">
                  #
                </span>
                <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant tracking-wider font-semibold">
                  CHALLENGE 02
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Hallucination Prevention in Natural Language Queries
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Unconstrained LLM interpretation led to synthesized phantom table columns and out-of-range timestamp clauses that broke downstream visualization pipelines.
              </p>
              <div className="p-space-md bg-surface-container rounded-lg flex flex-col gap-space-xs mt-auto">
                <span className="font-meta-tag text-meta-tag uppercase text-primary font-semibold">
                  Architectural Solution
                </span>
                <p className="font-body-sm text-body-sm text-on-surface">
                  Strictly parameterized MCP tool definitions utilizing JSON Schema validations. Unrecognized dimensional attributes trigger an introspection query rather than proceeding with invalid execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06: Verified Deliverables */}
        <section className="py-space-xl">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="font-label-code text-label-code text-secondary font-semibold">06</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
              Verified Deliverables &amp; Outcomes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
            <div className="md:col-span-8 bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Technical Deliverables Ledger
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md font-body-sm text-body-sm">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-code text-label-code text-primary font-semibold">[01] UI Overhaul</span>
                  <span className="text-on-surface-variant">
                    Full portal client experience re-engineered with modular vanilla JavaScript, interactive spatial maps, and high-density sorting tables.
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-code text-label-code text-primary font-semibold">
                    [02] Django REST Endpoints
                  </span>
                  <span className="text-on-surface-variant">
                    Engineered 14 normalized REST API endpoints with robust query sanitization, serialization, and PostgreSQL foreign-key index optimization.
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-code text-label-code text-primary font-semibold">
                    [03] MCP Host Integration
                  </span>
                  <span className="text-on-surface-variant">
                    Production-ready Model Context Protocol server exposing verified analytical tools for safe conversational database retrieval.
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-code text-label-code text-primary font-semibold">
                    [04] Telemetry &amp; Caching
                  </span>
                  <span className="text-on-surface-variant">
                    Redis caching layer deployment reducing repetitive database workload by 60% during multi-user analytical workshops.
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-primary text-on-primary p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <span className="font-meta-tag text-meta-tag uppercase text-on-primary-container tracking-wider font-semibold">
                  PERFORMANCE GAINS
                </span>
                <span className="font-display-hero text-headline-lg md:text-display-hero font-semibold leading-none text-primary-fixed mt-space-sm">
                  78%
                </span>
                <span className="font-body-sm text-body-sm text-on-primary-container">
                  Reduction in database queries per analyst session via select_related tuning.
                </span>
              </div>
              <div className="pt-space-md flex flex-col gap-space-xs">
                <span className="font-label-code text-label-code text-secondary-fixed">Status: Production Deployed</span>
                <span className="font-meta-tag text-meta-tag uppercase text-on-primary-container">
                  Iktara Data Science internal pipeline
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Traversal Navigation */}
        <nav aria-label="Case Study Navigation" className="pt-space-lg border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <Link
            to="/projects/oliver-wyman"
            className="w-full sm:w-auto p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center gap-space-sm group shadow-sm"
          >
            <span className="material-symbols-outlined text-[24px] text-on-surface-variant group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <div className="flex flex-col text-left">
              <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant">Previous Case Study</span>
              <span className="font-headline-sm text-headline-sm font-medium text-on-surface">Oliver Wyman Rebuild</span>
            </div>
          </Link>

          <Link
            to="/projects"
            className="font-body-sm text-body-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-space-xs"
          >
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
            <span>Back to All Projects</span>
          </Link>

          <Link
            to="/projects/careeriens"
            className="w-full sm:w-auto p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-end gap-space-sm group shadow-sm text-right"
          >
            <div className="flex flex-col">
              <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant">Next Case Study</span>
              <span className="font-headline-sm text-headline-sm font-medium text-on-surface">CareerIens Platform</span>
            </div>
            <span className="material-symbols-outlined text-[24px] text-on-surface-variant group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </nav>
      </div>
    </>
  )
}
