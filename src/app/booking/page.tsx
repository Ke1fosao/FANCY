import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Онлайн-запис",
  description: "Залиште заявку на запис до дому краси FÁNCY у Рівному.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <>
      <PageHero eyebrow="Online booking" title="Ваш час для себе починається тут." text="Вкажіть бажану послугу, дату та контакти. Адміністратор підтвердить вільне віконце." />
      <section className="booking-page section section-topless shell">
        <div className="booking-page-intro">
          <span>01</span><h2>Оберіть напрям</h2><p>Не впевнені, яка саме процедура потрібна? Оберіть «Потрібна консультація».</p>
          <span>02</span><h2>Залиште контакти</h2><p>Ми використаємо їх лише для узгодження запису.</p>
          <span>03</span><h2>Отримайте підтвердження</h2><p>Запис вважається підтвердженим після відповіді адміністратора.</p>
        </div>
        <div className="booking-page-form"><BookingForm /></div>
      </section>
    </>
  );
}
