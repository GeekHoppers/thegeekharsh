import { useState } from 'react'
import { SEO } from '../components/SEO'
import { SITE_METADATA } from '../content/siteData'
import { gmailComposeUrl } from '../utils/gmail'

const TOPICS = [
  { id: 'aem', domain: 'DOMAIN 01', label: 'Enterprise AEM & EDS', value: 'Enterprise AEM & EDS Consultation', recipient: SITE_METADATA.email },
  { id: 'fullstack', domain: 'DOMAIN 02', label: 'Full-Stack Data Platforms', value: 'Full-Stack Web Platforms & Architecture', recipient: SITE_METADATA.email },
  { id: 'ai', domain: 'DOMAIN 03', label: 'Applied AI & Vision', value: 'Applied AI & Computer Vision Engineering', recipient: SITE_METADATA.email },
  { id: 'media', domain: 'DOMAIN 04', label: 'Media, Press & Speaking', value: 'Media, Speaking & Press Inquiry', recipient: SITE_METADATA.mediaEmail },
  { id: 'general', domain: 'DOMAIN 05', label: 'General / Dialogue', value: 'General Engineering Inquiry / Dialogue', recipient: SITE_METADATA.email },
]

export function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]?.value ?? 'Enterprise AEM & EDS Consultation')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [message, setMessage] = useState('')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedMediaEmail, setCopiedMediaEmail] = useState(false)
  const [copiedDraft, setCopiedDraft] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_METADATA.email).then(() => {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2200)
    })
  }

  const handleCopyMediaEmail = () => {
    navigator.clipboard.writeText(SITE_METADATA.mediaEmail).then(() => {
      setCopiedMediaEmail(true)
      setTimeout(() => setCopiedMediaEmail(false), 2200)
    })
  }

  const generateDraftText = () => {
    return `Topic: ${selectedTopic}
Name: ${name || '[Not specified]'}
Email: ${email || '[Not specified]'}
Organization: ${organization || '[Not specified]'}

Message:
${message || '[No message entered]'}`
  }

  const handleCopyDraft = () => {
    const draft = generateDraftText()
    navigator.clipboard.writeText(draft).then(() => {
      setCopiedDraft(true)
      setTimeout(() => setCopiedDraft(false), 2200)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const currentTopicObj = TOPICS.find((t) => t.value === selectedTopic)
    const recipient = currentTopicObj?.recipient || SITE_METADATA.email
    const subject = encodeURIComponent(`[${selectedTopic}] - ${name || 'Inquiry'}`)
    const body = encodeURIComponent(
      `Hello Harsh,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}\nOrganization: ${organization || 'N/A'}`
    )
    window.open(gmailComposeUrl(recipient, decodeURIComponent(subject), decodeURIComponent(body)), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Contact & Direct Dispatch — Harsh Sinha"
        description="Initiate a direct engineering conversation with Harsh Sinha regarding enterprise AEM, Edge Delivery Services, full-stack systems, or applied AI research."
        canonical="/contact"
      />

      {/* Hero & Context Header */}
      <section className="w-full pt-8 pb-12 border-b border-outline-variant/30 bg-surface-container-low/40">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin">
          <div className="inline-flex items-center gap-space-xs font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant bg-surface-container px-3 py-1 rounded-full shadow-sm mb-space-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>COMMUNICATION CONSOLE // DIRECT DISPATCH</span>
          </div>
          <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight mb-space-xs font-semibold">
            Initiate a direct engineering conversation.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            I welcome technical discussions on enterprise content platforms, decoupled frontend
            architectures, Model Context Protocol integration, and computer vision prototypes.
          </p>
        </div>
      </section>

      {/* Main Console Layout */}
      <div className="w-full max-w-[1160px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Direct Coordinates & Credentials */}
          <div className="lg:col-span-5 space-y-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/30 space-y-space-sm">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant font-semibold block">
                Direct Coordinates
              </span>

              <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-meta-tag text-[11px] text-on-surface-variant uppercase block">
                    Primary Inbox
                  </span>
                  <a
                    href={gmailComposeUrl(SITE_METADATA.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-headline-sm text-headline-sm text-primary font-medium hover:underline"
                  >
                    {SITE_METADATA.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer"
                  title="Copy primary email address"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {copiedEmail ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>

              <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-meta-tag text-[11px] text-on-surface-variant uppercase block">
                    Media, Press &amp; Speaking
                  </span>
                  <a
                    href={gmailComposeUrl(SITE_METADATA.mediaEmail)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-headline-sm text-headline-sm text-secondary font-medium hover:underline"
                  >
                    {SITE_METADATA.mediaEmail}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyMediaEmail}
                  className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer"
                  title="Copy media email address"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {copiedMediaEmail ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>

              <div className="space-y-space-xs font-label-code text-label-code text-on-surface-variant pt-space-xs">
                <div className="flex justify-between py-1 border-b border-outline-variant/20">
                  <span>Station / Location:</span>
                  <span className="text-on-surface font-medium">{SITE_METADATA.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/20">
                  <span>Operating Timezone:</span>
                  <span className="text-on-surface font-medium">{SITE_METADATA.timezone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/20">
                  <span>Current Engagement:</span>
                  <span className="text-on-surface font-medium">Bluethink Inc.</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Personal Brand:</span>
                  <a
                    href={SITE_METADATA.geekHoppersUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Geek Hoppers ↗
                  </a>
                </div>
              </div>

              <div className="pt-space-xs">
                <a
                  href={SITE_METADATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-space-xs w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm transition-colors border border-outline-variant/30"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant/30 space-y-space-xs">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold block">
                Security &amp; Privacy Note
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                This form executes entirely client-side on your device. Clicking &quot;Send Message&quot; opens
                a pre-formatted dispatch inside your default email client. No form submission is
                stored on third-party tracking databases.
              </p>
            </div>
          </div>

          {/* Right Column: Dispatch Form Console */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-xl shadow-sm border border-outline-variant/30">
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-sm">
                Compose Dispatch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-space-md">
                {/* Topic Selector */}
                <div>
                  <span className="font-meta-tag text-meta-tag text-on-surface uppercase tracking-wider block mb-space-xs">
                    Select Consultation Domain
                  </span>
                  <div className="grid grid-cols-2 gap-space-xs">
                    {TOPICS.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => setSelectedTopic(topic.value)}
                        className={`text-left p-space-sm rounded-lg font-body-sm text-body-sm transition-all flex flex-col gap-0.5 cursor-pointer border ${
                          selectedTopic === topic.value
                            ? 'bg-surface-container text-on-surface border-primary/40 shadow-sm'
                            : 'bg-surface-container-low text-on-surface-variant border-transparent hover:bg-surface-container'
                        }`}
                      >
                        <span className="font-label-code text-[11px] text-primary font-semibold flex items-center gap-1">
                          <span
                            className={`w-1.5 h-1.5 rounded-full inline-block ${
                              selectedTopic === topic.value ? 'bg-primary' : 'bg-outline'
                            }`}
                          />
                          {topic.domain}
                        </span>
                        <span className="font-medium text-xs text-on-surface">{topic.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label
                      htmlFor="senderName"
                      className="font-meta-tag text-meta-tag text-on-surface uppercase tracking-wider block mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="senderName"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-space-sm py-2 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all border border-outline-variant/30"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="senderEmail"
                      className="font-meta-tag text-meta-tag text-on-surface uppercase tracking-wider block mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      id="senderEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-space-sm py-2 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all border border-outline-variant/30"
                      required
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label
                    htmlFor="senderOrg"
                    className="font-meta-tag text-meta-tag text-on-surface uppercase tracking-wider block mb-1"
                  >
                    Organization / Project (Optional)
                  </label>
                  <input
                    id="senderOrg"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Acme Enterprise / Stealth AI Project"
                    className="w-full px-space-sm py-2 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all border border-outline-variant/30"
                  />
                </div>

                {/* Message Scope */}
                <div>
                  <label
                    htmlFor="senderMessage"
                    className="font-meta-tag text-meta-tag text-on-surface uppercase tracking-wider flex items-center justify-between mb-1"
                  >
                    <span>Message &amp; Architectural Context</span>
                    <span className="text-outline text-[10px]">SPECIFY TIMELINE &amp; GOALS</span>
                  </label>
                  <textarea
                    id="senderMessage"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Detail system requirements, technology constraints, project timeline, or specific questions..."
                    className="w-full p-space-sm bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all resize-y border border-outline-variant/30"
                    required
                  />
                </div>

                {/* Actions Row */}
                <div className="pt-space-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
                    <span>Send Message</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm font-medium hover:bg-surface-container-high transition-colors cursor-pointer border border-outline-variant/30"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {copiedDraft ? 'check' : 'assignment'}
                    </span>
                    <span>{copiedDraft ? 'Draft Copied!' : 'Copy Formatted Text'}</span>
                  </button>
                </div>

                <div className="pt-space-xs flex items-center justify-between text-outline">
                  <span className="font-meta-tag text-meta-tag uppercase flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Composed locally in your default email client
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Interaction Protocols (FAQ) */}
        <section className="mt-space-xl pt-space-xl border-t border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            <div className="lg:col-span-4 flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code text-outline">04 //</span>
                <span className="font-meta-tag text-meta-tag text-outline uppercase tracking-wider">
                  INTERACTION PROTOCOLS
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Frequently Clarified Logistics
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                Clear procedural expectations for communications, freelancing boundaries, and
                technical references.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-code text-label-code text-primary font-semibold">
                        Q.01
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                        What is the typical turnaround time for correspondence?
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      I review my primary dispatch queue daily and typically reply within 24 to 48
                      business hours. Inquiries containing architectural specifications, clear scope
                      benchmarks, or institutional context receive prioritized attention.
                    </p>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                  </span>
                </div>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-code text-label-code text-primary font-semibold">
                        Q.02
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                        What are your boundaries for external freelancing and advisory?
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      I accept selective architectural advisory, performance audit, and
                      implementation consulting engagements through Geek Hoppers, strictly adhering
                      to non-compete agreements and confidentiality commitments with my employer.
                    </p>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                  </span>
                </div>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-code text-label-code text-primary font-semibold">
                        Q.03
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                        Where can I review code, system designs, or documentation?
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Architectural overviews and verified case studies are documented under{' '}
                      <span className="text-primary font-medium">/projects</span>, published
                      scientific papers under{' '}
                      <span className="text-primary font-medium">/research</span>, and technical
                      dispatches under <span className="text-primary font-medium">/writing</span>.
                    </p>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
                    <span className="material-symbols-outlined text-[16px]">code</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
