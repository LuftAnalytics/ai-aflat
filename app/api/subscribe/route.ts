import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresa de email nu este validă." },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO subscribers (email)
      VALUES (${email.toLowerCase().trim()})
      ON CONFLICT (email) DO NOTHING
    `;

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ceva nu a mers. Încearcă din nou." },
      { status: 500 }
    );
  }
}
