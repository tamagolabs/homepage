"use client";

import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site-config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-3 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-full px-4 sm:px-5 py-2.5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
            : "bg-zinc-900/60 backdrop-blur-lg border border-white/10"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-full"
          aria-label="tamagolabs - Ir para o início"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center p-1 group-hover:scale-105 group-hover:border-emerald-400/40 transition-all duration-300">
            <Image
              src="/images/tamago-icon.png"
              alt="Mascote tamagolabs"
              width={26}
              height={26}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-sm font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-zinc-950/40 p-1 rounded-full border border-white/5"
          aria-label="Navegação principal"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/8 transition-all duration-150"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions & Status Badge */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Subtle Live Availability indicator */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span>Disponível</span>
          </div>

          {/* Sleek CTA Button */}
          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold tracking-tight transition-all duration-200 shadow-sm shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-95 group"
          >
            <span>Iniciar Projeto</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Card */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-5xl mx-auto mt-2 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span>Disponível para novos projetos</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-1">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-white/5">
              {/* biome-ignore lint/a11y/useValidAnchor: Standard in-page anchor that closes mobile menu */}
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-all active:scale-98"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Iniciar Projeto com Engenheiro
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
