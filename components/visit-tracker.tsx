"use client";

import { useEffect } from "react";

/**
 * Fires a single visit ping per browser session to /api/track.
 * - Owner opt-out: visit any page with ?owner=1 to mark this browser as the
 *   owner (stored in localStorage); owner visits are never reported.
 * - Dedupe: sessionStorage guard means scrolling / route changes don't re-ping.
 */
export function VisitTracker() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("owner") === "1") {
        localStorage.setItem("owner", "1");
      }
      if (localStorage.getItem("owner") === "1") return;

      if (sessionStorage.getItem("v_tracked") === "1") return;
      sessionStorage.setItem("v_tracked", "1");

      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          path: window.location.pathname,
          referrer: document.referrer || "",
        }),
      }).catch(() => {
        // best-effort; ignore network failures
      });
    } catch {
      // storage unavailable (private mode etc.) — silently skip
    }
  }, []);

  return null;
}
