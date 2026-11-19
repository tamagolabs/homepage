"use client";

import {
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  Globe,
  Monitor,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { ItchIoIcon } from "@/components/social-icons";
import { siteConfig } from "@/data/site-config";
import { useI18n } from "@/i18n/context";
import type { IndieGameItem } from "@/i18n/dictionaries/pt";

function PlatformIcon({ platform }: { platform: string }) {
  const normalized = platform.toLowerCase();
  if (normalized.includes("web") || normalized.includes("browser")) {
    return <Globe className="w-3 h-3 text-rose-400 shrink-0" />;
  }
  return <Monitor className="w-3 h-3 text-violet-400 shrink-0" />;
}

function FeaturedGameCard({
  game,
  platformsLabel,
}: {
  game: IndieGameItem;
  platformsLabel: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-zinc-900/50 border border-white/10 p-6 sm:p-10 relative overflow-hidden group hover:border-rose-500/35 transition-all duration-300"
    >
      {/* Ambient Rose & Violet Glow */}
      <div className="absolute -top-32 -left-24 w-96 h-96 bg-rose-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Media Column */}
        <div className="lg:col-span-6 space-y-4">
          <a
            href={game.itchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl shadow-rose-500/10 relative group/cover"
          >
            <Image
              src={game.coverUrl}
              alt={game.coverAlt}
              width={1024}
              height={764}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-cover object-center group-hover/cover:scale-[1.03] transition-transform duration-500"
            />
          </a>

          {/* Micro-metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {game.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3 rounded-xl bg-zinc-950/70 border border-white/5"
              >
                <div className="text-xs font-bold text-rose-400 font-mono">
                  {metric.value}
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Platforms Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mr-1">
              {platformsLabel}:
            </span>
            {game.platforms.map((platform) => (
              <span
                key={platform}
                className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-950/80 text-zinc-200 border border-white/10"
              >
                <PlatformIcon platform={platform} />
                <span>{platform}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Editorial Column */}
        <div className="lg:col-span-6 space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-[11px] font-mono text-rose-300 font-semibold tracking-wide">
              <Sparkles className="w-3 h-3" />
              {game.badge}
            </span>
            <span className="text-xs font-mono text-violet-300">
              {game.genre}
            </span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {game.title}
            </h3>
            {game.subtitleJp && (
              <p className="text-xs font-mono text-rose-300/80 mt-0.5">
                {game.subtitleJp}
              </p>
            )}
            <p className="text-sm sm:text-base text-zinc-200 font-medium mt-1.5">
              {game.tagline}
            </p>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            {game.description}
          </p>

          {/* Highlights Panel */}
          <div className="rounded-2xl bg-zinc-950/70 border border-white/10 p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 font-semibold uppercase tracking-wider pb-1 border-b border-white/5">
              <Gamepad2 className="w-3.5 h-3.5 text-rose-400" />
              {game.highlightsTitle}
            </div>

            <div className="space-y-2.5">
              {game.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Authorial Game Actions (no B2B quote CTA) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={game.itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-rose-500 to-violet-500 hover:from-rose-400 hover:to-violet-400 text-white font-bold text-xs transition-all shadow-md shadow-rose-500/20 group/btn"
            >
              <ItchIoIcon className="w-4 h-4 shrink-0" />
              <span>{game.primaryCtaLabel}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-950/80 border border-white/10 text-[11px] font-mono text-zinc-300">
              <Gamepad2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>{game.studioLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function SecondaryGameCard({ game }: { game: IndieGameItem }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl bg-zinc-900/50 border border-white/10 p-6 relative overflow-hidden hover:border-rose-500/35 transition-all duration-300 flex flex-col justify-between gap-5"
    >
      <div className="space-y-4">
        <a
          href={game.itchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-zinc-950 group/cover"
        >
          <Image
            src={game.coverUrl}
            alt={game.coverAlt}
            width={1024}
            height={764}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover object-center group-hover/cover:scale-[1.03] transition-transform duration-500"
          />
        </a>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-[11px] font-mono text-rose-300 font-semibold">
            {game.badge}
          </span>
          <span className="text-xs font-mono text-violet-300">
            {game.genre}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {game.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1">
            {game.tagline}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          {game.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {game.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href={game.itchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-rose-500 to-violet-500 hover:from-rose-400 hover:to-violet-400 text-white font-bold text-xs transition-all shadow-md shadow-rose-500/20"
        >
          <ItchIoIcon className="w-3.5 h-3.5 shrink-0" />
          <span>{game.primaryCtaLabel}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.article>
  );
}

export function IndieGames() {
  const { dict } = useI18n();
  const featuredGames = dict.games.items.filter((game) => game.featured);
  const secondaryGames = dict.games.items.filter((game) => !game.featured);

  return (
    <section
      id="games"
      className="py-24 relative border-t border-rose-500/15 scroll-mt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 radial-glow-games pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-300">
                <Gamepad2 className="w-3.5 h-3.5" />
                {dict.games.badge}
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {dict.games.divisionNote}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {dict.games.title}
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-2xl">
              {dict.games.subtitle}
            </p>
          </div>

          <a
            href={siteConfig.itchIoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-rose-400/40 text-sm font-medium text-zinc-200 hover:text-white transition-all duration-200 shrink-0 self-start md:self-auto"
          >
            <ItchIoIcon className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{dict.games.itchProfileLink}</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Featured Game Showcase(s) */}
        <div className="space-y-8">
          {featuredGames.map((game) => (
            <FeaturedGameCard
              key={game.id}
              game={game}
              platformsLabel={dict.games.platformsLabel}
            />
          ))}
        </div>

        {/* Additional Games Grid (for future releases) */}
        {secondaryGames.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {secondaryGames.map((game) => (
              <SecondaryGameCard key={game.id} game={game} />
            ))}
          </div>
        )}

        {/* Creative Lab Banner */}
        <div className="mt-8 rounded-2xl bg-linear-to-r from-zinc-900 via-rose-950/20 to-violet-950/20 border border-rose-500/15 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-rose-300">
              <Sparkles className="w-3.5 h-3.5" />
              {dict.games.labBanner.badge}
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {dict.games.labBanner.title}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              {dict.games.labBanner.description}
            </p>
          </div>

          <a
            href={siteConfig.itchIoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-rose-500/30 hover:border-rose-400/50 text-rose-200 hover:text-white font-semibold text-xs transition-all shrink-0"
          >
            <ItchIoIcon className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{dict.games.labBanner.ctaLabel}</span>
            <ExternalLink className="w-3.5 h-3.5 text-rose-300/80" />
          </a>
        </div>
      </div>
    </section>
  );
}
