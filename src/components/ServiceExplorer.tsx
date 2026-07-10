"use client";

import { Search, Sparkles } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { BookingTrigger } from "@/components/BookingTrigger";
import { serviceCategories } from "@/data/services";

export function ServiceExplorer() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("uk-UA");
    return serviceCategories
      .filter((category) => active === "all" || category.id === active)
      .map((category) => ({
        ...category,
        items: normalized
          ? category.items.filter((item) => `${item.name} ${item.price}`.toLocaleLowerCase("uk-UA").includes(normalized))
          : category.items,
      }))
      .filter((category) => category.items.length > 0);
  }, [active, query]);

  return (
    <div className="service-explorer">
      <div className="service-toolbar">
        <div className="service-tabs" role="tablist" aria-label="Категорії послуг">
          <button className={active === "all" ? "is-active" : ""} onClick={() => setActive("all")} type="button">Усі</button>
          {serviceCategories.map((category) => (
            <button
              className={active === category.id ? "is-active" : ""}
              onClick={() => setActive(category.id)}
              type="button"
              key={category.id}
            >
              {category.title}
            </button>
          ))}
        </div>
        <label className="service-search">
          <Search size={17} strokeWidth={1.7} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Знайти послугу або ціну" />
        </label>
      </div>

      <div className="service-groups">
        {filtered.map((category, categoryIndex) => (
          <section className="price-group" id={category.id} key={category.id}>
            <div className="price-group-visual">
              <Image src={category.image} alt={category.title} fill priority={categoryIndex < 2} sizes="(max-width: 900px) 100vw, 36vw" />
              <div className="price-group-overlay" />
              <div className="price-group-copy">
                <span>{category.shortTitle}</span>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
            </div>
            <div className="price-list-card">
              <div className="price-list-head">
                <span className="eyebrow">Price list</span>
                <Sparkles size={19} strokeWidth={1.5} />
              </div>
              <div className="price-lines">
                {category.items.map((item) => (
                  <div className={`price-line ${item.featured ? "is-featured" : ""}`} key={`${category.id}-${item.name}`}>
                    <span className="price-name">{item.name}</span>
                    <span className="price-dots" aria-hidden="true" />
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
              {category.note && <p className="price-note">* {category.note}</p>}
              <BookingTrigger className="button button-outline button-full" service={category.title}>
                Записатися на {category.title.toLocaleLowerCase("uk-UA")}
              </BookingTrigger>
            </div>
          </section>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <span>Нічого не знайдено</span>
          <p>Спробуйте іншу назву або перегляньте всі категорії.</p>
          <button className="text-button" type="button" onClick={() => { setQuery(""); setActive("all"); }}>Очистити фільтри</button>
        </div>
      )}
    </div>
  );
}
