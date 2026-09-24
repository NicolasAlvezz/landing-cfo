"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/lib/useInView";
import { useLanguage } from "@/lib/language-context";

function splitNumeric(raw: string) {
  const match = raw.match(/^([^\d]*)([\d.,]+)([\s\S]*)$/);
  if (!match) return null;
  return { prefix: match[1], numRaw: match[2], suffix: match[3] };
}

export default function CountUp({
  value,
  duration = 1000,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const { locale } = useLanguage();
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const parsed = splitNumeric(value);
    if (!parsed) return;
    const { prefix, numRaw, suffix } = parsed;

    const thousandSep = locale === "es" ? "." : ",";
    const decimalSep = locale === "es" ? "," : ".";
    const decimalIndex = numRaw.lastIndexOf(decimalSep);
    const decimals = decimalIndex >= 0 ? numRaw.length - decimalIndex - 1 : 0;
    const normalized = numRaw.split(thousandSep).join("").replace(decimalSep, ".");
    const target = parseFloat(normalized);
    if (Number.isNaN(target)) return;

    const formatter = new Intl.NumberFormat(locale === "es" ? "es-UY" : "en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${prefix}${formatter.format(target * eased)}${suffix}`);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, locale, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
