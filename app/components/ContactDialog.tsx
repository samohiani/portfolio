"use client";

import { useEffect, useRef, useState } from "react";

type ContactLink = { label: string; href: string };

export default function ContactDialog({ email, links }: { email: string; links: readonly ContactLink[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    const triggers = document.querySelectorAll<HTMLAnchorElement>(
      '.site-header nav a[href="#contact"], .hero-actions a[href^="mailto:"], .contact-mail[href^="mailto:"]',
    );
    const openDialog = (event: MouseEvent) => {
      event.preventDefault();
      if (!dialogRef.current?.open) dialogRef.current?.showModal();
    };

    triggers.forEach((trigger) => {
      trigger.setAttribute("aria-haspopup", "dialog");
      trigger.addEventListener("click", openDialog);
    });
    return () => {
      triggers.forEach((trigger) => {
        trigger.removeAttribute("aria-haspopup");
        trigger.removeEventListener("click", openDialog);
      });
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="contact-dialog"
      aria-labelledby="contact-dialog-title"
      onClose={() => setCopyState("idle")}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className="contact-dialog__inner">
        <button className="contact-dialog__close" type="button" onClick={() => dialogRef.current?.close()}>
          Close <span aria-hidden="true">×</span>
        </button>
        <p className="contact-dialog__label">Contact Samuel</p>
        <h2 id="contact-dialog-title">Let’s talk<span aria-hidden="true">.</span></h2>
        <p className="contact-dialog__intro">Have a role or project in mind? Send me a note.</p>
        <a className="contact-dialog__address" href={`mailto:${email}`}>{email}</a>
        <div className="contact-dialog__actions">
          <button type="button" className="contact-dialog__copy" onClick={copyEmail}>
            Copy email
            <span className="contact-dialog__copy-icon" aria-hidden="true">
              {copyState === "copied" ? "✓" : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="7" width="12" height="14" rx="1" />
                  <path d="M16 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3" />
                </svg>
              )}
            </span>
          </button>
          <a href={`mailto:${email}`} className="contact-dialog__open">Open mail</a>
        </div>
        <p className="contact-dialog__status" role="status" aria-live="polite">
          {copyState === "copied" ? "Address copied to your clipboard." : copyState === "failed" ? "Copy unavailable here. Select the address above to copy it." : ""}
        </p>
        <div className="contact-dialog__links">
          {links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>)}
        </div>
      </div>
    </dialog>
  );
}
