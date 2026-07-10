"use client";

import { AnimatePresence, motion } from "motion/react";
import { AtSign, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { site } from "@/data/site";

const categories = ["Усі", "Волосся", "Нігті", "Макіяж", "Брови", "Простір"] as const;

export function GalleryGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof categories)[number]>("Усі");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items = useMemo(() => {
    const filtered = active === "Усі" ? galleryItems : galleryItems.filter((item) => item.category === active);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <>
      {!limit && (
        <div className="gallery-filters" aria-label="Фільтр галереї">
          {categories.map((category) => (
            <button className={active === category ? "is-active" : ""} onClick={() => setActive(category)} type="button" key={category}>
              {category}
            </button>
          ))}
        </div>
      )}
      <motion.div className="gallery-grid" layout>
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.button
              className={`gallery-item ratio-${item.ratio}`}
              key={`${item.src}-${item.alt}`}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              onClick={() => setSelected(item)}
              type="button"
            >
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              <span className="gallery-item-label">{item.category}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="lightbox-scrim" type="button" aria-label="Закрити фото" onClick={() => setSelected(null)} />
            <motion.figure
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              <button className="lightbox-close" type="button" aria-label="Закрити" onClick={() => setSelected(null)}><X /></button>
              <Image className="lightbox-image" src={selected.src} alt={selected.alt} width={1400} height={1800} sizes="92vw" />
              <figcaption>
                <div><span>{selected.category}</span><p>{selected.alt}</p></div>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer"><AtSign size={17} /> Instagram</a>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
