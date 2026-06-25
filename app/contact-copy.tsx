"use client";

import { useEffect, useState } from "react";

const CONTACT_EMAIL = "kensingtonnelson9@gmail.com";

export function ContactCopy() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  useEffect(() => {
    if (copyState === "idle") {
      return;
    }

    const timeout = window.setTimeout(() => setCopyState("idle"), 1800);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  async function copyEmail() {
    try {
      await writeToClipboard(CONTACT_EMAIL);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  return (
    <div className="contact-card">
      <p className="contact-intro">
        For introductions or wealth management opportunities, email Kensington
        directly.
      </p>
      <button className="email-copy" type="button" onClick={copyEmail}>
        <span className="email-copy-sizer" aria-hidden="true">
          {CONTACT_EMAIL}
        </span>
        <span
          className={`email-copy-state email-copy-state-idle ${
            copyState === "idle" ? "email-copy-state-active" : ""
          }`}
          aria-hidden={copyState !== "idle"}
        >
          <span className="email-copy-text">{CONTACT_EMAIL}</span>
          <span className="email-copy-icon" aria-hidden="true">
            <span className="email-copy-icon-back" />
            <span className="email-copy-icon-front" />
          </span>
        </span>
        <span
          className={`email-copy-state email-copy-state-feedback ${
            copyState === "copied" ? "email-copy-state-active" : ""
          }`}
          aria-hidden={copyState !== "copied"}
        >
          Email copied
        </span>
        <span
          className={`email-copy-state email-copy-state-feedback ${
            copyState === "error" ? "email-copy-state-active" : ""
          }`}
          aria-hidden={copyState !== "error"}
        >
          Copy failed
        </span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copyState === "copied"
          ? "Email copied"
          : copyState === "error"
            ? "Copy failed"
            : ""}
      </span>
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
