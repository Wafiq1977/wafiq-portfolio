import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(5000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { ok: false, error: "Invalid request body." },
        { status: 400 },
      );
    }

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Validation failed.",
          issues: parsed.error.issues.map((i) => ({
            path: i.path.join("."),
            message: i.message,
          })),
        },
        { status: 422 },
      );
    }

    const { name, email, subject, message } = parsed.data;

    // Forward IP / user agent for record keeping (best-effort).
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const userAgent = req.headers.get("user-agent") ?? null;

    const record = await db.contactMessage.create({
      data: { name, email, subject, message, ip, userAgent },
    });

    return NextResponse.json(
      {
        ok: true,
        id: record.id,
        message:
          "Thanks for reaching out — your message has been received. I'll get back to you soon.",
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("[api/contact] error:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Could not store your message right now. Please email me directly.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: "/api/contact",
    method: "POST",
    fields: ["name", "email", "subject", "message"],
  });
}
