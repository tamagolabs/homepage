<div align="center">

# 🥚 tamagolabs

**Software Studio de Alta Performance • Engenharia Direta, Sem Burocracia**

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-20232A?style=flat-square&logo=react)](https://react.dev/)
[![Bun](https://img.shields.io/badge/Bun-1.4-fbf0df?style=flat-square&logo=bun&logoColor=black)](https://bun.sh/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Biome](https://img.shields.io/badge/Biome-2.5-60A5FA?style=flat-square&logo=biome)](https://biomejs.dev/)
[![Web Vitals](https://img.shields.io/badge/Web_Vitals-100%25-00E676?style=flat-square&logo=google-lighthouse)](https://pagespeed.web.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-zinc?style=flat-square)](LICENSE)

[Acessar Website](https://tamagolabs.com.br) • [Contato](mailto:contato@tamagolabs.com.br)

</div>

---

## 📖 Sobre a tamagolabs

A **tamagolabs** é um estúdio de engenharia e desenvolvimento de software especializado em **APIs escaláveis**, **Aplicativos Mobile com React Native**, **Plataformas SaaS completas** e **Landing Pages de altíssima conversão**. 

Liderada pelo Engenheiro de Software Full Stack Sênior **Bruno Fukumori**, a tamagolabs opera no modelo de **Engenharia Direta (Solo Studio)**: você negocia e constrói diretamente com o engenheiro sênior responsável pela arquitetura e pelo código, garantindo velocidade de startup, zero telefone sem fio e máxima qualidade técnica.

### 🥚 Por que "tamagolabs"?
Em japonês, **Tamago (卵)** significa *ovo*. Para nós, representa a **incubação cuidadosa de produtos digitais**: acolhemos sua ideia ainda embrionária, estruturamos cada camada de código e infraestrutura com rigor arquitetural até que ela quebre a casca e ecloda no mercado como um software robusto, escalável e pronto para gerar receita.

---

## ✨ Destaques de Arquitetura & Engenharia

- ⚡ **100% Pré-Renderização Estática (`○ Static`):** Todas as rotas do site são geradas estaticamente no build pelo Next.js Turbopack. Zero dependência de servidores dinâmicos, zero cold starts e carregamento global instantâneo (< 1.0s).
- 🎯 **100% Google Web Vitals & SEO Técnico Avançado:**
  - Marcação de dados estruturados **JSON-LD Schema.org** (`Organization`, `WebSite`, `ProfessionalService` e `Person`).
  - `sitemap.xml` dinâmico e `robots.txt` otimizados para indexação prioritária.
  - Cartão OpenGraph e Twitter Card dinâmicos (1200x630).
  - PWA Web App Manifest e favicons em múltiplas resoluções com o mascote oficial.
- 📬 **Formulário de Contato de Alta Conversão & Custo Zero:**
  - **Submissão Direta com `FormData`:** Envio client-side direto para o **Web3Forms** (100% gratuito, sem backend intermediário).
  - **Proteção Anti-Spam Honeypot Invisível (`botcheck`):** Filtra robôs e spammers automaticamente sem exigir CAPTCHAs visuais (zero fricção para o cliente).
  - **Envio Opcional via WhatsApp:** Botão que formata todo o briefing preenchido e abre diretamente no aplicativo do WhatsApp com 1 clique.
  - **Acesso Rápido:** Cópia de e-mail em 1 clique com feedback tátil e link direto para agendamento de reuniões no calendário.
- 🎨 **Design System Moderno & Minimalista:**
  - Floating island navbar com efeito glassmorphism (`backdrop-blur-xl`).
  - Animações aceleradas por hardware com **Motion (framer-motion v13)**.
  - Tipografia de alta precisão com **Geist Sans & Geist Mono**.
- 🛠️ **Tooling Ultra-Rápido com Biome:**
  - Substituição de ESLint e Prettier pelo **Biome**, executando formatação e checagens completas de lint em menos de 15ms.

---

## 🏋️‍♂️ Case em Produção: GymUp

A homepage dá destaque ao primeiro produto proprietário desenvolvido pela tamagolabs: o **GymUp**, um aplicativo mobile gamificado de musculação e gestão de treinos.

- **Stack Mobile:** React Native 0.86, Expo 57, React 19, TypeScript.
- **Inteligência Artificial:** Geração e periodização de treinos com **Google Gemini 3.7 Flash**.
- **Arquitetura:** Local-First com persistência segura em **Expo SQLite** e performance fluida a **60 FPS**.
- **Smart Overload:** Algoritmo de sobrecarga progressiva automática com análise histórica de cargas.
- **Monetização:** In-App Purchases com **RevenueCat** integrado à **Google Play Store**.
- **Documentos:** Exportação nativa de relatórios de evolução visual em PDF para nutricionistas e treinadores.

---

## 🛠️ Stack Tecnológica

| Categoria | Tecnologias |
| :--- | :--- |
| **Frontend & Web** | Next.js 16, React 19, Vite, Tailwind CSS v4, Motion, TypeScript |
| **Mobile** | React Native, Expo 57, Expo Router, Expo SQLite, RevenueCat |
| **Backend & APIs** | NestJS, Elysia, Bun Runtime, Node.js, GraphQL, REST |
| **Bancos & Filas** | PostgreSQL, Redis, RabbitMQ, Apache Kafka |
| **Cloud & DevOps** | AWS, Google Cloud Platform (GCP), Kubernetes, Docker |
| **Tooling & Lint** | Biome, Bun Package Manager |

---

## 📂 Estrutura de Diretórios

```bash
homepage/
├── public/
│   ├── images/              # Ativos de imagem (mascote, avatar, icon GymUp)
│   ├── favicon.ico          # Ícone multi-resolução para navegadores
│   ├── icon-192.png         # Ícone PWA para dispositivos móveis
│   └── icon-512.png         # Ícone PWA de alta resolução
├── src/
│   ├── app/
│   │   ├── icon.png         # Favicon dinâmico (32x32)
│   │   ├── apple-icon.png   # Favicon Apple Touch (180x180)
│   │   ├── globals.css      # Configurações globais e Tailwind v4
│   │   ├── layout.tsx       # Root layout, fontes Geist e metadados SEO
│   │   ├── manifest.ts      # Web App Manifest PWA
│   │   ├── opengraph-image.tsx # Gerador estático de card OpenGraph 1200x630
│   │   ├── page.tsx         # Página principal da homepage
│   │   ├── robots.ts        # Regras de crawlers
│   │   └── sitemap.ts       # XML sitemap dinâmico
│   ├── components/
│   │   ├── navbar.tsx       # Floating island header com mascote
│   │   ├── hero.tsx         # Headline, micro-métricas e CTAs
│   │   ├── services.tsx     # Bento grid de especialidades
│   │   ├── projects.tsx     # Showcase do GymUp e portfólio
│   │   ├── solo-advantage.tsx # Comparativo: Modelo Solo vs. Agências
│   │   ├── tech-stack.tsx   # Grid de tecnologias e terminal Bun
│   │   ├── founder.tsx      # Bio de Bruno Fukumori e conceito da marca
│   │   ├── faq.tsx          # Accordion de perguntas frequentes
│   │   ├── contact.tsx      # Formulário com Web3Forms, Honeypot e WhatsApp
│   │   ├── footer.tsx       # Rodapé com links e copyright
│   │   ├── json-ld.tsx      # Dados estruturados Schema.org
│   │   └── social-icons.tsx # Ícones vetoriais SVG acessíveis
│   ├── data/
│   │   ├── site-config.ts   # Configurações globais de contato e branding
│   │   ├── services.ts      # Dados dos serviços prestados
│   │   ├── projects.ts      # Dados estruturados do case GymUp
│   │   ├── solo-advantages.ts # Dados de comparação de modelo de entrega
│   │   └── tech-stack.ts    # Listagem das 22 tecnologias dominadas
│   └── lib/
│       └── utils.ts         # Utilitário cn() com clsx e tailwind-merge
├── .env.example             # Modelo documentado de variáveis de ambiente
├── biome.json               # Configurações do Biome Linter & Formatter
├── next.config.ts           # Headers de segurança e otimizações Next.js
├── package.json             # Dependências e scripts do projeto
└── tsconfig.json            # Configurações do compilador TypeScript
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- [Bun](https://bun.sh/) (recomendado) ou [Node.js](https://nodejs.org/) v20+

### 1. Clonar o repositório
```bash
git clone https://github.com/tamagolabs/homepage.git
cd homepage
```

### 2. Instalar as dependências
```bash
bun install
# ou: npm install / pnpm install
```

### 3. Configurar as variáveis de ambiente
Crie um arquivo `.env` na raiz com base no `.env.example`:
```env
# Chave pública gratuita do Web3Forms (gere em https://web3forms.com)
NEXT_PUBLIC_WEB3FORMS_KEY=sua-chave-aqui

# URL pública do site
NEXT_PUBLIC_SITE_URL=https://tamagolabs.com.br
```

### 4. Iniciar o servidor de desenvolvimento
```bash
bun run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o site em tempo real.

---

## 🧪 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `bun run dev` | Inicia o servidor local de desenvolvimento com Hot Reload. |
| `bun run build` | Gera o build estático otimizado para produção (`○ Static`). |
| `bun run start` | Inicia o servidor servindo o build de produção localmente. |
| `bun run lint` | Executa a verificação completa de código com o Biome. |
| `bun run format` | Corrige e formata automaticamente todo o código do projeto. |

---

## 🚢 Deploy para Produção

Por ser uma aplicação **100% estática (`○ Static`)**, este projeto pode ser hospedado com custo zero e performance máxima em:

- **[Vercel](https://vercel.com/):** Basta conectar o repositório e adicionar a variável `NEXT_PUBLIC_WEB3FORMS_KEY`.
- **[Cloudflare Pages](https://pages.cloudflare.com/):** Build command: `bun run build` / Output directory: `.next`.
- **[Netlify](https://www.netlify.com/):** Compatível diretamente com o plugin Next.js.
- **AWS S3 + CloudFront / GitHub Pages / VPS.**

---

## 📬 Contato & Negócios

- **Fundador:** Bruno Fukumori *(Engenheiro de Software Full Stack Sênior)*
- **E-mail Comercial:** [contato@tamagolabs.com.br](mailto:contato@tamagolabs.com.br)
- **Website Oficial:** [tamagolabs.com.br](https://tamagolabs.com.br)
- **LinkedIn:** [linkedin.com/in/company/tamago-labs-corp](https://www.linkedin.com/company/tamago-labs-corp)
- **GitHub:** [github.com/tamagolabs](https://github.com/tamagolabs)

---

<div align="center">
  <sub>© 2026 tamagolabs. Todos os direitos reservados. Feito com rigor técnico e foco em performance.</sub>
</div>
