"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { siteConfig } from "@/data/site-config";
import { useI18n } from "@/i18n/context";

export function Founder() {
  const { dict } = useI18n();

  return (
    <section
      id="fundador"
      className="py-24 relative border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-zinc-900/60 border border-white/10 p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Subtle glow effect */}
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Avatar / Visual representation */}
          <div className="relative shrink-0">
            <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-3xl bg-linear-to-tr from-emerald-500/30 via-teal-500/20 to-white/10 p-1 shadow-2xl shadow-emerald-500/10">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-zinc-950">
                <Image
                  src={siteConfig.founder.avatarUrl}
                  alt={dict.founder.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-emerald-500 text-zinc-950 text-[10px] font-bold font-mono shadow-lg shadow-emerald-500/30 border border-zinc-950">
              {dict.founder.roleBadge}
            </div>
          </div>

          {/* Bio & Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {dict.founder.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {dict.founder.name}
            </h3>
            <p className="text-sm font-medium text-emerald-400 font-mono mt-0.5 mb-4">
              {dict.founder.role}
            </p>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6 max-w-2xl">
              {dict.founder.bio} {dict.founder.statement}
            </p>

            {/* Social & Portfolio links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href={siteConfig.founder.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs transition-all shadow-sm"
              >
                {dict.founder.ctaPortfolio}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.founder.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors border border-white/5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                {dict.founder.ctaGithub}
              </a>

              <a
                href={siteConfig.founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors border border-white/5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                {dict.founder.ctaLinkedin}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Brand & Mascot Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 rounded-3xl bg-zinc-900/40 border border-white/10 p-8 sm:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1 space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              {dict.founder.brandCard.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {dict.founder.brandCard.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              {dict.founder.brandCard.description1}{" "}
              <strong className="text-zinc-200">
                {dict.founder.brandCard.tamagoWord}
              </strong>{" "}
              {dict.founder.brandCard.description2}{" "}
              <strong className="text-emerald-400">
                {dict.founder.brandCard.incubationHighlight}
              </strong>
              {dict.founder.brandCard.description3}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2 justify-center md:justify-start">
              {dict.founder.brandCard.pills.map((pill) => (
                <span
                  key={pill}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/5"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Mascot Illustration */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="w-48 h-44 sm:w-56 sm:h-52 relative flex items-center justify-center p-2 group">
              <div className="absolute inset-0 bg-emerald-500/15 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all duration-500" />
              <Image
                src="/images/tamago-mascot-trimmed.png"
                alt={dict.founder.brandCard.altMascot}
                width={240}
                height={220}
                className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
