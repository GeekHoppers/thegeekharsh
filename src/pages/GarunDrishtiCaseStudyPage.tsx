import { Link } from '../router'
import { SEO } from '../components/SEO'
import { PUBLICATION } from '../content/siteData'

export function GarunDrishtiCaseStudyPage() {
  return (
    <>
      <SEO
        title="Garun Drishti Case Study — Harsh Sinha · The Geek Harsh"
        description="Real-Time Threat Detection System: Computer vision research prototype, multi-threaded video pipeline, and CRC Press published book chapter."
        path="/projects/garun-drishti"
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
            <li className="text-on-surface font-semibold">Garun Drishti</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="pb-space-xl">
          <div className="flex flex-col gap-space-sm mb-space-md">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                Academic Research · Published Book Chapter
              </span>
              <span className="text-outline">•</span>
              <span className="font-label-code text-label-code text-on-surface-variant">
                IMS Engineering College · June 2025
              </span>
            </div>
            <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-semibold leading-tight">
              Garun Drishti: Real-Time Threat Detection System
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Final-year B.Tech project (June 2025) at IMS Engineering College, supervised by Dr. Nizam Uddin Khan and built by a team of five. Explored face recognition, weapon detection, posture cues, and alerts in a webcam prototype; formed the basis of a published CRC Press book chapter.
            </p>
          </div>

          {/* Metadata Ledger Strip */}
          <div className="bg-surface-container-low p-space-md rounded-xl grid grid-cols-2 md:grid-cols-4 gap-space-md shadow-sm mb-space-lg">
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Institution</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">IMS Engineering College</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Supervision</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">Dr. Nizam Uddin Khan</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Publication</span>
              <span className="font-body-sm text-body-sm font-semibold text-primary">CRC Press (Chapter 10)</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">DOI Link</span>
              <a
                href={PUBLICATION.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-sm text-body-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                {PUBLICATION.doi}
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
        </header>

        {/* Section 01: Context & Integrity */}
        <section className="w-full bg-surface-container-low p-space-lg rounded-xl mb-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                01 / RESEARCH CONTEXT &amp; ETHICS
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-stretch">
              <div className="md:col-span-7 flex flex-col justify-between gap-space-md">
                <div className="flex flex-col gap-space-sm">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium tracking-tight">
                    Investigating concurrent multi-model inference within constrained compute envelopes.
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Educational institutions and regional campuses are frequently constrained by legacy closed-circuit infrastructure and consumer-grade imaging sensors. Garun Drishti was conceptualized to test an architectural question: Can a lightweight, pipelined cascade of specialized open-weight neural vision networks run in real-time on commodity edge hardware to identify potential safety anomalies before human operators could manually cycle camera tiles?
                  </p>
                </div>
                <div className="bg-surface-container-highest p-space-md rounded-xl flex flex-col gap-space-xs shadow-sm">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider font-semibold">
                      Academic Integrity &amp; Responsible Disclosure
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    This system is an academic research demonstration and laboratory bench prototype developed for peer-reviewed scholarly inquiry. It is not a commercial surveillance product, does not claim 100% precision or recall, and was not deployed for continuous live policing in operational campus environments. No synthetic metrics or fabricated telemetry have been cited.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-space-sm">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold block mb-1">
                      Sensor Ingestion Bench
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Webcam 640×480 @ 30 FPS · Resized to 160×120 resolution for downstream multi-threaded processing.
                    </p>
                  </div>
                  <div className="mt-space-md p-space-sm bg-surface-container rounded-lg font-label-code text-meta-tag flex flex-col gap-1">
                    <span className="text-on-surface">INPUT: WEBCAM_640x480</span>
                    <span className="text-secondary font-medium">RESIZED [160x120]</span>
                    <span className="text-outline">TARGET: LOW LATENCY EDGE CPU</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Pipeline Architecture */}
        <section className="py-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl mb-space-lg">
            <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
              02 / ARCHITECTURE &amp; PIPELINES
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium tracking-tight">
              Decoupled Multi-Branch Vision Pipeline
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Rather than bottlenecking a single monolithic neural network, the architecture orchestrates distinct specialized models via prioritized ring buffers to ensure video capture never drops frames.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-lg">
            <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm bg-surface-container-low px-space-md py-space-xs rounded-lg">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">account_tree</span>
                <span className="font-label-code text-label-code font-medium text-on-surface">
                  pipeline_architecture_diagram.spec
                </span>
              </div>
              <div className="flex items-center gap-space-sm font-meta-tag text-meta-tag uppercase text-on-surface-variant">
                <span>MULTITHREADED PYTHON</span>
                <span>·</span>
                <span>ALERT CADENCE: 60 SECONDS</span>
              </div>
            </div>

            {/* 5-Stage Sequential Pipeline Flow */}
            <div className="flex flex-col gap-space-md">
              {/* Stages 1 & 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md items-stretch">
                <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-meta-tag uppercase text-secondary font-semibold text-xs">
                        1. Input · Video Capture
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">videocam</span>
                    </div>
                    <h3 className="font-headline-sm text-body-md text-on-surface font-semibold">
                      Webcam Stream Ingest
                    </h3>
                    <p className="font-body-sm text-meta-tag text-on-surface-variant mt-1">
                      Continuous raw frame buffer capture from commodity optical sensor.
                    </p>
                  </div>
                  <div className="mt-space-sm pt-space-xs border-t border-outline-variant/30 flex justify-between font-label-code text-[11px] text-outline">
                    <span>RATE</span>
                    <span className="font-semibold text-on-surface">640×480 @ 30 FPS</span>
                  </div>
                </div>

                <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-meta-tag uppercase text-secondary font-semibold text-xs">
                        2. Ingest · Preprocessing
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">transform</span>
                    </div>
                    <h3 className="font-headline-sm text-body-md text-on-surface font-semibold">
                      Frame Resizing &amp; Decoupling
                    </h3>
                    <p className="font-body-sm text-meta-tag text-on-surface-variant mt-1">
                      Downsampling to decouple video ingestion throughput from inference latency.
                    </p>
                  </div>
                  <div className="mt-space-sm pt-space-xs border-t border-outline-variant/30 flex justify-between font-label-code text-[11px] text-outline">
                    <span>RESOLUTION</span>
                    <span className="font-semibold text-primary">160×120 px</span>
                  </div>
                </div>
              </div>

              {/* Transition Indicator */}
              <div className="flex items-center justify-center -my-2 text-primary">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 font-label-code text-[11px] text-primary">
                  <span>Downsampled Frames Dispatched to Concurrent Workers</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </div>
              </div>

              {/* Stage 3: Parallel Feature Extraction */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl border-2 border-primary/40 shadow-sm flex flex-col gap-space-sm">
                <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xs border-b border-outline-variant/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <h3 className="font-headline-sm text-body-md font-semibold text-on-surface">
                      3. Parallel Feature Extraction
                    </h3>
                  </div>
                  <span className="font-label-code text-meta-tag px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-medium">
                    Multithreaded Inference
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm pt-space-xs">
                  <div className="p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between">
                    <div>
                      <span className="font-meta-tag uppercase text-[10px] text-primary font-semibold block">Face</span>
                      <strong className="text-body-sm font-semibold text-on-surface block mt-0.5">face_recognition</strong>
                      <p className="text-[11px] text-on-surface-variant mt-1">128-d Euclidean metric</p>
                    </div>
                    <span className="font-label-code text-[10px] text-outline pt-1 mt-2 border-t border-outline-variant/30">d ≤ 0.6 (95% TPR)</span>
                  </div>

                  <div className="p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between">
                    <div>
                      <span className="font-meta-tag uppercase text-[10px] text-primary font-semibold block">Weapon</span>
                      <strong className="text-body-sm font-semibold text-on-surface block mt-0.5">YOLOv8 Nano</strong>
                      <p className="text-[11px] text-on-surface-variant mt-1">Handheld weapon model</p>
                    </div>
                    <span className="font-label-code text-[10px] text-outline pt-1 mt-2 border-t border-outline-variant/30">85% Prec / 90% Rec</span>
                  </div>

                  <div className="p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between">
                    <div>
                      <span className="font-meta-tag uppercase text-[10px] text-primary font-semibold block">Posture</span>
                      <strong className="text-body-sm font-semibold text-on-surface block mt-0.5">MediaPipe Pose</strong>
                      <p className="text-[11px] text-on-surface-variant mt-1">33-point skeletal tracking</p>
                    </div>
                    <span className="font-label-code text-[10px] text-outline pt-1 mt-2 border-t border-outline-variant/30">80% Posture TPR</span>
                  </div>

                  <div className="p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between">
                    <div>
                      <span className="font-meta-tag uppercase text-[10px] text-primary font-semibold block">Emotion</span>
                      <strong className="text-body-sm font-semibold text-on-surface block mt-0.5">DeepFace Filter</strong>
                      <p className="text-[11px] text-on-surface-variant mt-1">Distress affect classifier</p>
                    </div>
                    <span className="font-label-code text-[10px] text-outline pt-1 mt-2 border-t border-outline-variant/30">State Corroboration</span>
                  </div>
                </div>
              </div>

              {/* Transition Indicator */}
              <div className="flex items-center justify-center -my-2 text-primary">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 font-label-code text-[11px] text-primary">
                  <span>Branch Outputs Synthesized in Decision Node</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </div>
              </div>

              {/* Stages 4 & 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md items-stretch">
                <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-meta-tag uppercase text-secondary font-semibold text-xs">
                        4. Decision · Threat Decision
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">rule</span>
                    </div>
                    <h3 className="font-headline-sm text-body-md text-on-surface font-semibold">
                      Threat Decision Engine
                    </h3>
                    <p className="font-body-sm text-meta-tag text-on-surface-variant mt-1">
                      Multi-modal fused state logic evaluates biometrics, weapons, and posture heuristics.
                    </p>
                  </div>
                  <div className="mt-space-sm pt-space-xs border-t border-outline-variant/30 flex justify-between font-label-code text-[11px] text-outline">
                    <span>LOGIC</span>
                    <span className="font-semibold text-on-surface">Multi-modal logic</span>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl border-2 border-primary shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-meta-tag uppercase text-primary font-bold text-xs">
                        5. Action · Alert System
                      </span>
                      <span className="material-symbols-outlined text-primary text-[18px]">notifications_active</span>
                    </div>
                    <h3 className="font-headline-sm text-body-md font-semibold text-on-surface">
                      Alert Dispatch System
                    </h3>
                    <p className="font-body-sm text-meta-tag text-on-surface-variant mt-1">
                      Immediate acoustic warning coupled with background email frame dispatch.
                    </p>
                  </div>
                  <div className="mt-space-sm pt-space-xs border-t border-outline-variant/30 flex justify-between font-label-code text-[11px] text-primary font-semibold">
                    <span>ACTION CADENCE</span>
                    <span>Beep + Email / 60s</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-secondary font-semibold">
                Test Environment &amp; Latency Benchmarks
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md text-body-sm text-on-surface-variant">
                <p>
                  <strong>Test Machine:</strong> Windows 10, Intel Core i5-8250U, 8 GB RAM, Logitech C270 webcam.
                </p>
                <p>
                  <strong>Latency:</strong> ~200 ms/frame (5 FPS) before optimization, reduced to ~50 ms/frame (20 FPS) after frame resizing (160×120), MediaPipe confidence tuning, and multithreading. <em>Note: A dedicated GPU would improve throughput further.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Implementation Details */}
        <section className="py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
              03 / IMPLEMENTATION DETAILS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium tracking-tight">
              Engineering Concurrency &amp; Geometric Analysis
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
            <div className="md:col-span-6 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">
                    Concurrency Design
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">sync_alt</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-medium">
                  Preventing GUI Thread Starvation
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Standard OpenCV <code className="font-label-code text-xs">cv2.VideoCapture</code> calls are inherently blocking I/O operations. When chained directly to heavy forward inference passes in the same loop, display render latency degrades to sub-5 FPS.
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We decoupled sensor reading onto an isolated daemon producer thread. Frames are ingested into a non-blocking queue with strict drop semantics (<code className="font-label-code text-xs">maxsize=4</code>). Stale frames are discarded rather than queued, ensuring alert logic operates on current visual state.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-meta-tag text-meta-tag uppercase text-secondary font-semibold">
                    Geometric Modeling
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">accessibility_new</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-medium">
                  Upper-Body Kinematic Vector Heuristics
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Extracted MediaPipe joints (shoulders, elbows, wrists) are translated into angle ratios relative to the spine normal. Sudden aggressive displacements across consecutive 5-frame windows trigger anomalous posture scoring.
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  This allows rapid heuristic classification of raised fists or defensive gestures with minimal CPU computational overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Evaluation Metrics & Constraints */}
        <section className="py-space-xl">
          <div className="flex flex-col gap-space-xs max-w-3xl mb-space-lg">
            <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
              04 / EVALUATION &amp; LIMITATIONS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium tracking-tight">
              Evaluation Metrics on Simulated Scenarios &amp; Practical Constraints
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Hypothetical evaluation on simulated scenarios conducted in controlled laboratory test benches.
            </p>
          </div>

          <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md mb-space-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1">
                <span className="font-meta-tag uppercase text-on-surface-variant font-medium">Face Recognition</span>
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">95% TPR · 5% FPR</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Evaluated on 100 individuals (50 known / 50 unknown). 47/50 true positive matches and 2/50 false positive alarms.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1">
                <span className="font-meta-tag uppercase text-on-surface-variant font-medium">Weapon Detection (YOLOv8n)</span>
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">85% Prec · 90% Recall</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Tested across 20 weapon scenarios: 17/20 precision and 18/20 recall detecting person-linked weapon candidates.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1">
                <span className="font-meta-tag uppercase text-on-surface-variant font-medium">Suspicious Posture &amp; Alerts</span>
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">80% TPR · 10% FPR</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  50 gesture/posture cases evaluated: 40/50 true detections and 5 false positives. Alert cadence throttled to every 60 seconds.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-sm shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                Prototype Constraints &amp; Failure Modes
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Key limitations include sensitivity to ambient lighting and consumer camera sensor quality; heuristic gesture rules can produce false positives during rapid ordinary movements; tested on a single camera setup; large-campus distributed scalability remains untested.
              </p>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-sm shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">Author's Note</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Future work should incorporate automated face blurring and consent logging mechanisms to safeguard individual privacy before any broader evaluation or deployment in educational environments.
              </p>
            </div>
          </div>
        </section>

        {/* Section 05: Academic Publication */}
        <section className="w-full bg-surface-container p-space-lg md:p-space-xl rounded-xl mb-space-xl shadow-sm">
          <div className="flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-space-xs text-primary font-meta-tag text-meta-tag uppercase font-semibold">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span>Peer-reviewed conference proceedings · CRC Press / Taylor &amp; Francis</span>
            </div>
            <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface font-medium tracking-tight">
              Real Time Threat Detection System for Campus Security Using Integrated Computer Vision Techniques
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-3xl">
              Book chapter (Chapter 10, pp. 69–76) in <em>Integrated Technologies in Electrical, Electronics and Biotechnology Engineering</em> (Volume 1), Proceedings of ICITEEB 2025. Edited by Gaurav Aggarwal, Rishabh Dev Shukla, Innocent Ewean Davidson and Ramesh Bansal. CRC Press (Taylor &amp; Francis), first edition 2026.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                to="/research/real-time-threat-detection"
                className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-primary text-on-primary hover:bg-tertiary transition-colors font-body-sm text-body-sm font-medium shadow-sm"
              >
                <span>View Full Research Monograph</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
              <a
                href={PUBLICATION.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors font-body-sm text-body-sm font-medium shadow-sm"
              >
                <span>Taylor &amp; Francis DOI</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>
        </section>

        {/* Case Study Traversal Navigation */}
        <nav aria-label="Case Study Navigation" className="pt-space-lg border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <Link
            to="/projects/careeriens"
            className="w-full sm:w-auto p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center gap-space-sm group shadow-sm"
          >
            <span className="material-symbols-outlined text-[24px] text-on-surface-variant group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <div className="flex flex-col text-left">
              <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant">Previous Case Study</span>
              <span className="font-headline-sm text-headline-sm font-medium text-on-surface">CareerIens Platform</span>
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
            to="/projects/gmr-web-platform"
            className="w-full sm:w-auto p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-end gap-space-sm group shadow-sm text-right"
          >
            <div className="flex flex-col">
              <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant">Next Case Study</span>
              <span className="font-headline-sm text-headline-sm font-medium text-on-surface">GMR Web Platform</span>
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
