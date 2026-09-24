"use client";

import { useLanguage } from "@/lib/language-context";
import { FinoraMark } from "@/components/FinoraMark";
import ProductPreview from "@/components/ProductPreview";
import Spotlight from "@/components/Spotlight";
import Magnetic from "@/components/Magnetic";
import CountUp from "@/components/CountUp";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <svg
        width="900"
        height="900"
        viewBox="0 0 900 900"
        className="pointer-events-none absolute -right-[260px] -top-[260px] opacity-40"
        aria-hidden="true"
      >
        <circle cx="450" cy="450" r="449" fill="none" stroke="var(--color-line-dark)" strokeWidth="1" />
        <circle cx="450" cy="450" r="360" fill="none" stroke="var(--color-line-dark)" strokeWidth="1" />
        <circle cx="450" cy="450" r="270" fill="none" stroke="var(--color-line-dark)" strokeWidth="1" />
      </svg>

      <Spotlight className="relative">
        <div className="container-page relative grid grid-cols-1 gap-14 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div className="max-w-[600px]">
            <div className="animate-fade-up inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              <FinoraMark size={13} color="var(--color-accent)" />
              {t.hero.badge}
            </div>

            <h1
              className="animate-fade-up mt-[22px] font-heading text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-bone sm:text-5xl lg:text-[62px]"
              style={{ animationDelay: "80ms" }}
            >
              {t.hero.h1.line1}
              <br />
              <span className="text-accent">{t.hero.h1.highlight}</span> {t.hero.h1.line2}
            </h1>

            <p
              className="animate-fade-up mt-[26px] max-w-[540px] text-lg leading-relaxed text-fog sm:text-[18px]"
              style={{ animationDelay: "160ms" }}
            >
              {t.hero.p}
            </p>

            <div
              className="animate-fade-up mt-[38px] flex flex-col flex-wrap gap-3.5 sm:flex-row"
              style={{ animationDelay: "240ms" }}
            >
              <Magnetic>
                <a
                  href="#demo"
                  className="focus-ring inline-flex items-center justify-center rounded-[3px] bg-accent px-[30px] py-[15px] text-[15.5px] font-semibold text-ink transition-shadow hover:shadow-[0_10px_28px_-10px_rgba(192,132,58,0.55)]"
                >
                  {t.hero.ctaPrimary}
                </a>
              </Magnetic>
              <a
                href="#producto"
                className="focus-ring inline-flex items-center justify-center rounded-[3px] border-[1.5px] border-line-dark px-[30px] py-[15px] text-[15.5px] font-semibold text-bone transition-colors hover:bg-white/5"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <p
              className="animate-fade-up mt-7 text-[13.5px] text-fog"
              style={{ animationDelay: "300ms" }}
            >
              {t.hero.integrations}
            </p>

            <div
              className="animate-fade-up mt-12 grid grid-cols-1 gap-px border border-line-dark bg-line-dark sm:grid-cols-3"
              style={{ animationDelay: "360ms" }}
            >
              {t.hero.stats.map((stat) => (
                <div key={stat.label} className="bg-ink px-5 py-[20px]">
                  <div className="font-mono text-lg font-medium text-bone">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="mt-1.5 text-[11.5px] leading-snug text-fog">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <ProductPreview data={t.hero.preview} />
          </div>
        </div>
      </Spotlight>
    </section>
  );
}
