import { defineNuxtConfig } from "nuxt";

// サイトリンクに表示したい内容
const TITLE = "Site Title";
const DESCRIPTION = "Site Description";
const PRODUCTION_URL = "Site URL";

const OGP_IMAGE_URL =
  process.env.VERCEL_ENV === "preview"
    ? `https://${process.env.NUXT_ENV_VERCEL_URL}/ogp.jpg`
    : `${PRODUCTION_URL}/ogp.jpg`;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: http://ogp.me/ns#",
      },
      title: "My Site",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: DESCRIPTION },
        { property: "og:site_name", content: "Site Name" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: PRODUCTION_URL },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:image", content: OGP_IMAGE_URL },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: OGP_IMAGE_URL },
        { name: "twitter:description", content: DESCRIPTION },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: PRODUCTION_URL,
  },
  buildmodules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Noto Serif Japanese": [500],
    },
    display: "swap",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["destyle.css"],

  postcss: {
    // キーとしてプラグイン名を、値として引数を追加します
    // プラグインは前もって npm か yarn で dependencies としてインストールしておきます
    plugins: {
      "postcss-nested": {},
    },
  },
});
