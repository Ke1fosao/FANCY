export type GalleryItem = {
  src: string;
  alt: string;
  category: "Волосся" | "Нігті" | "Макіяж" | "Брови" | "Простір";
  ratio: "portrait" | "landscape" | "square" | "tall";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/hair-wash.jpg",
    alt: "Робота майстра з волоссям у салоні",
    category: "Волосся",
    ratio: "tall",
  },
  {
    src: "/images/nails.jpg",
    alt: "Акуратний манікюр",
    category: "Нігті",
    ratio: "square",
  },
  {
    src: "/images/makeup.jpg",
    alt: "Професійний макіяж",
    category: "Макіяж",
    ratio: "portrait",
  },
  {
    src: "/images/lashes.jpg",
    alt: "Деталі роботи з бровами та віями",
    category: "Брови",
    ratio: "landscape",
  },
  {
    src: "/images/tools.jpg",
    alt: "Інструменти майстра волосся",
    category: "Волосся",
    ratio: "landscape",
  },
  {
    src: "/images/interior.jpg",
    alt: "Сучасний простір салону краси",
    category: "Простір",
    ratio: "tall",
  },
  {
    src: "/images/portrait.jpg",
    alt: "Фарбування волосся",
    category: "Волосся",
    ratio: "portrait",
  },
  {
    src: "/images/cosmetics.jpg",
    alt: "Косметика для створення образу",
    category: "Макіяж",
    ratio: "square",
  },
  {
    src: "/images/hair-curl.jpg",
    alt: "Професійний догляд за волоссям",
    category: "Волосся",
    ratio: "landscape",
  },
  {
    src: "/images/nails.jpg",
    alt: "Мінімалістичний манікюр",
    category: "Нігті",
    ratio: "portrait",
  },
  {
    src: "/images/interior.jpg",
    alt: "Бʼюті-деталі та атмосфера",
    category: "Простір",
    ratio: "square",
  },
  {
    src: "/images/lashes.jpg",
    alt: "Акцент на бровах і віях",
    category: "Брови",
    ratio: "tall",
  },
];
