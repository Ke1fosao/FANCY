"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

const items = [
  {
    q: "Як записатися до FÁNCY?",
    a: "Залиште заявку на сайті, напишіть у Direct @fancy.rivne або зателефонуйте за номером +38 (096) 151 70 56. Адміністратор підтвердить дату й час.",
  },
  {
    q: "Чи можна зробити кілька послуг за один візит?",
    a: "Так. У прайсі є послуги в 4 руки, а також комбінація макіяжу та зачіски. Для складного образу краще завчасно узгодити тривалість візиту.",
  },
  {
    q: "Від чого залежить ціна фарбування?",
    a: "Фінальна вартість залежить від довжини, густини, поточного стану волосся, обраної техніки та витрати матеріалів. Перед складним фарбуванням рекомендована консультація.",
  },
  {
    q: "Чи є курси для себе?",
    a: "Так. У прайсі є курс «Макіяж для себе» на 1 або 3 уроки, а також навчання накрутці волосся на 1 або 3 уроки.",
  },
  {
    q: "Який графік роботи?",
    a: "Дім краси працює щодня з 10:00 до 20:00. Актуальність окремого часу краще підтвердити під час запису.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div className={`faq-item ${active ? "is-open" : ""}`} key={item.q}>
            <button type="button" onClick={() => setOpen(active ? -1 : index)} aria-expanded={active}>
              <span>0{index + 1}</span>
              <strong>{item.q}</strong>
              <Plus size={20} strokeWidth={1.5} />
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
