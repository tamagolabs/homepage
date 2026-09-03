export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  iconUrl?: string;
  metrics: ProjectMetric[];
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  featured?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: "gymup",
    title: "GymUp",
    badge: "PRODUTO OFICIAL • EM PRODUÇÃO",
    categoryLabel: "App Mobile • React Native & IA",
    tagline:
      "Aplicativo mobile gamificado para musculação com IA generativa (Google Gemini)",
    description:
      "Aplicativo mobile completo de alta performance arquitetado local-first em SQLite e React Native com Expo. Conta com geração inteligente de fichas de treino personalizadas via Google Gemini 3.7 Flash, motor algorítmico de sobrecarga progressiva (Smart Overload), gamificação completa com XP e badges, relatórios de evolução em PDF e compras in-app com RevenueCat.",
    iconUrl: "/images/gymup-icon.png",
    metrics: [
      { label: "Performance", value: "60 FPS Nativo" },
      { label: "Arquitetura", value: "Local-First (SQLite)" },
      { label: "Inteligência", value: "Google Gemini 3.7" },
      { label: "Monetização", value: "RevenueCat IAP" },
    ],
    highlights: [
      "Geração e divisão inteligente de treinos personalizados com Google Gemini 3.7 Flash",
      "Arquitetura 100% offline-first com persistência segura em Expo SQLite e cache em memória",
      "Sistema de Gamificação: Níveis evolutivos, streaks de disciplina e conquistas desbloqueáveis",
      "Smart Overload: Motor de progressão que analisa cargas passadas e sugere aumentos seguros",
      "Relatórios em PDF: Compilação visual de métricas para nutricionistas e treinadores",
      "Monetização Freemium: Assinaturas in-app com RevenueCat para Google Play e App Store",
    ],
    technologies: [
      "React Native",
      "Expo 57",
      "React 19",
      "TypeScript",
      "Google Gemini AI",
      "Expo SQLite",
      "RevenueCat",
      "Biome",
      "Firebase",
    ],
    featured: true,
  },
];
