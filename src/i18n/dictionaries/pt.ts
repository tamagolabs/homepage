export interface SoftwareProjectItem {
  id: string;
  title: string;
  badge: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  iconUrl?: string;
  metrics: { label: string; value: string }[];
  highlightsTitle: string;
  highlights: string[];
  technologies: string[];
  playStoreUrl?: string;
  playStoreLabel?: string;
  appStoreUrl?: string;
  appStoreLabel?: string;
  liveUrl?: string;
  liveLabel?: string;
  customAppCta: string;
  proprietarySoftware: string;
  architectureLabel: string;
  statusLabel: string;
  featured?: boolean;
}

export interface IndieGameItem {
  id: string;
  title: string;
  subtitleJp?: string;
  badge: string;
  genre: string;
  tagline: string;
  description: string;
  coverUrl: string;
  coverAlt: string;
  platforms: string[];
  metrics: { label: string; value: string }[];
  highlightsTitle: string;
  highlights: string[];
  tags: string[];
  itchUrl: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  studioLabel: string;
  availabilityLabel: string;
  featured?: boolean;
}

export interface Dictionary {
  meta: {
    titleDefault: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    twitterTitle: string;
  };
  nav: {
    brandAria: string;
    navigationAria: string;
    menuOpenAria: string;
    menuCloseAria: string;
    available: string;
    availableMobile: string;
    startProject: string;
    startProjectMobile: string;
    links: { name: string; href: string }[];
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: {
      p1: string;
      api: string;
      mobile: string;
      landing: string;
      conjunction: string;
      saas: string;
      p2: string;
    };
    ctaPrimary: string;
    ctaSecondary: string;
    ctaPortfolio: string;
    pillars: { title: string; desc: string }[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    includedLabel: string;
    quoteLabel: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      badge: string;
      deliverables: string[];
      techs: string[];
      icon: "api" | "mobile" | "saas" | "landing";
      highlight?: boolean;
    }[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    founderPortfolioLink: string;
    gamesShortcutLabel: string;
    gamesShortcutCta: string;
    items: SoftwareProjectItem[];
    customBanner: {
      badge: string;
      title: string;
      description: string;
      quoteBtn: string;
      portfolioBtn: string;
    };
  };
  games: {
    badge: string;
    divisionNote: string;
    title: string;
    subtitle: string;
    itchProfileLink: string;
    platformsLabel: string;
    items: IndieGameItem[];
    labBanner: {
      badge: string;
      title: string;
      description: string;
      ctaLabel: string;
    };
  };
  soloAdvantage: {
    badge: string;
    title: string;
    subtitle: string;
    agencyLabel: string;
    tamagoLabel: string;
    learnMore: string;
    items: {
      id: string;
      title: string;
      agencyWay: string;
      tamagoWay: string;
      impact: string;
    }[];
  };
  techStack: {
    badge: string;
    title: string;
    subtitle: string;
    terminalCommand: string;
    terminalPills: string[];
  };
  founder: {
    badge: string;
    roleBadge: string;
    name: string;
    role: string;
    bio: string;
    statement: string;
    ctaPortfolio: string;
    ctaGithub: string;
    ctaLinkedin: string;
    ctaItch: string;
    brandCard: {
      badge: string;
      title: string;
      description1: string;
      tamagoWord: string;
      description2: string;
      incubationHighlight: string;
      description3: string;
      pills: string[];
      altMascot: string;
    };
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    quickChannels: {
      title: string;
      description: string;
      whatsappBtn: string;
      copyEmail: string;
      copiedEmail: string;
      calendarBtn: string;
      responseTimeLabel: string;
      responseTimeValue: string;
      locationLabel: string;
      locationValue: string;
      contractModelLabel: string;
      contractModelValue: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      projectTypeLabel: string;
      budgetLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      projectTypes: string[];
      budgetRanges: string[];
      loadingBtn: string;
      submitEmailBtn: string;
      submitWhatsappBtn: string;
      submitWhatsappTitle: string;
      securityFootnote: string;
      feedbackSuccess: string;
      feedbackErrorDefault: string;
      directWhatsappPrefix: string;
      directWhatsappWithName: string;
      formWhatsappGreeting: string;
    };
  };
  footer: {
    tagline: string;
    description: string;
    developerCredit: string;
    navHeader: string;
    linksHeader: string;
    portfolio: string;
    github: string;
    linkedin: string;
    itchIo: string;
    contact: string;
    rightsReserved: string;
    builtWith: string;
  };
  jsonLd: {
    serviceDescription: string;
    serviceTypes: string[];
  };
}

export const pt: Dictionary = {
  meta: {
    titleDefault:
      "tamagolabs | Desenvolvimento de Software, APIs, Mobile e SaaS",
    titleTemplate: "%s | tamagolabs",
    description:
      "Estúdio de desenvolvimento de software focado em APIs de alta escalabilidade, apps mobile com React Native, landing pages ultra-rápidas e SaaS completos. Liderado pelo engenheiro de software Bruno Fukumori.",
    keywords: [
      "desenvolvimento de software",
      "desenvolvedor full stack solo",
      "desenvolvimento react native",
      "aplicativos mobile expo",
      "desenvolvimento de apis",
      "desenvolvimento saas",
      "landing pages de alta conversão",
      "programador sênior",
      "next.js 16",
      "bun runtime",
      "tamagolabs",
      "indie games",
      "tamagolabs games",
    ],
    ogTitle: "tamagolabs | Desenvolvimento de Software de Alta Performance",
    ogDescription:
      "Estúdio de desenvolvimento de software focado em APIs de alta escalabilidade, apps mobile com React Native, landing pages ultra-rápidas e SaaS completos. Liderado pelo engenheiro de software Bruno Fukumori.",
    ogImageAlt: "tamagolabs - Estúdio de Desenvolvimento de Software",
    twitterTitle: "tamagolabs | Desenvolvimento de Software",
  },
  nav: {
    brandAria: "tamagolabs - Ir para o início",
    navigationAria: "Navegação principal",
    menuOpenAria: "Abrir menu",
    menuCloseAria: "Fechar menu",
    available: "Disponível",
    availableMobile: "Disponível para novos projetos",
    startProject: "Iniciar Projeto",
    startProjectMobile: "Iniciar Projeto com Engenheiro",
    links: [
      { name: "Especialidades", href: "#servicos" },
      { name: "Software & SaaS", href: "#projetos" },
      { name: "Indie Games", href: "#games" },
      { name: "Diferencial", href: "#diferencial" },
      { name: "Stack", href: "#stack" },
      { name: "Engenheiro", href: "#fundador" },
    ],
  },
  hero: {
    badge: "ESTÚDIO DE SOFTWARE • ENGENHARIA FULL STACK SÊNIOR",
    titlePrefix: "Engenharia de software",
    titleHighlight: "de alta performance",
    titleSuffix: "sem burocracia.",
    description: {
      p1: "Construção acelerada e refinada de",
      api: "APIs escaláveis",
      mobile: "apps mobile com React Native",
      landing: "landing pages nota 100 em Web Vitals",
      conjunction: "e",
      saas: "produtos SaaS completos",
      p2: "Você fala e negocia diretamente com quem constrói o código.",
    },
    ctaPrimary: "Falar sobre um projeto",
    ctaSecondary: "Explorar Software & SaaS",
    ctaPortfolio: "Portfólio Pessoal",
    pillars: [
      {
        title: "100% Web Vitals",
        desc: "Páginas ultrarrápidas < 1.0s",
      },
      {
        title: "React Native & Expo",
        desc: "iOS & Android em código unificado",
      },
      {
        title: "APIs & Microserviços",
        desc: "Baixa latência com Bun & Node",
      },
      {
        title: "Engenheiro Sênior",
        desc: "Comunicação 1-a-1 e entrega ágil",
      },
    ],
  },
  services: {
    badge: "O QUE FAZEMOS",
    title: "Especialidades construídas com maestria técnica",
    subtitle:
      "Foco cirúrgico em quatro áreas onde um desenvolvedor solo experiente supera equipes inteiras em agilidade, custo e qualidade de entrega.",
    includedLabel: "O que está incluso:",
    quoteLabel: "Cotar",
    items: [
      {
        id: "apis",
        title: "APIs & Backend de Alta Performance",
        subtitle:
          "Arquiteturas robustas, seguras e com latência sub-milisegundo",
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
        techs: [
          "Next.js",
          "React",
          "Vite",
          "PostgreSQL",
          "Stripe",
          "Tailwind CSS",
        ],
        icon: "saas",
        highlight: true,
      },
      {
        id: "landing",
        title: "Landing Pages & Sites de Conversão",
        subtitle:
          "Design minimalista, 100% no Google Web Vitals e foco em vendas",
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
    ],
  },
  projects: {
    badge: "ENGENHARIA B2B, APPS & SAAS",
    title: "Software profissional em produção",
    subtitle:
      "Produtos comerciais, apps mobile e arquiteturas SaaS construídos pela tamagolabs — foco em código limpo, performance local-first e IA aplicada.",
    founderPortfolioLink: "Portfólio Pessoal do Engenheiro",
    gamesShortcutLabel: "Procurando nossos jogos autorais?",
    gamesShortcutCta: "Ver Indie Games",
    items: [
      {
        id: "gymup",
        title: "GymUp",
        badge: "PRODUTO OFICIAL • EM PRODUÇÃO",
        categoryLabel: "App Mobile • React Native & IA",
        tagline:
          "Aplicativo mobile gamificado para musculação com IA generativa (Google Gemini)",
        description:
          "Aplicativo mobile completo de alta performance arquitetado local-first em SQLite e React Native com Expo. Conta com geração inteligente de fichas de treino personalizadas via Google Gemini 3.8 Flash, motor algorítmico de sobrecarga progressiva (Smart Overload), gamificação completa com XP e badges, relatórios de evolução em PDF e compras in-app com RevenueCat.",
        iconUrl: "/images/gymup-icon.png",
        metrics: [
          { label: "Performance", value: "60 FPS Nativo" },
          { label: "Arquitetura", value: "Local-First (SQLite)" },
          { label: "Inteligência", value: "Google Gemini 3.8" },
          { label: "Monetização", value: "RevenueCat IAP" },
        ],
        highlightsTitle: "Destaques de Engenharia & Recursos",
        highlights: [
          "Geração e divisão inteligente de treinos personalizados com Google Gemini 3.8 Flash",
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
        playStoreUrl:
          "https://play.google.com/store/apps/details?id=br.com.tamagolabs.gymup",
        playStoreLabel: "Ver na Google Play Store",
        customAppCta: "Quero um App Sob Medida",
        proprietarySoftware: "Software Proprietário",
        architectureLabel: "Arquitetura: Local-First",
        statusLabel: "100% Offline Ready",
        featured: true,
      },
    ],
    customBanner: {
      badge: "DESENVOLVIMENTO SOB MEDIDA PARA A SUA EMPRESA",
      title: "Precisa de um App Mobile, SaaS, API ou Landing Page?",
      description:
        "O GymUp é a demonstração prática do padrão de código e acabamento da tamagolabs. Para conhecer todo o histórico de sistemas e empresas atendidas pelo Bruno Fukumori ao longo de mais de 10 anos, acesse o portfólio individual.",
      quoteBtn: "Solicitar Orçamento",
      portfolioBtn: "Ver Portfólio do Dev",
    },
  },
  games: {
    badge: "TAMAGO LABS GAMES • PROJETOS AUTORAIS",
    divisionNote:
      "Frente criativa independente • Separada dos serviços B2B & SaaS",
    title: "Indie games criados no estúdio",
    subtitle:
      "Além de software corporativo e SaaS, também incubamos jogos independentes autorais — unindo narrativa, direção de arte retrô e engenharia cuidadosa.",
    itchProfileLink: "Estúdio no itch.io",
    platformsLabel: "Disponível em",
    items: [
      {
        id: "heartbeat-chronicles",
        title: "Heartbeat Chronicles",
        subtitleJp: "ハートビート・クロニクル",
        badge: "LANÇADO • DEMO WEB GRATUITA",
        genre: "Visual Novel • Dating Sim Anos 90",
        tagline:
          "Dating sim inspirado nos clássicos japoneses dos anos 90 com três rotas românticas e gestão de rotina escolar.",
        description:
          "Você assume o papel de um estudante transferido ao longo de um ano letivo completo: equilibre estudos, trabalhos de meio período e atributos pessoais enquanto constrói laços com três heroínas distintas — Ayame, Hina e Luna — em uma estética anime 2D nostálgica.",
        coverUrl: "/images/games/heartbeat-chronicles-cover.jpg",
        coverAlt:
          "Arte de capa de Heartbeat Chronicles mostrando as três heroínas Ayame, Hina e Luna em uma ladeira arborizada com cerejeiras ao pôr do sol",
        platforms: ["Demo Web (Navegador)", "Windows", "Linux"],
        metrics: [
          { label: "Gênero", value: "Dating Sim / VN" },
          { label: "Rotas", value: "3 Heroínas" },
          { label: "Demo", value: "Grátis no Browser" },
          { label: "Versão Full", value: "Windows & Linux" },
        ],
        highlightsTitle: "Sobre o Jogo & Experiência",
        highlights: [
          "Homenagem autêntica à era de ouro dos dating sims japoneses dos anos 1990",
          "Três rotas principais de romance com personalidades distintas: Ayame, Hina e Luna",
          "Simulação de ano letivo completo: gerencie estudos, empregos de meio período e evolução de stats",
          "Visual anime 2D e narrativa rica com decisões que moldam os desfechos da história",
          "Demo gratuita jogável diretamente no navegador, sem necessidade de download",
          "Versão completa disponível para download no itch.io para Windows e Linux",
        ],
        tags: [
          "Visual Novel",
          "Dating Sim",
          "90s Retro",
          "2D Anime",
          "Singleplayer",
          "Demo Web",
        ],
        itchUrl: "https://tamagolabs.itch.io/heartbeat-chronicles",
        primaryCtaLabel: "Jogar Demo / Ver no itch.io",
        secondaryCtaLabel: "Ver página do estúdio",
        studioLabel: "Projeto Autoral • Tamago Labs Games",
        availabilityLabel: "Demo Web Gratuita",
        featured: true,
      },
    ],
    labBanner: {
      badge: "LABORATÓRIO CRIATIVO • PRÓXIMOS TÍTULOS",
      title: "Mais jogos autorais em incubação",
      description:
        "Novos protótipos narrativos e experiências indie estão sendo incubados paralelamente aos nossos produtos de software. Acompanhe o perfil da Tamago Labs no itch.io para devlogs, demos e próximos lançamentos.",
      ctaLabel: "Seguir no itch.io",
    },
  },
  soloAdvantage: {
    badge: "O MODELO SOLO FOUNDER",
    title: "Por que contratar um Dev Solo Sênior em vez de uma Agência?",
    subtitle:
      "Elimine as camadas burocráticas de agências convencionais. Trabalhe lado a lado com quem tem a visão holística do produto e o rigor técnico para executar.",
    agencyLabel: "Agências Tradicionais:",
    tamagoLabel: "Com a tamagolabs:",
    learnMore: "Saiba mais",
    items: [
      {
        id: "communication",
        title: "Comunicação 100% Direta",
        agencyWay:
          "Reuniões intermináveis com gerentes de conta, que passam para POs, que passam para devs juniores.",
        tamagoWay:
          "Você conversa diretamente com quem arquiteta e escreve cada linha de código. Zero ruído e zero telefone sem fio.",
        impact: "Decisões em minutos, não em semanas.",
      },
      {
        id: "speed",
        title: "Velocidade de Execução de Startup",
        agencyWay:
          "Processos burocráticos, aprovações morosas e semanas para subir um MVP no ar.",
        tamagoWay:
          "Entregas contínuas em sprints curtos. Do primeiro commit à produção em tempo recorde usando Bun, Next.js e Expo.",
        impact: "Redução de até 60% no tempo até o primeiro lançamento.",
      },
      {
        id: "quality",
        title: "Arquitetura e Código Sênior",
        agencyWay:
          "Projetos repassados para estagiários ou terceirizados com alta rotatividade de equipe.",
        tamagoWay:
          "Qualidade consistente de ponta a ponta. Código limpo, tipado, modular e pronto para receber novos devs no futuro.",
        impact: "Zero débito técnico escondido.",
      },
      {
        id: "cost",
        title: "Eficiência de Custo Real",
        agencyWay:
          "Você paga pela estrutura física, diretoria, executivos de vendas e overhead da agência.",
        tamagoWay:
          "Você investe puramente em horas produtivas de engenharia de software de alto nível.",
        impact: "Maior retorno sobre o investimento (ROI).",
      },
    ],
  },
  techStack: {
    badge: "TECNOLOGIAS & FERRAMENTAS",
    title: "Ecossistema Full Stack, Cloud & Engenharia Moderna",
    subtitle:
      "Ferramentas selecionadas para máxima velocidade de desenvolvimento, performance em tempo de execução e manutenção simples a longo prazo.",
    terminalCommand: "bun run --filter @tamagolabs/studio build:production",
    terminalPills: ["100% Type-Safe", "Zero-runtime bloat", "Edge Ready"],
  },
  founder: {
    badge: "QUEM CONSTRÓI SEU PROJETO",
    roleBadge: "ENG. DE SOFTWARE",
    name: "Bruno Fukumori",
    role: "Engenheiro de Software Full Stack Sênior & Fundador",
    bio: "Mais de uma década de experiência transformando requisitos complexos em arquiteturas leves, escaláveis e com design refinado. Engenharia direta, do banco de dados e APIs até o aplicativo na loja.",
    statement:
      "Na tamagolabs, você não lida com intermediários nem com rotatividade de funcionários de agência. Eu pessoalmente oriento a melhor solução técnica e executo do início ao fim com transparência radical.",
    ctaPortfolio: "Portfólio Pessoal Completo",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaItch: "itch.io",
    brandCard: {
      badge: "O CONCEITO DA MARCA",
      title: 'Por que "tamagolabs"?',
      description1: "Em japonês,",
      tamagoWord: "Tamago (卵)",
      description2: "significa ovo. Para nós, representa o processo de",
      incubationHighlight: "incubação de produtos digitais",
      description3:
        ": acolhemos cada ideia ainda embrionária, estruturamos sua arquitetura e identidade com precisão e cuidado até ela quebrar a casca e eclodir no mercado — seja como um software B2B/SaaS robusto e escalável ou como um indie game autoral.",
      pills: ["Ideação & Incubação", "Engenharia Sólida", "Eclosão & Escala"],
      altMascot: "Mascote tamagolabs - Gatinho no ovo de tecnologia",
    },
  },
  faq: {
    badge: "PERGUNTAS FREQUENTES",
    title: "Tudo o que você precisa saber antes de iniciarmos",
    subtitle:
      "Transparência total desde o primeiro dia. Se sua dúvida não estiver aqui, é só nos chamar no WhatsApp.",
    items: [
      {
        question: "Quem é o dono do código-fonte e da propriedade intelectual?",
        answer:
          "100% seu. Ao finalizar as etapas do projeto, todo o repositório no GitHub/GitLab, documentação e infraestrutura são transferidos integralmente para sua titularidade. Zero lock-in de agência.",
      },
      {
        question: "Qual é o tempo médio para colocar um projeto no ar?",
        answer:
          "Landing pages de alta conversão costumam ser entregues e publicadas entre 5 a 10 dias úteis. MVPs de SaaS ou apps mobile com React Native geralmente levam de 3 a 6 semanas, dependendo da complexidade das integrações.",
      },
      {
        question: "Como funciona a contratação e o pagamento?",
        answer:
          "Trabalhamos com modelo de escopo fechado (com entregas e marcos bem definidos com entrada e parcelamento) ou modelo de alocação por sprint/mês para projetos contínuos. Contrato formal e nota fiscal inclusos.",
      },
      {
        question:
          "Vocês realizam a publicação do aplicativo na Apple e Google?",
        answer:
          "Sim! Cuidamos de todo o processo de build através do Expo EAS, geração dos certificados, configuração das páginas de loja (ASO) e submissão tanto para a Apple App Store quanto para a Google Play Store.",
      },
      {
        question: "Como é o suporte após o lançamento?",
        answer:
          "Todos os projetos contam com garantia de 30 dias para correções de eventuais bugs sem custo adicional. Também oferecemos planos mensais opcionais de sustentação e evolução contínua da sua plataforma.",
      },
    ],
  },
  contact: {
    badge: "VAMOS CONVERSAR",
    title: "Pronto para transformar sua ideia em software real?",
    subtitle:
      "Preencha o formulário abaixo para receber uma análise técnica e estimativa ou escolha um dos canais diretos para falar no mesmo dia.",
    quickChannels: {
      title: "Canais de Atendimento Rápido",
      description:
        "Prefere uma conversa informal sem preencher formulário? Fique à vontade para escolher a opção mais conveniente.",
      whatsappBtn: "Chamar no WhatsApp",
      copyEmail: "Copiar",
      copiedEmail: "Copiado!",
      calendarBtn: "Agendar Call de 20 min",
      responseTimeLabel: "Tempo de resposta:",
      responseTimeValue: "< 2 horas",
      locationLabel: "Localização:",
      locationValue: "São Paulo, Brasil • Atendimento Global",
      contractModelLabel: "Modelo de Contrato:",
      contractModelValue: "Escopo fechado ou Alocação",
    },
    form: {
      nameLabel: "SEU NOME / EMPRESA *",
      namePlaceholder: "Ex: João da Silva ou Empresa XYZ",
      emailLabel: "SEU E-MAIL COMERCIAL *",
      emailPlaceholder: "joao@empresa.com",
      projectTypeLabel: "TIPO DE PROJETO",
      budgetLabel: "ORÇAMENTO APROXIMADO",
      messageLabel: "DETALHES DO PROJETO & PRAZOS DESEJADOS *",
      messagePlaceholder:
        "Descreva brevemente o que você precisa construir, quais recursos são fundamentais e qual seu objetivo de prazo...",
      projectTypes: [
        "App Mobile (React Native)",
        "Produto SaaS Completo",
        "APIs & Backend Escalável",
        "Landing Page de Conversão",
        "Consultoria Full Stack",
      ],
      budgetRanges: [
        "R$ 5.000 – R$ 15.000",
        "R$ 15.000 – R$ 30.000",
        "R$ 30.000 – R$ 50.000+",
        "Ainda avaliando / Em planejamento",
      ],
      loadingBtn: "Despachando mensagem...",
      submitEmailBtn: "Enviar por E-mail",
      submitWhatsappBtn: "Enviar via WhatsApp",
      submitWhatsappTitle: "Enviar briefing preenchido direto para o WhatsApp",
      securityFootnote:
        "Envio seguro e direto para a caixa de entrada do fundador. Zero spam.",
      feedbackSuccess:
        "Mensagem enviada com sucesso! Entrarei em contato em até 24 horas.",
      feedbackErrorDefault: "Erro ao enviar. Por favor, tente via WhatsApp.",
      directWhatsappPrefix:
        "Olá Bruno! Vim pelo site da tamagolabs e gostaria de conversar sobre um projeto de software.",
      directWhatsappWithName:
        "Olá Bruno! Meu nome é {name}. Vim pelo site da tamagolabs e gostaria de conversar sobre um projeto de {projectType}.",
      formWhatsappGreeting:
        "Olá Bruno! Vim pelo site da tamagolabs e gostaria de um orçamento:",
    },
  },
  footer: {
    tagline: "Software de alta performance para quem não pode perder tempo",
    description:
      "Estúdio de engenharia de software focado em APIs de alta escalabilidade, apps mobile com React Native, landing pages e SaaS completos.",
    developerCredit: "Desenvolvido por Dev Full Stack Solo Sênior",
    navHeader: "Navegação",
    linksHeader: "Links & Conexões",
    portfolio: "Portfólio Pessoal",
    github: "GitHub Oficial",
    linkedin: "LinkedIn",
    itchIo: "itch.io (Games)",
    contact: "Contato",
    rightsReserved: "Todos os direitos reservados.",
    builtWith: "Construído com Next.js, Bun, Tailwind CSS & Motion",
  },
  jsonLd: {
    serviceDescription:
      "Desenvolvimento sob medida de APIs de alta performance, aplicativos móveis com React Native, landing pages nota 100 no Google Web Vitals e plataformas SaaS completas.",
    serviceTypes: [
      "Desenvolvimento de Software",
      "Desenvolvimento de APIs",
      "Desenvolvimento de Apps Mobile React Native",
      "Desenvolvimento de SaaS",
      "Landing Pages de Alta Conversão",
    ],
  },
};
