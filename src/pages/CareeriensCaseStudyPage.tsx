import { useState } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'

export function CareeriensCaseStudyPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('acc-1')

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <>
      <SEO
        title="CareerIens Case Study — Harsh Sinha · The Geek Harsh"
        description="Freelance frontend development built with Next.js, React, and Tailwind CSS. Responsive web interfaces, component architecture, and modern layout systems."
        path="/projects/careeriens"
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
            <li className="text-on-surface font-semibold">CareerIens</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="pb-space-xl">
          <div className="flex flex-col gap-space-sm mb-space-md">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                Case Study · Modern Web Development
              </span>
              <span className="text-outline">•</span>
              <span className="font-label-code text-label-code text-on-surface-variant">Freelance Project</span>
            </div>
            <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-semibold leading-tight">
              CareerIens: Modern Frontend Architecture &amp; Responsive Layout
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Freelance frontend development built with Next.js and React. Implemented responsive web interfaces, layout systems, zero-dependency disclosure logic, and accessible modern component architecture.
            </p>
          </div>

          {/* Metadata Ledger Strip */}
          <div className="bg-surface-container-low p-space-md rounded-xl grid grid-cols-2 md:grid-cols-4 gap-space-md shadow-sm mb-space-lg">
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Engagement</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">Freelance Project</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Framework</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">Next.js (App Router)</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Styling</span>
              <span className="font-body-sm text-body-sm font-semibold text-on-surface">Tailwind CSS · CSS Grid</span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-outline">Live Link</span>
              <a
                href="https://careeriens.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-sm text-body-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                careeriens.com
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Visual Showcase Banner */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-surface-container mb-space-xl p-space-lg md:p-space-xl">
            <div className="max-w-2xl flex flex-col gap-space-sm z-10">
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                Client Presentation · Production Release
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Structured layout for digital career advisement
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The project demanded high trust, high readability, and effortless navigational flow. The resulting production codebase leverages server components for clean page loading and refined modular UI components for straightforward maintainability.
              </p>
              <div className="flex items-center gap-space-xs pt-space-xs">
                <span className="px-space-sm py-1 rounded-full bg-surface-container-highest text-on-surface font-meta-tag text-meta-tag">
                  Responsive Layout
                </span>
                <span className="px-space-sm py-1 rounded-full bg-surface-container-highest text-on-surface font-meta-tag text-meta-tag">
                  Component Architecture
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* SECTION 01: Project Scope & Engineering Context */}
        <section className="py-space-xl flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
              01 / Overview
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
              Project Scope &amp; Engineering Context
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Translating exploratory wireframes into an uncluttered, client-ready production website with structured engineering standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
            <div className="md:col-span-7 flex flex-col gap-space-md">
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">explore</span>
                  <span className="font-headline-sm text-headline-sm font-medium text-on-surface">
                    Mission &amp; Client Objectives
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  CareerIens required a contemporary, responsive web surface to serve prospective students and career switchers searching for guidance, mentorship packages, and direct counseling. The client needed an uncluttered user interface that immediately conveyed clarity, simplicity, and accessibility across diverse screens without sacrificing visual hierarchy.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  As the frontend developer, I translated exploratory Figma wireframes into responsive, typed React components, establishing structured styling and semantic layout patterns.
                </p>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                <span className="font-headline-sm text-headline-sm font-medium text-on-surface">
                  Key Frontend Directives
                </span>
                <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                    <span>
                      <strong>Layout Stability:</strong> Preserved dimensional stability during asset loading and responsive text reflow.
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                    <span>
                      <strong>Viewport Parity:</strong> Strict behavioral and visual consistency across small mobile screens, tablets, and wide desktop displays.
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                    <span>
                      <strong>Client-Side Discipline:</strong> Avoiding cumbersome animation runtimes by using hardware-accelerated CSS and semantic HTML disclosures.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-space-md">
              <div className="p-space-lg rounded-xl bg-surface-container shadow-sm flex flex-col gap-space-sm">
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline font-semibold">
                  Core Engineering Focus
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Key technical implementation practices applied throughout the application codebase:
                </p>
                <div className="space-y-space-xs pt-space-xs">
                  <div className="p-space-xs rounded bg-surface-container-lowest/80 border border-surface-container-high flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">view_quilt</span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Next.js App Router structure
                    </span>
                  </div>
                  <div className="p-space-xs rounded bg-surface-container-lowest/80 border border-surface-container-high flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">code</span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Semantic HTML markup &amp; accessibility
                    </span>
                  </div>
                  <div className="p-space-xs rounded bg-surface-container-lowest/80 border border-surface-container-high flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">unfold_more</span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Zero-dependency accordion disclosures
                    </span>
                  </div>
                  <div className="p-space-xs rounded bg-surface-container-lowest/80 border border-surface-container-high flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">grid_view</span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Responsive multi-tier breakpoint grid
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">terminal</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm font-medium text-on-surface">Freelance Scope</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Implemented responsive UI components, routing structure, and client interactions directly from Figma mockups.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: Architecture & Component Hierarchy */}
        <section className="py-space-xl flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
              02 / Architecture
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
              Component Composition &amp; State Topology
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Leveraging Next.js App Router for structured server components alongside selectively hydrated client islands.
            </p>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary">account_tree</span>
                <span className="font-headline-sm text-headline-sm font-medium text-on-surface">
                  App Router Component Hierarchy
                </span>
              </div>
              <span className="font-label-code text-label-code px-space-sm py-1 rounded-md bg-surface-container-high text-on-surface-variant">
                src/app/(marketing)/page.tsx
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code font-semibold text-primary">01. Root Shell</span>
                  <span className="font-meta-tag text-meta-tag text-outline px-1.5 py-0.5 rounded bg-surface">SSR</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Defines global metadata, viewport bounds, font styling, and header/footer wrapper elements.
                </p>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code font-semibold text-secondary">02. Static Blocks</span>
                  <span className="font-meta-tag text-meta-tag text-outline px-1.5 py-0.5 rounded bg-surface">RSC</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Content sections prepared for structured presentation with clear semantic layout wrappers.
                </p>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code font-semibold text-tertiary">03. Interactive Islands</span>
                  <span className="font-meta-tag text-meta-tag text-primary-container px-1.5 py-0.5 rounded bg-surface font-semibold">
                    'use client'
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Targeted client components for accordion disclosures, interactive tabs, and contact inputs.
                </p>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code font-semibold text-on-surface">04. Design Tokens</span>
                  <span className="font-meta-tag text-meta-tag text-outline px-1.5 py-0.5 rounded bg-surface">Tailwind</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Reusable UI components sharing consistent focus styling, surface tokens, and spacing scales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Micro-Feature: Accordion Experience */}
        <section className="py-space-xl flex flex-col gap-space-lg">
          <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-md">
            <div className="flex flex-col gap-1">
              <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
                Interactive UI Sample
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                Accordion &amp; Disclosure Component
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Demonstrating the zero-dependency disclosure logic implemented for careeriens.com.
              </p>
            </div>
            <div className="space-y-space-xs">
              {[
                {
                  id: 'acc-1',
                  question: 'How does CareerIens handle responsive mobile mentoring booking?',
                  answer:
                    'The booking module routes through a streamlined modal overlay optimized for mobile viewports, reducing form friction and keeping the user journey focused.',
                },
                {
                  id: 'acc-2',
                  question: 'How was the site structure organized for clear navigation?',
                  answer:
                    'Information architecture is segmented into clear service categories, structured guidance steps, and easily accessible contact entry points across all pages.',
                },
                {
                  id: 'acc-3',
                  question: 'How was the Next.js routing architecture structured?',
                  answer:
                    'Utilized Next.js App Router route groups (marketing) to cleanly organize public landing pages with modular layout shells.',
                },
              ].map((item) => {
                const isOpen = openAccordion === item.id
                return (
                  <div key={item.id} className="rounded-lg bg-surface-container-lowest overflow-hidden transition-all duration-200">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full p-space-md text-left flex items-center justify-between gap-space-sm font-headline-sm text-headline-sm font-medium text-on-surface hover:bg-surface-container-high/50 transition-colors cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <span
                        className={`material-symbols-outlined text-outline transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-space-md pt-0 font-body-sm text-body-sm text-on-surface-variant border-t border-surface-container-high/40">
                        {item.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 05: Deliverables & Stack Breakdown */}
        <section className="py-space-xl flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
              05 / Stack Matrix
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
              Deliverables &amp; technology
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Granular overview of the key frameworks, libraries, and deliverables created for this project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline">Frontend Core</span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Next.js · React</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                App Router architecture with server components and targeted client hydration islands.
              </p>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline">Styling System</span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Tailwind CSS</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Configured with modular theme tokens, responsive spacing, and flexible CSS grid layouts.
              </p>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline">Type Safety</span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Strict TypeScript</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Complete typed props, data contracts, and component interface definitions.
              </p>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline">Delivery</span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Client Production</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Live deployed marketing surface at careeriens.com.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Traversal Navigation */}
        <nav aria-label="Case Study Navigation" className="pt-space-lg border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <Link
            to="/projects/datajam-portal"
            className="w-full sm:w-auto p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center gap-space-sm group shadow-sm"
          >
            <span className="material-symbols-outlined text-[24px] text-on-surface-variant group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <div className="flex flex-col text-left">
              <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant">Previous Case Study</span>
              <span className="font-headline-sm text-headline-sm font-medium text-on-surface">DataJam Portal</span>
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
            to="/projects/garun-drishti"
            className="w-full sm:w-auto p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-end gap-space-sm group shadow-sm text-right"
          >
            <div className="flex flex-col">
              <span className="font-meta-tag text-meta-tag uppercase text-on-surface-variant">Next Case Study</span>
              <span className="font-headline-sm text-headline-sm font-medium text-on-surface">Garun Drishti</span>
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
