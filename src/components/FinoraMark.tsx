type FinoraMarkProps = {
  size?: number;
  className?: string;
  color?: string;
};

/**
 * Isotipo "Llena": chispa de 4 puntas sobre grilla 48x48, radio 22,
 * manijas sobre los ejes a 0.387 del radio (manual de marca, sección 02).
 */
export function FinoraMark({ size = 24, className, color = "currentColor" }: FinoraMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 2 C24 10.51 32.51 24 46 24 C32.51 24 24 37.49 24 46 C24 37.49 15.49 24 2 24 C15.49 24 24 10.51 24 2 Z"
        fill={color}
      />
    </svg>
  );
}

type FinoraLogoProps = {
  className?: string;
  markSize?: number;
  markColor?: string;
  textClassName?: string;
};

export function FinoraLogo({
  className,
  markSize = 20,
  markColor = "var(--color-accent)",
  textClassName = "text-ink",
}: FinoraLogoProps) {
  return (
    <span className={`inline-flex items-center gap-[7px] ${className ?? ""}`}>
      <FinoraMark size={markSize} color={markColor} />
      <span className={`font-heading text-[1.35em] font-bold tracking-[-0.02em] ${textClassName}`}>
        finora
      </span>
    </span>
  );
}
