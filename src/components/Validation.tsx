"use client";

import { useLanguage } from "@/lib/language-context";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export default function Validation() {
  const { t } = useLanguage();

  return (
    <section id="validacion" className="border-b border-line bg-paper-alt py-[76px] sm:py-[72px]">
      <div className="container-page">
        <Reveal className="max-w-[640px]">
          <SectionEyebrow index="06">{t.validation.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl">
            {t.validation.h2}
          </h2>
          <p className="mt-4.5 text-base leading-relaxed text-ink-soft sm:text-[16.5px]">
            {t.validation.p}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
          <Reveal delay={0}>
            <div className="h-full bg-white p-8">
              <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-ink-faint">
                {t.validation.card1.title}
              </h3>
              <p className="mt-3.5 font-heading text-xl font-bold leading-snug tracking-[-0.01em] text-ink">
                {t.validation.card1.desc}
              </p>
              <Marquee items={t.validation.sectors} className="mt-5 -mx-8 px-8" />
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="h-full bg-white p-8">
              <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-ink-faint">
                {t.validation.card2.title}
              </h3>
              <p className="mt-3.5 font-heading text-xl font-bold leading-snug tracking-[-0.01em] text-ink">
                {t.validation.card2.desc}
              </p>
              <Marquee items={t.validation.systems} reverse className="mt-5 -mx-8 px-8" />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="h-full bg-white p-8">
              <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-ink-faint">
                {t.validation.card3.title}
              </h3>
              <p className="mt-3.5 font-heading text-2xl font-bold leading-snug tracking-[-0.01em] text-ink">
                {t.validation.card3.desc}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{t.validation.card3.sub}</p>
            </div>
          </Reveal>
        </div>

        <p className="mt-9 max-w-[640px] text-sm leading-relaxed text-ink-faint">
          {t.validation.footer}
        </p>
      </div>
    </section>
  );
}
