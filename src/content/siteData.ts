/**
 * Canonical typed data store for The Geek Harsh (thegeekharsh.in).
 * All facts, roles, projects, research, and writing items are maintained here.
 */

export interface ProjectItem {
  slug: string
  title: string
  category: 'enterprise' | 'fullstack' | 'research'
  categoryLabel: string
  organization: string
  year: string
  summary: string
  keyResponsibility: string
  tags: string[]
  searchCorpus: string
  caseStudyPath: string
  liveUrl?: string
  attribution?: string
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  type: string
  location: string
  period: string
  summary: string
  contributions: string[]
  associatedProjects?: {
    title: string
    summary: string
    path: string
  }[]
  tags: string[]
}

export interface SkillGroup {
  id: string
  num: string
  eyebrow: string
  title: string
  description: string
  cards: {
    badge: string
    badgeType: 'core' | 'edge' | 'protocol' | 'research'
    title: string
    description: string
    highlightsTitle: string
    highlights: string[]
    tags: string[]
  }[]
}

export interface ArticleItem {
  slug: string
  num: string
  title: string
  readTime: string
  category: string
  summary: string
  tags: string[]
  path: string
  isDraft: boolean
  draftLabel?: string
  keywords: string
}

export interface PublicationData {
  title: string
  chapter: string
  pages: string
  bookTitle: string
  proceedings: string
  conference: string
  year: string
  publisher: string
  doi: string
  doiUrl: string
  routledgeUrl: string
  isbnBook: string
  isbnEbook: string
  isbnHardback: string
  isbnPaperback: string
  authors: string[]
  supervisor: string
  institution: string
  abstract: {
    background: string
    objective: string
    methods: string
    findings: string
  }
  hardwareTelemetry: {
    machine: string
    camera: string
    initialLatency: string
    optimizedLatency: string
    notes: string
  }
  metrics: {
    label: string
    value: string
    subtext: string
    detail: string
  }[]
  apaCitation: string
  bibtex: string
}

