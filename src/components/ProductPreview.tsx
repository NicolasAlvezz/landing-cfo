"use client";

import { useEffect, useRef } from "react";
import type { Translations } from "@/lib/translations";
import { FinoraMark } from "@/components/FinoraMark";
import { useInView } from "@/lib/useInView";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

type Preview = Translations["hero"]["preview"];

export default function ProductPreview({ data }: { data: Preview }) {
  const { ref: chartRef, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  const realRef = useRef<SVGPolylineElement>(null);
  const projRef = useRef<SVGPolylineElement>(null);
  const bandRef = useRef<SVGPolygonElement>(null);
  const markerRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!inView) return;

    [realRef, projRef].forEach((lineRef, i) => {
      const el = lineRef.current;
      if (!el) return;
      const length = el.getTotalLength();
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.getBoundingClientRect();
      el.style.transition = `stroke-dashoffset 1000ms ease-out ${i * 300 + 100}ms`;
      requestAnimationFrame(() => {
        el.style.strokeDashoffset = "0";
      });
    });

    if (bandRef.current) {
      bandRef.current.style.transition = "opacity 800ms ease-out 650ms";
      requestAnimationFrame(() => {
        bandRef.current!.style.opacity = "0.55";
      });
    }

    if (markerRef.current) {
      markerRef.current.style.transformOrigin = "230px 118px";
      markerRef.current.style.transition =
        "transform 480ms cubic-bezier(0.34,1.56,0.64,1) 1150ms, opacity 300ms ease-out 1150ms";
      requestAnimationFrame(() => {
        markerRef.current!.style.opacity = "1";
        markerRef.current!.style.transform = "scale(1)";
      });
    }
  }, [inView]);

  return (
    <div>
      <div className="overflow-hidden rounded-[10px] border border-line-dark bg-marine shadow-[0_30px_60px_-30px_rgba(7,19,47,0.6)]">
        <div className="flex items-center justify-between gap-3 border-b border-line-dark bg-ink px-4 py-3 sm:px-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[6px]">
              <FinoraMark size={15} color="var(--color-accent)" />
              <span className="font-heading text-[13.5px] font-bold tracking-[-0.02em] text-bone">
                finora
              </span>
            </div>
            <div className="hidden items-center gap-2.5 lg:flex">
              {data.tabs.map((tab, i) => (
                <span
                  key={tab}
                  className={`whitespace-nowrap text-[11.5px] font-medium ${
                    i === 0 ? "text-bone" : "text-fog"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>
          <span className="whitespace-nowrap rounded-[3px] bg-accent px-3 py-[7px] text-[11.5px] font-semibold text-ink">
            {data.ctaButton}
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start gap-2.5 rounded-[4px] border border-accent/35 bg-ink/60 px-4 py-3.5">
            <span className="relative mt-[5px] h-[7px] w-[7px] shrink-0 rounded-full bg-danger text-danger pulse-dot" />
            <div>
              <div className="font-mono text-[10.5px] font-medium uppercase tracking-[0.09em] text-accent">
                {data.alertLabel}
              </div>
              <p className="mt-1 text-[14px] leading-snug text-bone sm:text-[15px]">
                {data.alertPrefix}{" "}
                <span className="font-accent-italic text-accent">{data.alertDate}</span>{" "}
                {data.alertMiddle}{" "}
                <span className="font-mono font-semibold text-danger">{data.alertAmount}</span>
                {data.alertEnd}
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {data.kpis.map((kpi, i) => (
              <Reveal key={kpi.label} delay={i * 90} direction="up">
                <div className="rounded-[4px] border border-line-dark bg-ink/50 px-3 py-2.5">
                  <div className="font-heading text-[15px] font-bold text-bone sm:text-[16px]">
                    <CountUp value={kpi.value} />
                  </div>
                  <div className="mt-0.5 text-[10.5px] leading-tight text-fog">{kpi.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div ref={chartRef} className="mt-3 rounded-[4px] border border-line-dark bg-ink/50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-fog">
                {data.chartLabel}
              </span>
              <div className="flex items-center gap-3 text-[10.5px] text-fog">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-[2px] w-3 bg-signal" /> {data.legend.real}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-[2px] w-3 border-t border-dashed border-accent" /> {data.legend.projected}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-[7px] w-[7px] rounded-[1px] bg-line-dark" /> {data.legend.confidence}
                </span>
              </div>
            </div>

            <svg viewBox="0 0 400 140" className="mt-3 w-full" preserveAspectRatio="none">
              <polygon
                ref={bandRef}
                points="150,70 190,88 230,118 270,102 310,80 350,66 350,140 150,140"
                fill="var(--color-line-dark)"
                opacity="0"
              />
              <polyline
                ref={realRef}
                points="10,44 50,50 90,46 130,58 150,70"
                fill="none"
                stroke="var(--color-signal)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="150" cy="70" r="3.5" fill="var(--color-signal)" />
              <polyline
                ref={projRef}
                points="150,70 190,88 230,118 270,102 310,80 350,66"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2.25"
                strokeDasharray="6 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="0" y1="118" x2="400" y2="118" stroke="var(--color-line-dark)" strokeWidth="1" />
              <circle
                ref={markerRef}
                cx="230"
                cy="118"
                r="3.5"
                fill="var(--color-danger)"
                opacity="0"
                style={{ transform: "scale(0)" }}
              />
              <text x="238" y="122" fill="var(--color-danger)" fontSize="10" fontFamily="var(--font-mono)">
                {data.chartMarker}
              </text>
            </svg>

            <div className="mt-1 flex justify-between font-mono text-[10px] text-fog">
              {data.xLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="whitespace-nowrap rounded-full border border-line-dark px-2.5 py-1 font-mono text-[10px] text-fog"
              >
                {tag}
              </span>
            ))}
            <span className="whitespace-nowrap rounded-full border border-accent/45 px-2.5 py-1 font-mono text-[10px] font-medium text-accent">
              {data.pendingBadge}
            </span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-[11.5px] text-ink-faint sm:text-left">{data.caption}</p>
    </div>
  );
}
