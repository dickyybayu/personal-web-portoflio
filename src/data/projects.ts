import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'fintrack-dashboard',
    title: 'FinTrack – Personal Finance Dashboard',
    description: 'Responsive finance dashboard to visualize multi-wallet income and expenses',
    longDescription: 'Developed a responsive finance dashboard to visualize multi-wallet income and expenses. Implemented JWT auth, transaction filtering, dynamic wallet management, and financial charts. Structured backend modularly; deployed backend to Render and frontend to Vercel.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://fintrack-frontend-eight.vercel.app/',
    githubUrl: 'https://github.com/dickyybayu/fintrack-frontend',
    image: '/images/projects/fintrack.webp',
    featured: true,
    category: 'fullstack'
  },
  {
    id: 'building-store-pos',
    title: 'Building Store – Point of Sale (POS) Web App',
    description: 'Advanced Programming Project: POS system with modular monolithic design and Spring Security integration',
    longDescription: 'Designed low-level architecture for POS system with modules: authentication, sales, product, customer, supplier, and payment management. Applied SOLID principles and clean architecture using a modular monolithic design to enhance codebase maintainability, scalability, and separation of concerns. Integrated Spring Security (role-based access, CSRF), JPA for data access, and Thymeleaf for UI rendering.',
    tech: ['Spring Boot', 'Thymeleaf', 'JPA', 'AWS'],
    liveUrl: 'http://buildingstore-a01.duckdns.org/',
    githubUrl: 'https://github.com/TheoKevH/advpro-group-project-a01-2024-2025',
    image: '/images/projects/buildingstore.webp',
    featured: true,
    category: 'fullstack'
  },
  {
    id: 'pet-clinic-management',
    title: 'Pet Clinic Management System – Veterinary Practice Web Application',
    description: 'Database Course Project: Comprehensive veterinary clinic management system',
    longDescription: 'Designed and implemented a comprehensive veterinary clinic management system with multi-role authentication, pet registration, medical records, vaccination tracking, and inventory management. Applied database normalization principles with advanced PostgreSQL triggers for data integrity and business rule enforcement. Implemented role-based access control, CSRF protection, and secure data handling with custom validation systems for user inputs, medical records, and inventory transactions.',
    tech: ['Django', 'PostgreSQL', 'Bootstrap', 'Neon Database', 'Vercel'],
    liveUrl: 'https://pet-clinic-three.vercel.app/',
    githubUrl: 'https://github.com/dickyybayu/pet-clinic',
    image: '/images/projects/petclinic.webp',
    featured: true,
    category: 'fullstack'
  },
  {
    id: 'movietek-app',
    title: 'MovieTek – Movie Exploration App',
    description: 'Mobile Development Project: Movie exploration app with favorites system and TMDB API integration',
    longDescription: 'Developed a movie exploration app with features for browsing popular and trending movies, searching movies by title, and viewing detailed movie information. Implemented a favorites system with persistent storage using SharedPreferences. Designed a sleek dark-themed UI with responsive layouts. Integrated TMDB API for movie data and used Provider for state management.',
    tech: ['Flutter', 'TMDB API', 'Provider', 'SharedPreferences'],
    liveUrl: '',
    githubUrl: 'https://github.com/dickyybayu/MovieTek',
    image: '/images/projects/movietek.png',
    featured: true,
    category: 'mobile'
  },
  {
    id: 'icp-ticketing-platform',
    title: 'Building ICP Ticketing Platform – Decentralized Event Ticketing Web App',
    description: 'Decentralized ticketing platform leveraging Internet Computer Protocol (ICP)',
    longDescription: 'Developed a decentralized ticketing platform for events, leveraging the Internet Computer Protocol (ICP) for secure, tamper-proof ticket sales and management. Implemented event creation, ticket pricing, resell limits, and authentication using Dfinity canisters and Motoko backend. Integrated ICP Ledger for payments and used modern React patterns with form validation and UI components for a seamless user experience.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Dfinity Internet Computer', 'Motoko', 'ICP Ledger'],
    liveUrl: '',
    githubUrl: 'https://github.com/boedegoat/tixchain',
    image: '/images/projects/tixchain.png',
    featured: true,
    category: 'web3'
  },
  {
    id: 'mujur-reborn',
    title: 'Mujur Reborn – E-commerce Web App',
    description: 'Platform Based Programming Course: Full-featured e-commerce platform for tie/necktie products',
    longDescription: `Developed a full-featured e-commerce platform for tie/necktie products with modular Django architecture. Features user authentication, product catalog with filtering, shopping cart management, shipping calculator, payment processing, and customer review system. Implemented AJAX-powered real-time interactions, responsive design with TailwindCSS, and RESTful API endpoints. Applied Django's built-in security features including CSRF protection and ORM for secure data handling across 6 integrated modules (main, keranjang, pengiriman, pembayaran, ulasan, edit).

Key Features:
- Multi-step checkout flow (cart → shipping → payment)
- Real-time cart updates via AJAX
- Product review system with CRUD operations
- Multiple payment methods and delivery options
- Mobile-responsive design`,
    tech: ['Django', 'HTML/CSS/JavaScript', 'SQLite', 'TailwindCSS'],
    liveUrl: 'http://valentino-vieri-mujurreborn.pbp.cs.ui.ac.id/',
    githubUrl: 'https://github.com/Kelompok-E07-PBP/proyek-tengah-semester',
    image: '/images/projects/mujurreborn.webp',
    featured: true,
    category: 'fullstack'
  },
  {
    id: 'building-solemates',
    title: 'Building SoleMates – E-commerce Shoe Store Web Application',
    description: 'Comprehensive e-commerce web application for shoe retail with modular microservices-inspired architecture',
    longDescription: `Developed a comprehensive e-commerce web application for shoe retail featuring a modular microservices-inspired architecture with separate authentication service integration. Built with role-based access control supporting both Admin and Customer user types through custom JWT authentication backend and middleware stack. Implemented full shopping cart functionality with session-based storage for anonymous users and database persistence for authenticated users, complete order management system with payment verification workflow, and product catalog with review system.

Key Technical Features:
- Authentication & Authorization: Custom JWT authentication backend with token-based middleware (QueryTokenMiddleware, TokenAuthMiddleware, UserRoleMiddleware) integrating with external auth service
- E-commerce Functionality: Complete shopping cart system, checkout process with payment proof upload validation, order tracking with status management, and product reviews with XSS protection
- Admin Dashboard: Comprehensive admin panel with product management (CRUD operations), payment verification system, order status updates, and user management with ban/unban functionality
- Security Implementation: CSRF protection, input sanitization with bleach, SQL injection prevention, role-based view decorators, and secure file upload validation
- Database Design: Custom User model with role system, modular app structure (main, products, order), and optimized queries with select_related/prefetch_related
- Frontend Integration: Bootstrap 5 responsive design, AJAX-powered cart updates, modal-based product details with dynamic review loading, and localStorage synchronization for cart persistence
- Advanced Security Features: Custom decorators for role-based access control, input validation and sanitization for XSS prevention, secure payment proof URL validation (Google Drive, OneDrive, Dropbox only), comprehensive test suite covering OWASP Top 10 vulnerabilities, environment-based configuration for development/production databases`,
    tech: ['Django', 'PostgreSQL', 'JWT Authentication', 'Custom Middleware', 'Bootstrap'],
    liveUrl: '',
    githubUrl: 'https://gitlab.cs.ui.ac.id/pkpl/kelompok-48/solemates',
    image: '/images/projects/solemates.webp',
    featured: true,
    category: 'fullstack'
  },
  {
    id: 'personal-web-portfolio',
    title: 'Personal Web Portfolio',
    description: 'Modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS',
    longDescription: `Designed and developed a personal portfolio website to showcase projects, experience, and skills. Features include animated sections, interactive cards, chatbot integration, responsive design, and dynamic data-driven content. Utilized Framer Motion for smooth animations, custom hooks for enhanced UX, and modular architecture for scalability. Deployed on Vercel for fast global delivery and optimized performance.`,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    liveUrl: '#',
    githubUrl: 'https://github.com/dickyybayu/personal-web-portoflio',
    image: '/images/projects/personalwebportfolio.webp',
    featured: true,
    category: 'fullstack'
  },
  {
    id: 'temanbelajar-app',
    title: 'TemanBelajar – Mobile Learning App',
    description: 'Interaction Design Project: Mobile learning app for students with active parental engagement',
    longDescription: `Designed a mobile learning application for primary to secondary school students with active parental engagement. Built through an iterative, user-centered design process covering needs analysis, alternative design exploration, prototyping, and usability evaluation. Conducted in-depth user interviews, developed four user personas, and mapped user journeys to identify key features. Created low- and high-fidelity prototypes in Figma with a minimal, modern visual style and a cyan–indigo–orange color palette. Achieved a System Usability Scale (SUS) score of 85.17 after multiple design iterations.

Key Features:
- AI-powered chat assistant for personalized Q&A
- “Zona Gani” interactive learning space with gamified challenges
- Adaptive quizzes with instant feedback
- Parental dashboard for progress monitoring and recommendations
- Offline mode and personalized learning paths`,
    tech: ['Figma', 'UX Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    liveUrl: 'https://www.figma.com/proto/mzNTXI1i0BboYB5W06Gep2/TK4-Sister?node-id=44-534&t=6rZPZYBXQtHkB4vu-1&scaling=scale-down&content-scaling=fixed&page-id=26%3A2&starting-point-node-id=54%3A1659',
    githubUrl: '',
    image: '/images/projects/temanbelajar.webp',
    featured: true,
    category: 'mobile'
  }
] as const

export const featuredProjects = projects.filter(project => project.featured)