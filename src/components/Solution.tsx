"use client";

import { useLanguage } from "@/lib/language-context";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";

export default function Solution() {
  const { t } = useLanguage();

  return (
    <section id="producto" className="bg-paper py-[76px] sm:py-[72px]">
      <div className="container-page">
        <Reveal className="max-w-[640px]">
          <SectionEyebrow index="03">{t.solution.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl">
            {t.solution.h2}
          </h2>
          <p className="mt-4.5 text-base leading-relaxed text-ink-soft sm:text-[16.5px]">
            {t.solution.p}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-[1.4fr_1fr_1fr]">
          <Reveal delay={0} direction="right" className="sm:row-span-2">
            <div className="flex h-full flex-col justify-between bg-ink p-7 sm:p-9">
              <div>
                <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent">
                  {t.solution.heroCard.badge}
                </div>
                <h3 className="mt-3.5 font-heading text-xl font-bold leading-tight tracking-[-0.01em] text-bone sm:text-[23px]">
                  {t.solution.heroCard.title}
                </h3>
                <p className="mt-3 max-w-[320px] text-sm leading-relaxed text-fog">
                  {t.solution.heroCard.desc}
                </p>
              </div>
              <svg width="100%" height="90" viewBox="0 0 320 90" className="mt-6">
                <polyline
                  points="0,70 40,60 80,64 120,40 160,48"
                  fill="none"
                  stroke="var(--color-signal)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="160,48 200,20 240,30 280,10 320,16"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="160" cy="48" r="4" fill="var(--color-signal)" />
                <circle cx="320" cy="16" r="4" fill="var(--color-accent)" />
              </svg>
            </div>
          </Reveal>

          {t.solution.topFeatures.map((f, i) => (
            <Reveal key={f.title} delay={80 + i * 70}>
              <div className="h-full bg-white p-7">
                <div className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-ink-faint">
                  {f.label}
                </div>
                <h3 className="mt-3 text-[16.5px] font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-px grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
          {t.solution.bottomFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="h-full bg-white p-7">
                <div className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-ink-faint">
                  {f.label}
                </div>
                <h3 className="mt-3 text-[16.5px] font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
