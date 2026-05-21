"use client";
const plans = [
  {
    name: "Hobby",
    price: "$0",
    period: "/mo",
    desc: "For side projects and early exploration.",
    cta: "Start free",
    ctaStyle: "ghost",
    features: [
      "Up to 3 services",
      "1 region",
      "5GB storage",
      "Community support",
      "Basic observability",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    desc: "For growing teams shipping production workloads.",
    cta: "Get started",
    ctaStyle: "primary",
    featured: true,
    badge: "Most popular",
    features: [
      "Unlimited services",
      "3 regions",
      "100GB storage",
      "Priority support",
      "Full observability",
      "SOC 2 compliance tools",
      "Autoscaling",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large orgs with custom security and SLA requirements.",
    cta: "Contact sales",
    ctaStyle: "ghost",
    features: [
      "Everything in Pro",
      "Unlimited regions",
      "Custom storage",
      "Dedicated support",
      "SSO / SAML",
      "Custom compliance policies",
      "Uptime SLA",
      "Private infrastructure",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "120px 24px",
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
            Pricing
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              color: "#fff",
              lineHeight: 1.15,
            }}
          >
            Simple, predictable pricing.
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              marginTop: "14px",
            }}
          >
            No surprise egress fees. No per-seat traps. Just infrastructure cost.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            alignItems: "stretch",
          }}
          className="pricing-grid"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.featured ? "var(--bg-elevated)" : "var(--bg-card)",
                border: plan.featured
                  ? "1px solid rgba(0,217,126,0.3)"
                  : "1px solid var(--border)",
                borderRadius: "8px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                position: "relative",
                boxShadow: plan.featured
                  ? "0 0 48px rgba(0,217,126,0.08)"
                  : "none",
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    right: "24px",
                    background: "var(--accent)",
                    color: "#000",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "0 0 6px 6px",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: plan.featured ? "var(--accent)" : "var(--text-secondary)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  {plan.name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "38px",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    marginTop: "6px",
                  }}
                >
                  {plan.desc}
                </p>
              </div>

              <a
                href="#"
                className={plan.ctaStyle === "primary" ? "btn-primary" : "btn-ghost"}
                style={{ justifyContent: "center", width: "100%" }}
              >
                {plan.cta}
              </a>

              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {plan.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                      <path
                        d="M2.5 7l3 3 6-6"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 440px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
