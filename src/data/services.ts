export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  deliverables: string[];
  techs: string[];
  icon: "api" | "mobile" | "landing" | "saas";
  highlight?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "apis",
    title: "APIs & Backend de Alta Performance",
    subtitle: "Arquiteturas robustas, seguras e com latência sub-milisegundo",
    description:
      "Desenvolvimento de microsserviços, APIs RESTful e GraphQL preparadas para alto volume de requisições, com cache inteligente, autenticação segura e documentação Swagger/OpenAPI interativa.",
    badge: "Escalabilidade & Resiliência",
    deliverables: [
      "Microsserviços escaláveis e serverless em nuvem (AWS / GCP)",
      "APIs RESTful e GraphQL fortemente tipadas",
      "Processamento assíncrono com filas (RabbitMQ & Kafka)",
      "Modelagem de dados otimizada (PostgreSQL / Redis)",
      "Orquestração de containers com Docker e Kubernetes",
      "Autenticação JWT, OAuth2 e RBAC rigoroso",
    ],
    techs: [
      "NestJS",
      "Elysia",
      "GraphQL",
      "RabbitMQ",
      "Kafka",
      "AWS",
      "GCP",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
    ],
    icon: "api",
  },
  {
    id: "mobile",
    title: "Apps Mobile com React Native & Expo",
    subtitle: "Experiência 100% nativa para iOS e Android em base única",
    description:
      "Aplicativos móveis fluidos, com suporte offline, animações a 60/120fps, integração com recursos nativos do aparelho e publicação ponta a ponta na Apple App Store e Google Play Store.",
    badge: "iOS & Android",
    deliverables: [
      "Desenvolvimento ágil com Expo Router",
      "Animações fluidas com Reanimated & Gestures",
      "Notificações push, geolocalização e biometria",
      "Configuração de esteira de build EAS e publicação",
    ],
    techs: ["React Native", "Expo", "TypeScript", "Zustand", "EAS Build"],
    icon: "mobile",
    highlight: true,
  },
  {
    id: "saas",
    title: "Produtos SaaS de Ponta a Ponta",
    subtitle:
      "Do banco de dados e billing à interface completa e pronta para escalar",
    description:
      "Construção acelerada de MVPs e plataformas SaaS completas: autenticação multi-tenant, billing com Stripe/Asaas, dashboards analíticos, webhooks e painéis administrativos modernos.",
    badge: "Time to Market",
    deliverables: [
      "Integração de pagamentos recorrentes e checkout",
      "Painéis com gráficos interativos e analytics",
      "Arquitetura multi-tenant escalável",
      "Painel de controle administrativo completo",
    ],
    techs: ["Next.js", "React", "Vite", "PostgreSQL", "Stripe", "Tailwind CSS"],
    icon: "saas",
    highlight: true,
  },
  {
    id: "landing",
    title: "Landing Pages & Sites de Conversão",
    subtitle: "Design minimalista, 100% no Google Web Vitals e foco em vendas",
    description:
      "Páginas com carregamento instantâneo (< 1.2s), SEO técnico apurado para indexação máxima no Google, copy visualmente impactante e formulários integrados aos seus canais de vendas.",
    badge: "100% Web Vitals & SEO",
    deliverables: [
      "Score perfeito (100/100) no Lighthouse",
      "Metadados OpenGraph e Schema.org estruturados",
      "Micro-interações que retêm a atenção do usuário",
      "Carregamento estático com cache global em CDN",
    ],
    techs: ["Next.js", "Tailwind CSS", "Motion", "Vercel / Cloudflare"],
    icon: "landing",
  },
];
