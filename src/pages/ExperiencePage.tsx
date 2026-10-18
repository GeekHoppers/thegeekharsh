import { Link } from '../router'
import { SEO } from '../components/SEO'

export function ExperiencePage() {
  const scrollToRole = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <SEO
        title="Experience & Career Journey — Harsh Sinha · The Geek Harsh"
        description="Professional engineering experience, roles at Bluethink Inc. and Iktara Data Science, enterprise systems delivery, and technical capabilities matrix."
        path="/experience"
      />

      <div className="w-full max-w-[1160px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
        {/* Top Header & Overview */}
        <section className="pt-space-xl pb-space-lg">
          <div className="flex flex-col gap-space-sm max-w-3xl">
            <div className="inline-flex items-center gap-space-xs font-meta-tag text-meta-tag uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-[16px]">history_edu</span>
              <span>PROFESSIONAL RECORD // TIMELINE</span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
              Engineering Experience.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Software engineering engagements across enterprise content management (AEM 6.5, Edge Delivery Services), full-stack data portals, and applied computer vision research.
            </p>
          </div>

          {/* Role Jump Pill Bar */}
          <div className="mt-space-lg flex flex-wrap items-center gap-space-xs">
            <button
              type="button"
              onClick={() => scrollToRole('role-bluethink')}
              className="font-meta-tag text-meta-tag uppercase tracking-wider px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all cursor-pointer"
            >
              Bluethink Inc. (2025–Present)
            </button>
            <button
              type="button"
              onClick={() => scrollToRole('role-iktara')}
              className="font-meta-tag text-meta-tag uppercase tracking-wider px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all cursor-pointer"
            >
              Iktara Data Science (2025)
            </button>
            <button
              type="button"
              onClick={() => scrollToRole('role-softpro')}
              className="font-meta-tag text-meta-tag uppercase tracking-wider px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all cursor-pointer"
            >
              Softpro Tech (2024)
            </button>
          </div>
        </section>

        {/* Roles Timeline */}
        <section className="py-space-xl flex flex-col gap-space-xl">
          {/* Bluethink Inc */}
          <article
            id="role-bluethink"
            className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pb-space-md border-b border-surface-container">
              <div>
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-meta-tag text-meta-tag tracking-wider font-semibold uppercase">
                    Current Role
                  </span>
                  <span className="font-meta-tag text-meta-tag text-outline">Full-Time</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Software Engineer</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-headline-sm text-headline-sm text-primary font-medium">Bluethink Inc.</span>
                  <span className="text-outline text-sm">•</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[1rem] text-outline">location_on</span>
                    Noida, Uttar Pradesh, India
                  </span>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="font-label-code text-label-code text-on-surface font-medium block">2025 – Present</span>
              </div>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant py-space-md leading-relaxed">
              Working on enterprise web experiences and AEM-based implementations, including website development, component engineering, DAM workflows, and integrations.
            </p>

            <div className="mb-space-lg">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline block mb-space-sm">
                Key Responsibilities &amp; Engineering Contributions
              </span>
              <ul className="flex flex-col gap-space-xs">
                <li className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[1.125rem] mt-0.5">check_circle</span>
                  <span>
                    Developing custom AEM components using <strong>Sling Models</strong>, <strong>HTL</strong>, and robust <strong>OSGi service layers</strong> to support content authoring workflows.
                  </span>
                </li>
                <li className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[1.125rem] mt-0.5">check_circle</span>
                  <span>
                    Building reusable content blocks and interactive user experiences for <strong>AEM Edge Delivery Services</strong> platforms.
                  </span>
                </li>
                <li className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[1.125rem] mt-0.5">check_circle</span>
                  <span>
                    Implementing Digital Asset Management (DAM) metadata schemas and automated workflows triggered by asset-lifecycle events.
                  </span>
                </li>
                <li className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[1.125rem] mt-0.5">check_circle</span>
                  <span>
                    Configuring Smart Tags infrastructure and Adobe IMS integrations via Adobe Developer Console.
                  </span>
                </li>
              </ul>
            </div>

            {/* Direct Projects */}
            <div className="pt-space-md mb-space-md bg-surface-container-low/60 p-space-md rounded-xl">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline block mb-space-xs">
                Directly Associated Projects
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <Link
                  to="/projects/gmr-web-platform"
                  className="p-space-sm bg-surface-container-lowest rounded-lg group hover:bg-surface-container transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                      GMR Web Platform
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-0.5 transition-all text-sm">
                      arrow_forward
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-xs mt-1">
                    AEM Edge Delivery Services blocks with Universal Editor
                  </span>
                </Link>

                <Link
                  to="/projects/oliver-wyman"
                  className="p-space-sm bg-surface-container-lowest rounded-lg group hover:bg-surface-container transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                      Oliver Wyman Rebuild
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-0.5 transition-all text-sm">
                      arrow_forward
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-xs mt-1">
                    AEM Managed Services (6.5): custom components and DAM workflows
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-space-xs pt-space-xs">
              {['AEM 6.5', 'Edge Delivery Services', 'Sling Models', 'HTL', 'OSGi', 'Java', 'JavaScript', 'JCR'].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-surface-container rounded-full font-label-code text-label-code text-on-surface-variant">
                  {t}
                </span>
              ))}
            </div>
          </article>

          {/* Iktara Data Science */}
          <article
            id="role-iktara"
            className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pb-space-md border-b border-surface-container">
              <div>
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-meta-tag text-meta-tag text-outline">Internship</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Data Science Engineer Intern</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-headline-sm text-headline-sm text-primary font-medium">Iktara Data Science</span>
                  <span className="text-outline text-sm">•</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[1rem] text-outline">location_on</span>
                    Remote / Bengaluru, India
                  </span>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="font-label-code text-label-code text-on-surface font-medium block">
                  Jun 2025 – Oct 2025
                </span>
              </div>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant py-space-md leading-relaxed">
              Full-stack development, Django backend APIs, and conversational AI interface implementation for internal analytics platforms.
            </p>

            <div className="mb-space-lg">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline block mb-space-sm">
                Key Responsibilities &amp; Engineering Contributions
              </span>
              <ul className="flex flex-col gap-space-xs">
                <li className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[1.125rem] mt-0.5">check_circle</span>
                  <span>
                    Redesigned and built the <strong>DataJam Portal</strong> frontend UI for data exploration and reporting.
                  </span>
                </li>
                <li className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[1.125rem] mt-0.5">check_circle</span>
                  <span>
                    Developed <strong>Django REST API endpoints</strong> to serve complex datasets to frontend applications.
                  </span>
                </li>
                <li className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[1.125rem] mt-0.5">check_circle</span>
                  <span>
                    Integrated <strong>Model Context Protocol (MCP)</strong> to enable conversational access to structured data.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-space-md mb-space-md bg-surface-container-low/60 p-space-md rounded-xl">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline block mb-space-xs">
                Directly Associated Project
              </span>
              <Link
                to="/projects/datajam-portal"
                className="p-space-sm bg-surface-container-lowest rounded-lg group hover:bg-surface-container transition-all flex flex-col justify-between max-w-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                    DataJam Portal
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-0.5 transition-all text-sm">
                    arrow_forward
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant text-xs mt-1">
                  Portal UI, Django REST APIs &amp; Model Context Protocol
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-space-xs pt-space-xs">
              {['Python', 'Django', 'Django REST Framework', 'Model Context Protocol (MCP)', 'PostgreSQL', 'JavaScript'].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-surface-container rounded-full font-label-code text-label-code text-on-surface-variant">
                  {t}
                </span>
              ))}
            </div>
          </article>

          {/* Softpro Tech */}
          <article
            id="role-softpro"
            className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pb-space-md border-b border-surface-container">
              <div>
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-meta-tag text-meta-tag text-outline">Vocational Training</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Java Trainee</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-headline-sm text-headline-sm text-primary font-medium">Softpro Tech</span>
                  <span className="text-outline text-sm">•</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[1rem] text-outline">location_on</span>
                    Lucknow, India
                  </span>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="font-label-code text-label-code text-on-surface font-medium block">
                  Jun 2024 – Aug 2024
                </span>
              </div>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant py-space-md leading-relaxed">
              Intensive training program focused on core Java, object-oriented design patterns, multithreading, and enterprise backend fundamentals.
            </p>

            <div className="flex flex-wrap gap-space-xs pt-space-xs">
              {['Java', 'OOP', 'JDBC', 'Data Structures', 'Concurrency'].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-surface-container rounded-full font-label-code text-label-code text-on-surface-variant">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </section>

        {/* Skills by Role Matrix */}
        <section className="py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[1.25rem]">view_column</span>
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline">
                COMPILATION &amp; CAPABILITIES
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Skills by Role Matrix</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              A comparative breakdown of technologies, architectural patterns, and domains exercised across each engineering post.
            </p>
          </div>

          <div className="overflow-x-auto bg-surface-container-lowest rounded-xl shadow-sm">
            <table className="w-full text-left font-body-sm text-body-sm">
              <thead>
                <tr className="bg-surface-container-low text-on-surface border-b border-surface-container">
                  <th className="p-space-md font-meta-tag text-meta-tag uppercase tracking-wider text-outline">
                    Technical Domain
                  </th>
                  <th className="p-space-md font-headline-sm text-headline-sm font-semibold">
                    Bluethink Inc.{' '}
                    <span className="font-label-code text-xs font-normal text-outline block">2025–Pres</span>
                  </th>
                  <th className="p-space-md font-headline-sm text-headline-sm font-semibold">
                    Iktara Data Science{' '}
                    <span className="font-label-code text-xs font-normal text-outline block">2025</span>
                  </th>
                  <th className="p-space-md font-headline-sm text-headline-sm font-semibold">
                    Softpro Tech{' '}
                    <span className="font-label-code text-xs font-normal text-outline block">2024</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="p-space-md font-meta-tag text-meta-tag uppercase text-outline font-medium">
                    Core Languages
                  </td>
                  <td className="p-space-md text-on-surface">Java 11/17, JavaScript (ES6+), HTL</td>
                  <td className="p-space-md text-on-surface">Python 3.11+, Vanilla JavaScript</td>
                  <td className="p-space-md text-on-surface">Java SE, SQL</td>
                </tr>
                <tr className="bg-surface-container-low/20 hover:bg-surface-container-low/40 transition-colors">
                  <td className="p-space-md font-meta-tag text-meta-tag uppercase text-outline font-medium">
                    Enterprise &amp; CMS
                  </td>
                  <td className="p-space-md text-on-surface">AEM 6.5, Sling Models, OSGi, JCR, Edge Delivery Services</td>
                  <td className="p-space-md text-on-surface-variant">—</td>
                  <td className="p-space-md text-on-surface-variant">—</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="p-space-md font-meta-tag text-meta-tag uppercase text-outline font-medium">
                    Web Backends &amp; APIs
                  </td>
                  <td className="p-space-md text-on-surface">Sling Servlets, OSGi REST Services, Adobe IMS</td>
                  <td className="p-space-md text-on-surface">Django, Django REST Framework</td>
                  <td className="p-space-md text-on-surface">JDBC, Servlets</td>
                </tr>
                <tr className="bg-surface-container-low/20 hover:bg-surface-container-low/40 transition-colors">
                  <td className="p-space-md font-meta-tag text-meta-tag uppercase text-outline font-medium">
                    AI &amp; Data Integration
                  </td>
                  <td className="p-space-md text-on-surface">Adobe Smart Tags ingestion pipeline</td>
                  <td className="p-space-md text-on-surface">Model Context Protocol (MCP) agents</td>
                  <td className="p-space-md text-on-surface-variant">—</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="p-space-md font-meta-tag text-meta-tag uppercase text-outline font-medium">
                    Architectural Patterns
                  </td>
                  <td className="p-space-md text-on-surface">
                    Modular component design, scheduled cron jobs, event handlers
                  </td>
                  <td className="p-space-md text-on-surface">RESTful design, conversational protocol loops</td>
                  <td className="p-space-md text-on-surface">OOP, design patterns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Download Résumé Callout */}
        <section className="py-space-xl">
          <div className="relative overflow-hidden bg-surface-container-low p-space-lg md:p-space-xl rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
            <div className="max-w-xl">
              <div className="flex items-center gap-space-xs text-primary mb-space-xs">
                <span className="material-symbols-outlined text-[1.25rem]">description</span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider font-semibold">
                  Comprehensive Curriculum Vitae
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Looking for a printable résumé?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                View the complete single-page editorial résumé formatted for screen viewing and print layout.
              </p>
            </div>
            <Link
              to="/resume"
              className="inline-flex items-center justify-center px-space-lg py-2.5 bg-primary text-on-primary font-body-sm text-body-sm rounded-lg hover:bg-secondary transition-colors shadow-sm shrink-0"
            >
              <span>View full résumé</span>
              <span className="material-symbols-outlined ml-1 text-[1.1rem]">arrow_forward</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
