import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, AtSign, MapPin, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BookingTrigger } from "@/components/BookingTrigger";
import { Faq } from "@/components/Faq";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { serviceCategories } from "@/data/services";
import { site } from "@/data/site";

const featured = [
  serviceCategories.find((item) => item.id === "hair-color")!,
  serviceCategories.find((item) => item.id === "manicure")!,
  serviceCategories.find((item) => item.id === "makeup")!,
  serviceCategories.find((item) => item.id === "brows-lashes")!,
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/images/interior.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-wash" />
          <div className="hero-grain" />
        </div>
        <div className="hero-content shell">
          <div className="hero-topline">
            <span>Rivne · Ukraine</span>
            <span>Hair · Nails · MakeUp · Brows · Lashes</span>
          </div>
          <div className="hero-main">
            <Reveal>
              <span className="eyebrow eyebrow-light">FÁNCY beauty house</span>
              <h1>Краса,<br /><em>що звучить</em><br />як ти.</h1>
            </Reveal>
            <Reveal className="hero-side" delay={0.18}>
              <p>Створюємо цілісний образ без шаблонів — уважно до деталей, вашого ритму та відчуття себе.</p>
              <div className="hero-actions">
                <BookingTrigger className="button button-light">Записатися онлайн <ArrowUpRight size={17} /></BookingTrigger>
                <Link className="button button-ghost-light" href="/services">Дивитися прайс</Link>
              </div>
            </Reveal>
          </div>
          <div className="hero-bottom">
            <a className="hero-location" href={site.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin size={17} />
              <span>{site.shortAddress}<small>{site.hours}</small></span>
            </a>
            <a className="scroll-cue" href="#services" aria-label="Прокрутити до послуг">
              <span>Explore</span><ArrowDown size={18} />
            </a>
            <a className="hero-instagram" href={site.instagramUrl} target="_blank" rel="noreferrer">
              <AtSign size={17} /> @{site.instagram}
            </a>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="intro-section section shell">
        <Reveal className="intro-number"><span>01</span></Reveal>
        <Reveal className="intro-heading" delay={0.05}>
          <span className="eyebrow">Усе для вашого образу</span>
          <h2>Не просто салон.<br />Ваш <em>дім краси.</em></h2>
        </Reveal>
        <Reveal className="intro-copy" delay={0.12}>
          <p>У FÁNCY можна зібрати образ повністю: від складного фарбування й відновлення волосся до манікюру, брів, вій та макіяжу.</p>
          <Link className="text-link" href="/about">Дізнатися більше <ArrowRight size={16} /></Link>
        </Reveal>
      </section>

      <section className="services-showcase section" id="services">
        <div className="section-head shell">
          <Reveal>
            <span className="eyebrow">Beauty directions</span>
            <h2>Оберіть свій<br /><em>напрям краси.</em></h2>
          </Reveal>
          <Reveal className="section-head-note" delay={0.1}>
            <p>Прозорий прайс, професійні протоколи та консультація перед складними процедурами.</p>
            <Link className="text-link" href="/services">Повний прайс <ArrowRight size={16} /></Link>
          </Reveal>
        </div>

        <div className="service-bento shell">
          {featured.map((category, index) => (
            <Reveal className={`service-card service-card-${index + 1}`} delay={index * 0.06} key={category.id}>
              <Link href={`/services#${category.id}`}>
                <Image src={category.image} alt={category.title} fill sizes="(max-width: 760px) 100vw, 50vw" />
                <div className="service-card-shade" />
                <div className="service-card-index">0{index + 1}</div>
                <div className="service-card-copy">
                  <span>{category.shortTitle}</span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <span className="service-card-arrow"><ArrowUpRight size={19} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="signature-section section">
        <div className="signature-grid shell">
          <Reveal className="signature-visual">
            <Image src="/images/hair-wash.jpg" alt="Професійний догляд за волоссям" width={1200} height={1600} sizes="(max-width: 900px) 92vw, 44vw" />
            <div className="signature-badge"><Sparkles size={18} /><span>Professional<br />care</span></div>
          </Reveal>
          <div className="signature-content">
            <Reveal>
              <span className="eyebrow">Hair expertise</span>
              <h2>Догляд, який працює <em>глибше</em> за миттєвий ефект.</h2>
              <p>У прайсі FÁNCY — протоколи відновлення Braé, Muran, Morphosis, Olaplex, детокс шкіри голови та реконструкції для різної довжини волосся.</p>
            </Reveal>
            <Reveal className="brand-row" delay={0.1}>
              <span>BRAÉ</span><span>MURAN</span><span>OLAPLEX</span><span>MORPHOSIS</span>
            </Reveal>
            <Reveal delay={0.16}>
              <BookingTrigger className="button button-dark" service="Відновлення волосся">Обрати догляд <ArrowUpRight size={17} /></BookingTrigger>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="price-preview section shell">
        <div className="section-head price-head">
          <Reveal>
            <span className="eyebrow">Selected prices</span>
            <h2>Зрозуміло.<br /><em>До візиту.</em></h2>
          </Reveal>
          <Reveal className="section-head-note" delay={0.1}>
            <p>Для складного фарбування фінальну вартість майстер визначає з урахуванням довжини, густини та стану волосся.</p>
          </Reveal>
        </div>
        <div className="price-preview-grid">
          {serviceCategories.slice(0, 6).map((category, index) => (
            <Reveal className="price-preview-card" delay={index * 0.04} key={category.id}>
              <div className="price-preview-top">
                <span>0{index + 1}</span>
                <h3>{category.title}</h3>
              </div>
              {category.items.slice(0, 3).map((item) => (
                <div className="mini-price" key={item.name}><span>{item.name}</span><strong>{item.price}</strong></div>
              ))}
              <Link href={`/services#${category.id}`}>Дивитися весь прайс <ArrowRight size={15} /></Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="gallery-section section">
        <div className="section-head shell">
          <Reveal>
            <span className="eyebrow">Visual diary</span>
            <h2>Деталі, з яких<br />складається <em>враження.</em></h2>
          </Reveal>
          <Reveal className="section-head-note" delay={0.1}>
            <p>Більше актуальних робіт, перевтілень і вільних віконець — у профілі FÁNCY.</p>
            <a className="text-link" href={site.instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={16} /></a>
          </Reveal>
        </div>
        <div className="shell"><GalleryGrid limit={8} /></div>
      </section>

      <section className="values-section section">
        <div className="values-grid shell">
          <Reveal className="values-title">
            <span className="eyebrow eyebrow-light">Why FÁNCY</span>
            <h2>Професійно.<br />Естетично.<br /><em>По-вашому.</em></h2>
          </Reveal>
          <div className="values-list">
            {[
              ["01", "Один простір", "Волосся, нігті, макіяж, брови та вії — без зайвих поїздок містом."],
              ["02", "Увага до деталей", "Від форми й відтінку до комфорту під час процедури."],
              ["03", "Професійний догляд", "Протоколи відновлення та захисту волосся з відомими брендами."],
              ["04", "Зручний запис", "Заявка на сайті, Direct або дзвінок — оберіть звичний спосіб."],
            ].map(([number, title, text], index) => (
              <Reveal className="value-row" delay={index * 0.06} key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section shell">
        <Reveal className="faq-intro">
          <span className="eyebrow">Before your visit</span>
          <h2>Коротко про<br /><em>важливе.</em></h2>
          <p>Не знайшли відповідь? Напишіть у Direct — адміністратор допоможе обрати послугу.</p>
        </Reveal>
        <Reveal className="faq-wrap" delay={0.1}><Faq /></Reveal>
      </section>

      <section className="contact-strip">
        <div className="contact-strip-grid shell">
          <Reveal className="contact-strip-title">
            <span className="eyebrow eyebrow-light">Visit us</span>
            <h2>Побачимося<br />у FÁNCY.</h2>
          </Reveal>
          <Reveal className="contact-strip-item" delay={0.06}>
            <MapPin size={20} /><span>Адреса<strong>{site.shortAddress}<br />Рівне</strong></span>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer">Маршрут <ArrowUpRight size={14} /></a>
          </Reveal>
          <Reveal className="contact-strip-item" delay={0.12}>
            <Clock3 size={20} /><span>Графік<strong>Щодня<br />10:00–20:00</strong></span>
          </Reveal>
          <Reveal className="contact-strip-item" delay={0.18}>
            <Phone size={20} /><span>Запис<strong>{site.phoneDisplay}<br />@{site.instagram}</strong></span>
            <a href={`tel:${site.phoneHref}`}>Подзвонити <ArrowUpRight size={14} /></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
