import { cn } from "@/lib/utils";

type Step = { title: string; body: string };

/**
 * Four-stage abstraction of prion propagation.
 * Shapes are symbolic. They do not depict actual protein structure.
 */
export function PrionDiagram({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <ol className={cn("grid border border-navy-900/15 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="border-navy-900/15 bg-cream-50 p-5 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(-n+2)]:border-b lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-b-0"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-amber-600 tabular-nums">0{i + 1}</span>
            <Glyph stage={i} />
          </div>
          <h3 className="mt-5 font-display text-xl text-navy-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

function Glyph({ stage }: { stage: number }) {
  const navy = "#0b1a2b";
  const amber = "#d39a3c";
  const sky = "#2f6e99";
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-12 w-12">
      {stage === 0 && (
        <path
          d="M14 40c6-14 14-20 24-18s12 10 8 18-14 8-20 4-8-4-12-4"
          fill="none"
          stroke={sky}
          strokeWidth="2"
          strokeLinecap="square"
        />
      )}
      {stage === 1 && (
        <>
          <path d="M12 44c4-12 10-16 18-16" fill="none" stroke={sky} strokeWidth="2" opacity="0.5" />
          <path d="M30 28l6-8 6 8-6 8zM36 36l6-8 6 8-6 8z" fill="none" stroke={amber} strokeWidth="2" strokeLinejoin="miter" />
        </>
      )}
      {stage === 2 && (
        <g fill="none" stroke={amber} strokeWidth="2" strokeLinejoin="miter">
          <path d="M10 32l5-7 5 7-5 7z" />
          <path d="M22 24l5-7 5 7-5 7z" />
          <path d="M22 40l5-7 5 7-5 7z" />
          <path d="M34 32l5-7 5 7-5 7z" />
          <path d="M46 24l5-7 5 7-5 7z" opacity="0.6" />
          <path d="M46 40l5-7 5 7-5 7z" opacity="0.6" />
        </g>
      )}
      {stage === 3 && (
        <>
          <rect x="14" y="14" width="36" height="36" fill="none" stroke={navy} strokeWidth="1.5" />
          {[
            [24, 26],
            [36, 22],
            [42, 34],
            [28, 40],
            [34, 34],
          ].map(([x, y], i) => (
            <rect key={i} x={x - 2.5} y={y - 2.5} width="5" height="5" fill={navy} opacity={0.25 + i * 0.15} />
          ))}
        </>
      )}
    </svg>
  );
}
