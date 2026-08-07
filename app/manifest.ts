import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verhuurbeheer Marbella",
    short_name: "VBE Marbella",
    description: "Fullservice verhuurbeheer en vastgoedbeheer in Marbella en aan Golden Mile.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071d3a",
    lang: "nl",
    icons: [{ src: "/vbs-logo-marbella.webp", sizes: "640x640", type: "image/webp" }],
  };
}
