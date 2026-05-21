export default function CTA() {
  return (
    <section style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(0,217,126,0.18)",
            borderRadius: "12px",
            padding: "80px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "500px",
              height: "200px",
              background:
                "radial-gradient(ellipse at center top, rgba(0,217,126,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          {/* Top border accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "200px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, var(--accent), transparent)",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "20px",
              }}
            >
              Get started today
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: "20px",
                maxWidth: "600px",
                margin: "0 auto 20px",
              }}
            >
              Ship infrastructure with confidence.
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                maxWidth: "440px",
                margin: "0 auto 40px",
                lineHeight: 1.65,
              }}
            >
              Join 2,400+ engineering teams who replaced their cloud ops
              sprawl with a single, developer-native platform.
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="#" className="btn-primary" style={{ padding: "12px 24px", fontSize: "15px" }}>
                Start building free
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="btn-ghost" style={{ padding: "12px 24px", fontSize: "15px" }}>
                Talk to sales
              </a>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                marginTop: "20px",
              }}
            >
              No credit card required. Free plan includes 3 services forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
