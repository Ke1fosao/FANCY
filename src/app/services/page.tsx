import type { Metadata } from "next";
import { Download } from "lucide-react";
import { BookingTrigger } from "@/components/BookingTrigger";
import { PageHero } from "@/components/PageHero";
import { ServiceExplorer } from "@/components/ServiceExplorer";

export const metadata: Metadata = {
  title: "Послуги та ціни",
  description: "Повний прайс FÁNCY: манікюр, педикюр, макіяж, брови, вії, стрижки, фарбування та відновлення волосся.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & prices"
        title="Ваш образ — у деталях."
        text="Повний перелік напрямів і цін. Для складного фарбування та персональних протоколів відновлення рекомендуємо консультацію майстра."
      >
        <div className="page-hero-stat"><strong>9</strong><span>напрямів<br />краси</span></div>
        <div className="page-hero-actions-stack">
          <BookingTrigger className="button button-dark">Записатися</BookingTrigger>
          <a className="button button-outline" href="/downloads/fancy-price-list.pdf" download>
            PDF-прайс <Download size={16} />
          </a>
        </div>
      </PageHero>
      <section className="section section-topless shell">
        <ServiceExplorer />
      </section>
      <section className="price-disclaimer shell">
        <p>Ціни вказані у гривнях. Актуальність прайсу та фінальну вартість складних процедур уточнюйте під час запису.</p>
      </section>
    </>
  );
}
