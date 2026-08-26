"use client";

import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <svg
        width="900"
        height="900"
        viewBox="0 0 900 900"
        className="pointer-events-none absolute -right-[260px] -top-[260px] opacity-50"
      >
        <circle cx="450" cy="450" r="449" fill="none" stroke="oklch(0.28 0.02 50)" strokeWidth="1" />
        <circle cx="450" cy="450" r="360" fill="none" stroke="oklch(0.26 0.02 50)" strokeWidth="1" />
        <circle cx="450" cy="450" r="270" fill="none" stroke="oklch(0.24 0.02 50)" strokeWidth="1" />
      </svg>

      <div className="container-page relative pt-16 pb-16 sm:pt-20 sm:pb-16">
        <div className="max-w-[760px]">
          <div className="animate-fade-up inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[oklch(0.78_0.09_50)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t.hero.badge}
          </div>

          <h1
            className="animate-fade-up mt-[22px] font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[64px]"
            style={{ animationDelay: "80ms" }}
          >
            {t.hero.h1}
          </h1>

          <p
            className="animate-fade-up mt-[26px] max-w-[600px] text-lg leading-relaxed text-[oklch(0.78_0.015_60)] sm:text-[19px]"
            style={{ animationDelay: "160ms" }}
          >
            {t.hero.p}
          </p>

          <div
            className="animate-fade-up mt-[38px] flex flex-col flex-wrap gap-3.5 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-[3px] bg-accent px-[30px] py-[15px] text-[15.5px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#problema"
              className="inline-flex items-center justify-center rounded-[3px] border-[1.5px] border-white/28 px-[30px] py-[15px] text-[15.5px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <p
            className="animate-fade-up mt-7 text-[13.5px] text-[oklch(0.55_0.015_55)]"
            style={{ animationDelay: "300ms" }}
          >
            {t.hero.integrations}
          </p>
        </div>

        <div
          className="animate-fade-up mt-16 grid grid-cols-1 gap-px border border-[oklch(0.30_0.02_50)] bg-[oklch(0.30_0.02_50)] sm:grid-cols-3"
          style={{ animationDelay: "360ms" }}
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="bg-ink px-5 py-[22px]">
              <div className="font-serif text-xl font-semibold text-white">{stat.value}</div>
              <div className="mt-1.5 text-xs leading-snug text-[oklch(0.6_0.015_55)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
