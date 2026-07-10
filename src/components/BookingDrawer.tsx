"use client";

import { AnimatePresence, motion } from "motion/react";
import { Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { BookingForm } from "@/components/BookingForm";

export function BookingDrawer() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  useEffect(() => {
    const onOpen = (event: Event) => {
      const customEvent = event as CustomEvent<{ service?: string }>;
      setService(customEvent.detail?.service ?? "");
      setOpen(true);
    };
    window.addEventListener("fancy:booking", onOpen);
    return () => window.removeEventListener("fancy:booking", onOpen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="drawer-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="drawer-scrim" type="button" aria-label="Закрити форму запису" onClick={() => setOpen(false)} />
          <motion.aside
            className="booking-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Форма запису"
          >
            <div className="drawer-head">
              <div>
                <span className="eyebrow">Online request</span>
                <h2>Запис до FÁNCY</h2>
              </div>
              <button className="icon-button" type="button" aria-label="Закрити" onClick={() => setOpen(false)}>
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <p className="drawer-lead">Залиште контакти й побажання. Ми уточнимо деталі та запропонуємо вільний час.</p>
            <BookingForm key={service} compact initialService={service} />
            <div className="drawer-direct">
              <span>Потрібна відповідь зараз?</span>
              <a href={`tel:${site.phoneHref}`}><Phone size={15} /> {site.phoneDisplay}</a>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
