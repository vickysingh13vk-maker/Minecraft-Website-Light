import { NextResponse } from "next/server";

/**
 * Quote / enquiry submission endpoint.
 *
 * TODO: persist to DB. Storage was intentionally deferred — wire up
 * SQLite / Postgres / etc. here later. For now we validate the shape
 * and return success so the UI flow works end-to-end.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const audience = body.audience;
  if (audience !== "b2b" && audience !== "b2c") {
    return NextResponse.json({ ok: false, error: "Unknown audience" }, { status: 400 });
  }

  // Minimal required-field check
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required" },
      { status: 422 }
    );
  }

  const submission = {
    ...body,
    receivedAt: new Date().toISOString(),
  };

  // Visible in the dev server console until DB is wired.
  console.log("[quote] new submission:", submission);

  // TODO: await db.insert(submission)

  return NextResponse.json({ ok: true });
}
