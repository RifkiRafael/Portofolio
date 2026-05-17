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
  brand: 'Portfolio',
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    name: 'Muhammad Rifki Rafael',
    role: 'Front-End Developer & UI/UX Designer',
    eyebrow: 'Hello, I am',
    title: ['Muhammad', 'Rifki', 'Rafael'],
    subtitle:
      'A passionate Front-End Developer and Graphic Designer crafting modern, clean, and user-friendly digital experiences. I blend creative visuals with functional interfaces to build websites that are both beautiful and impactful.',
    avatarAlt: 'Profile photo',
    avatarSrc: '/profile.png',
    ctas: [
      { label: 'View Skills', href: '#work' },
      { label: 'Get in Touch', href: '#contact' },
    ],
    socials: [
      { label: 'GitHub', href: 'https://github.com/RifkiRafael' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rifki-rafael-4b6b71327' },
      { label: 'Email', href: 'mailto:rifkirafael0707@gmail.com' },
    ] satisfies SocialLink[],
  },
  about: {
    heading: 'Get to Know Me Better',
    description:
      'Discover my journey as a developer and designer, combining technical expertise with creative vision to deliver exceptional digital experiences.',
    greeting: 'Hi, my name is',
    name: 'Muhammad Rifki Rafael',
    bigTitle: ['I CREATE', 'DIGITAL', 'EXPERIENCES.'],
    paragraphs: [
      'Hi! I am Muhammad Rifki Rafael, a Front-End Developer, UI/UX Designer, and Graphic Designer passionate about creating modern, clean, and user-friendly websites.',
      'I combine coding and design skills to build digital interfaces that are both visually stunning and highly functional. Every project is an opportunity to push boundaries and create something meaningful.',
    ],
    cta: { label: 'Explore My Skills', href: '#work' },
    portraitAlt: 'Portrait photo',
    portraitSrc: '/profile.png',
    stats: [
      { label: 'Projects', value: '15+' },
      { label: 'Technologies', value: '12+' },
      { label: 'Satisfaction', value: '100%' },
    ] satisfies Stat[],
  },
  skills: {
    heading: 'Technical Skills',
    items: [
      { label: 'HTML/CSS', value: 92 },
      { label: 'JavaScript', value: 85 },
      { label: 'React', value: 88 },
      { label: 'UI/UX Design', value: 90 },
      { label: 'Figma', value: 87 },
      { label: 'Responsive Design', value: 93 },
    ] satisfies Skill[],
  },
  services: {
    heading: 'Skills & Tools',
    description: 'A comprehensive tech stack and toolkit I use to build modern user interfaces, create stunning designs, and produce engaging digital content.',
    kicker: 'Expertise',
    items: [
      {
        title: 'HTML',
        description: 'Semantic markup, page structure, and accessibility standards.',
        icon: { kind: 'devicon', className: 'devicon-html5-plain colored' },
      },
      {
        title: 'CSS',
        description: 'Responsive layouts (Flexbox/Grid), animations, and modern styling.',
        icon: { kind: 'devicon', className: 'devicon-css3-plain colored' },
      },
      {
        title: 'JavaScript',
        description: 'DOM manipulation, async programming, and interactive UI development.',
        icon: { kind: 'devicon', className: 'devicon-javascript-plain colored' },
      },
      {
        title: 'React',
        description: 'Component-driven architecture, state management, and reusable UI.',
        icon: { kind: 'devicon', className: 'devicon-react-original colored' },
      },
      {
        title: 'Tailwind CSS',
        description: 'Utility-first framework for rapid and consistent UI development.',
        icon: { kind: 'devicon', className: 'devicon-tailwindcss-original colored' },
      },
      {
        title: 'Git',
        description: 'Version control, branching strategies, and team collaboration.',
        icon: { kind: 'devicon', className: 'devicon-git-plain colored' },
      },
      {
        title: 'GitHub',
        description: 'Repository management, pull requests, and CI/CD workflows.',
        icon: { kind: 'devicon', className: 'devicon-github-original' },
      },
      {
        title: 'PHP',
        description: 'Server-side scripting, templating, and API integration.',
        icon: { kind: 'devicon', className: 'devicon-php-plain colored' },
      },
      {
        title: 'Laravel',
        description: 'MVC framework, routing, and full-stack web applications.',
        icon: { kind: 'devicon', className: 'devicon-laravel-plain colored' },
      },
      {
        title: 'MySQL',
        description: 'Relational database design, queries, and data management.',
        icon: { kind: 'devicon', className: 'devicon-mysql-plain colored' },
      },
      {
        title: 'Figma',
        description: 'UI/UX design, wireframing, prototyping, and design systems.',
        icon: { kind: 'devicon', className: 'devicon-figma-plain colored' },
      },
      {
        title: 'Canva',
        description: 'Visual design for social media, marketing, and content creation.',
        icon: { kind: 'devicon', className: 'devicon-canva-original colored' },
      },
      {
        title: 'CapCut',
        description: 'Video editing for short-form content and motion graphics.',
        icon: { kind: 'img', src: '/icons/capcut.svg', alt: 'CapCut' },
      },
      {
        title: 'Microsoft 365',
        description: 'Productivity tools including Word, Excel, and PowerPoint.',
        icon: { kind: 'img', src: '/icons/microsoft365.svg', alt: 'Microsoft 365' },
      },
    ] as Service[],
  },
  contact: {
    heading: 'Let\'s Work Together',
    description:
      'Have a question or want to collaborate? Feel free to reach out, and I will get back to you as soon as possible.',
    infoHeading: 'Get in Touch',
    infoItems: [
      { label: 'Email', value: 'rifkirafael0707@gmail.com' },
      { label: 'Phone', value: '+62 858 8817 9329' },
      { label: 'Location', value: 'Dramaga, Bogor' },
    ],
    form: {
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      messageLabel: 'Your Message',
      submitLabel: 'Send Message',
    },
  },
  footer: {
    note: 'Available for projects',
    copyright:
      '© 2026 Muhammad Rifki Rafael. All rights reserved.',
  },
} as const
