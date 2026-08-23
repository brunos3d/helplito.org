import { cn } from "@/lib/utils";

type Props = {
  email: string;
  className?: string;
};

/**
 * mailto link for a long address. On narrow screens the address may not fit on
 * one line; a break opportunity before "@" keeps it readable instead of
 * splitting the domain at an arbitrary character.
 */
export function EmailLink({ email, className }: Props) {
  const at = email.indexOf("@");
  const local = at > 0 ? email.slice(0, at) : email;
  const domain = at > 0 ? email.slice(at) : "";
  return (
    <a href={`mailto:${email}`} className={cn("link-underline break-words", className)}>
      {local}
      {domain && <wbr />}
      {domain}
    </a>
  );
}
