"use client";

import { useLanguage } from "@/lib/language-context";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problema" className="bg-paper py-16 sm:py-[72px]">
      <div className="container-page">
        <Reveal className="max-w-[640px]">
          <SectionEyebrow index="01">{t.problem.eyebrow}</SectionEyebrow>
          <h2 className="mt-3.5 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl">
            {t.problem.h2}
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-ink-soft sm:text-[16.5px]">
            {t.problem.p}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-9 overflow-hidden border border-line">
          <div className="grid grid-cols-2">
            <div className="border-r border-line bg-paper-alt px-4 py-3.5 sm:px-6">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-faint sm:text-xs">
                {t.problem.colBefore}
              </span>
            </div>
            <div className="bg-ink px-4 py-3.5 sm:px-6">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent sm:text-xs">
                {t.problem.colAfter}
              </span>
            </div>
          </div>
          {t.problem.rows.map((row) => (
            <div key={row.before} className="grid grid-cols-2 border-t border-line">
              <div className="border-r border-line px-4 py-4 text-sm text-ink-soft sm:px-6 sm:text-[14.5px]">
                {row.before}
              </div>
              <div className="px-4 py-4 text-sm text-ink sm:px-6 sm:text-[14.5px]">{row.after}</div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={200} className="mt-7 border-l-[3px] border-accent bg-paper-alt px-5 py-4 sm:px-7">
          <p className="font-accent-italic text-base leading-snug text-ink sm:text-[17px]">
            {t.problem.quote}
          </p>
          <p className="mt-2 text-[13px] text-ink-faint">{t.problem.quoteAttribution}</p>
        </Reveal>
      </div>
    </section>
  );
}
