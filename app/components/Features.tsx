"use client";
const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Multi-cloud orchestration",
    desc: "Provision and manage resources across AWS, GCP, and Azure with a single unified API. No vendor lock-in, ever.",
    tag: "Infrastructure",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 10l7-4M10 10v8M10 10L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Automated compliance",
    desc: "Continuous SOC 2, ISO 27001, HIPAA, and GDPR posture monitoring. Audit reports generated in seconds.",
    tag: "Security",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Zero-downtime deploys",
    desc: "Rolling, blue/green, and canary strategies built in. Automatic rollback on health-check failures.",
    tag: "Deployments",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Real-time observability",
    desc: "Distributed tracing, structured logs, and custom metrics with sub-second latency. Plug into Datadog, Grafana, or our native dashboards.",
    tag: "Monitoring",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2c4.418 0 8 1.343 8 3S14.418 8 10 8 2 6.657 2 5s3.582-3 8-3z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 5v5c0 1.657 3.582 3 8 3s8-1.343 8-3V5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 10v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Stateful workloads",
    desc: "Managed Postgres, Redis, and object storage with automatic backups, point-in-time recovery, and read replicas.",
    tag: "Data",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 10h4l3-7 4 14 3-7h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Intelligent autoscaling",
    desc: "Scale from zero to thousands of instances in under 200ms based on CPU, memory, queue depth, or any custom metric.",
    tag: "Scaling",
  },
];

export default function Features() {
  return (
    <section id="product" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ marginBottom: "56px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "14px",
            }}
          >
            Platform
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              color: "#fff",
              lineHeight: 1.15,
              maxWidth: "560px",
            }}
          >
            Everything your team needs.
            <br />
            <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>
              Nothing they don&apos;t.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
          className="features-grid"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover"
              style={{
                background: "var(--bg-card)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                cursor: "default",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    color: "var(--accent)",
                    padding: "10px",
                    background: "rgba(0,217,126,0.08)",
                    borderRadius: "6px",
                    border: "1px solid rgba(0,217,126,0.15)",
                    display: "flex",
                  }}
                >
                  {f.icon}
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "4px",
                  }}
                >
                  {f.tag}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
