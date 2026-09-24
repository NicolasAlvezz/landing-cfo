type SectionEyebrowProps = {
  index: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export default function SectionEyebrow({ index, children, tone = "light" }: SectionEyebrowProps) {
  const label = tone === "light" ? "text-ink-faint" : "text-fog";
  const rule = tone === "light" ? "bg-line" : "bg-line-dark";
  const indexColor = tone === "light" ? "text-accent-dark" : "text-accent";

  return (
    <div className={`flex items-center gap-2.5 font-mono text-[12.5px] font-medium ${label}`}>
      <span className={indexColor}>{index}</span>
      <span className={`h-px w-5 ${rule}`} />
      <span className="uppercase tracking-[0.12em]">{children}</span>
    </div>
  );
}
