import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Роботи та атмосфера",
  description: "Візуальний щоденник FÁNCY: волосся, нігті, макіяж, брови та атмосфера дому краси.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual diary"
        title="Краса живе в деталях."
        text="Добірка образів і настрою. Найсвіжіші роботи майстрів дивіться в офіційному Instagram FÁNCY."
      >
        <a className="button button-dark" href={site.instagramUrl} target="_blank" rel="noreferrer">Відкрити Instagram <ArrowUpRight size={16} /></a>
      </PageHero>
      <section className="section section-topless shell"><GalleryGrid /><p className="gallery-demo-note">Демонстраційне наповнення макета. Перед публікацією замініть фото на реальні роботи та інтерʼєр FÁNCY.</p></section>
    </>
  );
}