export const SITE_METADATA = {
  name: 'Harsh Sinha',
  brandName: 'Harsh Sinha - Software Engineer',
  siteName: 'Harsh Sinha - Software Engineer',
  title: 'Harsh Sinha — Software Engineer · Enterprise Web & Applied AI',
  description:
    'Software engineer working across enterprise web platforms (AEM 6.5, Edge Delivery Services), full-stack systems, and applied AI research.',
  url: 'https://www.thegeekharsh.in',
  email: 'hello@thegeekharsh.in',
  mediaEmail: 'media@thegeekharsh.in',
  linkedinUrl: 'https://www.linkedin.com/in/thegeekharsh',
  instagramUrl: 'https://www.instagram.com/thegeekharsh/',
  geekHoppersUrl: 'https://www.geekhoppers.com',
  location: 'Noida, Uttar Pradesh, India',
  timezone: 'Indian Standard Time (IST / UTC+5:30)',
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'gmr-web-platform',
    title: 'GMR Web Platform',
    category: 'enterprise',
    categoryLabel: 'Enterprise Web',
    organization: 'Bluethink Inc.',
    year: '2026',
    summary:
      'Built on AEM Edge Delivery Services with Universal Editor at Bluethink Inc., engineering multiple content blocks and interactive web experiences. Completed in 2026.',
    keyResponsibility:
      'Block development, Algolia search integration & Adobe Target experiments',
    tags: [
      'AEM Edge Delivery Services',
      'Universal Editor',
      'Algolia Search',
      'Adobe Target',
      'JavaScript',
      'Semantic HTML',
    ],
    searchCorpus:
      'gmr web platform enterprise aem edge delivery services javascript html universal editor search content blocks airport infrastructure bluethink algolia target experimentation',
    caseStudyPath: '/projects/gmr-web-platform',
    liveUrl: 'https://www.gmrgroup.com/',
    attribution: 'Visual styling and design tokens were designed by a teammate.',
  },
  {
    slug: 'oliver-wyman',
    title: 'Oliver Wyman Website Rebuild',
    category: 'enterprise',
    categoryLabel: 'Enterprise Web',
    organization: 'Bluethink Inc.',
    year: 'In Progress',
    summary:
      'Enterprise website rebuild on AEM Managed Services (AEM 6.5 AMS) at Bluethink Inc., currently under active development. Building custom components using Sling Models and HTL, configuring DAM workflows, metadata automation, and asset-upload limit enforcement.',
    keyResponsibility:
      'Custom components (Sling Models, HTL), DAM workflows & asset-upload limit enforcement',
    tags: [
      'AEM 6.5 AMS',
      'Sling Models',
      'HTL',
      'OSGi',
      'DAM Workflows',
      'O(1) Folder Check',
    ],
    searchCorpus:
      'oliver wyman website rebuild enterprise aem managed services aem 6.5 sling models htl osgi jcr dam metadata workflows asset management limit enforcement bluethink in progress under development',
    caseStudyPath: '/projects/oliver-wyman',
  },
  {
    slug: 'datajam-portal',
    title: 'DataJam Portal',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Development',
    organization: 'Iktara Data Science',
    year: '2025',
    summary:
      'Delivered at Iktara Data Science. Redesigned and built the portal UI, developed Django REST API endpoints, and integrated Model Context Protocol (MCP) for conversational data access.',
    keyResponsibility:
      'Portal UI, Django backend REST APIs & Model Context Protocol integration',
    tags: [
      'Django',
      'Python',
      'REST APIs',
      'MCP',
      'JavaScript',
      'PostgreSQL',
    ],
    searchCorpus:
      'datajam portal full-stack development data platform redesign django backend mcp integration python javascript html css query iktara conversational data access',
    caseStudyPath: '/projects/datajam-portal',
    liveUrl: 'https://datajamportal.com',
  },
  {
    slug: 'careeriens',
    title: 'CareerIens',
    category: 'fullstack',
    categoryLabel: 'Web Development',
    organization: 'Freelance Project',
    year: 'Live',
    summary:
      'Freelance frontend project built with Next.js and React. Implemented responsive web interfaces, layout systems, and modern component architecture.',
    keyResponsibility:
      'Next.js + React frontend development & responsive implementation',
    tags: [
      'Next.js (App Router)',
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Responsive Design',
    ],
    searchCorpus:
      'careeriens web development next.js react freelance responsive layouts component architecture tailwind css frontend performance geek hoppers',
    caseStudyPath: '/projects/careeriens',
    liveUrl: 'https://careeriens.com',
  },
  {
    slug: 'garun-drishti',
    title: 'Garun Drishti: Real-Time Threat Detection System',
    category: 'research',
    categoryLabel: 'Academic Research · B.Tech Project',
    organization: 'IMS Engineering College',
    year: 'June 2025',
    summary:
      'Final-year B.Tech project (June 2025) at IMS Engineering College, supervised by Dr. Nizam Uddin Khan and built by a team of five. Explored face recognition, weapon detection, posture cues, and alerts in a webcam prototype; formed the basis of a published CRC Press book chapter.',
    keyResponsibility:
      'Built by a team of five • Supervised by Dr. Nizam Uddin Khan (IMS Engineering College)',
    tags: [
      'Python',
      'OpenCV',
      'YOLOv8 Nano',
      'MediaPipe',
      'DeepFace',
      'Computer Vision',
    ],
    searchCorpus:
      'garun drishti real-time threat detection system personal research computer vision prototype python opencv object detection mediapipe routledge crc press academic publication book chapter ims engineering college',
    caseStudyPath: '/projects/garun-drishti',
  },
]

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'role-bluethink',
    role: 'Software Engineer',
    company: 'Bluethink Inc.',
    type: 'Full-Time',
    location: 'Noida, India',
    period: '2025 – Present',
    summary:
      'Working on enterprise web experiences and AEM-based implementations, including website development, component engineering, DAM workflows, and integrations.',
    contributions: [
      'Developing custom AEM components using Sling Models, HTL, and robust OSGi service layers to support content authoring workflows.',
      'Building reusable content blocks and interactive user experiences for AEM Edge Delivery Services platforms.',
      'Implementing Digital Asset Management (DAM) metadata schemas and automated workflows triggered by asset-lifecycle events.',
      'Configuring Smart Tags infrastructure and Adobe IMS integrations via Adobe Developer Console.',
    ],
    associatedProjects: [
      {
        title: 'GMR Web Platform',
        summary: 'AEM Edge Delivery Services blocks with Universal Editor',
        path: '/projects/gmr-web-platform',
      },
      {
        title: 'Oliver Wyman Rebuild',
        summary: 'AEM Managed Services (6.5): custom components and DAM workflows',
        path: '/projects/oliver-wyman',
      },
    ],
    tags: [
      'AEM 6.5',
      'Edge Delivery Services',
      'Sling Models',
      'HTL',
      'OSGi',
      'Java',
      'JavaScript',
      'JCR',
    ],
  },
  {
    id: 'role-iktara',
    role: 'Data Science Engineer Intern',
    company: 'Iktara Data Science',
    type: 'Engineering Internship',
    location: 'Remote / India',
    period: 'June 2025 – Oct 2025',
    summary:
      'Worked on platform portal development, frontend and backend implementation, APIs, and conversational data-access integration.',
    contributions: [
      'Redesigned and implemented core portal user interface views with clean, semantic frontend templates and high accessibility compliance.',
      'Contributed to the Django backend by developing efficient REST API endpoints, serialization layers, and indexed relational data queries.',
      'Implemented an end-to-end Model Context Protocol (MCP) conversational agent enabling analysts to interactively explore and query raw platform datasets.',
    ],
    associatedProjects: [
      {
        title: 'DataJam Portal',
        summary: 'Dynamic analytics dashboard & conversational agent query layer',
        path: '/projects/datajam-portal',
      },
    ],
    tags: [
      'Python',
      'Django',
      'Model Context Protocol (MCP)',
      'REST APIs',
      'JavaScript',
      'HTML/CSS',
    ],
  },
  {
    id: 'role-softpro',
    role: 'Summer Trainee — Advanced Java',
    company: 'Softpro Technologies Pvt. Ltd.',
    type: 'Foundational Engineering Program',
    location: 'Lucknow, India',
    period: 'Jun 2024 – Aug 2024',
    summary:
      'Intensive training program focused on core Java, object-oriented design patterns, multithreading, and enterprise backend fundamentals.',
    contributions: [
      'Completed in-depth modules on Java standard edition, OOP inheritance models, interfaces, and exception handling.',
      'Implemented multithreaded worker routines and JDBC connection pools for relational databases.',
      'Constructed modular Java utility packages adhering to Gang of Four structural patterns.',
    ],
    tags: ['Java', 'OOP', 'JDBC', 'Data Structures', 'Concurrency'],
  },
]

