"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { siteConfig } from "@/data/site-config";
import { useI18n } from "@/i18n/context";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { dict, locale } = useI18n();

  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-16 text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2.5 group w-fit"
              aria-label={dict.nav.brandAria}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/tamago-icon.png"
                  alt="tamagolabs"
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              {dict.footer.tagline}. {dict.footer.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              {dict.footer.developerCredit}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 block mb-3">
              {dict.footer.navHeader}
            </span>
            <ul className="space-y-2 text-xs">
              {dict.nav.links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links & Portfolio */}
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 block mb-3">
              {dict.footer.linksHeader}
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={siteConfig.founder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-emerald-400 font-semibold"
                >
                  {dict.footer.portfolio}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.founder.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  {dict.footer.github}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.founder.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  {dict.footer.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <div>
            © {currentYear} {siteConfig.legalName}. {dict.footer.rightsReserved}
          </div>
          <div className="flex items-center gap-1">{dict.footer.builtWith}</div>
        </div>
      </div>
    </footer>
  );
}
