"use client";

import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Lock,
  Sparkles,
  UserCheck,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site-config";

export function Projects() {
  const flagship = projects[0];

  return (
    <section
      id="projetos"
      className="py-24 relative border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400 mb-3">
              PRODUTOS & CASES DE SUCESSO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Software real em produção
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-2xl">
              Conheça as soluções desenvolvidas pela tamagolabs. Foco em código
              limpo, arquiteturas locais de altíssima performance e inteligência
              artificial aplicada.
            </p>
          </div>

          {/* Link to founder's individual portfolio */}
          <a
            href={siteConfig.founder.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-sm font-medium text-zinc-200 hover:text-white transition-all duration-200 shrink-0 self-start md:self-auto"
          >
            <UserCheck className="w-4 h-4 text-emerald-400" />
            Portfólio Pessoal do Engenheiro
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Flagship Showcase Card: GymUp */}
        {flagship && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-zinc-900/50 border border-white/10 p-6 sm:p-10 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300"
          >
            {/* Background Glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Left Details Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 font-semibold tracking-wide">
                    <Sparkles className="w-3 h-3" />
                    {flagship.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {flagship.categoryLabel}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  {flagship.iconUrl && (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-zinc-950 p-1.5 shadow-lg shadow-emerald-500/10">
                      <Image
                        src={flagship.iconUrl}
                        alt={flagship.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {flagship.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 font-medium mt-1">
                      {flagship.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {flagship.description}
                </p>

                {/* Micro-metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  {flagship.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 rounded-xl bg-zinc-950/70 border border-white/5"
                    >
                      <div className="text-xs font-bold text-emerald-400 font-mono">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {flagship.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs transition-all shadow-sm"
                  >
                    <span>Solicitar Orçamento para seu Projeto</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-950/80 border border-white/5 text-[11px] font-mono text-zinc-400">
                    <Lock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Software Proprietário</span>
                  </div>
                </div>
              </div>

              {/* Right Highlights Column */}
              <div className="lg:col-span-5 rounded-2xl bg-zinc-950/70 border border-white/10 p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 font-semibold uppercase tracking-wider pb-1 border-b border-white/5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  Destaques de Engenharia &amp; Recursos
                </div>

                <div className="space-y-3">
                  {flagship.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Arquitetura: Local-First</span>
                  <span className="text-emerald-400 font-semibold">
                    100% Offline Ready
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Custom Projects & Experience Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-zinc-950 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <Zap className="w-3.5 h-3.5" />
              DESENVOLVIMENTO SOB MEDIDA PARA A SUA EMPRESA
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Precisa de um App Mobile, SaaS, API ou Landing Page?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              O GymUp é a demonstração prática do padrão de código e acabamento
              da tamagolabs. Para conhecer todo o histórico de sistemas e
              empresas atendidas pelo Bruno Fukumori ao longo de mais de 10
              anos, acesse o portfólio individual.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#contato"
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20"
            >
              Solicitar Orçamento
            </a>
            <a
              href={siteConfig.founder.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors border border-white/5 inline-flex items-center gap-1.5"
            >
              Ver Portfólio do Dev
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