export const PUBLICATION: PublicationData = {
  title:
    'Real-Time Threat Detection System for Campus Security Using Integrated Computer Vision Techniques',
  chapter: 'Chapter 10',
  pages: 'pp. 69–76',
  bookTitle:
    'Integrated Technologies in Electrical, Electronics and Biotechnology Engineering (Volume 1)',
  proceedings: 'Proceedings of ICITEEB 2025',
  conference:
    '2nd International Conference on Innovative Trends in Electrical, Electronics and Bio-Technology Engineering (ICITEEB 2025)',
  year: '2026',
  publisher: 'CRC Press, Taylor & Francis Group',
  doi: '10.1201/9781003781011',
  doiUrl: 'https://doi.org/10.1201/9781003781011',
  routledgeUrl:
    'https://www.routledge.com/Integrated-Technologies-in-Electrical-Electronics-and-Biotechnology-Engineering-Volume-1/Aggarwal-Shukla-EweanDavidson-Bansal/p/book/9781041318422',
  isbnBook: '9781041318422',
  isbnEbook: '9781003771128',
  isbnHardback: '9781041296928',
  isbnPaperback: '9781041297604',
  authors: [
    'Harsh Sinha',
    'Kashish Bansal',
    'Himanshu Rajput',
    'Pari Singh',
    'Indrajeet Singh',
    'Nizam Uddin Khan',
  ],
  supervisor: 'Dr. Nizam Uddin Khan',
  institution: 'IMS Engineering College, Ghaziabad',
  abstract: {
    background:
      'Contemporary educational perimeters face operational challenges in continuous monitoring of video surveillance feeds. Manual oversight is susceptible to fatigue, whereas centralized streaming often incurs computational overhead. Edge-oriented computer vision provides an accessible alternative for proactive situational alerts.',
    objective:
      'This work presents an integrated, multi-threaded computer vision pipeline for real-time threat detection on commodity hardware. The system integrates facial recognition, YOLOv8 nano weapon localization linked to detected persons, MediaPipe hands and pose analysis for suspicious gesture/posture heuristics, and a DeepFace emotion filter.',
    methods:
      'A standard webcam captures 640×480 video at 30 FPS. Incoming frames are resized to 160×120 for fast feature analysis across concurrent threads. The pipeline extracts 128-dimensional facial encodings using Euclidean distance matching against authorized profiles, detects weapon candidates linked to persons using YOLOv8 nano, derives skeletal and hand gestures via MediaPipe, and evaluates emotional distress indicators with DeepFace. Dispatches include a local audio beep and email alerts with full captured frames every 60 seconds.',
    findings:
      'On an entry-level test machine (Intel i5-8250U, 8 GB RAM, Windows 10), pipeline latency was reduced from ~200 ms/frame (5 FPS) down to ~50 ms/frame (20 FPS) through frame downsampling, MediaPipe confidence threshold tuning, and multithreading. GPU acceleration would offer further improvements.',
  },
  hardwareTelemetry: {
    machine: 'Windows 10, Intel Core i5-8250U, 8 GB RAM',
    camera: 'Logitech C270 Webcam (Unassisted CPU)',
    initialLatency: '~200 ms (5 FPS)',
    optimizedLatency: '~50 ms (20 FPS)',
    notes:
      'Optimized via 160×120 frame resizing, MediaPipe confidence tuning and multithreading. A GPU would further improve this.',
  },
  metrics: [
    {
      label: 'Face Recognition',
      value: '95% TPR',
      subtext: '47/50 Known Detected',
      detail:
        '5% FPR (2/50 false positives) at threshold 0.6 (100 total individuals: 50 known, 50 unknown)',
    },
    {
      label: 'Weapon Detection',
      value: '85% Prec / 90% Rec',
      subtext: '17/20 Precision • 18/20 Recall',
      detail: 'Evaluated across 20 handheld weapon simulation scenarios',
    },
    {
      label: 'Suspicious Posture',
      value: '80% TPR',
      subtext: '40/50 Cases Identified',
      detail: '10% FPR (5 false positives) across 50 gesture/posture test cases',
    },
  ],
  apaCitation:
    'Sinha, H., Bansal, K., Rajput, H., Singh, P., Singh, I., & Khan, N. U. (2026). Real-Time Threat Detection System for Campus Security Using Integrated Computer Vision Techniques. In G. Aggarwal, R. D. Shukla, I. E. Davidson, & R. Bansal (Eds.), Integrated Technologies in Electrical, Electronics and Biotechnology Engineering (Volume 1, Chapter 10, pp. 69–76). Proceedings of the 2nd International Conference on Innovative Trends in Electrical, Electronics and Bio-Technology Engineering (ICITEEB 2025), Chandigarh University, Mohali, India. CRC Press / Routledge, Taylor & Francis Group. ISBN: 9781041318422. https://doi.org/10.1201/9781003781011',
  bibtex: `@incollection{sinha2026realtimethreat,
  author    = {Sinha, Harsh and Bansal, Kashish and Rajput, Himanshu and Singh, Pari and Singh, Indrajeet and Khan, Nizam Uddin},
  title     = {Real-Time Threat Detection System for Campus Security Using Integrated Computer Vision Techniques},
  booktitle = {Integrated Technologies in Electrical, Electronics and Biotechnology Engineering (Volume 1)},
  editor    = {Aggarwal, Gaurav and Shukla, Rishabh Dev and Davidson, Innocent Ewean and Bansal, Ramesh},
  publisher = {CRC Press, Taylor \\& Francis Group},
  year      = {2026},
  chapter   = {10},
  pages     = {69--76},
  note      = {Proceedings of ICITEEB 2025, Chandigarh University, Mohali, India},
  doi       = {10.1201/9781003781011},
  isbn      = {9781041318422},
  url       = {https://doi.org/10.1201/9781003781011}
}`,
}

