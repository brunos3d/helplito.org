import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  sizes: string;
  priority?: boolean;
  aspect?: "4/5" | "3/4" | "1/1";
  className?: string;
  position?: string;
};

const aspects = { "4/5": "aspect-[4/5]", "3/4": "aspect-[3/4]", "1/1": "aspect-square" };

/**
 * Photograph as a distinct object: rectangular, thin border, mono caption.
 * No gradients, masks or overlays. The photographs do their own work.
 *
 * Memorial treatment: photos render in black and white and fade back to color on
 * hover, keyboard focus inside the figure, or touch (active). The transition is
 * skipped when the visitor prefers reduced motion.
 */
export function Figure({ src, alt, caption, sizes, priority, aspect = "4/5", className, position }: Props) {
  return (
    <figure className={cn("group", className)}>
      <div className={cn("relative overflow-hidden border border-navy-900/15 bg-cream-200", aspects[aspect])}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover grayscale transition-[filter] duration-700 ease-out group-hover:grayscale-0 group-focus-within:grayscale-0 group-active:grayscale-0 motion-reduce:transition-none"
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
      {caption && <figcaption className="eyebrow mt-2.5 text-ink-500">{caption}</figcaption>}
    </figure>
  );
}
