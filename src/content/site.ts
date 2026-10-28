/**
 * All site copy lives here. Edit text, links and dates in this file only.
 *
 * Structured data (JSON-LD), llms.txt and the "Quick answers" section are all derived from
 * this file, so the machine-readable facts always match what visitors see.
 */

import { gmailComposeUrl } from '../utils/gmail'

export interface FaqItem {
  q: string
  a: string
}

export interface NavLink {
  label: string
  href: string
  /** Shows the small olive dot used wherever Geek Hoppers is mentioned outside its own section. */
  gh?: boolean
}

export interface Service {
  num: string
  title: string
}

export interface PathEntry {
  period: string
  role: string
  org?: string
  /** Olive dot marker for the Geek Hoppers entry. */
  gh?: boolean
}

export interface NowItem {
  title: string
  body: string
  gh?: boolean
}

export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  /** Optional external or internal URL. */
  href?: string
}

/**
 * Verified chapter DOI and Routledge catalog URL.
 */
export const PAPER_DOI_URL = 'https://doi.org/10.1201/9781003781011'
export const PAPER_URL =
  'https://www.routledge.com/Integrated-Technologies-in-Electrical-Electronics-and-Biotechnology-Engineering-Volume-1/Aggarwal-Shukla-EweanDavidson-Bansal/p/book/9781041318422'

export const SITE_URL = 'https://www.thegeekharsh.in'
export const GEEK_HOPPERS_URL = 'https://www.geekhoppers.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/harshsinhaa/'

export const site = {
  name: 'Harsh Sinha',
  wordmark: 'THE GEEK HARSH',
  url: SITE_URL,
  seo: {
    title: 'Harsh Sinha — Founder & CEO of Geek Hoppers | The Geek Harsh',
    description:
      'Harsh Sinha is a technology founder and software engineer, and the Founder & CEO of Geek Hoppers. I build technology — and the company around it.',
    ogImage: `${SITE_URL}/og-image.png`,
    themeColor: '#F7F7F5',
  },

  nav: {
    links: [
      { label: 'Geek Hoppers', href: '/geek-hoppers', gh: true },
      { label: 'About', href: '/about' },
      { label: 'Engineering', href: '/engineering' },
      { label: 'Research', href: '/research' },
      { label: 'Contact', href: '/contact' },
    ] satisfies NavLink[],
    cta: { label: "Let's Talk", href: '/contact' },
  },

  hero: {
    name: ['HARSH', 'SINHA'],
    kicker: 'Founder & CEO — Geek Hoppers · Software Engineer',
    headline: 'I build technology — and the company around it.',
    support: 'Founder & CEO of Geek Hoppers. Software engineer. Builder. The Geek Harsh.',
    primaryCta: { label: 'Explore Geek Hoppers', href: '/geek-hoppers' },
    secondaryCta: { label: 'About Harsh', href: '/about' },
    portrait: {
      src: '/images/harsh-portrait',
      alt: 'Harsh Sinha, Founder & CEO of Geek Hoppers and Software Engineer',
      width: 1024,
      height: 866,
    },
  },

  geekHoppers: {
    num: '02',
    label: 'The company',
    headline: 'Building Geek Hoppers.',
    copy: 'A technology company founded in January 2026. Geek Hoppers designs and develops websites, web applications, AI workflows, data products and enterprise Adobe Experience Manager solutions for startups, growing teams and enterprises.',
    services: [
      { num: '01', title: 'Websites & Web Applications' },
      { num: '02', title: 'AI & Machine Learning' },
      { num: '03', title: 'Data Science & Analytics' },
      { num: '04', title: 'Adobe Experience Manager' },
    ] satisfies Service[],
    tagline: 'Hop for Innovation.',
    clients: 'Working with real clients, including Careeriens.com.',
    logo: {
      src: '/logos/gh-logo-full-white.png',
      alt: 'Geek Hoppers logo',
      width: 1024,
      height: 883,
    },
    cta: { label: 'Visit Geek Hoppers', href: GEEK_HOPPERS_URL },
  },

  about: {
    num: '03',
    label: 'About',
    headline: 'More than the title.',
    copy: "I like taking an idea from a problem to a real product. I started as an engineer, which is why the company I'm building is technical at its core.",
    words: ['ENGINEER', 'FOUNDER', 'BUILDER'],
    photo: {
      src: '/images/harsh-candid',
      alt: 'Harsh Sinha at work, candid photograph',
      width: 1200,
      height: 900,
    },
  },

  engineering: {
    num: '04',
    label: 'Engineering',
    headline: 'Built through engineering.',
    columns: [
      {
        title: 'Enterprise',
        body: 'Adobe Experience Manager, APIs, content migration, cloud platforms and performance.',
      },
      {
        title: 'Software',
        body: 'Java, Spring Boot, Python, JavaScript, databases and system design.',
      },
      {
        title: 'AI & Vision',
        body: 'Machine learning, deep learning, OpenCV, YOLO, MediaPipe and computer vision.',
      },
    ],
  },

  path: {
    num: '05',
    label: 'Path',
    entries: [
      { period: '2026 — Present', role: 'Founder & CEO, Geek Hoppers', gh: true },
      { period: '', role: 'Software Developer, enterprise Adobe Experience Manager' },
      { period: '2024', role: 'Summer Trainee, Advanced Java — Softpro Technologies' },
      {
        period: '2021–2025',
        role: 'B.Tech, Computer Science & Engineering — IMS Engineering College',
      },
    ] satisfies PathEntry[],
  },

  research: {
    num: '06',
    label: 'Research',
    title:
      'Real-Time Threat Detection System for Campus Security Using Integrated Computer Vision Techniques',
    meta: 'Chapter in Integrated Technologies in Electrical, Electronics and Biotechnology Engineering — CRC Press, 2025 (ICITEEB 2025 proceedings)',
    copy: 'A real-time campus security system that combines face recognition, weapon detection and gesture and posture analysis, with local and email alerts. Built as Garun Drishti.',
    link: { label: 'Read the paper →', href: PAPER_URL },
  },

  now: {
    num: '07',
    label: 'Now',
    headline: "What I'm building now.",
    lastUpdated: 'October 2026',
    items: [
      {
        title: 'Geek Hoppers',
        body: 'Building the company and its services.',
        gh: true,
      },
      {
        title: 'The Geek Harsh',
        body: 'Building this personal technology and founder platform.',
      },
      {
        title: 'AI & Intelligent Systems',
        body: 'Exploring AI, computer vision and automation.',
      },
    ] satisfies NowItem[],
    writing: {
      headline: 'Notes from the build.',
      copy: 'Notes on building software and a company. First pieces coming.',
      topics: [
        'Software engineering',
        'AI',
        'Product thinking',
        'Building a company',
        'Career lessons',
        'Things I learn while building',
      ],
    },
  },

  contact: {
    headline: "Let's build something worth talking about.",
    email: 'hello@thegeekharsh.in',
    routes: [
      {
        label: 'Work with Geek Hoppers',
        href: GEEK_HOPPERS_URL,
        external: true,
        gh: true,
      },
      {
        label: 'Talk to Harsh',
        detail: 'speaking, media, collaboration',
        href: gmailComposeUrl('media@thegeekharsh.in'),
        external: true,
        gh: false,
      },
    ],
    linkedin: { label: 'LinkedIn', href: LINKEDIN_URL },
  },

  footer: {
    monogram: 'TGH',
    copyright: '© 2026 Harsh Sinha',
  },
} as const