export const ARTICLES: ArticleItem[] = [
  {
    slug: 'designing-maintainable-blocks-in-aem-edge-delivery-services',
    num: '01',
    title: 'Designing Maintainable Blocks in AEM Edge Delivery Services',
    readTime: '8 min read',
    category: 'Enterprise CMS & AEM',
    summary:
      'Exploring the shift from heavy server-side templates to vanilla DOM decoration micro-blocks, sub-second LCP optimization, and Universal Editor authoring contracts.',
    tags: [
      'AEM Edge Delivery Services',
      'JavaScript',
      'DOM Decoration',
      'Core Web Vitals',
    ],
    path: '/writing/designing-maintainable-blocks-in-aem-edge-delivery-services',
    isDraft: false,
    keywords:
      'AEM Edge Delivery Services JavaScript DOM Decoration Core Web Vitals Universal Editor micro-blocks LCP performance blocks',
  },
  {
    slug: 'debugging-event-driven-dam-workflows-in-aem',
    num: '02',
    title: 'Debugging Event-Driven DAM Workflows in AEM 6.5',
    readTime: '11 min read',
    category: 'Enterprise CMS & AEM',
    summary:
      'How debounced OSGi event listeners, in-memory queue throttling, and isolated Sling Job queues prevent cluster CPU spikes during bulk asset ingest.',
    tags: ['AEM 6.5', 'OSGi R7', 'Sling Jobs', 'Event Handlers', 'JCR'],
    path: '/writing/debugging-event-driven-dam-workflows-in-aem',
    isDraft: true,
    draftLabel: 'Draft / Field Note',
    keywords:
      'AEM 6.5 OSGi R7 Sling Jobs Event Handlers JCR debounced workflows authoring cluster CPU spikes bulk asset ingestion',
  },
  {
    slug: 'reasoning-about-asset-upload-limits',
    num: '03',
    title: 'Reasoning About Asset-Upload Limits and Metadata Automation',
    readTime: '9 min read',
    category: 'Architecture & DAM',
    summary:
      'Why naive Jackrabbit Oak tree traversals trigger index warnings, and how atomic JCR folder properties enable O(1) pre-upload limit checks with nightly reconciliation.',
    tags: [
      'Apache Oak',
      'JCR',
      'O(1) Lookup',
      'Sling Scheduler',
      'Adobe Smart Tags',
    ],
    path: '/writing/reasoning-about-asset-upload-limits',
    isDraft: true,
    draftLabel: 'Draft / Field Note',
    keywords:
      'Apache Oak JCR O(1) Lookup Sling Scheduler Adobe Smart Tags limits metadata traversal indexes reconciliation',
  },
  {
    slug: 'lessons-from-building-a-conversational-data-portal',
    num: '04',
    title: 'Lessons from Building a Conversational Data Portal with MCP',
    readTime: '10 min read',
    category: 'Backend & AI Integration',
    summary:
      'Bridging relational data silos and analyst workflows using the Model Context Protocol (MCP) to enforce deterministic tool routing and schema introspection over raw SQL generation.',
    tags: [
      'Model Context Protocol (MCP)',
      'Django',
      'Python 3.11',
      'REST APIs',
      'PostgreSQL',
    ],
    path: '/writing/lessons-from-building-a-conversational-data-portal',
    isDraft: true,
    draftLabel: 'Draft / Field Note',
    keywords:
      'Model Context Protocol MCP Django Python 3.11 REST APIs PostgreSQL tool routing AI schema introspection conversational data access',
  },
  {
    slug: 'what-a-computer-vision-prototype-can-and-cannot-prove',
    num: '05',
    title: 'What a Computer-Vision Prototype Can and Cannot Prove',
    readTime: '12 min read',
    category: 'Applied AI & Vision',
    summary:
      'Reflections from the Garun Drishti campus security prototype: evaluating the empirical boundaries of edge webcam detection, lighting variance, and heuristic rules under simulated evaluation.',
    tags: ['OpenCV', 'YOLO', 'MediaPipe', 'Concurrency', 'Research Rigor'],
    path: '/writing/what-a-computer-vision-prototype-can-and-cannot-prove',
    isDraft: true,
    draftLabel: 'Draft / Field Note',
    keywords:
      'OpenCV YOLO MediaPipe Concurrency Research Rigor computer vision prototype Garun Drishti edge detection camera limitations',
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'cms-architecture',
    num: '01',
    eyebrow: 'Component Models, Workflows & Publishing',
    title: 'Enterprise CMS & AEM Architecture',
    description:
      'Scalable content authoring systems, custom OSGi service layers, and atomic block decoration.',
    cards: [
      {
        badge: 'Core Platform',
        badgeType: 'core',
        title: 'Core AEM 6.5 & AMS Architecture',
        description:
          'Developing enterprise components, OSGi services, and repository patterns for high-availability enterprise environments.',
        highlightsTitle: 'Key Technologies & Standards',
        highlights: [
          'AEM 6.5 & AEM Managed Services (AMS)',
          'Sling Models & Jackson Exporters',
          'HTL / Sightly component templating',
          'OSGi Declarative Services (@Component, @Reference)',
        ],
        tags: ['AEM 6.5', 'Sling Models', 'HTL', 'OSGi'],
      },
      {
        badge: 'Edge Delivery',
        badgeType: 'edge',
        title: 'AEM Edge Delivery Services (EDS)',
        description:
          'Next-generation publishing architectures using atomic block decoration, document-based authoring, and edge caching.',
        highlightsTitle: 'Key Technologies & Standards',
        highlights: [
          'Edge Delivery Services (EDS) architecture',
          'Atomic DOM block decoration paradigms',
          'Document-based authoring pipelines',
          'Universal Editor integrations',
        ],
        tags: ['Edge Delivery Services', 'Block Decoration', 'Vanilla JS'],
      },
      {
        badge: 'Digital Asset Custody',
        badgeType: 'core',
        title: 'DAM Workflows & Asset Management',
        description:
          'Asset custody workflows, automated metadata extraction schemas, custom workflow process steps, and asset rendition pipelines.',
        highlightsTitle: 'Key Technologies & Standards',
        highlights: [
          'dam:AssetEvent event listeners with debouncing',
          'Counter-based O(1) folder upload limit checks',
          'Adobe Smart Tags integration via Adobe Developer Console',
          'Custom workflow processes and rendition pipelines',
        ],
        tags: ['DAM Workflows', 'Metadata Schemas', 'Sling Workflows', 'Asset Processing'],
      },
    ],
  },
  {
    id: 'frontend-engineering',
    num: '02',
    eyebrow: 'Runtime, Performance & UI Systems',
    title: 'Frontend & Modern Web Engineering',
    description:
      'Clean user interfaces, fluid design systems, and semantic, accessible web engineering.',
    cards: [
      {
        badge: 'Core Languages',
        badgeType: 'core',
        title: 'Core Languages & Modern Standards',
        description:
          'Fundamental web standards built on strong architectural discipline and typed systems.',
        highlightsTitle: 'Standards & Discipline',
        highlights: [
          'TypeScript: Generics, interfaces, and strict type definitions',
          'JavaScript (ES6+): Async/await, event loops, and DOM manipulation',
          'Semantic HTML5: Semantic markup and accessibility landmarks',
          'CSS3: Modern layouts with Flexbox, CSS Grid, and custom tokens',
        ],
        tags: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
      },
      {
        badge: 'Component Systems',
        badgeType: 'edge',
        title: 'Frameworks & Tooling',
        description:
          'Modern component ecosystems, server-side rendering, and styled responsive layouts.',
        highlightsTitle: 'Framework Ecosystem',
        highlights: [
          'React: Functional components, hooks, context, and state lifecycle',
          'Next.js: Server and client components with modern App Router',
          'Tailwind CSS: Utility-first styling with custom theme tokens',
          'Vite & modern build tooling with minimal bundle overhead',
        ],
        tags: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
      },
      {
        badge: 'Standards & A11y',
        badgeType: 'protocol',
        title: 'Standards, Accessibility & Core Web Vitals',
        description:
          'High-performance interfaces adhering to WCAG accessibility guidelines and Core Web Vitals.',
        highlightsTitle: 'Quality Metrics',
        highlights: [
          'Semantic HTML markup with proper ARIA landmarks',
          'Responsive layouts with fluid typography and viewport clamping',
          'Sub-second Largest Contentful Paint (LCP) optimization',
          'Zero Cumulative Layout Shift (CLS) through dimension reservation',
        ],
        tags: ['Semantic Markup', 'WCAG Standards', 'Responsive Design', 'Core Web Vitals'],
      },
    ],
  },
  {
    id: 'backend-apis',
    num: '03',
    eyebrow: 'Service Layers & Concurrency',
    title: 'Backend & API Integration Systems',
    description:
      'Server-side runtimes, REST services, and integration interfaces.',
    cards: [
      {
        badge: 'Server Languages',
        badgeType: 'core',
        title: 'Server Languages & Concurrency',
        description:
          'Enterprise backend programming across JVM and Python execution environments.',
        highlightsTitle: 'Key Runtimes',
        highlights: [
          'Java 11 / 17: Object-oriented design, OSGi service lifecycles, and concurrency utilities',
          'Python: Automation scripts, data parsing, computer vision pipelines, and REST backends',
          'Multi-threaded worker routines and thread pool isolation',
        ],
        tags: ['Java 11/17', 'Python', 'Concurrency', 'OOP'],
      },
      {
        badge: 'Frameworks',
        badgeType: 'edge',
        title: 'Backend Frameworks & REST APIs',
        description:
          'Production backend services, relational data models, and API endpoints.',
        highlightsTitle: 'Framework Capabilities',
        highlights: [
          'Django: Model architectures, ORM queries, authentication, and admin interfaces',
          'Django REST Framework: Model serializers, API viewsets, token auth, and pagination',
          'Stateless resource modeling, HTTP status conventions, and structured JSON payloads',
        ],
        tags: ['Django', 'Django REST Framework', 'RESTful APIs', 'Serialization'],
      },
      {
        badge: 'AI Protocol',
        badgeType: 'protocol',
        title: 'Model Context Protocol (MCP) Integration',
        description:
          'Conversational tool execution interfaces connecting LLM agents to analytical databases.',
        highlightsTitle: 'Protocol Features',
        highlights: [
          'MCP tool server integrations and standardized protocol schemas',
          'Deterministic tool routing eliminating unconstrained raw SQL generation',
          'Dynamic schema introspection endpoints with security guardrails',
        ],
        tags: ['Model Context Protocol (MCP)', 'Tool Routing', 'Schema Introspection'],
      },
    ],
  },
  {
    id: 'data-repositories',
    num: '04',
    eyebrow: 'Persistence & Storage',
    title: 'Data, Content Repositories, & Storage',
    description:
      'Hierarchical content repositories and relational database management.',
    cards: [
      {
        badge: 'Hierarchical JCR',
        badgeType: 'core',
        title: 'Apache Jackrabbit Oak (JCR 2.0)',
        description:
          'Content repository management, node tree traversal optimization, and query index performance.',
        highlightsTitle: 'Repository Engineering',
        highlights: [
          'Hierarchical node tree traversals and Oak property index definitions',
          'Counter-based O(1) folder upload limit checks avoiding index warnings',
          'JCR node modification listeners and automated nightly reconciliation jobs',
        ],
        tags: ['Jackrabbit Oak', 'JCR 2.0', 'Oak Indexes', 'XPath / SQL-2'],
      },
      {
        badge: 'Relational SQL',
        badgeType: 'edge',
        title: 'PostgreSQL & Relational Data Modeling',
        description:
          'Structured database design, transactional operations, and query optimization.',
        highlightsTitle: 'Database Capabilities',
        highlights: [
          'Relational data modeling, schema migrations, foreign keys, and indexes',
          'Complex joins, aggregation pipelines, and query optimization',
          'Connection pool management and transactional data persistence',
        ],
        tags: ['PostgreSQL', 'SQL', 'Schema Design', 'Migrations'],
      },
      {
        badge: 'Relational SQL',
        badgeType: 'edge',
        title: 'MySQL & Relational Systems',
        description:
          'Structured database querying, normalized schemas, and application persistence layers.',
        highlightsTitle: 'Database Standards',
        highlights: [
          'Normalized relational table schemas and primary/foreign key relationships',
          'JDBC connection pool configurations and enterprise persistence layers',
          'Index design and query performance monitoring',
        ],
        tags: ['MySQL', 'Relational', 'JDBC', 'Normalization'],
      },
    ],
  },
  {
    id: 'applied-ai',
    num: '05',
    eyebrow: 'Computer Vision & Inference',
    title: 'Applied AI & Computer Vision Research',
    description:
      'Frame processing pipelines, object detection models, and spatial landmark extraction.',
    cards: [
      {
        badge: 'Frame Ingest',
        badgeType: 'core',
        title: 'OpenCV & Multi-threaded Pipelines',
        description:
          'Video frame ingestion architectures using OpenCV, queue-based decoupling, and producer-consumer threading models.',
        highlightsTitle: 'Pipeline Architecture',
        highlights: [
          'Webcam 640×480 @ 30 FPS video capture stream decoupling',
          'Multi-threaded producer-consumer queues isolating ingestion from inference',
          '160×120 frame downsampling reducing per-frame latency from ~200ms to ~50ms',
        ],
        tags: ['OpenCV', 'Multi-threading', 'Frame Ingestion', 'Downsampling'],
      },
      {
        badge: 'Object Detection',
        badgeType: 'edge',
        title: 'YOLOv8 Nano Edge Object Detection',
        description:
          'Edge-optimized weapon localization and person-linked bounding box inferences.',
        highlightsTitle: 'Detection Models',
        highlights: [
          'YOLOv8 Nano inference on commodity CPU hardware without GPU acceleration',
          'Person-linked weapon localization and bounding box intersection filters',
          'Evaluated at 85% precision and 90% recall in simulated test scenarios',
        ],
        tags: ['YOLOv8 Nano', 'Object Detection', 'Edge ML', 'Simulated Evaluation'],
      },
      {
        badge: 'Spatial Landmarks',
        badgeType: 'research',
        title: 'MediaPipe Hands/Pose & DeepFace',
        description:
          'Spatial landmark extraction, heuristic posture analysis, and facial emotion filtering.',
        highlightsTitle: 'Perception Layers',
        highlights: [
          'MediaPipe 33-point skeletal pose estimation and hand gesture landmark tracking',
          'Rule-based heuristic gesture boundaries (evaluated at 80% TPR / 10% FPR)',
          'face_recognition 128-d Euclidean distance matching (95% TPR / 5% FPR at 0.6 threshold)',
          'DeepFace emotion filtering for anomalous distress detection',
        ],
        tags: ['MediaPipe', 'DeepFace', 'face_recognition', 'Kinematics'],
      },
    ],
  },
  {
    id: 'engineering-rigor',
    num: '06',
    eyebrow: 'Practices, Performance & Testing',
    title: 'Engineering Rigor & Methodologies',
    description:
      'Architecture standards, testing frameworks, and version control discipline.',
    cards: [
      {
        badge: 'Performance',
        badgeType: 'core',
        title: 'Core Web Vitals & Web Performance',
        description:
          'Optimizing real-world user experience metrics on high-traffic corporate surfaces.',
        highlightsTitle: 'Performance Standards',
        highlights: [
          'Zero client-side hydration tax with vanilla DOM decoration patterns',
          'Strict image aspect-ratio reservation preventing Cumulative Layout Shift (CLS)',
          'Sub-second Largest Contentful Paint (LCP) on mobile networks',
        ],
        tags: ['Core Web Vitals', 'Performance Profiling', 'CLS Prevention', 'LCP Budget'],
      },
      {
        badge: 'Version Control',
        badgeType: 'edge',
        title: 'Git Workflows & Modern Tooling',
        description:
          'Clean branch strategies, reproducible builds, and developer experience tooling.',
        highlightsTitle: 'Tooling & CI/CD',
        highlights: [
          'Feature branching, semantic commit conventions, and peer pull-request reviews',
          'Vite build pipeline optimization, ES module bundling, and static pre-rendering',
          'ESLint strict configuration and TypeScript strict mode with zero any types',
        ],
        tags: ['Git', 'Vite', 'CI/CD', 'TypeScript Strict'],
      },
      {
        badge: 'Enterprise Integration',
        badgeType: 'protocol',
        title: 'Search & Personalization Integrations',
        description:
          'Connecting corporate digital platforms to modern search engines and experimentation tools.',
        highlightsTitle: 'Integrations',
        highlights: [
          'Algolia Search client integration with instant facet filtering and indexing',
          'Adobe Target experimentation configuration for personalized content variants',
          'Adobe Developer Console IMS authentication and API credentials setup',
        ],
        tags: ['Algolia Search', 'Adobe Target', 'Adobe IMS', 'Experimentation'],
      },
    ],
  },
]
