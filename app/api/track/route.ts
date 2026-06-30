import { NextResponse } from "next/server";
import { sendTelegram, escapeHtml } from "@/lib/notify";

export const runtime = "nodejs";

const BOT_UA =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|outbrain|pinterest|vkshare|w3c_validator|whatsapp|telegrambot|discordbot|slackbot|preview|headless|lighthouse|monitor|uptime|curl|wget|python-requests|axios|go-http/i;

type GeoInfo = { city?: string; region?: string; country?: string };

async function lookupGeo(ip: string): Promise<GeoInfo> {
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, {
      signal: AbortSignal.timeout(2500),
      headers: { "User-Agent": "portfolio-visit-tracker" },
    });
    if (!res.ok) return {};
    const data = await res.json();
    return {
      city: data.city,
      region: data.region,
      country: data.country_name,
    };
  } catch {
    return {};
  }
}

export async function POST(req: Request) {
  const ua = req.headers.get("user-agent") ?? "";

  // Drop bots, crawlers, link-preview fetchers, and uptime pingers.
  if (BOT_UA.test(ua)) {
    return new NextResponse(null, { status: 204 });
  }

  let body: { path?: string; referrer?: string } = {};
  try {
    body = await req.json();
  } catch {
    // tolerate empty/invalid bodies
  }

  const fwd = req.headers.get("x-forwarded-for") ?? "";
  const ip = fwd.split(",")[0]?.trim() || "unknown";

  const geo = ip !== "unknown" ? await lookupGeo(ip) : {};
  const place = [geo.city, geo.region, geo.country].filter(Boolean).join(", ");

  const when = new Intl.DateTimeFormat("en-SG", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Singapore",
  }).format(new Date());

  const path = (body.path || "/").slice(0, 200);
  const referrer = (body.referrer || "direct / none").slice(0, 200);

  const lines = [
    "\u{1F441} <b>New visit</b>",
    `\u{1F4C4} Page: <code>${escapeHtml(path)}</code>`,
    `\u{1F517} From: ${escapeHtml(referrer)}`,
    place ? `\u{1F4CD} ${escapeHtml(place)}` : `\u{1F4CD} IP: ${escapeHtml(ip)}`,
    `\u{1F5A5} ${escapeHtml(ua.slice(0, 160))}`,
    `\u{1F551} ${when} (SGT)`,
  ];

  // Fire-and-respond: don't block the visitor on Telegram latency/result.
  await sendTelegram(lines.join("\n"));

  return NextResponse.json({ ok: true });
}
