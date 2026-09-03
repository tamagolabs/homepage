export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  founder: {
    name: string;
    role: string;
    bio: string;
    avatarUrl: string;
    portfolioUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    twitterUrl?: string;
  };
  contact: {
    email: string;
    phoneFormatted: string;
    whatsappNumber?: string;
    whatsappUrl: string;
    meetingUrl: string;
    location: string;
    availability: "available" | "limited" | "booked";
  };
  navigation: Array<{ name: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "tamagolabs",
  legalName: "Tamago Labs Software Studio",
  tagline: "Software de alta performance para quem não pode perder tempo",
  description:
    "Estúdio de desenvolvimento de software focado em APIs de alta escalabilidade, apps mobile com React Native, landing pages ultra-rápidas e SaaS completos. Liderado pelo engenheiro de software Bruno Fukumori.",
  url: "https://tamagolabs.com.br",
  ogImage: "https://tamagolabs.com.br/opengraph-image",
  founder: {
    name: "Bruno Fukumori",
    role: "Engenheiro de Software Full Stack Sênior & Fundador",
    bio: "Mais de uma década de experiência transformando requisitos complexos em arquiteturas leves, escaláveis e com design refinado. Engenharia direta, do banco de dados e APIs até o aplicativo na loja.",
    avatarUrl: "/images/founder-avatar.jpg",
    portfolioUrl: "https://portfolio.tamagolabs.com.br/",
    githubUrl: "https://github.com/bfukumori",
    linkedinUrl: "https://www.linkedin.com/in/bfukumori/",
  },
  contact: {
    email: "contato@tamagolabs.com.br",
    phoneFormatted: "+55 (11) 99622-7088",
    whatsappNumber: "5511996227088",
    whatsappUrl:
      "https://wa.me/5511996227088?text=Ol%C3%A1%20Bruno!%20Vim%20pelo%20site%20da%20tamagolabs%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
    meetingUrl: "https://calendar.app.google/enMdYSXQCun2zn9K9",
    location: "São Paulo, Brasil • Atendimento Global",
    availability: "available",
  },
  navigation: [
    { name: "Especialidades", href: "#servicos" },
    { name: "Projetos & Apps", href: "#projetos" },
    { name: "Diferencial", href: "#diferencial" },
    { name: "Stack", href: "#stack" },
    { name: "Engenheiro", href: "#fundador" },
    { name: "Contato", href: "#contato" },
  ],
};
