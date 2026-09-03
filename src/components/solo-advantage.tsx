"use client";

import { ArrowRight, Check, Shield, X } from "lucide-react";
import { motion } from "motion/react";
import { soloAdvantages } from "@/data/solo-advantages";

export function SoloAdvantage() {
  return (
    <section
      id="diferencial"
      className="py-24 relative border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400 mb-3">
            O MODELO SOLO FOUNDER
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Por que contratar um Dev Solo Sênior em vez de uma Agência?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Elimine as camadas burocráticas de agências convencionais. Trabalhe
            lado a lado com quem tem a visão holística do produto e o rigor
            técnico para executar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {soloAdvantages.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-zinc-900/40 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-4 my-6">
                  {/* Agency drawback */}
                  <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/15 flex items-start gap-3">
                    <div className="p-1 rounded bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs text-zinc-300">
                      <span className="font-semibold text-red-300 block mb-0.5 font-mono uppercase tracking-wider text-[10px]">
                        Agências Tradicionais:
                      </span>
                      {item.agencyWay}
                    </div>
                  </div>

                  {/* Tamago Advantage */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-start gap-3">
                    <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs text-zinc-200">
                      <span className="font-semibold text-emerald-400 block mb-0.5 font-mono uppercase tracking-wider text-[10px]">
                        Com a tamagolabs:
                      </span>
                      {item.tamagoWay}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-medium">
                  <Shield className="w-3.5 h-3.5" />
                  {item.impact}
                </div>
                <a
                  href="#contato"
                  className="text-xs text-zinc-400 hover:text-white font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Saiba mais <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
