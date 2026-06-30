import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { VisitTracker } from "@/components/visit-tracker";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://samsul-jahith-portfolio.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Samsul Jahith S — AI Engineer",
  description:
    "Generative AI / AI Engineer and MSc Data Science student building production-minded LLM applications — RAG pipelines, multi-agent systems, and evaluation & guardrails for reliable, grounded outputs.",
  keywords: [
    "AI Engineer",
    "Generative AI",
    "LLM",
    "RAG",
    "Multi-Agent Systems",
    "LangChain",
    "LangGraph",
    "Data Science",
    "Singapore",
  ],
  authors: [{ name: "Samsul Jahith S" }],
  creator: "Samsul Jahith S",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Samsul Jahith S — AI Engineer",
    description:
      "Building production-minded LLM applications: RAG pipelines, multi-agent / agentic systems, and evaluation & guardrails.",
    siteName: "Samsul Jahith S",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samsul Jahith S — AI Engineer",
    description:
      "Building production-minded LLM applications: RAG pipelines, multi-agent / agentic systems, and evaluation & guardrails.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
        <VisitTracker />
        <Toaster
          theme="light"
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast:
                "brut !rounded-none !text-foreground !font-mono !text-xs",
            },
          }}
        />
      </body>
    </html>
  );
}
