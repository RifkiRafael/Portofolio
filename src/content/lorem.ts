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
    eyebrow: 'Lorem ipsum dolor sit',
    title: ['Lorem', 'Ipsum', 'Dolor'],
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatarAlt: 'Profile photo',
    avatarSrc: '/profile.png',
    ctas: [
      { label: 'Lorem Button', href: '#work' },
      { label: 'Contact Me', href: '#contact' },
    ],
    socials: [
      { label: 'GitHub', href: 'https://github.com/RifkiRafael' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Email', href: '#' },
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
    /**
     * Put your photo in `public/about.jpg` (or change the path).
     * If empty, a placeholder portrait will be shown.
     */
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
    heading: 'What I Do',
    items: [
      {
        title: 'Lorem Service',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit.',
      },
      {
        title: 'Ipsum Service',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        title: 'Dolor Service',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        title: 'Sit Service',
        description:
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ] satisfies Service[],
  },
  contact: {
    heading: "Let's Work Together",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    infoHeading: 'Let’s Talk',
    infoItems: [
      { label: 'Lorem', value: 'lorem@ipsum.test' },
      { label: 'Ipsum', value: '+00 0000 0000' },
      { label: 'Dolor', value: 'Lorem, Ipsum City' },
    ],
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitLabel: 'Send Message',
    },
  },
  footer: {
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    copyright:
      '© Lorem Ipsum. All rights reserved.',
  },
} as const

