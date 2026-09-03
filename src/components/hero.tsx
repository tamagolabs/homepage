"use client";

import {
  ArrowRight,
  Code2,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        {/* Top Tagline / Category Badge with Mascot & Founder */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 backdrop-blur-md mb-6 shadow-sm hover:border-emerald-500/30 transition-all group"
        >
          <div className="flex items-center -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center p-0.5">
              <Image
                src="/images/tamago-icon.png"
                alt="Mascote tamagolabs"
                width={18}
                height={18}
                className="object-contain"
              />
            </div>
            <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/images/founder-avatar.jpg"
                alt="Bruno"
                width={20}
                height={20}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="font-mono text-[11px] font-medium tracking-wide text-zinc-300">
            ESTÚDIO DE SOFTWARE • ENGENHARIA FULL STACK SÊNIOR
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]"
        >
          Engenharia de software{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            de alta performance
          </span>{" "}
          sem burocracia.
        </motion.h1>

        {/* Value Proposition Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed"
        >
          Construção acelerada e refinada de{" "}
          <strong className="text-zinc-200">APIs escaláveis</strong>,{" "}
          <strong className="text-zinc-200">
            apps mobile com React Native
          </strong>
          ,{" "}
          <strong className="text-zinc-200">
            landing pages nota 100 em Web Vitals
          </strong>{" "}
          e <strong className="text-zinc-200">produtos SaaS completos</strong>.
          Você fala e negocia diretamente com quem constrói o código.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all duration-200 shadow-md shadow-emerald-500/20 active:scale-98 group"
          >
            Falar sobre um projeto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#projetos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-200 font-medium text-sm transition-all duration-200 backdrop-blur-sm"
          >
            Explorar Projetos & Apps
          </a>

          <a
            href={siteConfig.founder.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            Portfólio Pessoal
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Pillars Ticker / Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl text-left"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-mono">
                100% Web Vitals
              </div>
              <div className="text-xs text-zinc-400">
                Páginas ultrarrápidas &lt; 1.0s
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-mono">
                React Native & Expo
              </div>
              <div className="text-xs text-zinc-400">
                iOS & Android em código unificado
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-mono">
                APIs & Microserviços
              </div>
              <div className="text-xs text-zinc-400">
                Baixa latência com Bun & Node
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-mono">
                Engenheiro Sênior
              </div>
              <div className="text-xs text-zinc-400">
                Comunicação 1-a-1 e entrega ágil
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
