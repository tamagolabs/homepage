export interface TechItem {
  name: string;
  category: "mobile" | "frontend" | "backend" | "infra";
  level: string;
  description: string;
  descriptionEn: string;
}

export const techStack: TechItem[] = [
  {
    name: "Next.js",
    category: "frontend",
    level: "Avançado",
    description: "App Router, Server Actions, SSR/SSG e Turbopack",
    descriptionEn: "App Router, Server Actions, SSR/SSG and Turbopack",
  },
  {
    name: "React",
    category: "frontend",
    level: "Avançado",
    description: "Componentização moderna, hooks avançados e ecossistema",
    descriptionEn: "Modern components, advanced hooks, and ecosystem",
  },
  {
    name: "React Native",
    category: "mobile",
    level: "Avançado",
    description: "iOS e Android nativos com Expo e Reanimated",
    descriptionEn: "Native iOS & Android with Expo and Reanimated",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: "Avançado",
    description: "Tipagem estrita, interfaces e arquitetura sólida",
    descriptionEn: "Strict typing, interfaces, and solid architecture",
  },
  {
    name: "NestJS",
    category: "backend",
    level: "Avançado",
    description:
      "Arquitetura enterprise modular, decorators e injeção de dependência",
    descriptionEn:
      "Enterprise modular architecture, decorators, and dependency injection",
  },
  {
    name: "Elysia",
    category: "backend",
    level: "Avançado",
    description:
      "Framework ultrarrápido para Bun com type-safety ponta a ponta",
    descriptionEn: "Ultra-fast Bun framework with end-to-end type safety",
  },
  {
    name: "GraphQL",
    category: "backend",
    level: "Avançado",
    description:
      "Consultas eficientes, schemas tipados e arquitetura orientada a grafos",
    descriptionEn:
      "Efficient queries, typed schemas, and graph-oriented architecture",
  },
  {
    name: "RabbitMQ",
    category: "infra",
    level: "Avançado",
    description:
      "Mensageria assíncrona, filas de tarefas (AMQP) e pub/sub resiliente",
    descriptionEn:
      "Asynchronous messaging, AMQP task queues, and resilient pub/sub",
  },
  {
    name: "Apache Kafka",
    category: "infra",
    level: "Avançado",
    description:
      "Event streaming distribuído, processamento de alto throughput e logs",
    descriptionEn:
      "Distributed event streaming, high-throughput processing, and logs",
  },
  {
    name: "AWS",
    category: "infra",
    level: "Avançado",
    description:
      "Arquitetura cloud escalável (ECS, Lambda, S3, RDS, CloudFront)",
    descriptionEn:
      "Scalable cloud architecture (ECS, Lambda, S3, RDS, CloudFront)",
  },
  {
    name: "GCP",
    category: "infra",
    level: "Avançado",
    description: "Google Cloud Platform (Cloud Run, GKE, Cloud SQL e BigQuery)",
    descriptionEn:
      "Google Cloud Platform (Cloud Run, GKE, Cloud SQL, and BigQuery)",
  },
  {
    name: "Kubernetes",
    category: "infra",
    level: "Avançado",
    description: "Orquestração de microsserviços, auto-scaling e resiliência",
    descriptionEn: "Microservices orchestration, auto-scaling, and resilience",
  },
  {
    name: "Bun",
    category: "backend",
    level: "Avançado",
    description: "Runtime, package manager e bundler de alta velocidade",
    descriptionEn: "High-speed runtime, package manager, and bundler",
  },
  {
    name: "Node.js",
    category: "backend",
    level: "Avançado",
    description: "APIs assíncronas, microserviços e integrações de pagamento",
    descriptionEn: "Asynchronous APIs, microservices, and payment integrations",
  },
  {
    name: "Vite",
    category: "frontend",
    level: "Avançado",
    description: "Build tooling veloz e bundling moderno para SPAs",
    descriptionEn: "Blazing fast build tooling and modern bundling for SPAs",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Avançado",
    description: "Design systems performáticos e interfaces fluidas",
    descriptionEn: "Performant design systems and fluid interfaces",
  },
  {
    name: "PostgreSQL",
    category: "infra",
    level: "Avançado",
    description: "Modelagem relacional, indexação e queries otimizadas",
    descriptionEn: "Relational modeling, indexing, and optimized queries",
  },
  {
    name: "Redis",
    category: "infra",
    level: "Avançado",
    description: "Cache de baixa latência e filas assíncronas",
    descriptionEn: "Low-latency in-memory cache and async queues",
  },
  {
    name: "Expo EAS",
    category: "mobile",
    level: "Avançado",
    description: "Pipelines de build, certificados e deploy nas lojas",
    descriptionEn:
      "Automated build pipelines, credentials, and app store deployment",
  },
  {
    name: "Docker",
    category: "infra",
    level: "Avançado",
    description: "Conteinerização e ambientes isolados e reproduzíveis",
    descriptionEn: "Containerization, isolated and reproducible environments",
  },
  {
    name: "Stripe",
    category: "backend",
    level: "Avançado",
    description: "Faturamento recorrente, checkouts e webhooks seguros",
    descriptionEn: "Recurring subscriptions, checkouts, and secure webhooks",
  },
  {
    name: "Motion",
    category: "frontend",
    level: "Avançado",
    description: "Animações declarativas aceleradas por hardware",
    descriptionEn: "Hardware-accelerated declarative animations",
  },
];
