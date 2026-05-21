// 
"use client";

import { useEffect, useRef } from "react";

const codeLines = [
  { tokens: [
    { t: "comment", v: "// Initialize Tensure client" },
  ]},
  { tokens: [
    { t: "keyword", v: "import" },
    { t: "default", v: " { Tensure } " },
    { t: "keyword", v: "from" },
    { t: "string", v: " 'tensure'" },
    { t: "punct", v: ";" },
  ]},
  { tokens: [{ t: "default", v: "" }] },
  { tokens: [
    { t: "keyword", v: "const" },
    { t: "var", v: " client" },
    { t: "default", v: " = " },
    { t: "keyword", v: "new" },
    { t: "fn", v: " Tensure" },
    { t: "punct", v: "({" },
  ]},
  { tokens: [
    { t: "default", v: "  " },
    { t: "prop", v: "apiKey" },
    { t: "punct", v: ": " },
    { t: "var", v: "process" },
    { t: "punct", v: "." },
    { t: "var", v: "env" },
    { t: "punct", v: "." },
    { t: "prop", v: "TENSURE_API_KEY" },
    { t: "punct", v: "," },
  ]},
  { tokens: [
    { t: "default", v: "  " },
    { t: "prop", v: "region" },
    { t: "punct", v: ": " },
    { t: "string", v: "'us-east-1'" },
    { t: "punct", v: "," },
  ]},
  { tokens: [
    { t: "default", v: "  " },
    { t: "prop", v: "compliance" },
    { t: "punct", v: ": [" },
    { t: "string", v: "'soc2'" },
    { t: "punct", v: ", " },
    { t: "string", v: "'iso27001'" },
    { t: "punct", v: "]," },
  ]},
  { tokens: [{ t: "punct", v: "});" }]},
  { tokens: [{ t: "default", v: "" }] },
  { tokens: [
    { t: "comment", v: "// Deploy with zero-downtime rollout" },
  ]},
  { tokens: [
    { t: "keyword", v: "const" },
    { t: "var", v: " deployment" },
    { t: "default", v: " = " },
    { t: "keyword", v: "await" },
    { t: "var", v: " client" },
    { t: "punct", v: "." },
    { t: "fn", v: "deploy" },
    { t: "punct", v: "({" },
  ]},
  { tokens: [
    { t: "default", v: "  " },
    { t: "prop", v: "service" },
    { t: "punct", v: ": " },
    { t: "string", v: "'api-gateway'" },
    { t: "punct", v: "," },
  ]},
  { tokens: [
    { t: "default", v: "  " },
    { t: "prop", v: "replicas" },
    { t: "punct", v: ": " },
    { t: "num", v: "3" },
    { t: "punct", v: "," },
  ]},
  { tokens: [
    { t: "default", v: "  " },
    { t: "prop", v: "strategy" },
    { t: "punct", v: ": " },
    { t: "string", v: "'rolling'" },
    { t: "punct", v: "," },
  ]},
  { tokens: [{ t: "punct", v: "});" }]},
];

function tokenStyle(t: string): React.CSSProperties {
  const map: Record<string, React.CSSProperties> = {
    keyword: { color: "#ff79c6" },
    string:  { color: "#f1fa8c" },
    comment: { color: "#555", fontStyle: "italic" },
    fn:      { color: "#50fa7b" },
    var:     { color: "#8be9fd" },
    num:     { color: "#bd93f9" },
    prop:    { color: "#00d97e" },
    punct:   { color: "#888" },
    default: { color: "#f0f0f0" },
  };
  return map[t] ?? {};
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays (autoplay policy compliance)
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // Autoplay blocked — silently ignore, video will stay paused
      });
    }
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const children = el.querySelectorAll<HTMLElement>(".hero-item");
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(24px)";
      setTimeout(() => {
        child.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      }, 120 + i * 90);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Video background ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay so text stays legible ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.85) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── Dot grid overlay ── */}
      <div
        className="dot-grid"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          opacity: 0.4,
        }}
      />

      {/* ── Accent radial glow ── */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(0,217,126,0.06) 0%, transparent 70%)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          maxWidth: "1120px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          position: "relative",
          zIndex: 4,
        }}
        className="hero-grid"
      >
        {/* Left: Copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Badge */}
          <div className="hero-item" style={{ opacity: 0 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(0,217,126,0.3)",
                background: "rgba(0,217,126,0.06)",
                borderRadius: "20px",
                padding: "5px 12px",
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--accent)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  animation: "pulse-ring 2s ease-out infinite",
                  display: "inline-block",
                }}
              />
              Now in general availability
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-item"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "#fff",
              opacity: 0,
            }}
          >
            Infrastructure that{" "}
            <span className="gradient-text">never gets</span>
            <br />
            in your way.
          </h1>

          {/* Subhead */}
          <p
            className="hero-item"
            style={{
              fontSize: "17px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.65)",
              maxWidth: "480px",
              opacity: 0,
            }}
          >
            Tensure gives your team enterprise-grade cloud infrastructure,
            security scanning, and compliance automation — shipped as simple
            APIs your developers actually want to use.
          </p>

          {/* CTAs */}
          <div
            className="hero-item"
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              opacity: 0,
            }}
          >
            <a href="#" className="btn-primary">
              Start building free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="btn-ghost">
              View documentation
            </a>
          </div>

          {/* Social proof */}
          <div
            className="hero-item"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              opacity: 0,
            }}
          >
            <div style={{ display: "flex" }}>
              {["#2a2a2a", "#333", "#2a2a2a", "#333"].map((bg, i) => (
                <div
                  key={i}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: bg,
                    border: "2px solid rgba(8,8,8,0.8)",
                    marginLeft: i === 0 ? 0 : "-8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    color: "#888",
                    fontWeight: 600,
                  }}
                >
                  {["A", "J", "M", "K"][i]}
                </div>
              ))}
            </div>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
              Trusted by{" "}
              <span style={{ color: "#fff", fontWeight: 600 }}>2,400+</span>{" "}
              engineering teams
            </span>
          </div>
        </div>

        {/* Right: Code block */}
        <div
          className="hero-item"
          style={{
            opacity: 0,
            background: "rgba(10,10,10,0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            fontFamily: "var(--font-geist-mono)",
            fontSize: "13px",
            lineHeight: 1.7,
          }}
        >
          {/* Terminal titlebar */}
          <div
            style={{
              padding: "12px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(8,8,8,0.6)",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: c,
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                letterSpacing: "0.02em",
              }}
            >
              deploy.ts
            </span>
          </div>

          {/* Code */}
          <div style={{ padding: "20px 20px 24px", overflowX: "auto" }}>
            {codeLines.map((line, lineIdx) => (
              <div key={lineIdx} style={{ display: "flex", minHeight: "22px" }}>
                <span
                  style={{
                    color: "#333",
                    minWidth: "28px",
                    userSelect: "none",
                    fontSize: "11px",
                    paddingTop: "1px",
                  }}
                >
                  {lineIdx + 1}
                </span>
                <span>
                  {line.tokens.map((tok, ti) => (
                    <span key={ti} style={tokenStyle(tok.t)}>
                      {tok.v}
                    </span>
                  ))}
                  {lineIdx === codeLines.length - 1 && (
                    <span
                      className="cursor-blink"
                      style={{
                        display: "inline-block",
                        width: "2px",
                        height: "14px",
                        background: "var(--accent)",
                        marginLeft: "2px",
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Status bar */}
          <div
            style={{
              padding: "10px 20px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(8,8,8,0.6)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "var(--accent)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                }}
              />
              Deployed in 1.4s
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
              3 replicas · us-east-1
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}