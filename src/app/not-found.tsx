import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <span className="eyebrow">404</span>
      <h1>Ця сторінка змінила образ.</h1>
      <p>Схоже, потрібної адреси більше немає. Повернімося на головну.</p>
      <Link className="button button-dark" href="/">На головну</Link>
    </section>
  );
}
