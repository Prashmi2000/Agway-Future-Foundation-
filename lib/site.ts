export const site = {
  name: 'AGWAY Future Foundation',
  short: 'AGWAY',
  tagline: 'EK KADAM AAJ BEHTAR KAL KI ORE',
  motto: 'Seva • Sanskar • Samarpan',
  subMotto: 'Caring Today • Building Tomorrow',
  phone: '9304406541',
  phoneIntl: '919304406541',
  email: 'agwayfuture@gmail.com',
  address: {
    line1: 'Plot No.9, 1st Floor, Behind Malwa Tower',
    line2: 'Old Palasia, A.B. Road',
    line3: 'Indore - 452010',
  },
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
]

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    slug: 'temple-enlargement',
    title: 'Temple Enlargement',
    short: 'Expanding sacred spaces for community worship.',
    description:
      'We support the restoration and enlargement of temples so communities have dignified, spacious places to gather, worship, and celebrate their culture and traditions.',
    image: '/service-temple.png',
  },
  {
    slug: 'langer',
    title: 'Langer (Free Food)',
    short: 'Warm, nutritious meals served to everyone in need.',
    description:
      'Our Langer program serves free, hot and nutritious meals to anyone who walks through our doors, ensuring that no one in our community sleeps hungry.',
    image: '/service-langar.png',
  },
  {
    slug: 'education',
    title: 'Education',
    short: 'Books, tuition and supplies for underprivileged children.',
    description:
      'We provide school supplies, tuition support and learning programs so that underprivileged children can access quality education and build a brighter future.',
    image: '/service-education.png',
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    short: 'Welcoming shelter and care for pilgrims and travellers.',
    description:
      'From welcoming visitors to arranging shelter and comfort for pilgrims and travellers, our hospitality services embody the spirit of atithi devo bhava.',
    image: '/service-hospitality.png',
  },
  {
    slug: 'elder-care',
    title: 'Elder Care',
    short: 'Dignity, companionship and support for the elderly.',
    description:
      'We care for the elderly with regular check-ins, health support, companionship and community activities so our seniors live with dignity and joy.',
    image: '/service-eldercare.png',
  },
]

export const stats = [
  { value: '50,000+', label: 'Meals Served' },
  { value: '1,200+', label: 'Children Educated' },
  { value: '800+', label: 'Elders Supported' },
  { value: '300+', label: 'Volunteers' },
]
