const stats = [
  { value: "10,000+", label: "Deployments / day" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "< 50ms", label: "API latency p99" },
  { value: "SOC 2", label: "Type II certified" },
  { value: "2,400+", label: "Engineering teams" },
];

export default function StatsBar() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-surface)",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "stretch",
          overflowX: "auto",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              flex: "1 0 auto",
              padding: "28px 32px",
              borderLeft: i === 0 ? "none" : "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              minWidth: "140px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "22px",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "var(--text-secondary)",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
