import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return (
    <section className="page-hero shell">
      <div className="page-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {children && <div className="page-hero-aside">{children}</div>}
    </section>
  );
}
