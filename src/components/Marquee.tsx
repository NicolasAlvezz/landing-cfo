type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  tone?: "light" | "dark";
  className?: string;
};

export default function Marquee({ items, reverse = false, tone = "light", className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  const pill =
    tone === "light"
      ? "border border-line bg-paper text-ink-soft"
      : "border border-line-dark bg-ink/50 text-fog";

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div className={`flex w-max gap-2.5 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`inline-flex shrink-0 whitespace-nowrap rounded-full px-[15px] py-[7px] text-[13px] font-medium ${pill}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
