"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";
import { serviceCategories } from "@/data/services";
import { BookingTrigger } from "@/components/BookingTrigger";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-shell">
          <Link className="brand" href="/" aria-label="FÁNCY — на головну">
            <span className="brand-word">FÁNCY</span>
            <span className="brand-caption">дім краси</span>
          </Link>

          <nav className="desktop-nav" aria-label="Головна навігація">
            {navigation.map((item) => {
              if (item.href === "/services") {
                return (
                  <div
                    className="nav-dropdown-wrap"
                    key={item.href}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      className={`nav-link ${pathname.startsWith("/services") ? "is-active" : ""}`}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      onFocus={() => setServicesOpen(true)}
                    >
                      {item.label}
                      <ChevronDown size={13} strokeWidth={1.7} />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          className="services-mega"
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.99 }}
                          transition={{ duration: 0.22 }}
                        >
                          <div className="mega-intro">
                            <span className="eyebrow">Beauty menu</span>
                            <h3>Один простір — весь образ.</h3>
                            <p>Оберіть напрям і перегляньте повний актуальний прайс.</p>
                            <Link className="text-link" href="/services">
                              Усі послуги <ArrowUpRight size={15} />
                            </Link>
                          </div>
                          <div className="mega-links">
                            {serviceCategories.map((category) => (
                              <Link href={`/services#${category.id}`} key={category.id} onClick={() => setMenuOpen(false)}>
                                <span>{category.shortTitle}</span>
                                <strong>{category.title}</strong>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link className={`nav-link ${active ? "is-active" : ""}`} href={item.href} key={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <a className="phone-link" href={`tel:${site.phoneHref}`} aria-label={`Подзвонити ${site.phoneDisplay}`}>
              <Phone size={15} strokeWidth={1.8} />
              <span>{site.phoneDisplay}</span>
            </a>
            <ThemeToggle />
            <BookingTrigger className="button button-small button-dark">Записатися</BookingTrigger>
            <button
              className="icon-button menu-button"
              type="button"
              aria-label="Відкрити меню"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={21} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="mobile-menu-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-menu-top">
                <Link className="brand brand-light" href="/" onClick={() => setMenuOpen(false)}>
                  <span className="brand-word">FÁNCY</span>
                  <span className="brand-caption">дім краси</span>
                </Link>
                <button className="icon-button icon-button-light" type="button" onClick={() => setMenuOpen(false)} aria-label="Закрити меню">
                  <X size={23} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="mobile-nav" aria-label="Мобільна навігація">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.05 }}
                  >
                    <Link href={item.href} onClick={() => setMenuOpen(false)}>
                      <span>0{index + 1}</span>
                      {item.label}
                      <ArrowUpRight size={20} strokeWidth={1.4} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mobile-menu-services">
                {serviceCategories.slice(0, 6).map((category) => (
                  <Link href={`/services#${category.id}`} key={category.id} onClick={() => setMenuOpen(false)}>
                    {category.title}
                  </Link>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer">@{site.instagram}</a>
                <p>{site.address}<br />{site.hours}</p>
                <BookingTrigger className="button button-light button-full">Записатися онлайн</BookingTrigger>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
