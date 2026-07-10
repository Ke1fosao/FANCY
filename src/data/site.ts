export const site = {
  name: "FÁNCY",
  descriptor: "дім краси",
  city: "Рівне",
  address: "вул. Степана Бандери, 11, Рівне",
  shortAddress: "Степана Бандери, 11",
  phoneDisplay: "+38 (096) 151 70 56",
  phoneHref: "+380961517056",
  instagram: "fancy.rivne",
  instagramUrl: "https://www.instagram.com/fancy.rivne/",
  hours: "Щодня, 10:00–20:00",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%B0+%D0%91%D0%B0%D0%BD%D0%B4%D0%B5%D1%80%D0%B8+11+%D0%A0%D1%96%D0%B2%D0%BD%D0%B5",
  mapEmbed:
    "https://www.google.com/maps?q=%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%B0%20%D0%91%D0%B0%D0%BD%D0%B4%D0%B5%D1%80%D0%B8%2011%2C%20%D0%A0%D1%96%D0%B2%D0%BD%D0%B5&output=embed",
  tagline: "Краса, що звучить як ти.",
  description:
    "Дім краси у Рівному: волосся, нігті, макіяж, брови та вії — в одному естетичному просторі.",
} as const;

export const navigation = [
  { href: "/", label: "Головна" },
  { href: "/services", label: "Послуги" },
  { href: "/gallery", label: "Роботи" },
  { href: "/about", label: "Про FÁNCY" },
  { href: "/contacts", label: "Контакти" },
] as const;
