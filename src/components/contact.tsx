"use client";

import {
  AlertCircle,
  ArrowUpRight,
  Calendar,
  Check,
  CheckCircle2,
  Copy,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { siteConfig } from "@/data/site-config";

const projectTypes = [
  "App Mobile (React Native)",
  "Produto SaaS Completo",
  "APIs & Backend Escalável",
  "Landing Page de Conversão",
  "Consultoria Full Stack",
];

const budgetRanges = [
  "R$ 5.000 – R$ 15.000",
  "R$ 15.000 – R$ 30.000",
  "R$ 30.000 – R$ 50.000+",
  "Ainda avaliando / Em planejamento",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: projectTypes[0],
    budget: budgetRanges[0],
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    try {
      const web3Key =
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
        "60b10f40-5e7c-432e-a836-137ce97f9252";

      const payload = new FormData();
      payload.append("access_key", web3Key);
      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("projectType", formData.projectType);
      payload.append("budget", formData.budget || "A definir");
      payload.append("message", formData.message.trim());
      payload.append(
        "subject",
        `[tamagolabs] Novo Contato: ${formData.projectType} por ${formData.name}`,
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(
          result.message || "Erro ao despachar formulário. Tente via WhatsApp!",
        );
      }

      setStatus("success");
      setFeedbackMessage(
        "Mensagem enviada com sucesso! Entrarei em contato em até 24 horas.",
      );
      setFormData({
        name: "",
        email: "",
        projectType: projectTypes[0],
        budget: budgetRanges[0],
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setFeedbackMessage(
        err instanceof Error
          ? err.message
          : "Erro ao enviar. Por favor, tente via WhatsApp.",
      );
    }
  };

  // Link direto do WhatsApp para conversa rápida (funciona sem precisar preencher o form)
  const getDirectWhatsAppUrl = () => {
    const phone = siteConfig.contact.whatsappNumber || "5511999999999";
    const name = formData.name.trim();

    if (name) {
      const text = `Olá Bruno! Meu nome é ${name}. Vim pelo site da tamagolabs e gostaria de conversar sobre um projeto de ${formData.projectType}.`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    }

    const text =
      "Olá Bruno! Vim pelo site da tamagolabs e gostaria de conversar sobre um projeto de software.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  // Envio opcional dos dados completos do formulário direto para o WhatsApp
  const handleSendFormViaWhatsApp = () => {
    const phone = siteConfig.contact.whatsappNumber || "5511999999999";
    const lines = [
      "Olá Bruno! Vim pelo site da tamagolabs e gostaria de um orçamento:",
    ];

    if (formData.name.trim()) lines.push(`• Nome: ${formData.name.trim()}`);
    if (formData.email.trim()) lines.push(`• E-mail: ${formData.email.trim()}`);
    lines.push(`• Tipo de Projeto: ${formData.projectType}`);
    if (formData.budget) lines.push(`• Orçamento Estimado: ${formData.budget}`);
    if (formData.message.trim())
      lines.push(`• Detalhes: ${formData.message.trim()}`);

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contato"
      className="py-24 relative border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400 mb-3">
            VAMOS CONVERSAR
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Pronto para transformar sua ideia em software real?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Preencha o formulário abaixo para receber uma análise técnica e
            estimativa ou escolha um dos canais diretos para falar no mesmo dia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels and quick contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-zinc-900/60 border border-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Canais de Atendimento Rápido
              </h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Prefere uma conversa informal sem preencher formulário? Fique à
                vontade para escolher a opção mais conveniente.
              </p>

              <div className="space-y-3">
                {/* WhatsApp button */}
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium text-sm transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Chamar no WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Email copy */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 border border-white/5 text-zinc-300 hover:text-white font-medium text-sm transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-400 shrink-0" />
                    )}
                    <span className="font-mono text-xs truncate">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 shrink-0 ml-2">
                    {copiedEmail ? "Copiado!" : "Copiar"}
                  </span>
                </button>

                {/* Calendar Call */}
                <a
                  href={siteConfig.contact.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 border border-white/5 text-zinc-300 hover:text-white font-medium text-sm transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span>Agendar Call de 20 min</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Tempo de resposta:</span>
                  <span className="font-mono text-emerald-400 font-semibold">
                    &lt; 2 horas
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Localização:</span>
                  <span className="text-zinc-300">
                    {siteConfig.contact.location}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Modelo de Contrato:</span>
                  <span className="text-zinc-300">
                    Escopo fechado ou Alocação
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-zinc-900/60 border border-white/10 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Anti-spam Honeypot (invisível para humanos, armadilha para bots) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-medium text-zinc-300 mb-1.5"
                    >
                      SEU NOME / EMPRESA *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ex: João da Silva ou Empresa XYZ"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-medium text-zinc-300 mb-1.5"
                    >
                      SEU E-MAIL COMERCIAL *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="joao@empresa.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-xs font-mono font-medium text-zinc-300 mb-1.5"
                  >
                    TIPO DE PROJETO
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-zinc-900 text-white"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs font-mono font-medium text-zinc-300 mb-1.5"
                  >
                    ORÇAMENTO APROXIMADO
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all cursor-pointer"
                  >
                    {budgetRanges.map((range) => (
                      <option
                        key={range}
                        value={range}
                        className="bg-zinc-900 text-white"
                      >
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message / Scope */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-medium text-zinc-300 mb-1.5"
                  >
                    DETALHES DO PROJETO & PRAZOS DESEJADOS *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Descreva brevemente o que você precisa construir, quais recursos são fundamentais e qual seu objetivo de prazo..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-300 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feedbackMessage}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-xs sm:text-sm"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{feedbackMessage}</span>
                  </motion.div>
                )}

                {/* Actions row: E-mail or WhatsApp */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    {status === "loading" ? (
                      <span className="inline-flex items-center gap-2 font-medium">
                        <svg
                          className="animate-spin h-4 w-4 text-zinc-950"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <title>Carregando</title>
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Despachando mensagem...
                      </span>
                    ) : (
                      <>
                        <span>Enviar por E-mail</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendFormViaWhatsApp}
                    className="py-3.5 px-5 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    title="Enviar briefing preenchido direto para o WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Enviar via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-zinc-400 font-mono">
                  Envio seguro e direto para a caixa de entrada do fundador.
                  Zero spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
