"use client";

import { CheckCircle2, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { techStack } from "@/data/tech-stack";

export function TechStack() {
  return (
    <section
      id="stack"
      className="py-24 relative border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400 mb-3">
            TECNOLOGIAS & FERRAMENTAS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Ecossistema Full Stack, Cloud & Engenharia Moderna
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Ferramentas selecionadas para máxima velocidade de desenvolvimento,
            performance em tempo de execução e manutenção simples a longo prazo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="p-4 rounded-xl bg-zinc-900/40 border border-white/10 hover:border-emerald-500/40 hover:bg-zinc-900/80 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {tech.category}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-snug">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Terminal callout box */}
        <div className="mt-12 rounded-xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-zinc-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>bun run --filter @tamagolabs/studio build:production</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Type-Safe
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Zero-runtime bloat
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Edge Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
