import { TechItem } from '@/lib/types'

export const techStack: TechItem[] = [
  // === Frameworks & Libraries ===
  {
    id: 'django',
    name: 'Django',
    icon: '🌿',
    image: '/images/tech/django.svg',
    tooltip: 'High-level Python web framework with batteries included',
    category: 'frameworks & libraries'
  },
  {
    id: 'flask',
    name: 'Flask',
    icon: '🍶',
    image: '/images/tech/flask.svg',
    tooltip: 'Lightweight Python microframework for APIs and services',
    category: 'frameworks & libraries'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    icon: '🔥',
    image: '/images/tech/pytorch.svg',
    tooltip: 'Deep learning framework for research and production',
    category: 'frameworks & libraries'
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    icon: '☕',
    image: '/images/tech/spring.svg',
    tooltip: 'Java framework for building production-ready applications quickly',
    category: 'frameworks & libraries'
  },
  {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    image: '/images/tech/react.svg',
    tooltip: 'Modern frontend framework for scalable apps',
    category: 'frameworks & libraries'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: '⏭️',
    image: '/images/tech/nextjs.svg',
    tooltip: 'React framework for server-side rendering and static sites',
    category: 'frameworks & libraries'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: '🎨',
    image: '/images/tech/tailwind.svg',
    tooltip: 'Utility-first CSS framework',
    category: 'frameworks & libraries'
  },
  {
    id: 'express',
    name: 'Express.js',
    icon: '🚂',
    image: '/images/tech/express.svg',
    tooltip: 'Fast, unopinionated backend framework for Node.js',
    category: 'frameworks & libraries'
  },
  {
    id: 'flutter',
    name: 'Flutter',
    icon: '🎯',
    image: '/images/tech/flutter.svg',
    tooltip: 'Google’s UI toolkit for building natively compiled apps',
    category: 'frameworks & libraries'
  },
  {
    id: 'ethersjs',
    name: 'Ethers.js',
    icon: '🛠️',
    image: '/images/tech/ethersjs.svg',
    tooltip: 'Lightweight JavaScript library for Ethereum smart contract interaction',
    category: 'frameworks & libraries'
  },
  {
    id: 'openzeppelin',
    name: 'OpenZeppelin',
    icon: '🛡️',
    image: '/images/tech/openzeppelin.svg',
    tooltip: 'Secure, community-vetted smart contract library for Ethereum and other blockchains',
    category: 'frameworks & libraries'
  },

  // === Languages ===
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '📘',
    image: '/images/tech/typescript.svg',
    tooltip: 'Typed JavaScript for better development',
    category: 'languages'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '🟨',
    image: '/images/tech/javascript.svg',
    tooltip: 'The language of the web',
    category: 'languages'
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    image: '/images/tech/python.svg',
    tooltip: 'AI/ML development and data processing',
    category: 'languages'
  },
  {
    id: 'solidity',
    name: 'Solidity',
    icon: '💎',
    image: '/images/tech/solidity.svg',
    tooltip: 'Smart contract development for Ethereum',
    category: 'languages'
  },
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    image: '/images/tech/java.svg',
    tooltip: 'General-purpose programming language',
    category: 'languages'
  },
  {
    id: 'rust',
    name: 'Rust',
    icon: '🦀',
    image: '/images/tech/rust.svg',
    tooltip: 'Systems programming with performance and safety',
    category: 'languages'
  },
  {
    id: 'dart',
    name: 'Dart',
    icon: '🎯',
    image: '/images/tech/dart.svg',
    tooltip: 'Programming language for Flutter and cross-platform apps',
    category: 'languages'
  },
  {
    id: 'motoko',
    name: 'Motoko',
    icon: '🌀',
    image: '/images/tech/motoko.svg',
    tooltip: 'Programming language for the Internet Computer blockchain',
    category: 'languages'
  },
  // === Tools & technologies ===
  {
    id: 'figma',
    name: 'Figma',
    icon: '🎨',
    image: '/images/tech/figma.svg',
    tooltip: 'Collaborative interface design and prototyping tool',
    category: 'tools & technologies'
  },
  {
    id: 'postman',
    name: 'Postman',
    icon: '📬',
    image: '/images/tech/postman.svg',
    tooltip: 'API client for testing and automation',
    category: 'tools & technologies'
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: '🐙',
    image: '/images/tech/github.svg',
    tooltip: 'Code hosting and collaboration platform',
    category: 'tools & technologies'
  },
    {
    id: 'gitlab',
    name: 'GitLab',
    icon: '🦊',
    image: '/images/tech/gitlab.svg',
    tooltip: 'Code hosting, CI/CD, and DevOps platform',
    category: 'tools & technologies'
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: '🐳',
    image: '/images/tech/docker.svg',
    tooltip: 'Containerization for applications',
    category: 'tools & technologies'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    icon: '☸️',
    image: '/images/tech/kubernetes.svg',
    tooltip: 'Orchestrates containers at scale',
    category: 'tools & technologies'
  },
  {
    id: 'foundry',
    name: 'Foundry',
    icon: '🧰',
    image: '/images/tech/foundry.svg',
    tooltip: 'Web3 toolkit for building, testing, and deploying smart contracts',
    category: 'tools & technologies'
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    icon: '📈',
    image: '/images/tech/prometheus.svg',
    tooltip: 'Monitoring and alerting toolkit for time-series metrics',
    category: 'tools & technologies'
  },
  {
    id: 'grafana',
    name: 'Grafana',
    icon: '📊',
    image: '/images/tech/grafana.svg',
    tooltip: 'Analytics and interactive visualization platform for metrics and logs',
    category: 'tools & technologies'
  },
    {
    id: 'rabbitmq',
    name: 'RabbitMQ',
    icon: '📨',
    image: '/images/tech/rabbitmq.svg',
    tooltip: 'Open-source message broker for asynchronous communication between services',
    category: 'tools & technologies'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: '🐘',
    image: '/images/tech/postgresql.svg',
    tooltip: 'Powerful open-source relational database',
    category: 'tools & technologies'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: '🍃',
    image: '/images/tech/mongodb.svg',
    tooltip: 'NoSQL document database for modern applications',
    category: 'tools & technologies' 
  },
  {
    id: 'pinata',
    name: 'Pinata',
    icon: '📦',
    image: '/images/tech/pinata.svg',
    tooltip: 'Decentralized file storage and management powered by IPFS',
    category: 'tools & technologies' 
  },
  {
    id: 'firebase',
    name: 'Firebase',
    icon: '🔥',
    image: '/images/tech/firebase.svg',
    tooltip: 'Cloud-hosted NoSQL database and backend services',
    category: 'tools & technologies' 
  }
] as const
