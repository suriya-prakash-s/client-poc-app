"use client";
const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  Developers: ["Documentation", "API Reference", "SDK", "CLI", "GitHub"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "64px 24px 40px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px repeat(4, 1fr)",
            gap: "48px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  background: "var(--accent)",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 2.5h4v4h-4zM7.5 2.5h4v4h-4zM2.5 7.5h4v4h-4zM7.5 7.5h4v4h-4z" fill="#000"/>
                </svg>
              </div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                tensure
              </span>
            </a>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.65 }}>
              Infrastructure that scales with your team.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
              {[
                { label: "GitHub", path: "M8 2C4.69 2 2 4.69 2 8c0 2.65 1.72 4.9 4.1 5.69.3.06.41-.13.41-.28v-1c-1.67.36-2.02-.81-2.02-.81-.27-.69-.67-.87-.67-.87-.55-.37.04-.36.04-.36.6.04.92.62.92.62.54.92 1.41.65 1.76.5.05-.39.21-.65.38-.8-1.33-.15-2.73-.67-2.73-2.97 0-.65.23-1.19.62-1.6-.06-.16-.27-.76.06-1.58 0 0 .51-.16 1.66.62A5.8 5.8 0 018 5.77c.51 0 1.03.07 1.51.2 1.15-.78 1.66-.62 1.66-.62.33.82.12 1.42.06 1.58.38.41.62.95.62 1.6 0 2.31-1.41 2.82-2.75 2.96.22.19.41.56.41 1.13v1.67c0 .16.11.35.41.29C12.28 12.9 14 10.65 14 8c0-3.31-2.69-6-6-6z" },
                { label: "X", path: "M3 3l4.5 5.5L3 13h1.5l3.5-4.2L11.5 13H13l-4.7-5.8L13 3h-1.5L7.8 6.8 4.5 3H3z" },
                { label: "LinkedIn", path: "M3 5.5h2v7H3v-7zM4 4.8a1 1 0 110-2 1 1 0 010 2zM7 5.5h2v1c.3-.5 1-1 2-1 2 0 2 1.5 2 2.5v4h-2V8.5c0-.8-.2-1.5-1-1.5s-1 .7-1 1.5V12.5H7v-7z" },
              ].map((icon) => (
                <a
                  key={icon.label}
                  href="#"
                  aria-label={icon.label}
                  style={{
                    color: "var(--text-muted)",
                    transition: "color 0.15s ease",
                    display: "flex",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                  }
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginBottom: "4px",
                }}
              >
                {section}
              </span>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            © 2025 Tensure, Inc. All rights reserved.
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
