import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Lightweight liveness endpoint. An external scheduler (cron-job.org /
 * UptimeRobot) pings this every ~10 minutes so the Render free service never
 * goes 15 minutes without inbound traffic and therefore avoids spinning down.
 */
export async function GET() {
  return NextResponse.json(
    { ok: true, ts: new Date().toISOString() },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
