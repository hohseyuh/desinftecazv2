import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Desinftec",
    short_name: "Desinftec",
    description:
      "Desinftec — veb və mobil tətbiqlər, UI/UX prototipləşdirmə və brendinq üzrə ixtisaslaşan rəqəmsal həllər komandası.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
