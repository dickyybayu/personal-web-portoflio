import { Experience } from '@/lib/types'

export const experience: Experience[] = [
  {
    id: 'pesta-rakyat-komputer',
    title: 'Person in Charge – Competitive Games',
    company: 'Pesta Rakyat Komputer',
    period: 'Feb 2025 - Present',
    description: 'Leading competitive gaming tournaments for a major tech festival in Depok, Indonesia. Managing comprehensive tournament operations with large-scale participation and complex logistics coordination.',
    achievements: [
      'Led a 17-member team to plan and execute competitive gaming tournaments with over 250 participants',
      'Oversaw logistics, tournament structure, and technical operations to ensure a smooth and engaging experience',
      'Coordinated with committees and external partners to secure sponsorships and promote the gaming division'
    ],
    tags: ['Event Management', 'Team Leadership', 'Gaming', 'Logistics', 'Sponsorship', 'Operations'],
    current: true,
    image: '/images/experience/perak.jpg'
  },
  {
    id: 'python-mentor',
    title: 'Student Mentor',
    company: 'Dasar-Dasar Pemrograman 0',
    period: 'Jun 2024 - Sep 2024',
    description: 'Mentored freshmen in Python programming, focusing on basic applications and problem-solving skills. Checked and graded the tasks given to the freshmen.',
    achievements: [
      'Mentored freshmen in Python programming, focusing on basic concepts and simple problem-solving.',
      'Checked and graded assignments submitted by first-year students.',
      'Shared personal experiences and insights about adapting to university life with first-year students.'
    ],
    tags: ['Python', 'Mentorship', 'Problem Solving', 'Education'],
    current: false,
    image: '/images/experience/ddp_0.svg'
  },
  {
    id: 'compfest-academy',
    title: 'Staff of Software Engineering Academy',
    company: 'COMPFEST',
    period: 'Apr 2024 - Aug 2024',
    description: 'Coordinated educational programs for intensive Software Engineering Academy in Depok, Indonesia. Managed end-to-end curriculum delivery and mentorship programs for aspiring software engineers.',
    achievements: [
      'Coordinated end-to-end curriculum planning, speaker invitations, and mentorship scheduling for a 9-day intensive Software Engineering Academy program',
      'Engaged with IT professionals and secured mentor partnerships to enrich the learning experience',
      'Oversaw participant selection process and served as Liaison Officer to ensure smooth communication and engagement throughout the program'
    ],
    tags: ['Education', 'Software Engineering', 'Curriculum Planning', 'Mentorship', 'Program Management', 'Communications'],
    current: false,
    image: '/images/experience/compfest.jpg'
  },
  {
    id: 'rausky-gamestore',
    title: 'Founder',
    company: 'Rausky Gamestore',
    period: 'Apr 2020 - Jan 2023',
    description: 'Founded and operated a digital game store during the COVID-19 pandemic in Tangerang Selatan, Indonesia. Built the business from a small network of friends to a profitable venture through strategic marketing and operations.',
    achievements: [
      'Founded a digital game store during the COVID-19 pandemic, starting with a small network of friends and scaling through word-of-mouth',
      'Managed end-to-end operations including sales, customer service, inventory, and digital marketing campaigns',
      'Grew user base and sustained profitability through agile adaptation to market trends and social media engagement'
    ],
    tags: ['Entrepreneurship', 'Digital Marketing', 'E-commerce', 'Customer Service', 'Business Operations', 'Sales'],
    current: false,
    image: '/images/experience/rauskygamestore.jpg'
  }
] as const