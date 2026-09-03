"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
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
    question: "Vocês realizam a publicação do aplicativo na Apple e Google?",
    answer:
      "Sim! Cuidamos de todo o processo de build através do Expo EAS, geração dos certificados, configuração das páginas de loja (ASO) e submissão tanto para a Apple App Store quanto para a Google Play Store.",
  },
  {
    question: "Como é o suporte após o lançamento?",
    answer:
      "Todos os projetos contam com garantia de 30 dias para correções de eventuais bugs sem custo adicional. Também oferecemos planos mensais opcionais de sustentação e evolução contínua da sua plataforma.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            PERGUNTAS FREQUENTES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tudo o que você precisa saber antes de iniciarmos
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Transparência total desde o primeiro dia. Se sua dúvida não estiver
            aqui, é só nos chamar no WhatsApp.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-zinc-900/40 border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
