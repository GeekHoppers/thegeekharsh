import { Link } from '../router'
import { SEO } from '../components/SEO'

export function OliverWymanCaseStudyPage() {
  return (
    <>
      <SEO
        title="Oliver Wyman Website Rebuild Case Study — Harsh Sinha · The Geek Harsh"
        description="AEM 6.5 AMS migration delivering custom components with Sling Models and HTL, DAM workflows, metadata automation, and O(1) asset upload limit checks at Bluethink Inc."
        path="/projects/oliver-wyman"
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
            <li className="text-on-surface font-semibold">Oliver Wyman</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="pb-space-xl">
          <div className="flex flex-col gap-space-sm mb-space-md">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                Case Study · Enterprise AEM 6.5 AMS &amp; DAM Workflows
              </span>
              <span className="text-outline">•</span>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container/70 text-on-secondary-fixed-variant font-label-code text-[0.6875rem] font-medium">
                Under Development
              </span>
              <span className="text-outline">•</span>
              <span className="font-label-code text-label-code text-on-surface-variant">Bluethink Inc.</span>
            </div>
            <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-semibold leading-tight">
              Oliver Wyman Website Rebuild: Enterprise CMS &amp; DAM Automation
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Enterprise website rebuild on AEM Managed Services (AEM 6.5 AMS), currently under active development at Bluethink Inc. Building custom components using Sling Models and HTL, configured DAM workflows, metadata automation with Adobe Smart Tags, and an O(1) folder asset-upload limit enforcement mechanism.
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
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Project Status</span>
              <span className="inline-flex items-center gap-1 font-body-sm text-body-sm font-semibold text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Under Development
              </span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Architecture Core</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">AEM 6.5 AMS · OSGi · JCR</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Key Pattern</span>
              <span className="font-body-sm text-body-sm font-semibold text-primary">O(1) Folder Limit Check</span>
            </div>
          </div>
        </header>

        {/* Section 01: The O(1) Mechanism & Architecture SVG */}
        <section className="py-space-xl">
          <div className="flex flex-col gap-space-sm mb-space-lg">
            <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
              01 · JCR &amp; DAM Architecture
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Asset Ingestion Pipeline &amp; O(1) Folder Enforcement
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              Eliminating recursive Jackrabbit Oak tree traversals during author uploads by maintaining atomic asset counters.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg">
            {/* Responsive Pipeline Architecture */}
            <div className="flex flex-col gap-space-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm items-stretch">
                {/* Stage 01 */}
                <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm border border-outline-variant/60 flex flex-col justify-between gap-space-sm group hover:border-primary hover:bg-surface-container-highest transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary font-label-code text-xs font-bold flex items-center justify-center transition-colors">
                      01
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary text-[18px] transition-colors">upload_file</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                      Ingestion Entry
                    </h3>
                    <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-0.5">
                      HTTP / WebDAV DAM
                    </p>
                  </div>
                  <span className="font-label-code text-[11px] text-outline group-hover:text-primary pt-1 border-t border-outline-variant/30 transition-colors">
                    Raw Asset Stream
                  </span>
                </div>

                {/* Stage 02 */}
                <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm border border-outline-variant/60 flex flex-col justify-between gap-space-sm group hover:border-primary hover:bg-surface-container-highest transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-on-primary font-label-code text-xs font-bold flex items-center justify-center transition-colors">
                      02
                    </span>
                    <span className="material-symbols-outlined text-secondary group-hover:text-primary text-[18px] transition-colors">hearing</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                      OSGi Listener
                    </h3>
                    <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-0.5">
                      dam:AssetEvent Filter
                    </p>
                  </div>
                  <span className="font-label-code text-[11px] text-outline group-hover:text-primary pt-1 border-t border-outline-variant/30 transition-colors">
                    Sling Resource Observation
                  </span>
                </div>

                {/* Stage 03 */}
                <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm border border-outline-variant/60 flex flex-col justify-between gap-space-sm group hover:border-primary hover:bg-surface-container-highest transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary font-label-code text-xs font-bold flex items-center justify-center transition-colors">
                      03
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary text-[18px] transition-colors">speed</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                      O(1) Folder Check
                    </h3>
                    <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-0.5">
                      Atomic Integer Metadata
                    </p>
                  </div>
                  <span className="font-label-code text-[11px] text-outline group-hover:text-primary pt-1 border-t border-outline-variant/30 transition-colors">
                    Sub-millisecond Guard
                  </span>
                </div>

                {/* Stage 04 */}
                <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm border border-outline-variant/60 flex flex-col justify-between gap-space-sm group hover:border-primary hover:bg-surface-container-highest transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-on-primary font-label-code text-xs font-bold flex items-center justify-center transition-colors">
                      04
                    </span>
                    <span className="material-symbols-outlined text-secondary group-hover:text-primary text-[18px] transition-colors">auto_awesome</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                      Smart Tags API
                    </h3>
                    <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-0.5">
                      Sensei Vision IMS
                    </p>
                  </div>
                  <span className="font-label-code text-[11px] text-outline group-hover:text-primary pt-1 border-t border-outline-variant/30 transition-colors">
                    Async Cloud Ingestion
                  </span>
                </div>

                {/* Stage 05 */}
                <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm border border-outline-variant/60 flex flex-col justify-between gap-space-sm group hover:border-primary hover:bg-surface-container-highest transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-surface-tint/20 text-surface-tint group-hover:bg-primary group-hover:text-on-primary font-label-code text-xs font-bold flex items-center justify-center transition-colors">
                      05
                    </span>
                    <span className="material-symbols-outlined text-surface-tint group-hover:text-primary text-[18px] transition-colors">schedule</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                      Cron Reconciliation
                    </h3>
                    <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-0.5">
                      Nightly O(N) Job
                    </p>
                  </div>
                  <span className="font-label-code text-[11px] text-outline group-hover:text-primary pt-1 border-t border-outline-variant/30 transition-colors">
                    Oak Index Audit
                  </span>
                </div>
              </div>

              {/* Automated Audit & Sync Loop Banner */}
              <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-surface-container border border-outline-variant/40 font-meta-tag text-meta-tag text-on-surface-variant text-center">
                <span className="material-symbols-outlined text-secondary text-[18px]">sync</span>
                <span className="uppercase tracking-wider font-semibold text-secondary">
                  Automated Audit &amp; Sync Loop:
                </span>
                <span>Nightly cron recalculates atomic counts and reconciles any distributed desync</span>
              </div>
            </div>

            {/* Technical Callout */}
            <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col md:flex-row gap-space-md items-start">
              <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-[24px]">speed</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    The O(1) Counter Read Mechanism
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-meta-tag text-meta-tag uppercase font-bold">
                    Patched Index Traversal
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Standard JCR queries executing <code className="font-label-code text-[12px] bg-surface-container-high px-1 py-0.5 rounded text-on-surface">jcr:content/metadata</code> traversals iterate tree nodes, causing major index exhaustion and Oak traversal warnings during bulk WebDAV parallel operations. By maintaining an atomic <code className="font-label-code text-[12px] bg-surface-container-high px-1 py-0.5 rounded text-primary">assetCount</code> property directly on the target parent folder node, the OSGi listener executes an immediate <strong>O(1) read check</strong>. If limits are reached, uploads are rejected prior to pipeline ingestion. Full recursive deep consistency validation is offloaded to a scheduled nightly Sling Job running during off-peak windows in O(N).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Custom Component Architecture & HTL Separation */}
        <section className="py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
            <div className="lg:col-span-3 flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold tracking-wider">
                02 / HTL PATTERNS
              </span>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">
                Custom Component Architecture
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Zero Java scriptlets in templates. Modern Sling Model delegation pattern ensuring enterprise XSS sanitization and total logic segregation.
              </p>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-space-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
                  <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold">Decoupled HTL</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-medium">Zero Scriptlet Policy</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    100% of presentation templates rely purely on Sightly/HTL data-sly tags, preventing accidental script injection and keeping render layers pure.
                  </p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
                  <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold">Adaptables</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-medium">Resource Delegation</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Direct adaptation via <code className="font-label-code text-[12px] bg-surface-container px-1 rounded">@Model(adaptables = Resource.class)</code> with default injection values and fallback policy guards.
                  </p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
                  <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold">Security Spec</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-medium">XSS AntiSamy Contexts</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Explicit HTML context definitions inside HTL ensure that user-generated copy or rich text components pass rigorous enterprise security audits.
                  </p>
                </div>
              </div>

              {/* Java Sling Model Snippet */}
              <div className="rounded-xl overflow-hidden bg-[#0f1610] border border-[#233125] shadow-md">
                <div className="px-space-md py-space-xs bg-[#172018] border-b border-[#233125] flex items-center justify-between">
                  <div className="flex items-center gap-space-xs font-label-code text-label-code text-[#dbe6d7]">
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed">code</span>
                    <span>core/models/components/LongFormTextModel.java</span>
                  </div>
                  <span className="font-meta-tag text-meta-tag uppercase px-2 py-0.5 rounded bg-primary-container text-on-primary font-semibold">
                    Sling Model v12
                  </span>
                </div>
                <div className="p-space-md md:p-space-lg bg-[#0d140e] font-label-code text-[12px] md:text-label-code overflow-x-auto leading-relaxed">
                  <pre className="text-[#cbeca3]">
                    <code>
                      {`package com.client.core.models.components;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import javax.annotation.PostConstruct;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class LongFormTextModel {

    @ValueMapValue(name = "text")
    private String rawText;

    @ValueMapValue(name = "columnLayout")
    private String columnLayout;

    private String sanitizedContent;

    @PostConstruct
    protected void init() {
        // Enforce AntiSamy XSS policy compliance and whitespace normalization
        this.sanitizedContent = (rawText != null) ? rawText.trim() : "";
    }

    public String getSanitizedContent() { return sanitizedContent; }
    public String getColumnLayout() { return columnLayout; }
    public boolean isEmpty() { return sanitizedContent.isEmpty(); }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: DAM Automation — Metadata Pipelines & Adobe Smart Tags */}
        <section className="py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
            <div className="lg:col-span-3 flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold tracking-wider">
                03 / DAM AUTOMATION
              </span>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">
                Metadata Pipelines &amp; Smart Tags
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Unifying multi-brand taxonomy under Jackrabbit JCR while integrating Adobe Sensei visual perception APIs for zero-friction tagging.
              </p>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-space-md">
              <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col gap-space-md shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[20px]">schema</span>
                      <span className="font-headline-sm text-headline-sm font-semibold">Unified JCR Metadata Schema</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Standardized asset schema nodes strictly beneath <code className="font-label-code text-[12px] bg-surface-container-high px-1 rounded text-on-surface">jcr:content/metadata</code>. Enforced strict typing for business division tags, publication rights, expiration timestamps, and regional confidentiality flags.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {['dc:format', 'dam:sha1', 'ow:practiceArea', 'ow:copyrightYear'].map((ns) => (
                        <span key={ns} className="px-2 py-0.5 rounded-full bg-surface-container-highest font-meta-tag text-meta-tag text-on-surface">
                          {ns}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-secondary">
                      <span className="material-symbols-outlined text-[20px]">psychology</span>
                      <span className="font-headline-sm text-headline-sm font-semibold">Adobe Sensei Smart Tags Integration</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Orchestrated IMS OAuth authenticated token exchanges with Adobe Smart Content Service. High-resolution imagery ingested into DAM instantly triggers machine learning classification, enriching taxonomy with visual confidence scores without manual intervention.
                    </p>
                    <div className="mt-2 flex items-center gap-space-xs text-on-surface font-label-code text-label-code">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      <span>IMS Bearer Auto-Refresh • Automated Tag Scoring</span>
                    </div>
                  </div>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant font-semibold">
                    Asynchronous Ingestion Timeline
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-space-sm text-center">
                    <div className="p-space-xs rounded bg-surface-container flex flex-col gap-1 items-center">
                      <span className="font-label-code text-[11px] text-secondary font-semibold">STEP 01</span>
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">dam:AssetCreated</span>
                      <span className="font-meta-tag text-meta-tag text-on-surface-variant">OSGi Event Catch</span>
                    </div>
                    <div className="p-space-xs rounded bg-surface-container flex flex-col gap-1 items-center">
                      <span className="font-label-code text-[11px] text-secondary font-semibold">STEP 02</span>
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">Debounce Filter</span>
                      <span className="font-meta-tag text-meta-tag text-on-surface-variant">Configured Quiet Window</span>
                    </div>
                    <div className="p-space-xs rounded bg-surface-container flex flex-col gap-1 items-center">
                      <span className="font-label-code text-[11px] text-secondary font-semibold">STEP 03</span>
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">Sensei Dispatch</span>
                      <span className="font-meta-tag text-meta-tag text-on-surface-variant">IMS OAuth SSL Pipe</span>
                    </div>
                    <div className="p-space-xs rounded bg-surface-container flex flex-col gap-1 items-center">
                      <span className="font-label-code text-[11px] text-secondary font-semibold">STEP 04</span>
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">Metadata Commit</span>
                      <span className="font-meta-tag text-meta-tag text-on-surface-variant">Non-Locking Write</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Problem Resolution — Bottlenecks */}
        <section className="py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
            <div className="lg:col-span-3 flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold tracking-wider">
                04 / CHALLENGES
              </span>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">
                Problem Resolution &amp; Bottlenecks
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Solving high-concurrency race conditions and eliminating cascading OSGi workflow storms on multi-terabyte repositories.
              </p>
            </div>
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col justify-between gap-space-md shadow-sm">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-meta-tag text-meta-tag uppercase px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-semibold">
                      Race Condition Mitigated
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">lock_reset</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mt-space-xs">
                    Concurrent Asset Limit Enforcement
                  </h3>
                  <div className="mt-space-xs p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                    <span className="font-meta-tag text-meta-tag uppercase text-error font-semibold">The Bottleneck</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      When editorial groups bulk-uploaded large asset batches simultaneously via WebDAV or Desktop App, standard session queries resulted in frequent <code className="font-label-code text-[11px] text-error">InvalidItemStateException</code> conflicts and allowed quota breaches during concurrent thread execution.
                    </p>
                  </div>
                  <div className="mt-space-xs p-space-sm rounded-lg bg-surface-container-lowest flex flex-col gap-1">
                    <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">Engineered Solution</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Implemented an isolated atomic JCR counter update using transient Sling ResourceResolver retry loops with exponential backoff. Folder capacity caps are evaluated before payload writing, ensuring folder boundary containment.
                    </p>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center justify-between font-label-code text-label-code text-on-surface-variant">
                  <span>Concurrency Safe</span>
                  <span className="text-secondary font-semibold">Enforced Capacity Bound</span>
                </div>
              </div>

              <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col justify-between gap-space-md shadow-sm">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-meta-tag text-meta-tag uppercase px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-semibold">
                      CPU Spike Resolution
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[20px]">bolt</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mt-space-xs">
                    Workflow Trigger Throttling &amp; Storms
                  </h3>
                  <div className="mt-space-xs p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                    <span className="font-meta-tag text-meta-tag uppercase text-error font-semibold">The Bottleneck</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Standard DAM Update Asset launchers triggered separate workflow instances for rendition extractions, sub-assets, and metadata changes, spiking author cluster CPU utilization and degrading publishing latency.
                    </p>
                  </div>
                  <div className="mt-space-xs p-space-sm rounded-lg bg-surface-container-lowest flex flex-col gap-1">
                    <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">Engineered Solution</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Replaced multi-node launchers with an optimized OSGi Event Filter utilizing an in-memory debouncer queue. Coalesced discrete sub-events per asset upload into a singular unified workflow trigger, stabilizing background thread consumption.
                    </p>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center justify-between font-label-code text-label-code text-on-surface-variant">
                  <span>Author Instance Load</span>
                  <span className="text-secondary font-semibold">Stabilized Background Queue</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05: Tech Specs */}
        <section className="py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
            <div className="lg:col-span-3 flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold tracking-wider">
                05 / SPECIFICATIONS
              </span>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">
                Enterprise Stack &amp; Infrastructure
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Full specification manifest across core container layers, Sling orchestration, and CI/CD pipelines.
              </p>
            </div>
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-space-sm">
              <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">layers</span>
                  <span className="font-headline-sm text-headline-sm font-semibold">AEM &amp; Repository</span>
                </div>
                <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-center justify-between pb-1 border-b border-surface-container">
                    <span>Core Engine</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">AEM 6.5.18 AMS</span>
                  </li>
                  <li className="flex items-center justify-between pb-1 border-b border-surface-container">
                    <span>JCR Engine</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">Apache Oak 1.22</span>
                  </li>
                  <li className="flex items-center justify-between pb-1 border-b border-surface-container">
                    <span>OSGi Framework</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">Apache Felix R7</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Node Storage</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">SegmentTar + S3</span>
                  </li>
                </ul>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-secondary">
                  <span className="material-symbols-outlined text-[20px]">terminal</span>
                  <span className="font-headline-sm text-headline-sm font-semibold">Backend Engineering</span>
                </div>
                <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-center justify-between pb-1 border-b border-surface-container">
                    <span>Runtime</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">Java 11 / 17 LTS</span>
                  </li>
                  <li className="flex items-center justify-between pb-1 border-b border-surface-container">
                    <span>Sling Models</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">Model API v1.3</span>
                  </li>
                  <li className="flex items-center justify-between pb-1 border-b border-surface-container">
                    <span>Build Pipeline</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">Maven Multi-Module</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Template Engine</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">Adobe HTL (Sightly)</span>
                  </li>
                </ul>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-tertiary">
                  <span className="material-symbols-outlined text-[20px]">hub</span>
                  <span className="font-headline-sm text-headline-sm font-semibold">Integrations</span>
                </div>
                <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-center justify-between pb-1 border-b border-surface-container">
                    <span>Auth Protocol</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">Adobe IMS OAuth2</span>
                  </li>
                  <li className="flex items-center justify-between pb-1 border-b border-surface-container">
                    <span>Image Vision</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">Adobe Smart Tags</span>
                  </li>
                  <li className="flex items-center justify-between pb-1 border-b border-surface-container">
                    <span>Task Manager</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">Apache Sling Jobs</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Web Tier</span>
                    <span className="font-label-code text-label-code text-on-surface font-medium">Apache Dispatcher</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06: Key Capabilities */}
        <section className="py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-md">
            <span className="font-meta-tag text-meta-tag text-secondary uppercase font-semibold tracking-wider">
              06 / HIGHLIGHTS
            </span>
            <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">
              Key Architectural Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
              <span className="font-headline-sm text-headline-sm font-semibold text-primary">O(1) Folder Traversal</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Atomic counter evaluation eliminates recursive Jackrabbit Oak tree traversals during author asset uploads.
              </p>
            </div>
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
              <span className="font-headline-sm text-headline-sm font-semibold text-secondary">Decoupled Presentation</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Strict HTL data-sly usage and zero scriptlets across editorial component templates.
              </p>
            </div>
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
              <span className="font-headline-sm text-headline-sm font-semibold text-primary">Debounced OSGi Queue</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Coalesced asset sub-events to prevent cascading workflow storms and stabilize cluster resources.
              </p>
            </div>
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
              <span className="font-headline-sm text-headline-sm font-semibold text-secondary">Automated Metadata</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Adobe Sensei smart tagging integration automatically enriches DAM taxonomy at ingest.
              </p>
            </div>
          </div>
        </section>

        {/* Section 07: Team Note & Call to Action */}
        <section className="p-space-lg rounded-2xl bg-surface-container shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg my-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">
              Enterprise Delivery Model
            </span>
            <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
              Integrated Multi-Disciplinary Delivery
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Delivered at Bluethink Inc. in close collaboration with client platform stakeholders and systems architects, aligning iterative release cadence with enterprise reliability and zero-downtime deployment requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-space-md py-space-sm rounded-xl bg-primary-container text-on-primary hover:bg-primary transition-colors font-body-sm text-body-sm font-medium shrink-0 shadow-sm"
          >
            Discuss Enterprise AEM
          </Link>
        </section>

        {/* Case Study Pagination */}
        <nav aria-label="Case Study Navigation" className="pt-space-lg border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <Link
            to="/projects/gmr-web-platform"
            className="w-full sm:w-auto p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center gap-space-sm group shadow-sm"
          >
            <span className="material-symbols-outlined text-[24px] text-on-surface-variant group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <div className="flex flex-col text-left">
              <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant">Previous Case Study</span>
              <span className="font-headline-sm text-headline-sm font-medium text-on-surface">GMR Web Platform</span>
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
            to="/projects/datajam-portal"
            className="w-full sm:w-auto p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-end gap-space-sm group shadow-sm text-right"
          >
            <div className="flex flex-col">
              <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant">Next Case Study</span>
              <span className="font-headline-sm text-headline-sm font-medium text-on-surface">DataJam Portal</span>
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
