import { useEffect, useState } from "react";

const USERNAME = "Ksh-16";
const CACHE_KEY = "gh-repos-v1";

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable, ignore */
  }
}

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", { month: "short", year: "numeric" });

export default function GitHubActivity() {
  const [repos, setRepos] = useState(readCache);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (repos) return;
    const controller = new AbortController();

    fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=pushed&per_page=12`,
      { signal: controller.signal }
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub request failed");
        return res.json();
      })
      .then((data) => {
        const cleaned = data
          .filter((r) => !r.fork)
          .slice(0, 6)
          .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description,
            language: r.language,
            stars: r.stargazers_count,
            pushed: r.pushed_at,
            url: r.html_url,
          }));
        writeCache(cleaned);
        setRepos(cleaned);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(true);
      });

    return () => controller.abort();
  }, [repos]);

  return (
    <section style={{ marginTop: "3rem" }}>
      <p className="mono" style={{ marginBottom: "0.4rem" }}>Live from GitHub</p>
      <h2 style={{ marginBottom: "1rem" }}>Latest activity</h2>

      {error && (
        <p style={{ color: "var(--text-muted)" }}>
          Couldn't load repositories right now.{" "}
          <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer">
            View my GitHub →
          </a>
        </p>
      )}

      {!repos && !error && (
        <p className="mono" style={{ color: "var(--text-muted)" }}>Loading repositories…</p>
      )}

      {repos && repos.length === 0 && (
        <p style={{ color: "var(--text-muted)" }}>No public repositories yet.</p>
      )}

      {repos && repos.length > 0 && (
        <div className="grid">
          {repos.map((r) => (
            <a
              key={r.id}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="card portal"
            >
              <span className="mono year">
                Updated {formatDate(r.pushed)}
              </span>
              <h3>{r.name}</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "0.8rem" }}>
                {r.description || "No description yet."}
              </p>
              <div>
                {r.language && <span className="tag">{r.language}</span>}
                {r.stars > 0 && <span className="tag">★ {r.stars}</span>}
              </div>
            </a>
          ))}
        </div>
      )}

      <p style={{ marginTop: "1.2rem" }}>
        <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer">
          See everything on GitHub →
        </a>
      </p>
    </section>
  );
}