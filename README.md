# Samsul Jahith S — AI Engineer Portfolio

A professional portfolio for an AI / Generative AI Engineer, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui. Minimal-brutalist design (light paper background, thick black borders, hard offset shadows, electric-blue accent) with a working Nodemailer contact form.

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript** + **Tailwind CSS**
- **Framer Motion** for animations
- **shadcn/ui** primitives (Radix + class-variance-authority)
- **Nodemailer** for the contact form
- **react-hook-form** + **zod** for form validation

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Editable content lives in [`lib/data.ts`](lib/data.ts) — profile, skills, projects, experience, and education. The headshot is `public/profile.png`.

### Contact form (optional)

The contact form posts to `/api/contact` and sends email via SMTP. Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
| --- | --- |
| `SMTP_HOST` | SMTP server host (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (`587` STARTTLS or `465` SSL) |
| `SMTP_USER` | SMTP username / sending address |
| `SMTP_PASS` | SMTP password or app password |
| `CONTACT_TO` | Recipient address (defaults to `SMTP_USER`) |

If SMTP is not configured, the form gracefully tells visitors to email directly.

## Deployment (Render)

Configured as a Node web service:

- **Build command:** `npm install && npm run build`
- **Start command:** `npm start` (runs `next start` on `$PORT`)

Add the SMTP environment variables in the Render dashboard to enable the contact form.

## Build

```bash
npm run build
npm start
```
