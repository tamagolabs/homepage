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
import { useI18n } from "@/i18n/context";

const iconMap = [Zap, Smartphone, Code2, ShieldCheck];
const colorMap = [
  {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
  },
  {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
  },
  {
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    text: "text-teal-400",
  },
  {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
  },
];

export function Hero() {
  const { dict } = useI18n();

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
            {dict.hero.badge}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]"
        >
          {dict.hero.titlePrefix}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            {dict.hero.titleHighlight}
          </span>{" "}
          {dict.hero.titleSuffix}
        </motion.h1>

        {/* Value Proposition Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed"
        >
          {dict.hero.description.p1}{" "}
          <strong className="text-zinc-200">{dict.hero.description.api}</strong>
          ,{" "}
          <strong className="text-zinc-200">
            {dict.hero.description.mobile}
          </strong>
          ,{" "}
          <strong className="text-zinc-200">
            {dict.hero.description.landing}
          </strong>{" "}
          e{" "}
          <strong className="text-zinc-200">
            {dict.hero.description.saas}
          </strong>
          . {dict.hero.description.p2}
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
            {dict.hero.ctaPrimary}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#projetos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-200 font-medium text-sm transition-all duration-200 backdrop-blur-sm"
          >
            {dict.hero.ctaSecondary}
          </a>

          <a
            href={siteConfig.founder.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            {dict.hero.ctaPortfolio}
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
          {dict.hero.pillars.map((pillar, i) => {
            const Icon = iconMap[i] || Zap;
            const colors = colorMap[i] || colorMap[0];
            return (
              <div key={pillar.title} className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg ${colors.bg} border ${colors.border} ${colors.text} shrink-0`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-mono">
                    {pillar.title}
                  </div>
                  <div className="text-xs text-zinc-400">{pillar.desc}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
