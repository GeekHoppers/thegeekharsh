import { useState } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'
import { PUBLICATION, SITE_METADATA } from '../content/siteData'
import { gmailComposeUrl } from '../utils/gmail'

export function ResearchPage() {
  const [copiedBibtex, setCopiedBibtex] = useState(false)

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(PUBLICATION.bibtex).then(() => {
      setCopiedBibtex(true)
      setTimeout(() => setCopiedBibtex(false), 2200)
    })
  }

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Research & Scholarly Contributions — Harsh Sinha"
        description="Peer-reviewed computer vision research and laboratory prototypes exploring real-time threat detection, multi-threading, and edge inference constraints."
        canonical="/research"
      />

      {/* Top Academic Context Header */}
      <section className="w-full pt-8 pb-12">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin">
          {/* Breadcrumb / Route Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant bg-surface-container px-3 py-1 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>RESEARCH &amp; SCHOLARLY CONTRIBUTIONS</span>
            </div>
          </div>

          {/* Main Headline Block with Asymmetric Offset Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-8">
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold block mb-space-xs">
                Applied Edge AI • Computer Vision • Peer-Reviewed Systems
              </span>
              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md">
                Exploring practical applications of computer vision.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
                My research work explores how computer-vision techniques can be combined into a
                prototype for recognizing faces, detecting objects, analysing gesture and posture
                cues, and triggering automated alerts on commodity edge hardware.
              </p>
            </div>

            {/* Academic Rigor & Integrity Note Column */}
            <div className="lg:col-span-4 mt-space-md lg:mt-0">
              <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-space-xs mb-space-xs text-primary">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider font-semibold">
                    Scholarly Transparency
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                  Laboratory-evaluated architectures only. I strictly distinguish between
                  peer-reviewed publications and exploratory prototypes. All telemetry relies on
                  controlled testing on commodity edge hardware without commercial exaggeration or
                  fabricated metric claims.
                </p>
                <div className="mt-space-sm pt-space-xs flex items-center justify-end font-label-code text-label-code text-on-surface-variant">
                  <span className="text-primary font-medium">Verified DOIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book Chapter (CRC Press / Taylor & Francis) */}
      <section className="w-full py-space-xl">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin">
          {/* Section Overline */}
          <div className="flex items-center justify-between gap-space-md mb-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
                01 // FEATURED PEER-REVIEWED CONFERENCE PROCEEDINGS CHAPTER
              </span>
              <span className="h-px w-8 bg-surface-variant hidden sm:inline-block" />
            </div>
            <span className="font-label-code text-label-code text-on-surface-variant">
              Peer-reviewed conference proceedings
            </span>
          </div>

          {/* Main Publication Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-xl shadow-md transition-all duration-300 hover:shadow-lg border border-outline-variant/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              {/* Left Dossier Details */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-space-xs mb-space-sm">
                    <span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-meta-tag text-meta-tag font-semibold uppercase tracking-wider inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Peer-Reviewed • CRC Press (Taylor &amp; Francis)
                    </span>
                    <span className="px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag tracking-wider uppercase">
                      {PUBLICATION.chapter} ({PUBLICATION.pages})
                    </span>
                    <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-code text-label-code">
                      Prototype: Garun Drishti
                    </span>
                  </div>

                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs leading-snug">
                    {PUBLICATION.title}
                  </h2>

                  <div className="mb-space-sm">
                    <p className="font-body-sm text-body-sm text-on-surface font-medium">
                      <span className="text-primary font-semibold">Authors:</span>{' '}
                      {PUBLICATION.authors.join(', ')} —{' '}
                      <span className="text-on-surface-variant italic">
                        {PUBLICATION.institution}
                      </span>
                    </p>
                  </div>

                  <div className="bg-surface-container p-space-sm rounded-lg mb-space-md border border-outline-variant/30 text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                    <p className="text-on-surface font-medium mb-1 font-headline-sm text-headline-sm">
                      Proceedings Chapter Citation
                    </p>
                    <p>
                      Book chapter ({PUBLICATION.chapter}, {PUBLICATION.pages}) in{' '}
                      <span className="italic font-medium text-on-surface">
                        {PUBLICATION.bookTitle}
                      </span>
                      , {PUBLICATION.proceedings}, 8–9 July 2025, Chandigarh University, Mohali,
                      India. Edited by Gaurav Aggarwal, Rishabh Dev Shukla, Innocent Ewean Davidson
                      and Ramesh Bansal. {PUBLICATION.publisher}, first edition, {PUBLICATION.year}.
                      DOI: {PUBLICATION.doi}. ISBN: {PUBLICATION.isbnEbook}.
                    </p>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-lg">
                    This chapter presents an integrated architectural design combining
                    multi-threaded frame ingestion, face recognition via face_recognition
                    (Euclidean threshold 0.6), weapon detection via YOLOv8n, 33-landmark gesture and
                    posture analysis via MediaPipe, and an emotion filter via DeepFace (used strictly
                    for emotion, while identity matching is handled by face_recognition). An
                    integrated decision engine triggers local audio alerts and email telemetry every
                    60 s.
                  </p>

                  <div className="mb-space-lg">
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant block mb-space-xs font-semibold">
                      Core Ingest &amp; Verification Pipelines Evaluated:
                    </span>
                    <div className="flex flex-wrap gap-space-xs">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-code text-label-code">
                        Webcam Video Ingestion
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-code text-label-code">
                        face_recognition (Euclidean 0.6)
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-code text-label-code">
                        YOLOv8n Edge Detection
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-code text-label-code">
                        MediaPipe 33-pt Posture
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-code text-label-code">
                        DeepFace Emotion Filter
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-space-sm pt-space-md border-t border-outline-variant/20">
                  <Link
                    to="/research/real-time-threat-detection"
                    className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm"
                  >
                    <span>Read Full Paper Dossier</span>
                    <span className="material-symbols-outlined text-[16px]">article</span>
                  </Link>
                  <Link
                    to="/projects/garun-drishti"
                    className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm transition-colors"
                  >
                    <span>View System Prototype</span>
                    <span className="material-symbols-outlined text-[16px]">terminal</span>
                  </Link>
                  <a
                    href={PUBLICATION.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-code text-label-code transition-colors"
                  >
                    <span>DOI: {PUBLICATION.doi}</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                  <a
                    href="https://www.routledge.com/Integrated-Technologies-in-Electrical-Electronics-and-Biotechnology-Engineering-Volume-1/Aggarwal-Shukla-EweanDavidson-Bansal/p/book/9781041318422"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-space-xs px-space-sm py-2 rounded-xl text-on-surface-variant hover:text-primary font-body-sm text-body-sm transition-colors"
                  >
                    <span>Publisher Catalog</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* Right Schematic / Benchmark Visualization */}
              <div className="lg:col-span-4 flex flex-col justify-between bg-surface-container-low rounded-xl p-space-md border border-outline-variant/30">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant font-semibold">
                      Pipeline Architecture
                    </span>
                    <span className="font-label-code text-label-code text-primary">ICITEEB 2025</span>
                  </div>

                  {/* Responsive Pipeline Diagram */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl mb-space-md shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
                    {/* Stage 1 & 2 */}
                    <div className="grid grid-cols-2 gap-space-xs text-center">
                      <div className="p-2 rounded-lg bg-surface-container border border-outline-variant/30 flex flex-col items-center justify-center">
                        <span className="font-meta-tag uppercase text-[10px] text-primary font-bold">1. Input</span>
                        <span className="font-label-code text-xs font-semibold text-on-surface">Webcam Feed</span>
                        <span className="font-label-code text-[10px] text-on-surface-variant">640×480 @ 30 FPS</span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-container border border-outline-variant/30 flex flex-col items-center justify-center">
                        <span className="font-meta-tag uppercase text-[10px] text-primary font-bold">2. Ingest</span>
                        <span className="font-label-code text-xs font-semibold text-on-surface">Frame Resize</span>
                        <span className="font-label-code text-[10px] text-primary font-medium">160×120 px</span>
                      </div>
                    </div>

                    {/* Transition Indicator */}
                    <div className="flex justify-center -my-1 text-primary">
                      <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                    </div>

                    {/* Stage 3: Parallel Branches */}
                    <div className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/50 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-[11px] font-label-code text-primary font-semibold border-b border-outline-variant/30 pb-1">
                        <span>3. Parallel Feature Extraction</span>
                        <span className="text-on-surface-variant text-[10px]">Concurrent</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[11px] font-label-code">
                        <div className="p-1.5 rounded bg-surface-container-lowest border border-outline-variant/30">
                          <span className="text-primary font-semibold block">Face Recog</span>
                          <span className="text-on-surface-variant text-[10px]">128-d / d ≤ 0.6</span>
                        </div>
                        <div className="p-1.5 rounded bg-surface-container-lowest border border-outline-variant/30">
                          <span className="text-primary font-semibold block">Weapon Det</span>
                          <span className="text-on-surface-variant text-[10px]">YOLOv8 Nano</span>
                        </div>
                        <div className="p-1.5 rounded bg-surface-container-lowest border border-outline-variant/30">
                          <span className="text-primary font-semibold block">Posture</span>
                          <span className="text-on-surface-variant text-[10px]">MediaPipe (33 pts)</span>
                        </div>
                        <div className="p-1.5 rounded bg-surface-container-lowest border border-outline-variant/30">
                          <span className="text-primary font-semibold block">Emotion</span>
                          <span className="text-on-surface-variant text-[10px]">DeepFace Filter</span>
                        </div>
                      </div>
                    </div>

                    {/* Transition Indicator */}
                    <div className="flex justify-center -my-1 text-primary">
                      <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                    </div>

                    {/* Stage 4 & 5 */}
                    <div className="grid grid-cols-2 gap-space-xs text-center">
                      <div className="p-2 rounded-lg bg-surface-container border border-outline-variant/30 flex flex-col items-center justify-center">
                        <span className="font-meta-tag uppercase text-[10px] text-primary font-bold">4. Decision</span>
                        <span className="font-label-code text-xs font-semibold text-on-surface">Threat Logic</span>
                        <span className="font-label-code text-[10px] text-on-surface-variant">Multi-modal Fused</span>
                      </div>
                      <div className="p-2 rounded-lg bg-primary text-on-primary flex flex-col items-center justify-center shadow-sm">
                        <span className="font-meta-tag uppercase text-[10px] text-primary-fixed font-bold">5. Action</span>
                        <span className="font-label-code text-xs font-semibold text-on-primary">Alert System</span>
                        <span className="font-label-code text-[10px] text-on-primary/90">Beep + Email / 60s</span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry specs table */}
                  <div className="space-y-space-xs font-label-code text-label-code">
                    <div className="flex justify-between py-1 bg-surface-container rounded px-2">
                      <span className="text-on-surface-variant">Test Machine:</span>
                      <span className="text-on-surface font-semibold">
                        {PUBLICATION.hardwareTelemetry.machine}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 bg-surface-container rounded px-2">
                      <span className="text-on-surface-variant">Capture Hardware:</span>
                      <span className="text-on-surface font-semibold">
                        {PUBLICATION.hardwareTelemetry.camera}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 bg-surface-container rounded px-2">
                      <span className="text-on-surface-variant">Unoptimized Latency:</span>
                      <span className="text-on-surface font-semibold">
                        {PUBLICATION.hardwareTelemetry.initialLatency}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 bg-surface-container rounded px-2">
                      <span className="text-on-surface-variant">Tuned (160×120):</span>
                      <span className="text-primary font-semibold">
                        {PUBLICATION.hardwareTelemetry.optimizedLatency}
                      </span>
                    </div>
                  </div>
                </div>

                {/* BibTeX quick block with copy feedback */}
                <div className="mt-space-md pt-space-sm bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant font-semibold">
                      BibTeX Entry
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyBibtex}
                      className="font-label-code text-label-code text-primary hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {copiedBibtex ? 'check' : 'content_copy'}
                      </span>
                      <span>{copiedBibtex ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre
                    className="font-label-code text-label-code text-on-surface-variant overflow-x-auto whitespace-pre selection:bg-secondary-container p-1 rounded"
                  >
                    {PUBLICATION.bibtex}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology & Laboratory Investigation Areas */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin">
          <div className="max-w-2xl mb-space-xl">
            <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold block mb-space-xs">
              02 // EMPIRICAL METHODOLOGY &amp; PILLARS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-sm">
              Core Laboratory Investigation Tracks
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Empirical experiments conducted using commodity hardware constraints to test edge
              feasibility, resource partitioning, and real-time failure envelopes.
            </p>
          </div>

          {/* 3 Pillar Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm transition-transform duration-200 hover:-translate-y-1 border border-outline-variant/30">
              <div>
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md">
                  <span className="material-symbols-outlined text-[22px]">memory</span>
                </div>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant block mb-space-xs font-semibold">
                  Benchmarking Track A
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
                  Concurrency &amp; Frame Ingestion
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Multi-threaded Python pipeline decoupling webcam stream from inference threads.
                  Isolates frame acquisition from heavy model compute, preventing frame buffer
                  bloat and UI starvation.
                </p>
              </div>
              <div className="bg-surface-container p-space-sm rounded-lg font-label-code text-label-code">
                <div className="text-on-surface-variant flex justify-between">
                  <span>Pipeline Architecture:</span>
                  <span className="text-on-surface font-medium">Decoupled Thread Pool</span>
                </div>
                <div className="text-on-surface-variant flex justify-between mt-1">
                  <span>Buffer Isolation:</span>
                  <span className="text-primary font-medium">Webcam Stream Queue</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm transition-transform duration-200 hover:-translate-y-1 border border-outline-variant/30">
              <div>
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md">
                  <span className="material-symbols-outlined text-[22px]">accessibility_new</span>
                </div>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant block mb-space-xs font-semibold">
                  Kinematics Track B
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
                  Heuristic Landmark Analysis
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  MediaPipe hands/pose for gesture and posture heuristics. Translates topological
                  landmarks into rule-based posture and gesture cues directly on commodity hardware
                  without heavy 3D CNNs.
                </p>
              </div>
              <div className="bg-surface-container p-space-sm rounded-lg font-label-code text-label-code">
                <div className="text-on-surface-variant flex justify-between">
                  <span>Model Integration:</span>
                  <span className="text-on-surface font-medium">MediaPipe Hands &amp; Pose</span>
                </div>
                <div className="text-on-surface-variant flex justify-between mt-1">
                  <span>Evaluation:</span>
                  <span className="text-primary font-medium">Rule-based Heuristics</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm transition-transform duration-200 hover:-translate-y-1 border border-outline-variant/30">
              <div>
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md">
                  <span className="material-symbols-outlined text-[22px]">tune</span>
                </div>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant block mb-space-xs font-semibold">
                  Robustness Track C
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
                  Threshold Verification
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Face recognition (128-d encodings, Euclidean threshold 0.6) tested across varied
                  lighting and resolution ranges to define deterministic boundary conditions.
                </p>
              </div>
              <div className="bg-surface-container p-space-sm rounded-lg font-label-code text-label-code">
                <div className="text-on-surface-variant flex justify-between">
                  <span>Encoding Format:</span>
                  <span className="text-on-surface font-medium">128-d Vector</span>
                </div>
                <div className="text-on-surface-variant flex justify-between mt-1">
                  <span>Metric Boundary:</span>
                  <span className="text-primary font-medium">Euclidean Distance 0.6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objective Boundaries & Limitations Section */}
      <section className="w-full py-space-xl">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin">
          <div className="bg-surface-container rounded-xl p-space-md md:p-space-lg shadow-sm border border-outline-variant/30">
            <div className="flex items-center gap-space-xs mb-space-sm">
              <span className="material-symbols-outlined text-primary text-[20px]">policy</span>
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
                Honest Academic Boundaries &amp; Scope Limitations
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
              What this research is — and explicitly what it is not.
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              <span className="font-semibold text-primary font-label-code uppercase tracking-wider text-[12px]">
                Notice:
              </span>{' '}
              Explicitly designated as a{' '}
              <span className="font-semibold text-on-surface">
                hypothetical evaluation on simulated scenarios
              </span>{' '}
              conducted in controlled academic testbeds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter font-body-sm text-body-sm mb-space-md">
              <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
                <span className="font-label-code text-label-code text-primary font-semibold block mb-1">
                  01. SIMULATION COHORT
                </span>
                <p className="text-on-surface-variant">
                  Tested on 100 individuals (50 known / 50 unknown), 20 weapon scenarios, and 50
                  gesture/posture cases in simulated testbeds.
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
                <span className="font-label-code text-label-code text-primary font-semibold block mb-1">
                  02. FACE VERIFICATION
                </span>
                <p className="text-on-surface-variant">
                  Achieves 95% True Positive Rate (TPR) and 5% False Positive Rate (FPR) at the
                  calibrated 0.6 Euclidean distance threshold.
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
                <span className="font-label-code text-label-code text-primary font-semibold block mb-1">
                  03. WEAPON &amp; POSTURE
                </span>
                <p className="text-on-surface-variant">
                  Weapon detection achieves 85% precision and 90% recall. Suspicious activity
                  recognition yields 80% TPR and 10% FPR.
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
                <span className="font-label-code text-label-code text-primary font-semibold block mb-1">
                  04. DISPATCH INTERVAL
                </span>
                <p className="text-on-surface-variant">
                  Automated alerts sent every 60 seconds as advisory telemetry for human supervisors
                  to prevent notification spam.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm font-body-sm text-body-sm border border-outline-variant/30">
              <div className="font-label-code text-label-code text-primary font-semibold uppercase tracking-wider mb-1">
                Explicit Architectural Limitations
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Degradation in non-cooperative lighting conditions; single camera coverage
                constraint; false positive susceptibility in heuristic gesture/posture triggers;
                and campus-wide scalability remains untested on production network fabrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarly Inquiries & Collaboration CTA Section */}
      <section className="w-full py-space-xl">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-gutter border border-outline-variant/30">
            <div className="max-w-xl">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold block mb-space-xs">
                Academic Collaboration • Code • Datasets
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
                Interested in applied vision prototypes or reproducible benchmarks?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                I am always open to technical discourse regarding edge inference constraints,
                open-source computer vision architecture, and reproducible experimental design.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm shrink-0 w-full md:w-auto">
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-xl bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm"
                href={gmailComposeUrl(SITE_METADATA.email)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
                <span>{SITE_METADATA.email}</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm transition-colors"
              >
                <span>Direct Inquiries</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
