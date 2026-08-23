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
 */
export function Figure({ src, alt, caption, sizes, priority, aspect = "4/5", className, position }: Props) {
  return (
    <figure className={className}>
      <div className={cn("relative overflow-hidden border border-navy-900/15 bg-cream-200", aspects[aspect])}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
      {caption && <figcaption className="eyebrow mt-2.5 text-ink-500">{caption}</figcaption>}
    </figure>
  );
}
