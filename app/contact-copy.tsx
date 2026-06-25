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
      await writeToClipboard(CONTACT_EMAIL);
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
        className={`toast toast-${toast} ${toast !== "idle" ? "toast-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast === "error" ? "Copy failed" : "Email copied"}
      </div>
    </div>
  );
}

async function writeToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Some mobile browsers reject the async Clipboard API even on a tap.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "-9999px";
  document.body.append(textarea);

  try {
    textarea.select();
    textarea.setSelectionRange(0, text.length);

    if (!document.execCommand("copy")) {
      throw new Error("copy command failed");
    }
  } finally {
    textarea.remove();
  }
}
