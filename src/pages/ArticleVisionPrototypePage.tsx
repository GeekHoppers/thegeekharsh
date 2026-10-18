import { useState, useEffect } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'

export function ArticleVisionPrototypePage() {
  const [readingProgress, setReadingProgress] = useState(0)
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      if (docHeight > 0) {
        setReadingProgress(Math.min(100, Math.max(0, (scrolled / docHeight) * 100)))
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCopyPermalink = () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://thegeekharsh.in/writing/what-a-computer-vision-prototype-can-and-cannot-prove'
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2200)
    })
  }

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    })
  }

  const visionSnippet = `# Downsampled Multithreaded Frame Processing Pipeline
def process_frame(frame, face_threshold=0.6):
    # 1. Downsample raw 640x480 frame to 160x120 for rapid inference
    small_frame = cv2.resize(frame, (160, 120))
    rgb_small = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)

    # 2. Extract 128-d encodings and compute Euclidean distance
    face_encodings = face_recognition.face_encodings(rgb_small)
    matches = []
    for encoding in face_encodings:
        distances = np.linalg.norm(known_encodings - encoding, axis=1)
        matches.append(np.min(distances) <= face_threshold)

    # 3. Linked person-weapon localization via YOLOv8n
    results = yolo_model(rgb_small, verbose=False)
    has_weapon = any(box.cls == WEAPON_CLASS_ID for box in results[0].boxes)

    return matches, has_weapon`

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="What a Computer-Vision Prototype Can and Cannot Prove — Harsh Sinha"
        description="Reflections from the Garun Drishti campus security prototype: evaluating the empirical boundaries of edge webcam detection, lighting variance, and heuristic rules under simulated evaluation."
        canonical="/writing/what-a-computer-vision-prototype-can-and-cannot-prove"
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-surface-container z-40">
        <div
          className="h-full bg-primary transition-all duration-75"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="w-full bg-surface-bright py-space-xl px-margin-mobile md:px-margin border-b border-outline-variant/30">
        <div className="max-w-[1160px] mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant mb-space-lg flex-wrap"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline">/</span>
            <Link to="/writing" className="hover:text-primary transition-colors">
              Writing
            </Link>
            <span className="text-outline">/</span>
            <span className="text-on-surface font-semibold truncate max-w-xs md:max-w-md">
              What Computer Vision Prototypes Can Prove
            </span>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Draft / Field Note // Applied AI &amp; Vision</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <button
                type="button"
                onClick={handleCopyPermalink}
                className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant text-body-sm font-body-sm transition-colors shadow-sm cursor-pointer"
                title="Copy canonical permalink to clipboard"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">
                  {copiedLink ? 'check' : 'link'}
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider">
                  {copiedLink ? 'Link Copied!' : 'Copy Permalink'}
                </span>
              </button>
              <Link
                to="/writing"
                className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant text-body-sm font-body-sm transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider">
                  All Monographs
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-baseline">
            <div className="lg:col-span-9">
              <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight mb-space-md font-semibold leading-tight">
                What a Computer-Vision Prototype Can and Cannot Prove
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-lg">
                Reflections from the Garun Drishti campus security prototype: evaluating the
                empirical boundaries of edge webcam detection, lighting variance, and heuristic
                rules under simulated evaluation.
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-space-xs bg-surface-container p-space-md rounded-xl shadow-sm border border-outline-variant/30">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                Article Status
              </span>
              <p className="font-body-sm text-body-sm text-on-surface leading-relaxed mt-space-xs">
                <span className="font-semibold text-primary">Field Note:</span> Empirical
                retrospective grounded in the published ICITEEB 2025 conference proceedings.
              </p>
            </div>
          </div>

          <div className="mt-space-lg pt-space-md bg-surface-container-low p-space-md rounded-xl grid grid-cols-2 gap-space-md sm:grid-cols-3 border border-outline-variant/20">
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-on-surface-variant tracking-wider mb-0.5">
                Author &amp; Dispatch
              </span>
              <div className="flex items-center gap-space-xs">
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  Harsh Sinha
                </span>
                <span className="text-primary font-label-code text-label-code text-[11px] bg-secondary-container px-1 rounded">
                  Staff
                </span>
              </div>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-on-surface-variant tracking-wider mb-0.5">
                Reading Cadence
              </span>
              <span className="font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  schedule
                </span>
                12 min read (Field Note)
              </span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-on-surface-variant tracking-wider mb-0.5">
                Research Dossier
              </span>
              <Link
                to="/research/real-time-threat-detection"
                className="font-body-sm text-body-sm text-primary hover:underline font-medium flex items-center gap-1"
              >
                <span>Paper Dossier (CRC Press)</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-[1160px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-sm pb-space-xs border-b border-outline-variant/20">
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface font-semibold flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    list_alt
                  </span>
                  Outline
                </span>
                <span className="font-label-code text-label-code text-primary bg-surface-container px-1.5 py-0.5 rounded">
                  6 SECTIONS
                </span>
              </div>
              <nav className="space-y-1 font-body-sm text-body-sm">
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-01"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    01
                  </span>
                  <span className="leading-snug">The Prototype Reality Check</span>
                </a>
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-02"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    02
                  </span>
                  <span className="leading-snug">Optical Variance &amp; Webcam Limits</span>
                </a>
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-03"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    03
                  </span>
                  <span className="leading-snug">Fragility of Pose Heuristics</span>
                </a>
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-04"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    04
                  </span>
                  <span className="leading-snug">Downsampling &amp; Latency Bounds</span>
                </a>
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-05"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    05
                  </span>
                  <span className="leading-snug">Simulated Testing vs. Production</span>
                </a>
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-06"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    06
                  </span>
                  <span className="leading-snug">Key Takeaways for Researchers</span>
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Body */}
          <main className="lg:col-span-8 space-y-space-xl">
            <section className="space-y-space-md scroll-mt-24" id="sec-01">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  01
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Empirical Rigor
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                The Prototype Reality Check
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                In academic computer vision research, demo presentations often show pristine
                bounding boxes drawn around smiling faces and brightly lit test objects. But when a
                prototype is subjected to real-world edge execution on entry-level hardware, the
                chasm between a demo and an operational production system becomes immediately
                apparent.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our final-year B.Tech research project at IMS Engineering College (Garun Drishti)
                explored building a multi-modal threat detection system on commodity hardware. While
                we successfully achieved a peer-reviewed publication in CRC Press, the primary
                scientific value lies in documenting the strict boundary conditions where consumer
                edge computer vision succeeds—and where it breaks down.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-02">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  02
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Hardware Constraints
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Optical Variance &amp; Webcam Limits
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Standard consumer webcams (like the Logitech C270 used in our testbed) lack optical
                image stabilization, wide dynamic range (WDR), and high-sensitivity sensors. In
                backlit environments or during rapid subject movement, motion blur degrades facial
                feature alignment, causing Euclidean distance matching to shift from true positive
                to indeterminate.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-03">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  03
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Heuristic Boundaries
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Fragility of Geometric Pose Heuristics
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Deriving suspicious gestures and distress poses from 33 MediaPipe skeletal
                landmarks relies on geometric heuristics: joint angles, relative wrist positions, and
                torso aspect ratios. While computationally lightweight, these geometric rules cannot
                discriminate context. An individual raising hands to stretch or shielding eyes from
                sunlight can register the same vector signature as a flagged threat.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-04">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  04
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Optimization Tradeoffs
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Downsampling &amp; Latency Bounds
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                To achieve real-time throughput without an expensive dedicated GPU, we downsampled
                the incoming 640×480 frame stream to 160×120 for inference threads. This reduced
                per-frame latency from ~200 ms (5 FPS) down to ~50 ms (20 FPS). However, this 4×
                resolution reduction inherently limits the maximum subject distance from the camera:
              </p>

              <div className="my-space-md bg-inverse-surface rounded-xl overflow-hidden shadow-md border border-outline-variant/30">
                <div className="bg-[#1a231b] px-space-md py-space-xs flex items-center justify-between text-on-surface-variant font-label-code text-label-code">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-error" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    <span className="ml-space-xs text-inverse-on-surface">
                      vision_pipeline.py
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(visionSnippet)}
                    className="hover:text-inverse-on-surface transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedCode ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>
                <pre className="p-space-md font-label-code text-label-code overflow-x-auto text-[#cbeca3] leading-relaxed">
                  <code>{visionSnippet}</code>
                </pre>
              </div>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-05">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  05
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Honest Boundaries
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Simulated Testing vs. Production
              </h2>
              <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/30">
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                  Our empirical metrics—<strong>95% True Positive Rate</strong> on face recognition
                  (47/50 individuals), <strong>85% precision / 90% recall</strong> on weapon
                  localization, and <strong>80% TPR</strong> on posture cues—were evaluated in
                  controlled, simulated security scenarios. They demonstrate architectural
                  feasibility on commodity hardware, but should never be misconstrued as commercial
                  readiness for unsupervised public surveillance.
                </p>
              </div>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-06">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  06
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Takeaways
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Key Takeaways for Vision Researchers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">01</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Document Hardware Bounds
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Always report exact CPU models, memory allocations, and capture camera specs
                    alongside model metrics.
                  </p>
                </div>
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">02</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    State Testbed Assumptions
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Clearly distinguish simulated cohorts from uncontrolled production operating
                    conditions.
                  </p>
                </div>
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">03</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Ethical Transparency
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Acknowledge false-positive rates and privacy impacts (such as bystander face
                    blurring) openly in publications.
                  </p>
                </div>
              </div>
            </section>

            {/* Author Profile Footnote Card */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-space-lg border border-outline-variant/30">
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm border border-outline-variant/40 bg-surface-container">
                <picture>
                  <source type="image/avif" srcSet="/images/harsh-portrait-480.avif" />
                  <source type="image/webp" srcSet="/images/harsh-portrait-480.webp" />
                  <img
                    src="/images/harsh-portrait.jpg"
                    alt="Harsh Sinha"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="space-y-space-xs text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Harsh Sinha
                  </h3>
                  <span className="font-meta-tag text-meta-tag uppercase bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">
                    Software Engineer
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Specializing in enterprise web architecture, AEM Edge Delivery Services,
                  full-stack micro-architectures, and high-performance frontend systems.
                </p>
                <div className="pt-space-xs flex flex-wrap items-center justify-center sm:justify-start gap-space-md font-body-sm text-body-sm">
                  <Link
                    to="/about"
                    className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>View Full Bio &amp; Philosophy</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                  <span className="text-outline">•</span>
                  <Link
                    to="/experience"
                    className="text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    Track Record &amp; Roles
                  </Link>
                </div>
              </div>
            </div>

            {/* Prev / Next Navigation */}
            <nav
              aria-label="Sequential Articles"
              className="pt-space-lg border-t-0 grid grid-cols-1 md:grid-cols-2 gap-space-md"
            >
              <Link
                to="/writing/lessons-from-building-a-conversational-data-portal"
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col justify-between group border border-outline-variant/30"
              >
                <div className="flex items-center gap-space-xs text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider mb-space-xs">
                  <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">
                    arrow_back
                  </span>
                  <span>Previous Article</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                  Building a Conversational Data Portal with MCP
                </div>
                <span className="mt-space-sm font-label-code text-label-code text-on-surface-variant">
                  Dispatch // 04 • [Draft / Field Note]
                </span>
              </Link>
              <Link
                to="/writing"
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col justify-between group text-right border border-outline-variant/30"
              >
                <div className="flex items-center justify-end gap-space-xs text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider mb-space-xs">
                  <span>Back to Hub</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                  All Technical Articles
                </div>
                <span className="mt-space-sm font-label-code text-label-code text-on-surface-variant">
                  5 Dispatches Archived
                </span>
              </Link>
            </nav>
          </main>
        </div>
      </div>
    </div>
  )
}
