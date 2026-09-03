export interface AdvantageItem {
  id: string;
  title: string;
  agencyWay: string;
  tamagoWay: string;
  impact: string;
}

export const soloAdvantages: AdvantageItem[] = [
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
];