/**
 * Writing posts. Intentionally empty: nothing is rendered until you add entries.
 * Later this can be fed from MDX or JSON without changing the layout.
 */
export const posts: Post[] = []

/**
 * Entity facts used for structured data. Every value restates something shown on the page.
 * TODO (add when real): Person image URL once /images/harsh-portrait.jpg exists, Google Scholar /
 * ORCID profile URLs in `sameAs`, Geek Hoppers social profiles, the chapter DOI.
 */
export const entity = {
  /** ISO date the page content was last reviewed (drives dateModified). Keep in sync with now.lastUpdated. */
  dateModified: '2026-10-05',
  alternateName: 'The Geek Harsh',
  jobTitle: 'Founder & CEO',
  description:
    'Harsh Sinha is a technology founder and software engineer, and the Founder & CEO of Geek Hoppers.',
  knowsAbout: [
    'Software engineering',
    'Adobe Experience Manager',
    'Java',
    'Spring Boot',
    'Python',
    'JavaScript',
    'System design',
    'Machine learning',
    'Deep learning',
    'Computer vision',
    'OpenCV',
    'YOLO',
    'MediaPipe',
  ],
  alumniOf: 'IMS Engineering College',
  orgFoundingDate: '2026-01',
  paperYear: '2025',
  paperBook: 'Integrated Technologies in Electrical, Electronics and Biotechnology Engineering',
  paperPublisher: 'CRC Press',
} as const

/**
 * "Quick answers": short, self-contained, plain-text answers that restate the site's own copy.
 * Rendered visibly on the page and mirrored into FAQPage JSON-LD and llms.txt.
 */
export const faq: FaqItem[] = [
  {
    q: 'Who is Harsh Sinha?',
    a: 'Harsh Sinha is a technology founder and software engineer. He is the Founder & CEO of Geek Hoppers and is also known as The Geek Harsh.',
  },
  {
    q: 'What is Geek Hoppers?',
    a: 'Geek Hoppers is a technology company founded in January 2026. It designs and develops websites, web applications, AI workflows, data products and enterprise Adobe Experience Manager solutions for startups, growing teams and enterprises.',
  },
  {
    q: 'What services does Geek Hoppers offer?',
    a: 'Websites and web applications, AI and machine learning, data science and analytics, and Adobe Experience Manager.',
  },
  {
    q: 'What is The Geek Harsh?',
    a: "The Geek Harsh is Harsh Sinha's personal technology and founder platform, hosted at thegeekharsh.in.",
  },
  {
    q: 'What does Harsh Sinha work with as an engineer?',
    a: 'Adobe Experience Manager, APIs, content migration, cloud platforms and performance; Java, Spring Boot, Python, JavaScript, databases and system design; and machine learning, deep learning, OpenCV, YOLO, MediaPipe and computer vision.',
  },
  {
    q: 'What is Harsh Sinha’s research?',
    a: 'He published the chapter "Real-Time Threat Detection System for Campus Security Using Integrated Computer Vision Techniques" in Integrated Technologies in Electrical, Electronics and Biotechnology Engineering (CRC Press, 2025, ICITEEB 2025 proceedings). It describes a real-time campus security system, built as Garun Drishti, that combines face recognition, weapon detection and gesture and posture analysis, with local and email alerts.',
  },
  {
    q: 'What is Harsh Sinha’s background?',
    a: 'He holds a B.Tech in Computer Science & Engineering from IMS Engineering College (2021–2025), was a Summer Trainee in Advanced Java at Softpro Technologies in 2024, worked as a Software Developer on enterprise Adobe Experience Manager, and has been Founder & CEO of Geek Hoppers since 2026.',
  },
  {
    q: 'How can I contact Harsh Sinha?',
    a: 'For projects, email hello@thegeekharsh.in or visit geekhoppers.com. For speaking, media and collaboration, email media@thegeekharsh.in. He is also on LinkedIn at linkedin.com/in/harshsinhaa.',
  },
]
