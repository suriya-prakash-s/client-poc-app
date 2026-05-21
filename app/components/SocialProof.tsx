"use client";
const logos = [
  "Stripe",
  "Notion",
  "Linear",
  "Vercel",
  "Resend",
  "Planetscale",
  "Fly.io",
  "Clerk",
];

const testimonials = [
  {
    quote:
      "We cut our infrastructure toil by 80% in the first month. The compliance automation alone saved us a full audit cycle.",
    name: "Sarah Chen",
    title: "VP Engineering, Cortex",
    avatar: "SC",
  },
  {
    quote:
      "Tensure is what Kubernetes should have been. Complex enough to be powerful, simple enough that our entire team can use it.",
    name: "Marcus Webb",
    title: "CTO, Ripple Labs",
    avatar: "MW",
  },
  {
    quote:
      "We moved from 14 different tools to one SDK. Our deploy pipeline went from 22 minutes to under 4.",
    name: "Priya Agarwal",
    title: "Staff Engineer, Atmos",
    avatar: "PA",
  },
];

export default function SocialProof() {
  return (
    <section id="pricing" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Logo strip */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            Trusted by teams building at scale
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0",
            }}
          >
            {logos.map((logo, i) => (
              <div
                key={logo}
                style={{
                  padding: "16px 28px",
                  borderLeft: i === 0 ? "1px solid var(--border)" : "none",
                  borderRight: "1px solid var(--border)",
                  borderTop: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--accent)">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3l-3.7 2 .7-4.1-3-2.9 4.2-.7L7 1z" />
                  </svg>
                ))}
              </div>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(0,217,126,0.12)",
                    border: "1px solid rgba(0,217,126,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    fontFamily: "var(--font-geist-mono)",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
