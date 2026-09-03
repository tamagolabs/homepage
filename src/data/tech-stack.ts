export interface TechItem {
  name: string;
  category: "mobile" | "frontend" | "backend" | "infra";
  level: string;
  description: string;
}

export const techStack: TechItem[] = [
  {
    name: "Next.js",
    category: "frontend",
    level: "Avançado",
    description: "App Router, Server Actions, SSR/SSG e Turbopack",
  },
  {
    name: "React",
    category: "frontend",
    level: "Avançado",
    description: "Componentização moderna, hooks avançados e ecossistema",
  },
  {
    name: "React Native",
    category: "mobile",
    level: "Avançado",
    description: "iOS e Android nativos com Expo e Reanimated",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: "Avançado",
    description: "Tipagem estrita, interfaces e arquitetura sólida",
  },
  {
    name: "NestJS",
    category: "backend",
    level: "Avançado",
    description:
      "Arquitetura enterprise modular, decorators e injeção de dependência",
  },
  {
    name: "Elysia",
    category: "backend",
    level: "Avançado",
    description:
      "Framework ultrarrápido para Bun com type-safety ponta a ponta",
  },
  {
    name: "GraphQL",
    category: "backend",
    level: "Avançado",
    description:
      "Consultas eficientes, schemas tipados e arquitetura orientada a grafos",
  },
  {
    name: "RabbitMQ",
    category: "infra",
    level: "Avançado",
    description:
      "Mensageria assíncrona, filas de tarefas (AMQP) e pub/sub resiliente",
  },
  {
    name: "Apache Kafka",
    category: "infra",
    level: "Avançado",
    description:
      "Event streaming distribuído, processamento de alto throughput e logs",
  },
  {
    name: "AWS",
    category: "infra",
    level: "Avançado",
    description:
      "Arquitetura cloud escalável (ECS, Lambda, S3, RDS, CloudFront)",
  },
  {
    name: "GCP",
    category: "infra",
    level: "Avançado",
    description: "Google Cloud Platform (Cloud Run, GKE, Cloud SQL e BigQuery)",
  },
  {
    name: "Kubernetes",
    category: "infra",
    level: "Avançado",
    description: "Orquestração de microsserviços, auto-scaling e resiliência",
  },
  {
    name: "Bun",
    category: "backend",
    level: "Avançado",
    description: "Runtime, package manager e bundler de alta velocidade",
  },
  {
    name: "Node.js",
    category: "backend",
    level: "Avançado",
    description: "APIs assíncronas, microserviços e integrações de pagamento",
  },
  {
    name: "Vite",
    category: "frontend",
    level: "Avançado",
    description: "Build tooling veloz e bundling moderno para SPAs",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Avançado",
    description: "Design systems performáticos e interfaces fluidas",
  },
  {
    name: "PostgreSQL",
    category: "infra",
    level: "Avançado",
    description: "Modelagem relacional, indexação e queries otimizadas",
  },
  {
    name: "Redis",
    category: "infra",
    level: "Avançado",
    description: "Cache de baixa latência e filas assíncronas",
  },
  {
    name: "Expo EAS",
    category: "mobile",
    level: "Avançado",
    description: "Pipelines de build, certificados e deploy nas lojas",
  },
  {
    name: "Docker",
    category: "infra",
    level: "Avançado",
    description: "Conteinerização e ambientes isolados e reproduzíveis",
  },
  {
    name: "Stripe",
    category: "backend",
    level: "Avançado",
    description: "Faturamento recorrente, checkouts e webhooks seguros",
  },
  {
    name: "Motion",
    category: "frontend",
    level: "Avançado",
    description: "Animações declarativas aceleradas por hardware",
  },
];
