import type { Metadata } from "next";
import { ArrowUpRight, Check, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BookingTrigger } from "@/components/BookingTrigger";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Про FÁNCY",
  description: "FÁNCY — дім краси у Рівному, де волосся, нігті, макіяж, брови та вії поєднані в одному просторі.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About FÁNCY" title="Простір, де образ стає відчуттям." text="FÁNCY обʼєднує ключові бʼюті-напрями в одному місці — щоб підготовка до важливого дня або звичайний догляд були простими, красивими й комфортними." />

      <section className="about-story section section-topless shell">
        <Reveal className="about-story-image">
          <Image src="/images/interior.jpg" alt="Сучасний салон краси" width={1200} height={1600} sizes="(max-width: 900px) 100vw, 44vw" />
          <span className="image-caption">Stepana Bandery, 11 · Rivne</span>
        </Reveal>
        <Reveal className="about-story-copy" delay={0.1}>
          <span className="eyebrow">Our approach</span>
          <h2>Ви — не тренд.<br />Ви — <em>відправна точка.</em></h2>
          <p>Тому кожна послуга починається з розуміння бажаного результату. Форма, колір, текстура й деталі мають підкреслювати людину, а не перекривати її.</p>
          <p>У FÁNCY доступні перукарські послуги, колористика й відновлення волосся, манікюр і педикюр, макіяж, брови та вії, а також навчальні курси для себе.</p>
          <BookingTrigger className="button button-dark">Записатися до FÁNCY <ArrowUpRight size={17} /></BookingTrigger>
        </Reveal>
      </section>

      <section className="about-values section">
        <div className="shell">
          <div className="about-values-head">
            <Reveal><span className="eyebrow eyebrow-light">What matters</span><h2>Три опори<br /><em>гарного сервісу.</em></h2></Reveal>
            <Reveal delay={0.1}><p>Не обіцяємо магії. Створюємо якісний результат через професійність, діалог і увагу.</p></Reveal>
          </div>
          <div className="about-value-cards">
            {[
              { icon: Heart, title: "Людяність", text: "Комфортна атмосфера, повага до побажань і зрозуміла комунікація." },
              { icon: Sparkles, title: "Естетика", text: "Чиста форма, виважені акценти й відчуття міри у кожному образі." },
              { icon: Check, title: "Професійність", text: "Робота з сучасними техніками та професійними доглядовими протоколами." },
            ].map((item, index) => (
              <Reveal className="about-value-card" delay={index * 0.07} key={item.title}>
                <item.icon size={24} strokeWidth={1.4} /><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-visit section shell">
        <Reveal>
          <span className="eyebrow">Come as you are</span>
          <h2>Залишайтеся собою.<br />Ми подбаємо про <em>решту.</em></h2>
        </Reveal>
        <Reveal className="about-visit-info" delay={0.1}>
          <p>{site.address}</p><p>{site.hours}</p><p>{site.phoneDisplay}</p>
          <div><Link className="text-link" href="/contacts">Контакти й маршрут <ArrowUpRight size={16} /></Link></div>
        </Reveal>
      </section>
    </>
  );
}
