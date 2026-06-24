"use client";

import { useEffect, useState } from "react";

const CONTACT_EMAIL = "kensingtonnelson9@gmail.com";

export function ContactCopy() {
  const [toast, setToast] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (toast === "idle") {
      return;
    }

    const timeout = window.setTimeout(() => setToast("idle"), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setToast("copied");
    } catch {
      setToast("error");
    }
  }

  return (
    <div className="contact-card">
      <p className="contact-intro">
        For introductions or wealth management opportunities, email Kensington
        directly.
      </p>
      <button className="email-copy" type="button" onClick={copyEmail}>
        <span className="email-copy-label">Copy email</span>
        <span className="email-copy-address">{CONTACT_EMAIL}</span>
      </button>
      <div
        className={`toast ${toast !== "idle" ? "toast-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast === "error" ? "Copy failed" : "Email copied"}
      </div>
    </div>
  );
}
