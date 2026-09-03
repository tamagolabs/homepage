"use client";

import {
  ArrowRight,
  CheckCircle2,
  Layers,
  LayoutTemplate,
  Server,
  Smartphone,
} from "lucide-react";
import { motion } from "motion/react";
import { services } from "@/data/services";

const iconMap = {
  api: Server,
  mobile: Smartphone,
  saas: Layers,
  landing: LayoutTemplate,
};

export function Services() {
  return (
    <section
      id="servicos"
      className="py-24 relative border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400 mb-3">
            O QUE FAZEMOS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Especialidades construídas com maestria técnica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Foco cirúrgico em quatro áreas onde um desenvolvedor solo experiente
            supera equipes inteiras em agilidade, custo e qualidade de entrega.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-2xl bg-zinc-900/50 border ${
                  service.highlight
                    ? "border-emerald-500/30 shadow-lg shadow-emerald-500/5"
                    : "border-white/10"
                } p-6 sm:p-8 hover:border-emerald-400/50 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-800/90 text-zinc-300 border border-white/5">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400/90 mb-3 font-mono">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2 font-mono">
                      O que está incluso:
                    </span>
                    {service.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {service.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contato"
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    Cotar {service.id.toUpperCase()}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
