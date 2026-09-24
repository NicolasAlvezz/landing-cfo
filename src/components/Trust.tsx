"use client";

import { useLanguage } from "@/lib/language-context";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import { CheckIcon } from "@/components/icons";

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section className="bg-ink py-[76px] sm:py-[76px]">
      <Spotlight color="rgba(91,141,239,0.12)" className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="right">
            <SectionEyebrow index="05" tone="dark">
              {t.trust.eyebrow}
            </SectionEyebrow>
            <h2 className="mt-4 font-heading text-[26px] font-bold leading-tight tracking-[-0.01em] text-bone sm:text-4xl">
              {t.trust.h2}
            </h2>
            <p className="mt-4.5 max-w-[400px] text-base leading-relaxed text-fog">
              {t.trust.p}
            </p>
          </Reveal>

          <div className="flex flex-col">
            {t.trust.concerns.map((item, i) => (
              <Reveal
                key={item.concern}
                delay={i * 90}
                className={`flex gap-4 py-[22px] ${i === t.trust.concerns.length - 1 ? "border-y" : "border-t"} border-line-dark`}
              >
                <CheckIcon color="var(--color-accent)" className="mt-1 shrink-0" />
                <div>
                  <p className={`text-[15px] font-semibold text-bone ${item.italic ? "font-accent-italic font-semibold" : ""}`}>
                    {item.concern}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fog">
                    {item.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Spotlight>
    </section>
  );
}
