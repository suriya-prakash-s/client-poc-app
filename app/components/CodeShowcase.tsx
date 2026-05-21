const tabs = [
  {
    id: "deploy",
    label: "Deploy",
    command: "$ tensure deploy --service api-gateway --replicas 3",
    output: [
      { t: "muted", v: "→ Validating configuration..." },
      { t: "muted", v: "→ Building container image (2.1s)" },
      { t: "muted", v: "→ Pushing to registry (0.8s)" },
      { t: "muted", v: "→ Rolling update: 1/3 replicas healthy" },
      { t: "muted", v: "→ Rolling update: 2/3 replicas healthy" },
      { t: "muted", v: "→ Rolling update: 3/3 replicas healthy" },
      { t: "success", v: "✓ Deployed api-gateway @ v2.4.1 in 4.2s" },
      { t: "accent", v: "  https://api.yourapp.tensure.cloud" },
    ],
  },
  {
    id: "scan",
    label: "Security scan",
    command: "$ tensure scan --policy soc2 --format json",
    output: [
      { t: "muted", v: "→ Scanning 47 resources across 3 regions..." },
      { t: "muted", v: "→ Checking IAM policies (12 rules)" },
      { t: "muted", v: "→ Checking encryption at rest (8 rules)" },
      { t: "muted", v: "→ Checking network exposure (11 rules)" },
      { t: "warn", v: "⚠ 2 medium findings (non-blocking)" },
      { t: "success", v: "✓ 45/47 controls passing" },
      { t: "success", v: "✓ SOC 2 Type II posture: COMPLIANT" },
    ],
  },
  {
    id: "scale",
    label: "Autoscale",
    command: "$ tensure scale --service api-gateway --min 1 --max 50",
    output: [
      { t: "muted", v: "→ Configuring HPA policy..." },
      { t: "muted", v: "→ Metrics: cpu(70%), rps(500), p99(80ms)" },
      { t: "muted", v: "→ Cooldown: 60s scale-down, 15s scale-up" },
      { t: "muted", v: "→ Watching... current replicas: 3" },
      { t: "accent", v: "↑ Traffic spike detected (1,200 rps)" },
      { t: "muted", v: "→ Scaling to 8 replicas..." },
      { t: "success", v: "✓ Scaled in 180ms. All replicas healthy." },
    ],
  },
];

export default function CodeShowcase() {
  return (
    <section
      id="solutions"
      className="line-grid"
      style={{
        padding: "120px 24px",
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "72px",
            alignItems: "center",
          }}
          className="showcase-grid"
        >
          {/* Left: copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Developer experience
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                color: "#fff",
                lineHeight: 1.15,
              }}
            >
              Built for the
              <br />
              terminal generation.
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                maxWidth: "400px",
              }}
            >
              A single CLI and SDK that replaces 12 cloud consoles. Deploy,
              secure, and scale your infrastructure in the same workflow where
              you write code.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
              {[
                "TypeScript, Python, Go, and Rust SDKs",
                "Terraform & Pulumi provider support",
                "GitHub Actions and GitLab CI integration",
                "OpenTelemetry-native observability",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8l3.5 3.5L13 4"
                      stroke="var(--accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "8px" }}>
              <a href="#" className="btn-ghost">
                Read the docs
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: terminal tabs */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              overflow: "hidden",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {/* Tab bar */}
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                background: "#0d0d0d",
              }}
            >
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  style={{
                    padding: "10px 20px",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: i === 0 ? "var(--text-primary)" : "var(--text-muted)",
                    borderBottom: i === 0 ? "1px solid var(--accent)" : "1px solid transparent",
                    cursor: "pointer",
                    transition: "color 0.15s",
                  }}
                >
                  {tab.label}
                </div>
              ))}
            </div>

            {/* Command */}
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                background: "#0a0a0a",
                fontSize: "13px",
              }}
            >
              <span style={{ color: "var(--accent)" }}>$</span>
              <span style={{ color: "#f0f0f0", marginLeft: "8px" }}>
                tensure deploy{" "}
              </span>
              <span style={{ color: "#8be9fd" }}>--service </span>
              <span style={{ color: "#f1fa8c" }}>api-gateway</span>
              <span style={{ color: "#8be9fd" }}> --replicas </span>
              <span style={{ color: "#bd93f9" }}>3</span>
            </div>

            {/* Output */}
            <div style={{ padding: "16px 20px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {tabs[0].output.map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "12.5px",
                    color:
                      line.t === "success"
                        ? "var(--accent)"
                        : line.t === "accent"
                        ? "rgba(0,217,126,0.7)"
                        : line.t === "warn"
                        ? "#febc2e"
                        : "var(--text-secondary)",
                    lineHeight: 1.6,
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  {line.v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .showcase-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
