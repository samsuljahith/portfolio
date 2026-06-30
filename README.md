# Samsul Jahith S — AI Engineer Portfolio

A professional portfolio for an AI / Generative AI Engineer, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui. Minimal-brutalist design (light paper background, thick black borders, hard offset shadows, electric-blue accent) with a working Nodemailer contact form.

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript** + **Tailwind CSS**
- **Framer Motion** for animations
- **shadcn/ui** primitives (Radix + class-variance-authority)
- **Telegram Bot API** for visit + contact notifications (Nodemailer SMTP optional)
- **react-hook-form** + **zod** for form validation

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Editable content lives in [`lib/data.ts`](lib/data.ts) — profile, skills, projects, experience, and education. The headshot is `public/profile.png`. Copy `.env.example` to `.env.local` for local config.

### Telegram notifications (visits + contact form)

The site sends a Telegram message when:

- someone visits (`/api/track`, once per browser session), and
- someone submits the contact form (`/api/contact`).

Telegram is used because it works over HTTPS — Render's **free** tier blocks outbound SMTP ports (25/465/587), so server-sent email does not work there.

Setup:

1. On Telegram, message **@BotFather** -> `/newbot` -> copy the **bot token**.
2. Send any message to your new bot, then message **@userinfobot** to get your numeric **chat id** (or open `https://api.telegram.org/bot<token>/getUpdates`).
3. Set both values as env vars (locally in `.env.local`, and in the Render dashboard):

| Variable | Description |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather |
| `TELEGRAM_CHAT_ID` | Your numeric chat id |

If unset, notifications quietly no-op (no errors).

**Excluding your own visits:** open the site once with `?owner=1` (e.g. `https://samsul-jahith-portfolio.onrender.com/?owner=1`). That browser is flagged in `localStorage` and never reports visits. Clear site data to undo.

### Optional SMTP email (paid plans)

On a paid Render plan (or any host that allows outbound SMTP), you can also receive contact messages by email. Uncomment and fill the SMTP vars in `.env.example` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`). Email runs as a secondary channel alongside Telegram.

## Deployment (Render)

Configured as a Node web service:

- **Build command:** `npm install && npm run build`
- **Start command:** `npm start` (runs `next start` on `$PORT`)

Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in the Render dashboard to enable notifications.

### Avoiding cold starts (free tier)

Render's free web services spin down after 15 minutes of inactivity; the next request then waits 30–60s for a cold start. To keep the service warm without changing your URL or upgrading, ping the health endpoint every ~10 minutes:

- **Recommended:** create a free job at [cron-job.org](https://cron-job.org) (or [UptimeRobot](https://uptimerobot.com)) that does a `GET` on `https://samsul-jahith-portfolio.onrender.com/api/health` every 10 minutes.
- **Fallback:** the committed GitHub Actions workflow [`.github/workflows/keep-warm.yml`](.github/workflows/keep-warm.yml) pings the same endpoint. Note: Actions cron can be delayed and auto-disables after 60 days of repo inactivity, so an external pinger is more reliable.

Always-on usage is ~720 h/month, within Render's 750 free instance-hours (assuming this is the only free web service in your workspace). The only way to fully eliminate cold starts (and unblock SMTP) is Render's paid tier (~$7/mo).

## Build

```bash
npm run build
npm start
```
