export type PriceItem = {
  name: string;
  price: string;
  hint?: string;
  featured?: boolean;
};

export type ServiceCategory = {
  id: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  image: string;
  items: PriceItem[];
  note?: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "manicure",
    title: "Манікюр",
    shortTitle: "Nails",
    eyebrow: "Доглянуті руки",
    description: "Чиста форма, акуратна архітектура та покриття під ваш стиль.",
    image: "/images/nails.jpg",
    items: [
      { name: "Манікюр + покриття гель-лаком", price: "900 грн", featured: true },
      { name: "Манікюр + покриття гелем", price: "1000 грн" },
      { name: "Манікюр + нарощення", price: "від 1200 грн" },
      { name: "Довжина 3–4", price: "+150 грн" },
      { name: "Манікюр (апаратний / комбінований)", price: "400 грн" },
      { name: "Чоловічий манікюр", price: "500 грн" },
      { name: "Японський манікюр (із чисткою)", price: "650 грн" },
      { name: "Ремонт нігтя", price: "+50 грн" },
      { name: "Дизайн", price: "+10 грн / шт" },
      { name: "Зняття матеріалу без подальшого покриття", price: "+150 грн" },
      { name: "Відновлення архітектури нігтів", price: "+200 грн" },
      { name: "Покриття лікувальним лаком", price: "+100 грн" },
      { name: "Послуга в 4 руки", price: "+200 грн" },
    ],
  },
  {
    id: "pedicure",
    title: "Педикюр",
    shortTitle: "Pedicure",
    eyebrow: "Легкість у кожному кроці",
    description: "Делікатний догляд, охайне покриття та відчуття комфорту.",
    image: "/images/nails.jpg",
    items: [
      { name: "Чистка пальців та стопи + покриття", price: "1050 грн", featured: true },
      { name: "Чистка пальців + покриття", price: "900 грн" },
      { name: "Чистка пальців та стопи без покриття", price: "900 грн" },
      { name: "Чистка пальців без покриття (зі зняттям)", price: "800 грн" },
      { name: "Чистка стопи", price: "300 грн" },
    ],
  },
  {
    id: "makeup",
    title: "Макіяж",
    shortTitle: "Make up",
    eyebrow: "Образ без маски",
    description: "Виразний, але ваш: від легкого денного до вечірнього образу.",
    image: "/images/makeup.jpg",
    items: [
      { name: "Макіяж денний", price: "1000 грн", featured: true },
      { name: "Макіяж вечірній", price: "1200 грн" },
      { name: "Курс «Макіяж для себе» — 3 уроки", price: "5500 грн" },
      { name: "Курс «Макіяж для себе» — 1 урок", price: "2000 грн" },
    ],
  },
  {
    id: "brows-lashes",
    title: "Брови та вії",
    shortTitle: "Brows & lashes",
    eyebrow: "Точні акценти",
    description: "Форма, відтінок і ламінування, що підкреслюють природні риси.",
    image: "/images/lashes.jpg",
    items: [
      { name: "Корекція та фарбування брів", price: "500 грн", featured: true },
      { name: "Корекція брів без фарбування", price: "400 грн" },
      { name: "Фарбування брів без корекції", price: "400 грн" },
      { name: "Ламінування брів", price: "800 грн" },
      { name: "Видалення волосся над губою", price: "150 грн" },
      { name: "Ламінування вій", price: "800 грн" },
      { name: "Фарбування вій", price: "150 грн" },
    ],
  },
  {
    id: "hair-styling",
    title: "Укладки та зачіски",
    shortTitle: "Hair styling",
    eyebrow: "Рух і форма",
    description: "Накрутки, вечірні та весільні зачіски для вашої події.",
    image: "/images/hair-curl.jpg",
    items: [
      { name: "Накрутка — 1 довжина", price: "800 грн" },
      { name: "Накрутка — 2 довжина", price: "1000 грн", featured: true },
      { name: "Курс «Накрутка» — 3 уроки", price: "5000 грн" },
      { name: "Курс «Накрутка» — 1 урок", price: "1850 грн" },
      { name: "Вечірня зачіска — 1 довжина", price: "1000 грн" },
      { name: "Вечірня зачіска — 2 довжина", price: "1200 грн" },
      { name: "Весільна зачіска", price: "від 1300 грн" },
      { name: "Ранній вихід", price: "+300 грн" },
      { name: "Послуга в 4 руки: макіяж + зачіска", price: "+200 грн" },
    ],
  },
  {
    id: "hair-wash",
    title: "Миття та браш",
    shortTitle: "Blow dry",
    eyebrow: "Салонна гладкість",
    description: "Миття, рівний або обʼємний браш — легка щоденна розкіш.",
    image: "/images/hair-wash.jpg",
    items: [
      { name: "Миття + рівний браш, 1–2 довжина", price: "500 грн", featured: true },
      { name: "Миття + рівний браш, 3–4 довжина", price: "600 грн" },
      { name: "Миття + накрутка браш, 1–2 довжина", price: "600 грн" },
      { name: "Миття + накрутка браш, 3–4 довжина", price: "700 грн" },
      { name: "Вирівнювання без миття", price: "+300 грн" },
    ],
  },
  {
    id: "haircuts",
    title: "Стрижки",
    shortTitle: "Haircuts",
    eyebrow: "Форма, що працює щодня",
    description: "Жіночі, чоловічі й дитячі стрижки з увагою до текстури волосся.",
    image: "/images/hair-styling.jpg",
    items: [
      { name: "Жіноча стрижка", price: "500 грн", featured: true },
      { name: "Складна стрижка в техніці", price: "700–800 грн" },
      { name: "Стрижка кінчиків", price: "400 грн" },
      { name: "Полірування волосся", price: "від 450 грн" },
      { name: "Чоловіча стрижка", price: "550 грн" },
      { name: "Дитяча стрижка до 6 років", price: "350 грн" },
      { name: "Борода", price: "+100 грн" },
      { name: "Чілка", price: "100–250 грн" },
    ],
  },
  {
    id: "hair-care",
    title: "Відновлення волосся",
    shortTitle: "Hair care",
    eyebrow: "Догляд на рівні структури",
    description: "Професійні протоколи Braé, Muran, Morphosis та Olaplex.",
    image: "/images/portrait.jpg",
    items: [
      { name: "Braé Revival — 1 довжина", price: "1200 грн" },
      { name: "Braé Revival — 2 довжина", price: "1500 грн" },
      { name: "Реконструкція Silky від Muran — 1–2 довжина", price: "1500 грн", featured: true },
      { name: "Реконструкція Silky від Muran — 3 довжина", price: "1800 грн" },
      { name: "Реконструкція Silky від Muran — 4 довжина", price: "2100 грн" },
      { name: "Morphosis", price: "1200 грн" },
      { name: "Morphosis глибокий", price: "1500 грн" },
      { name: "Абсолютне щастя для волосся", price: "1700–2400 грн" },
      { name: "Premium Reconstruction", price: "1500 грн" },
      { name: "Ампульне відновлення Braé", price: "900 грн" },
      { name: "Детокс для шкіри голови", price: "600 грн" },
      { name: "Olaplex", price: "1200–1500 грн" },
    ],
    note: "У вартість входить укладка на рівний браш.",
  },
  {
    id: "hair-color",
    title: "Фарбування",
    shortTitle: "Color",
    eyebrow: "Колір із характером",
    description: "Від чистого тону до складних технік — із захистом якості волосся.",
    image: "/images/hair-styling.jpg",
    items: [
      { name: "Фарбування в один тон", price: "від 2500 грн", featured: true },
      { name: "Тонування в один тон", price: "від 2500 грн" },
      { name: "Фарбування коренів", price: "від 1800 грн" },
      { name: "Висвітлення коренів та тонування", price: "від 4000 грн" },
      { name: "Вихід з чорного", price: "від 7000 грн" },
      { name: "Airtouch / Balayage / мелірування", price: "від 6000 грн" },
      { name: "Контуринг", price: "від 3500 грн" },
      { name: "Додатковий захист Olaplex", price: "+500–1000 грн" },
      { name: "Додаткове зволоження / реконструкція від Muran", price: "+700 грн" },
    ],
    note: "Фінальна вартість залежить від густини та довжини волосся.",
  },
];

export const serviceMenu = serviceCategories.map(({ id, title, shortTitle }) => ({
  id,
  title,
  shortTitle,
}));

export function getServiceById(id?: string | null) {
  return serviceCategories.find((category) => category.id === id);
}
