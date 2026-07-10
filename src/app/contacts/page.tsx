import type { Metadata } from "next";
import { ArrowUpRight, Clock3, AtSign, MapPin, Phone } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Контакти",
  description: "Контакти FÁNCY у Рівному: Степана Бандери, 11, телефон +38 (096) 151 70 56, щодня 10:00–20:00.",
  alternates: { canonical: "/contacts" },
};

export default function ContactsPage() {
  return (
    <>
      <PageHero eyebrow="Contacts" title="Зустрінемося у центрі вашого дня." text="Запишіться зручним способом або прокладіть маршрут до дому краси FÁNCY у Рівному." />

      <section className="contact-page section section-topless shell">
        <div className="contact-cards">
          <a className="contact-card" href={site.mapsUrl} target="_blank" rel="noreferrer">
            <MapPin size={23} strokeWidth={1.4} /><span>Адреса</span><h3>{site.shortAddress}<br />Рівне</h3><small>Прокласти маршрут <ArrowUpRight size={14} /></small>
          </a>
          <a className="contact-card" href={`tel:${site.phoneHref}`}>
            <Phone size={23} strokeWidth={1.4} /><span>Телефон</span><h3>{site.phoneDisplay}</h3><small>Подзвонити <ArrowUpRight size={14} /></small>
          </a>
          <a className="contact-card" href={site.instagramUrl} target="_blank" rel="noreferrer">
            <AtSign size={23} strokeWidth={1.4} /><span>Instagram</span><h3>@{site.instagram}</h3><small>Написати в Direct <ArrowUpRight size={14} /></small>
          </a>
          <div className="contact-card">
            <Clock3 size={23} strokeWidth={1.4} /><span>Графік</span><h3>Щодня<br />10:00–20:00</h3><small>За попереднім записом</small>
          </div>
        </div>

        <div className="contact-main-grid">
          <div className="map-wrap">
            <iframe title="FÁNCY на карті" src={site.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="contact-form-card">
            <span className="eyebrow">Book your visit</span>
            <h2>Залиште заявку.</h2>
            <p>Адміністратор звʼяжеться з вами, уточнить послугу та запропонує вільний час.</p>
            <BookingForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
