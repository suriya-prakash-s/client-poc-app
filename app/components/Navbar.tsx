"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(8,8,8,0.9)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.07)" : "transparent"}`,
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              background: "var(--accent)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3zM9 9h4v4H9z"
                fill="#000"
              />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 700,
              fontSize: "17px",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            tensure
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            flex: 1,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: "4px",
                transition: "color 0.15s ease, background 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-primary)";
                (e.target as HTMLElement).style.background =
                  "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-secondary)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
          }}
        >
          <a
            href="#"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              transition: "color 0.15s ease",
            }}
            className="hidden-mobile"
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-secondary)")
            }
          >
            Sign in
          </a>
          <a href="#" className="btn-primary" style={{ padding: "8px 16px", fontSize: "13px" }}>
            Get started
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 6h7M6.5 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "4px",
              padding: "6px 8px",
              cursor: "pointer",
              color: "var(--text-secondary)",
              display: "none",
            }}
            className="show-mobile"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {menuOpen ? (
                <path
                  d="M3 3l12 12M15 3L3 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10,10,10,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                padding: "10px 12px",
                borderRadius: "4px",
                transition: "color 0.15s ease",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ height: "12px" }} />
          <a href="#" className="btn-primary" style={{ justifyContent: "center" }}>
            Get started free
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
