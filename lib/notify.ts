type NotifyResult = { ok: boolean; skipped?: boolean; error?: string };

/**
 * Sends an HTML message to a Telegram chat via the Bot API (HTTPS / port 443,
 * which Render's free tier does NOT block, unlike outbound SMTP).
 *
 * No-ops gracefully when TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are unset so
 * local dev and unconfigured deploys never throw.
 */
export async function sendTelegram(text: string): Promise<NotifyResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, skipped: true };
  }

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        // Don't let a slow Telegram call hang the request.
        signal: AbortSignal.timeout(8000),
      }
    );

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return { ok: false, error: `Telegram ${res.status}: ${detail}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown" };
  }
}

/** Escapes user-supplied text for safe inclusion in Telegram HTML messages. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
