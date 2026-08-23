import { NextResponse } from "next/server";
import { validateSubmission, type SubmissionFields } from "@/lib/submission";

/**
 * Moderated submission endpoint.
 *
 * Active only when NEXT_PUBLIC_SUBMISSION_MODE=moderated and SUBMISSION_WEBHOOK_URL is set.
 * It validates the payload and forwards it to a private moderation destination
 * (for example a webhook that creates a ticket or emails a moderator).
 * Nothing is stored by this route and nothing is ever made public.
 */
export async function POST(request: Request) {
  const webhook = process.env.SUBMISSION_WEBHOOK_URL;
  if (process.env.NEXT_PUBLIC_SUBMISSION_MODE !== "moderated" || !webhook) {
    return NextResponse.json({ error: "Moderated submissions are not enabled." }, { status: 503 });
  }

  let payload: Partial<SubmissionFields> & { website2?: string; locale?: string };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  // Honeypot: real users never fill this field.
  if (payload.website2) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateSubmission(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 422 });
  }

  const forwarded = await fetch(webhook, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(process.env.SUBMISSION_WEBHOOK_TOKEN
        ? { authorization: `Bearer ${process.env.SUBMISSION_WEBHOOK_TOKEN}` }
        : {}),
    },
    body: JSON.stringify({
      source: "helplito.org",
      receivedAt: new Date().toISOString(),
      locale: payload.locale ?? "en",
      submission: payload,
    }),
  });

  if (!forwarded.ok) {
    return NextResponse.json({ error: "Upstream moderation service failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
