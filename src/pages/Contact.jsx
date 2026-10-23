import { useState } from "react";

// Replace with your Formspree endpoint (https://formspree.io) to receive messages by email.
// Until then, the form opens the visitor's email app as a fallback.
const FORMSPREE_URL = "";
const EMAIL = "k.sharma16062007@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

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
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="page">
      <p className="mono">Return portal</p>
      <h1 className="page-title">Contact</h1>
      <p className="page-lead">Ready to send a message across time? I'd love to hear from you.</p>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "sent" && <p>Message sent. Thank you!</p>}
        {status === "error" && <p>Something went wrong. Please try again.</p>}
      </form>

      <div className="links">
        <a className="btn ghost" href={`mailto:${EMAIL}`}>Email</a>
        <a className="btn ghost" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn ghost" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}
