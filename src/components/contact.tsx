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
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site-config";
import { useI18n } from "@/i18n/context";

export function Contact() {
  const { dict, locale } = useI18n();

  const projectTypes = dict.contact.form.projectTypes;
  const budgetRanges = dict.contact.form.budgetRanges;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: projectTypes[0],
    budget: budgetRanges[0],
    message: "",
  });

  // When locale changes, keep projectType and budget aligned
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      projectType: projectTypes[0],
      budget: budgetRanges[0],
    }));
  }, [projectTypes, budgetRanges]);

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
        `[tamagolabs - ${locale.toUpperCase()}] New Contact: ${formData.projectType} by ${formData.name}`,
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(
          result.message || dict.contact.form.feedbackErrorDefault,
        );
      }

      setStatus("success");
      setFeedbackMessage(dict.contact.form.feedbackSuccess);
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
          : dict.contact.form.feedbackErrorDefault,
      );
    }
  };

  // Direct WhatsApp link for quick chat
  const getDirectWhatsAppUrl = () => {
    const phone = siteConfig.contact.whatsappNumber || "5511996227088";
    const name = formData.name.trim();

    if (name) {
      const text = dict.contact.form.directWhatsappWithName
        .replace("{name}", name)
        .replace("{projectType}", formData.projectType);
      return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(dict.contact.form.directWhatsappPrefix)}`;
  };

  // Optional form forwarding to WhatsApp
  const handleSendFormViaWhatsApp = () => {
    const phone = siteConfig.contact.whatsappNumber || "5511996227088";
    const lines = [dict.contact.form.formWhatsappGreeting];

    if (formData.name.trim())
      lines.push(
        locale === "en"
          ? `• Name: ${formData.name.trim()}`
          : `• Nome: ${formData.name.trim()}`,
      );
    if (formData.email.trim())
      lines.push(
        locale === "en"
          ? `• Email: ${formData.email.trim()}`
          : `• E-mail: ${formData.email.trim()}`,
      );
    lines.push(
      locale === "en"
        ? `• Project Type: ${formData.projectType}`
        : `• Tipo de Projeto: ${formData.projectType}`,
    );
    if (formData.budget)
      lines.push(
        locale === "en"
          ? `• Estimated Budget: ${formData.budget}`
          : `• Orçamento Estimado: ${formData.budget}`,
      );
    if (formData.message.trim())
      lines.push(
        locale === "en"
          ? `• Details: ${formData.message.trim()}`
          : `• Detalhes: ${formData.message.trim()}`,
      );

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
            {dict.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {dict.contact.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels and quick contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-zinc-900/60 border border-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                {dict.contact.quickChannels.title}
              </h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                {dict.contact.quickChannels.description}
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
                    <span>{dict.contact.quickChannels.whatsappBtn}</span>
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
                    {copiedEmail
                      ? dict.contact.quickChannels.copiedEmail
                      : dict.contact.quickChannels.copyEmail}
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
                    <span>{dict.contact.quickChannels.calendarBtn}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>{dict.contact.quickChannels.responseTimeLabel}</span>
                  <span className="font-mono text-emerald-400 font-semibold">
                    {dict.contact.quickChannels.responseTimeValue}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>{dict.contact.quickChannels.locationLabel}</span>
                  <span className="text-zinc-300">
                    {dict.contact.quickChannels.locationValue}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>{dict.contact.quickChannels.contractModelLabel}</span>
                  <span className="text-zinc-300">
                    {dict.contact.quickChannels.contractModelValue}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-zinc-900/60 border border-white/10 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Anti-spam Honeypot */}
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
                      {dict.contact.form.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={dict.contact.form.namePlaceholder}
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
                      {dict.contact.form.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={dict.contact.form.emailPlaceholder}
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
                    {dict.contact.form.projectTypeLabel}
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
                    {dict.contact.form.budgetLabel}
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
                    {dict.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={dict.contact.form.messagePlaceholder}
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
                        {dict.contact.form.loadingBtn}
                      </span>
                    ) : (
                      <>
                        <span>{dict.contact.form.submitEmailBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendFormViaWhatsApp}
                    className="py-3.5 px-5 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    title={dict.contact.form.submitWhatsappTitle}
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{dict.contact.form.submitWhatsappBtn}</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-zinc-400 font-mono">
                  {dict.contact.form.securityFootnote}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
