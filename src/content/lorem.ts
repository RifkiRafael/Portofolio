export type SocialLink = {
  label: string
  href: string
}

export type Stat = {
  label: string
  value: string
}

export type Skill = {
  label: string
  value: number
}

export type Service = {
  title: string
  description: string
  icon?:
    | { kind: 'devicon'; className: string }
    | { kind: 'img'; src: string; alt: string }
    | { kind: 'text'; text: string }
}

export const copy = {
  brand: 'Portofolio',
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    name: 'Muhammad Rifki Rafael',
    role: 'Front-End Developer, UI/UX Designer',
    eyebrow: 'Hello, I’m',
    title: ['Muhammad', 'Rifki', 'Rafael'],
    subtitle:
      'A Front-End Developer and Graphic Designer passionate about creating modern, clean, and user-friendly digital experiences. I enjoy combining creative visuals with functional interfaces to build websites that are both aesthetic and impactful.',
    avatarAlt: 'Profile photo',
    avatarSrc: '/profile.png',
    ctas: [
      { label: 'My Project', href: '#work' },
      { label: 'Contact Me', href: '#contact' },
    ],
    socials: [
      { label: 'GitHub', href: 'https://github.com/RifkiRafael' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rifki-rafael-4b6b71327' },
      { label: 'Email', href: 'mailto:rifkirafael0707@gmail.com' },
      { label:  'LinkedIn', href: 'https://www.linkedin.com/in/rifki-rafael-4b6b71327/?skipRedirect=true'},
    ] satisfies SocialLink[],
  },
  about: {
    heading: 'Get to Know Me Better',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    greeting: 'Hi, my name is',
    name: 'Muhammad Rifki Rafael',
    bigTitle: ['I DESIGN FOR', 'GROWTH.'],
    paragraphs: [
      "Hi! I'm Muhammad Rifki Rafael, a Front-End Developer, UI/UX Designer, and Graphic Designer passionate about creating modern, clean, and user-friendly websites.",
      'I combine coding and design skills to build digital interfaces that are both visually stunning and highly functional.',
    ],
    cta: { label: 'Start Growing', href: '#work' },
    portraitAlt: 'Portrait photo',
    portraitSrc: '/profile.png',
    stats: [
      { label: 'Lorem', value: '12+' },
      { label: 'Ipsum', value: '04' },
      { label: 'Dolor', value: '99%' },
    ] satisfies Stat[],
  },
  skills: {
    heading: 'Skills',
    items: [
      { label: 'Lorem', value: 86 },
      { label: 'Ipsum', value: 74 },
      { label: 'Dolor', value: 92 },
      { label: 'Sit', value: 68 },
      { label: 'Amet', value: 81 },
      { label: 'Elit', value: 77 },
    ] satisfies Skill[],
},
services: {
  heading: 'Skills & Tools',
  description: 'Tech stack and tools I commonly use to build modern UIs, create designs, and produce digital content.',
  kicker: 'Skills',
  items: [
    {
      title: 'HTML',
      description: 'Semantic markup, page structure, and basic accessibility.',
      icon: { kind: 'devicon', className: 'devicon-html5-plain colored' },
    },
    {
      title: 'CSS',
      description: 'Responsive layouts (Flex/Grid), animations, and component styling.',
      icon: { kind: 'devicon', className: 'devicon-css3-plain colored' },
    },
    {
      title: 'JavaScript',
      description: 'DOM manipulation, async programming, and clean UI interactions.',
      icon: { kind: 'devicon', className: 'devicon-javascript-plain colored' },
    },
    {
      title: 'React',
      description: 'Component-driven UI, simple state management, and reusable components.',
      icon: { kind: 'devicon', className: 'devicon-react-original colored' },
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first styling for building consistent UIs quickly.',
      icon: { kind: 'devicon', className: 'devicon-tailwindcss-original colored' },
    },
    {
      title: 'Git',
      description: 'Version control, branching, and collaboration workflows.',
      icon: { kind: 'devicon', className: 'devicon-git-plain colored' },
    },
    {
      title: 'GitHub',
      description: 'Repository management, pull requests, and basic CI workflows.',
      icon: { kind: 'devicon', className: 'devicon-github-original' },
    },
    {
      title: 'PHP',
      description: 'Basic backend development, templating, and simple API integration.',
      icon: { kind: 'devicon', className: 'devicon-php-plain colored' },
    },
    {
      title: 'Laravel',
      description: 'Routing, MVC architecture, and CRUD-based web applications.',
      icon: { kind: 'devicon', className: 'devicon-laravel-plain colored' },
    },
    {
      title: 'MySQL',
      description: 'Relational databases, basic queries, and table design.',
      icon: { kind: 'devicon', className: 'devicon-mysql-plain colored' },
    },
    {
      title: 'Figma',
      description: 'UI/UX design, wireframing, and prototyping.',
      icon: { kind: 'devicon', className: 'devicon-figma-plain colored' },
    },
    {
      title: 'Canva',
      description: 'Quick visual design for content and social media needs.',
      icon: { kind: 'devicon', className: 'devicon-canva-original colored' },
    },
    {
      title: 'CapCut',
      description: 'Video editing for short-form content and basic motion graphics.',
      icon: { kind: 'img', src: '/icons/capcut.svg', alt: 'CapCut' },
    },
    {
      title: 'Microsoft 365',
      description: 'Word and Excel for document and productivity tasks.',
      icon: { kind: 'img', src: '/icons/microsoft365.svg', alt: 'Microsoft 365' },
    },
  ] as Service[],
},
  contact: {
    heading: "Let's Work Together",
    description:
      '',
    infoHeading: 'Let’s Talk',
    infoItems: [
      { label: 'Email', value: 'rifkirafael0707@gmail.com' },
      { label: 'Phone Number', value: '+62 858 8817 9329' },
      { label: 'Domicile', value: 'Dramaga, Bogor' },
    ],
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitLabel: 'Send Message',
    },
  },
  footer: {
    note: 'Open for collaboration',
    copyright:
      '© 2026 Akira Portofolio.',
  },
} as const

