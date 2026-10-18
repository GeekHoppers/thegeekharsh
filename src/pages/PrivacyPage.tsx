import { Link } from '../router'
import { SEO } from '../components/SEO'
import { SITE_METADATA } from '../content/siteData'
import { gmailComposeUrl } from '../utils/gmail'

export function PrivacyPage() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Privacy Policy & Data Practices — The Geek Harsh"
        description="Plain-language privacy statement: static portfolio, zero tracking scripts, local theme preferences in localStorage, and direct mail correspondence."
        canonical="/privacy"
      />

      <div className="w-full pt-8 pb-12 border-b border-outline-variant/30 bg-surface-container-low/40">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin">
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
              <li className="text-on-surface font-semibold">Privacy Policy</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-space-xs font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant bg-surface-container px-3 py-1 rounded-full shadow-sm mb-space-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>DATA PRACTICES // TRANSPARENCY</span>
          </div>
          <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight mb-space-xs font-semibold">
            Privacy Policy &amp; <span className="text-primary italic font-normal">Data Practices.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            A clear, honest statement outlining how information is handled on this personal
            engineering portfolio website, without exaggerated legal jargon or synthetic compliance
            certifications.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1160px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
          <div className="md:col-span-8 md:col-start-3 flex flex-col gap-space-lg">
            <div className="bg-surface-container-lowest p-space-md md:p-space-xl rounded-xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">lock_open</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
                  Plain-Language Policy
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                This personal portfolio is designed with simplicity and respect for your privacy in
                mind. Here is straightforwardly how information is handled across the site:
              </p>

              <div className="flex flex-col gap-space-md pt-2">
                <div className="flex items-start gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">web</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Static Portfolio Content
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                      The site presents static engineering portfolio pages and case studies. No
                      personal accounts, tracking scripts, ad pixels, or behavioral monitoring tools
                      are used.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">palette</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Local Theme Preferences
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                      Theme preferences (such as light or dark contrast modes) are stored strictly
                      on your device inside your browser&apos;s local storage and are never transmitted to
                      external servers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Direct Email Correspondence
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                      Contact inquiries are composed and sent directly through your email client to{' '}
                      <a
                        className="text-primary hover:underline font-label-code"
                        href={gmailComposeUrl(SITE_METADATA.email)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {SITE_METADATA.email}
                      </a>
                      . Your correspondence is used solely for direct communication and is never
                      sold or shared.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Outbound Hyperlinks
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                      Outbound links direct you to external third-party services (such as LinkedIn
                      and publisher websites), which maintain their own independent terms and
                      privacy practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-space-md pt-space-sm border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs font-label-code text-label-code text-on-surface-variant">
                <span>Effective: 2026</span>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="text-primary hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Return to Top</span>
                  <span className="material-symbols-outlined text-[16px]">expand_less</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
