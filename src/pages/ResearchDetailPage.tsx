import { useState } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'
import { PUBLICATION } from '../content/siteData'

export function ResearchDetailPage() {
  const [copiedApa, setCopiedApa] = useState(false)
  const [copiedBibtex, setCopiedBibtex] = useState(false)

  const handleCopyApa = () => {
    navigator.clipboard.writeText(PUBLICATION.apaCitation).then(() => {
      setCopiedApa(true)
      setTimeout(() => setCopiedApa(false), 2200)
    })
  }

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(PUBLICATION.bibtex).then(() => {
      setCopiedBibtex(true)
      setTimeout(() => setCopiedBibtex(false), 2200)
    })
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Real-Time Threat Detection System — CRC Press Publication Dossier"
        description="Scholarly publication dossier on real-time threat detection for campus security using multi-threaded edge computer vision, YOLOv8, MediaPipe, and face recognition."
        canonical="/research/real-time-threat-detection"
      />

      {/* Top Academic Context Header */}
      <section className="w-full bg-surface-container-low py-space-xl border-b border-outline-variant/30">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-space-md">
            <ol className="flex flex-wrap items-center gap-space-xs font-meta-tag text-meta-tag uppercase text-on-surface-variant">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <Link to="/research" className="hover:text-primary transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="text-on-surface font-semibold truncate max-w-[280px] sm:max-w-none">
                Real-Time Threat Detection System
              </li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span className="font-meta-tag text-meta-tag tracking-wider uppercase text-primary font-semibold">
                /research/real-time-threat-detection • Publication Detail
              </span>
            </div>
            <div className="flex items-center gap-2 px-space-sm py-0.5 rounded-full bg-surface text-on-surface-variant font-label-code text-label-code shadow-sm border border-outline-variant/30">
              <span
                className="material-symbols-outlined text-[14px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span>Peer-reviewed conference proceedings • CRC Press / Taylor &amp; Francis</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mt-space-md">
            <div className="lg:col-span-8">
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight text-balance mb-space-md">
                {PUBLICATION.title}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mb-space-lg">
                Book Chapter ({PUBLICATION.chapter}, {PUBLICATION.pages}) in{' '}
                <em>{PUBLICATION.bookTitle}</em>, {PUBLICATION.proceedings}. An integrated
                multi-threaded computer vision pipeline for edge video analysis combining facial
                verification, person-linked weapon detection, and gesture heuristics.
              </p>

              <div className="flex flex-wrap items-center gap-x-space-lg gap-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">group</span>
                  <span className="text-on-surface font-medium">
                    {PUBLICATION.authors.join(', ')}
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                    school
                  </span>
                  <span>{PUBLICATION.institution}</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                    calendar_today
                  </span>
                  <span>First Edition, {PUBLICATION.year}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm border border-outline-variant/30">
                <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                    Publication Details
                  </span>
                  <span className="font-label-code text-label-code text-primary bg-surface-container px-2 py-0.5 rounded-full">
                    {PUBLICATION.chapter} ({PUBLICATION.pages})
                  </span>
                </div>
                <div className="space-y-space-xs font-label-code text-label-code">
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">Proceedings:</span>
                    <span className="text-on-surface text-right font-medium truncate max-w-[180px]">
                      ICITEEB 2025 (Vol. 1)
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">Chapter DOI:</span>
                    <a
                      className="text-primary hover:underline truncate max-w-[180px]"
                      href={PUBLICATION.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {PUBLICATION.doi}
                    </a>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">ISBN (Book):</span>
                    <span className="text-on-surface text-right font-medium">{PUBLICATION.isbnBook}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">ISBN (eBook):</span>
                    <span className="text-on-surface text-right">{PUBLICATION.isbnEbook}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">Publisher:</span>
                    <span className="text-on-surface text-right">{PUBLICATION.publisher}</span>
                  </div>
                </div>
                <div className="pt-space-xs flex flex-col gap-space-xs">
                  <a
                    className="inline-flex items-center justify-center gap-space-xs w-full px-space-md py-2.5 rounded-xl bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-secondary transition-colors shadow-sm"
                    href={PUBLICATION.routledgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View on Routledge (Taylor &amp; Francis)</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-space-xs w-full px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm transition-colors border border-outline-variant"
                    href={PUBLICATION.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Chapter DOI Resolution</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Reading Canvas */}
      <div className="w-full py-space-xl">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Sticky Navigation & Quick Meta Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-space-lg order-2 lg:order-1">
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md border border-outline-variant/30">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
                  System Specification
                </h2>
                <div className="space-y-space-sm font-body-sm text-body-sm">
                  <div className="bg-surface-container-low p-space-sm rounded-lg">
                    <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant block mb-1">
                      Camera &amp; Video Feed
                    </span>
                    <p className="font-medium text-on-surface">Webcam 640×480 @ 30 FPS</p>
                    <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-1">
                      Frames resized to 160×120 for analysis
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded-lg">
                    <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant block mb-1">
                      Software Stack
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="px-2 py-0.5 rounded-full bg-surface text-on-surface font-label-code text-label-code">
                        Python (Multi-threaded)
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface text-on-surface font-label-code text-label-code">
                        face_recognition
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface text-on-surface font-label-code text-label-code">
                        YOLOv8 Nano
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface text-on-surface font-label-code text-label-code">
                        MediaPipe Hands/Pose
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface text-on-surface font-label-code text-label-code">
                        DeepFace
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded-lg">
                    <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant block mb-1">
                      Test Machine
                    </span>
                    <p className="font-medium text-on-surface">
                      {PUBLICATION.hardwareTelemetry.machine}
                    </p>
                    <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-1">
                      {PUBLICATION.hardwareTelemetry.camera}
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded-lg">
                    <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant block mb-1">
                      Alert Dispatch
                    </span>
                    <p className="font-medium text-on-surface">
                      Email alert with full frame every 60s + local audio beep
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm border border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">speed</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Performance Benchmark
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Measured on Intel i5-8250U CPU test machine:
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="p-space-xs bg-surface-container-low rounded text-center">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                      ~200 ms
                    </span>
                    <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant">
                      Initial (5 FPS)
                    </span>
                  </div>
                  <div className="p-space-xs bg-surface-container-low rounded text-center">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold block">
                      ~50 ms
                    </span>
                    <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant">
                      Optimized (20 FPS)
                    </span>
                  </div>
                </div>
                <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-2">
                  {PUBLICATION.hardwareTelemetry.notes}
                </p>
              </div>

              <div className="p-space-md bg-surface-container rounded-xl border border-outline-variant/30">
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant block mb-space-sm">
                  Contents Quick Jump
                </span>
                <ul className="space-y-space-xs font-body-sm text-body-sm">
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('abstract')}
                      className="w-full text-on-surface hover:text-primary transition-colors flex items-center justify-between cursor-pointer py-1 text-left"
                    >
                      <span>1. Structured Abstract</span>
                      <span className="font-label-code text-label-code text-on-surface-variant">
                        01
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('pipeline-diagram')}
                      className="w-full text-on-surface hover:text-primary transition-colors flex items-center justify-between cursor-pointer py-1 text-left"
                    >
                      <span>2. Pipeline Architecture</span>
                      <span className="font-label-code text-label-code text-on-surface-variant">
                        02
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('system-tech')}
                      className="w-full text-on-surface hover:text-primary transition-colors flex items-center justify-between cursor-pointer py-1 text-left"
                    >
                      <span>3. System &amp; Technology Stack</span>
                      <span className="font-label-code text-label-code text-on-surface-variant">
                        03
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('evaluation')}
                      className="w-full text-on-surface hover:text-primary transition-colors flex items-center justify-between cursor-pointer py-1 text-left"
                    >
                      <span>4. Simulated Evaluation</span>
                      <span className="font-label-code text-label-code text-on-surface-variant">
                        04
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('limitations')}
                      className="w-full text-on-surface hover:text-primary transition-colors flex items-center justify-between cursor-pointer py-1 text-left"
                    >
                      <span>5. Prototype Limitations</span>
                      <span className="font-label-code text-label-code text-on-surface-variant">
                        05
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('citation')}
                      className="w-full text-on-surface hover:text-primary transition-colors flex items-center justify-between cursor-pointer py-1 text-left"
                    >
                      <span>6. Citation &amp; BibTeX</span>
                      <span className="font-label-code text-label-code text-on-surface-variant">
                        06
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Narrative Article Body */}
            <article className="lg:col-span-8 space-y-space-xl order-1 lg:order-2">
              <section
                className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/30"
                id="abstract"
              >
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
                    Section 01 // Research Paper
                  </span>
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    Peer-Reviewed Chapter
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-md">
                  Structured Abstract
                </h2>
                <div className="space-y-space-md font-body-md text-body-md leading-relaxed text-on-surface">
                  <div className="space-y-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                      Background
                    </h3>
                    <p className="text-on-surface-variant">{PUBLICATION.abstract.background}</p>
                  </div>
                  <div className="space-y-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                      Objective
                    </h3>
                    <p className="text-on-surface-variant">{PUBLICATION.abstract.objective}</p>
                  </div>
                  <div className="space-y-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                      Methods &amp; Architecture
                    </h3>
                    <p className="text-on-surface-variant">{PUBLICATION.abstract.methods}</p>
                  </div>
                  <div className="space-y-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                      Key Findings
                    </h3>
                    <p className="text-on-surface-variant">{PUBLICATION.abstract.findings}</p>
                  </div>
                </div>
              </section>

              <section
                className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md border border-outline-variant/30"
                id="pipeline-diagram"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold block">
                      Section 02 // Architecture
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                      Pipeline Architecture &amp; Dataflow
                    </h2>
                  </div>
                  <span className="font-label-code text-label-code bg-surface-container px-2 py-1 rounded text-on-surface-variant">
                    Figure 1
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Simple block diagram of the multi-threaded video processing and alert dispatch
                  flow:
                </p>
                <div className="bg-surface-container-low rounded-xl p-space-md sm:p-space-lg border border-outline-variant/60 shadow-sm flex flex-col gap-space-lg">
                  {/* Stages 1 & 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md items-stretch">
                    {/* Stage 1: Input */}
                    <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm border border-outline-variant/70 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-meta-tag text-meta-tag uppercase px-2 py-0.5 rounded bg-surface-container text-primary font-semibold">
                            1. Input · Video Feed
                          </span>
                          <span className="material-symbols-outlined text-primary text-[20px]">videocam</span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Continuous Camera Feed
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Continuous sensor stream from standard commodity camera.
                        </p>
                      </div>
                      <div className="mt-space-md pt-space-xs border-t border-outline-variant/40 flex items-center justify-between text-outline font-label-code text-[0.75rem]">
                        <span>INPUT RESOLUTION</span>
                        <span className="font-semibold text-on-surface">640×480 @ 30 FPS</span>
                      </div>
                    </div>

                    {/* Stage 2: Ingest */}
                    <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm border border-outline-variant/70 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-meta-tag text-meta-tag uppercase px-2 py-0.5 rounded bg-surface-container text-primary font-semibold">
                            2. Ingest · Preprocessing
                          </span>
                          <span className="material-symbols-outlined text-primary text-[20px]">transform</span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Frame Resizing
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Downsampling to decouple capture from model inference latency.
                        </p>
                      </div>
                      <div className="mt-space-md pt-space-xs border-t border-outline-variant/40 flex items-center justify-between text-outline font-label-code text-[0.75rem]">
                        <span>PREPROCESSED TO</span>
                        <span className="font-semibold text-primary">Resize to 160×120</span>
                      </div>
                    </div>
                  </div>

                  {/* Transition Arrow into Stage 3 */}
                  <div className="flex items-center justify-center -my-2 text-primary">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 font-label-code text-[11px] text-primary">
                      <span>Frames Dispatched to Concurrent Worker Threads</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                    </div>
                  </div>

                  {/* Stage 3: Parallel Feature Extraction */}
                  <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl border-2 border-primary/40 shadow-sm flex flex-col gap-space-md">
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xs border-b border-outline-variant/50">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                        <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          3. Parallel Feature Extraction
                        </h3>
                      </div>
                      <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-medium">
                        Simultaneous Thread Execution
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                      {/* Branch 1: Face */}
                      <div className="p-space-md rounded-lg bg-surface-container-low border border-outline-variant/50 flex flex-col justify-between gap-space-sm">
                        <div>
                          <div className="flex items-center justify-between text-outline font-meta-tag text-meta-tag uppercase mb-1">
                            <span>Face</span>
                            <span className="text-primary font-semibold">Biometrics</span>
                          </div>
                          <span className="font-body-md text-body-md font-semibold text-on-surface block">
                            Face Recognition
                          </span>
                          <p className="font-body-sm text-[0.8125rem] text-on-surface-variant mt-1">
                            128-dimensional Euclidean distance matching against registered identities.
                          </p>
                        </div>
                        <div className="pt-2 border-t border-outline-variant/40 flex items-center justify-between font-label-code text-[0.75rem]">
                          <span className="text-outline">Criterion:</span>
                          <span className="font-semibold text-on-surface">128-d / d ≤ 0.6</span>
                        </div>
                      </div>

                      {/* Branch 2: Weapon */}
                      <div className="p-space-md rounded-lg bg-surface-container-low border border-outline-variant/50 flex flex-col justify-between gap-space-sm">
                        <div>
                          <div className="flex items-center justify-between text-outline font-meta-tag text-meta-tag uppercase mb-1">
                            <span>Weapon</span>
                            <span className="text-primary font-semibold">Object Localization</span>
                          </div>
                          <span className="font-body-md text-body-md font-semibold text-on-surface block">
                            Weapon Detection
                          </span>
                          <p className="font-body-sm text-[0.8125rem] text-on-surface-variant mt-1">
                            Lightweight neural object detection running concurrently on CPU edge envelope.
                          </p>
                        </div>
                        <div className="pt-2 border-t border-outline-variant/40 flex items-center justify-between font-label-code text-[0.75rem]">
                          <span className="text-outline">Model:</span>
                          <span className="font-semibold text-on-surface">YOLOv8 Nano</span>
                        </div>
                      </div>

                      {/* Branch 3: Gesture */}
                      <div className="p-space-md rounded-lg bg-surface-container-low border border-outline-variant/50 flex flex-col justify-between gap-space-sm">
                        <div>
                          <div className="flex items-center justify-between text-outline font-meta-tag text-meta-tag uppercase mb-1">
                            <span>Gesture</span>
                            <span className="text-primary font-semibold">Kinematics &amp; Affect</span>
                          </div>
                          <span className="font-body-md text-body-md font-semibold text-on-surface block">
                            Posture &amp; Emotion Filter
                          </span>
                          <p className="font-body-sm text-[0.8125rem] text-on-surface-variant mt-1">
                            MediaPipe skeletal keypoints combined with DeepFace distress analysis.
                          </p>
                        </div>
                        <div className="pt-2 border-t border-outline-variant/40 flex items-center justify-between font-label-code text-[0.75rem]">
                          <span className="text-outline">Stack:</span>
                          <span className="font-semibold text-on-surface">MediaPipe &amp; DeepFace</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Transition Arrow into Stage 4 & 5 */}
                  <div className="flex items-center justify-center -my-2 text-primary">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 font-label-code text-[11px] text-primary">
                      <span>Extracted Features Combined in State Engine</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                    </div>
                  </div>

                  {/* Stages 4 & 5 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md items-stretch">
                    {/* Stage 4: Decision */}
                    <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm border border-outline-variant/70 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-meta-tag text-meta-tag uppercase px-2 py-0.5 rounded bg-surface-container text-primary font-semibold">
                            4. Decision · Threat Decision
                          </span>
                          <span className="material-symbols-outlined text-primary text-[20px]">rule</span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Fused State Evaluation
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Multi-modal heuristic state correlation and fused threat scoring.
                        </p>
                      </div>
                      <div className="mt-space-md pt-space-xs border-t border-outline-variant/40 flex items-center justify-between text-outline font-label-code text-[0.75rem]">
                        <span>DECISION LOGIC</span>
                        <span className="font-semibold text-on-surface">Multi-modal logic</span>
                      </div>
                    </div>

                    {/* Stage 5: Action */}
                    <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm border-2 border-primary flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-meta-tag text-meta-tag uppercase px-2 py-0.5 rounded bg-primary text-on-primary font-semibold">
                            5. Action · Alert System
                          </span>
                          <span className="material-symbols-outlined text-primary text-[20px]">notifications_active</span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Immediate Alert Dispatch
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Asynchronous local audio alert and throttled email telemetry.
                        </p>
                      </div>
                      <div className="mt-space-md pt-space-xs border-t border-outline-variant/40 flex items-center justify-between text-outline font-label-code text-[0.75rem]">
                        <span>CADENCE &amp; ACTION</span>
                        <span className="font-semibold text-primary">Beep + Email / 60s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md border border-outline-variant/30"
                id="system-tech"
              >
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold block">
                  Section 03 // Implementation
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  System &amp; Technology Stack
                </h2>
                <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <p>
                    The application is implemented in Python utilizing multi-threading to decouple
                    camera frame capture from downstream analytical models. Incoming frames are
                    captured at 640×480 from a standard webcam and downsampled to 160×120 for rapid
                    inferencing.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="p-space-md bg-surface-container-low rounded-xl space-y-space-xs border border-outline-variant/20">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                        Face Recognition &amp; Weapon Localization
                      </h4>
                      <ul className="list-disc pl-space-md text-body-sm space-y-1">
                        <li>
                          <strong>face_recognition library:</strong> Generates 128-dimensional
                          facial encodings; classification uses Euclidean distance with threshold
                          0.6.
                        </li>
                        <li>
                          <strong>YOLOv8 Nano:</strong> Edge-optimized weapon detection model linked
                          directly to detected person bounding boxes.
                        </li>
                      </ul>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl space-y-space-xs border border-outline-variant/20">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                        Gesture, Posture &amp; Emotion Filters
                      </h4>
                      <ul className="list-disc pl-space-md text-body-sm space-y-1">
                        <li>
                          <strong>MediaPipe Hands &amp; Pose:</strong> Landmark coordinate
                          extraction evaluating upper-limb posture and gesture heuristics.
                        </li>
                        <li>
                          <strong>DeepFace Emotion Filter:</strong> Flags anomalous distress when
                          anger or fear probabilities exceed 50%.
                        </li>
                        <li>
                          <strong>Alert Notification:</strong> Triggers a local audible alert and
                          dispatches an email containing the full uncompressed frame every 60
                          seconds.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md border border-outline-variant/30"
                id="evaluation"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold block">
                      Section 04 // Empirical Data
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                      Hypothetical Evaluation on Simulated Scenarios
                    </h2>
                  </div>
                  <span className="font-label-code text-label-code bg-surface-container px-2 py-1 rounded text-on-surface-variant">
                    Simulated Testbed
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  The system was tested under controlled laboratory conditions across simulated
                  security scenarios, evaluated on an Intel Core i5-8250U machine (8 GB RAM, Windows
                  10, Logitech C270 webcam):
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-xs">
                  {PUBLICATION.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-space-md bg-surface-container-low rounded-xl text-center border border-outline-variant/20"
                    >
                      <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant block mb-1">
                        {metric.label}
                      </span>
                      <span className="font-headline-md text-headline-md text-primary font-bold block">
                        {metric.value}
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface mt-1">
                        {metric.subtext}
                      </p>
                      <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-1">
                        {metric.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg font-body-sm text-body-sm text-on-surface-variant border border-outline-variant/20">
                  When threat conditions are triggered, rate-limited email notifications with
                  complete image frames are dispatched every 60 seconds along with a local beep.
                </div>
              </section>

              <section
                className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md border border-outline-variant/30"
                id="limitations"
              >
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    warning
                  </span>
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
                    Section 05 // System Boundaries
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  Documented Prototype Limitations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="p-space-md bg-surface-container-low rounded-xl space-y-space-xs border border-outline-variant/20">
                    <span className="font-meta-tag text-meta-tag uppercase text-on-surface font-semibold block">
                      1. Optical &amp; Environmental Constraints
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Variations in ambient illumination, backlighting, and consumer webcam
                      resolution (Logitech C270) affect facial recognition accuracy and landmark
                      detection stability.
                    </p>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-xl space-y-space-xs border border-outline-variant/20">
                    <span className="font-meta-tag text-meta-tag uppercase text-on-surface font-semibold block">
                      2. Heuristics &amp; Scalability Limits
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Geometric heuristic rules for upper-body gestures can produce false positives
                      during everyday movements. The prototype operates as a single-camera setup;
                      large-campus scalability has not been tested. This implementation is an
                      experimental laboratory prototype, not a commercial surveillance product.
                    </p>
                  </div>
                </div>
                <div className="p-space-md bg-surface-container rounded-xl space-y-space-xs mt-space-sm border border-outline-variant/20">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      shield
                    </span>
                    Author&apos;s Note
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Future work should incorporate automated face blurring for unflagged bystanders
                    and auditable consent logging to ensure privacy-conscious edge deployment.
                  </p>
                </div>
              </section>

              <section
                className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md border border-outline-variant/30"
                id="citation"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold block">
                      Section 06 // Reference
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                      Canonical Citation &amp; BibTeX
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyApa}
                    className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-body-sm text-body-sm transition-colors cursor-pointer"
                    title="Copy APA Citation"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedApa ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedApa ? 'Copied APA!' : 'Copy Citation'}</span>
                  </button>
                </div>
                <div className="p-space-md bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface leading-relaxed border-l-4 border-primary">
                  <p>{PUBLICATION.apaCitation}</p>
                </div>

                <div className="space-y-space-xs">
                  <div className="flex items-center justify-between px-space-xs">
                    <span className="font-label-code text-label-code text-on-surface-variant">
                      BibTeX Citation Entry
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyBibtex}
                      className="font-label-code text-label-code text-primary hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {copiedBibtex ? 'check' : 'code'}
                      </span>
                      <span>{copiedBibtex ? 'Copied BibTeX!' : 'Copy BibTeX'}</span>
                    </button>
                  </div>
                  <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-space-md overflow-x-auto shadow-inner">
                    <pre className="font-label-code text-label-code leading-relaxed text-left">
                      <code>{PUBLICATION.bibtex}</code>
                    </pre>
                  </div>
                </div>
              </section>

              <nav
                aria-label="Related Works"
                className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-md"
              >
                <Link
                  to="/research"
                  className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow transition-shadow group flex items-center justify-between border border-outline-variant/30"
                >
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary group-hover:-translate-x-1 transition-transform">
                      arrow_back
                    </span>
                    <div>
                      <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant block">
                        Repository
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
                        All Research Papers
                      </span>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/projects/garun-drishti"
                  className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow transition-shadow group flex items-center justify-between text-right border border-outline-variant/30"
                >
                  <div className="ml-auto flex items-center gap-space-sm">
                    <div>
                      <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant block">
                        Related Project
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
                        Garun Drishti Prototype
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              </nav>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
