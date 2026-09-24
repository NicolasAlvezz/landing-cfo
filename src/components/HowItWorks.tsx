"use client";

import { useLanguage } from "@/lib/language-context";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import { useInView } from "@/lib/useInView";

type Step = { title: string; desc: string };

function StepCard({ step, index }: { step: Step; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const delay = index * 110;

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-mono text-[15px] font-medium text-accent-dark">{String(index + 1).padStart(2, "0")}</div>
      <div className="relative mt-[14px] h-px overflow-hidden bg-line">
        <div
          className="absolute inset-y-0 left-0 h-px bg-accent transition-[width] duration-700 ease-out"
          style={{ transitionDelay: `${delay + 250}ms`, width: inView ? "100%" : "0%" }}
        />
      </div>
      <h3 className="mt-[18px] text-lg font-semibold text-ink">{step.title}</h3>
      <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{step.desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="como-funciona" className="bg-paper py-[76px] sm:py-[72px]">
      <div className="container-page">
        <Reveal className="max-w-[640px]">
          <SectionEyebrow index="04">{t.howItWorks.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl">
            {t.howItWorks.h2}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.steps.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
