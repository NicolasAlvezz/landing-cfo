"use client";

import { useLanguage } from "@/lib/language-context";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";

export default function Voice() {
  const { t } = useLanguage();

  return (
    <section id="voz" className="border-y border-line bg-paper-alt py-[76px] sm:py-[72px]">
      <div className="container-page">
        <Reveal className="max-w-[640px]">
          <SectionEyebrow index="02">{t.voice.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl">
            {t.voice.h2}
          </h2>
          <p className="mt-4.5 text-base leading-relaxed text-ink-soft sm:text-[16.5px]">{t.voice.p}</p>
        </Reveal>

        <Reveal delay={120} className="mt-10 rounded-[4px] bg-ink px-6 py-8 sm:px-9 sm:py-10">
          <p className="max-w-[720px] font-heading text-xl font-bold leading-snug text-bone sm:text-[26px]">
            {t.voice.momentPre} <span className="font-accent-italic font-normal text-accent">{t.voice.momentItalic}</span>
            {t.voice.momentPost}
          </p>
          <p className="mt-4 max-w-[560px] text-[13.5px] leading-relaxed text-fog">{t.voice.momentCaption}</p>
        </Reveal>

        <Reveal delay={200} className="mt-9 overflow-hidden border border-line">
          <div className="grid grid-cols-2">
            <div className="border-r border-line bg-white px-4 py-3.5 sm:px-6">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-forest sm:text-xs">
                {t.voice.colWeSay}
              </span>
            </div>
            <div className="bg-white px-4 py-3.5 sm:px-6">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-faint sm:text-xs">
                {t.voice.colNoSay}
              </span>
            </div>
          </div>
          {t.voice.pairs.map((pair) => (
            <div key={pair.weSay} className="grid grid-cols-2 border-t border-line">
              <div className="border-r border-line bg-white px-4 py-4 text-sm text-ink sm:px-6 sm:text-[14.5px]">
                {pair.weSay}
              </div>
              <div className="bg-white px-4 py-4 font-mono text-[12.5px] text-ink-faint line-through decoration-line sm:px-6 sm:text-[13px]">
                {pair.noSay}
              </div>
            </div>
          ))}
        </Reveal>

        <p className="mt-7 max-w-[640px] text-sm leading-relaxed text-ink-soft">{t.voice.footer}</p>
      </div>
    </section>
  );
}
