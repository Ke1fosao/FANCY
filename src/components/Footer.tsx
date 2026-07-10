import { ArrowUpRight, AtSign, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BookingTrigger } from "@/components/BookingTrigger";
import { navigation, site } from "@/data/site";
import { serviceCategories } from "@/data/services";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta shell">
        <div>
          <span className="eyebrow eyebrow-light">Your beauty moment</span>
          <h2>Знайдемо образ, у якому ви — це ви.</h2>
        </div>
        <BookingTrigger className="button button-light">Записатися <ArrowUpRight size={17} /></BookingTrigger>
      </div>

      <div className="footer-grid shell">
        <div className="footer-brand">
          <Link className="brand brand-light" href="/">
            <span className="brand-word">FÁNCY</span>
            <span className="brand-caption">дім краси</span>
          </Link>
          <p>{site.description}</p>
          <div className="footer-socials">
            <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram FÁNCY"><AtSign size={18} /></a>
            <a href={`tel:${site.phoneHref}`} aria-label="Подзвонити FÁNCY"><Phone size={18} /></a>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" aria-label="Прокласти маршрут"><MapPin size={18} /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Навігація</h3>
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>

        <div className="footer-column">
          <h3>Послуги</h3>
          {serviceCategories.slice(0, 6).map((category) => (
            <Link href={`/services#${category.id}`} key={category.id}>{category.title}</Link>
          ))}
        </div>

        <div className="footer-column footer-contacts">
          <h3>Контакти</h3>
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer">@{site.instagram}</a>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer">{site.shortAddress}</a>
          <p>{site.hours}</p>
        </div>
      </div>

      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} FÁNCY. Усі права захищені.</span>
        <Link href="/privacy">Конфіденційність</Link>
        <span>Рівне · Hair · Nails · MakeUp · Brows · Lashes</span>
      </div>
    </footer>
  );
}
