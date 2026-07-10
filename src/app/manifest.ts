import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FÁNCY — дім краси",
    short_name: "FÁNCY",
    description: "Дім краси у Рівному",
    start_url: "/",
    display: "standalone",
    background_color: "#f3efe8",
    theme_color: "#181613",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
