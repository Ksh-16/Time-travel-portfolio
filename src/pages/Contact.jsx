import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Formspree endpoint that receives messages by email.
// If it's ever left empty, the form falls back to opening the visitor's email app.
const FORMSPREE_URL = "https://formspree.io/f/xdeejvdy";
const EMAIL = "k.sharma16062007@gmail.com";
const MAX_MESSAGE = 1000;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Icon = {
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
    </svg>
  ),
  copy: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  ),
};

const channels = [
  {
    key: "github",
    label: "GitHub",
    value: "github.com/Ksh-16",
    href: "https://github.com/Ksh-16",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "kanishka-sharma",
    href: "https://linkedin.com/in/kanishka-sharma-5933a436a/",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [length, setLength] = useState(0);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!FORMSPREE_URL) {
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setLength(0);
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable: the mailto link still works */
    }
  }

  return (
    <div className="page contact">
      {/* decorative "time portal" */}
      <div className="portal-rings" aria-hidden="true">
        <span />
        <span />
        <span />
        <i />
      </div>

      <motion.div className="contact-grid" variants={stagger} initial="hidden" animate="show">
        {/* ---------- left: intro + channels ---------- */}
        <div className="contact-intro">
          <motion.p variants={rise} className="mono contact-eyebrow">
            <span className="pulse-dot" /> Return portal · Open
          </motion.p>

          <motion.h1 variants={rise} className="page-title contact-title">
            Let&apos;s open a <span>portal</span>.
          </motion.h1>

          <motion.p variants={rise} className="page-lead">
            Have an idea, an opportunity, or just want to say hi? Send a message across time
            and I&apos;ll write back.
          </motion.p>

          <motion.div variants={rise} className="channel-list">
            <div className="channel channel-email">
              <a className="channel-main" href={`mailto:${EMAIL}`}>
                <span className="channel-icon">{Icon.mail}</span>
                <span className="channel-text">
                  <span className="mono">Email</span>
                  <strong>{EMAIL}</strong>
                </span>
              </a>
              <button
                type="button"
                className="copy-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? Icon.check : Icon.copy}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {channels.map((c) => (
              <a
                key={c.key}
                className="channel"
                href={c.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="channel-main">
                  <span className="channel-icon">{Icon[c.key]}</span>
                  <span className="channel-text">
                    <span className="mono">{c.label}</span>
                    <strong>{c.value}</strong>
                  </span>
                </span>
                <span className="channel-arrow">{Icon.arrow}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ---------- right: transmission form ---------- */}
        <motion.div variants={rise} className="transmit-wrap">
          <div className="transmit">
            <AnimatePresence mode="wait" initial={false}>
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  className="sent"
                  role="status"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="sent-badge">{Icon.check}</div>
                  <h2>Transmission received</h2>
                  <p>
                    Thank you. Your message has travelled safely across time, and I&apos;ll reply
                    soon.
                  </p>
                  <button className="btn ghost" type="button" onClick={() => setStatus("idle")}>
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="transmit-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="transmit-head">
                    <p className="mono">New transmission</p>
                    <span className="transmit-dots" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>

                  {/* honeypot: real visitors never see or fill this */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hp"
                    aria-hidden="true"
                  />

                  <div className="field">
                    <input id="c-name" name="name" placeholder=" " required autoComplete="name" />
                    <label htmlFor="c-name">Your name</label>
                  </div>

                  <div className="field">
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      placeholder=" "
                      required
                      autoComplete="email"
                    />
                    <label htmlFor="c-email">Your email</label>
                  </div>

                  <div className="field">
                    <textarea
                      id="c-message"
                      name="message"
                      rows="5"
                      placeholder=" "
                      required
                      maxLength={MAX_MESSAGE}
                      onChange={(e) => setLength(e.target.value.length)}
                    />
                    <label htmlFor="c-message">Your message</label>
                    <span className="counter mono">
                      {length}/{MAX_MESSAGE}
                    </span>
                  </div>

                  <button
                    className="send-btn"
                    type="submit"
                    disabled={status === "sending"}
                    onClick={() => status === "error" && setStatus("idle")}
                  >
                    {status === "sending" ? (
                      <>
                        <span className="spinner" aria-hidden="true" /> Sending…
                      </>
                    ) : (
                      <>
                        Send transmission {Icon.send}
                      </>
                    )}
                  </button>

                  <p className="form-error" role="alert">
                    {status === "error" &&
                      `Something went wrong. You can also email me directly at ${EMAIL}.`}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}