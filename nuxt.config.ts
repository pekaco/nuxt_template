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
        prefix: "og: https://ogp.me/ns#",
      },
      title: "My Site",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: DESCRIPTION },
        { property: "og:site:name", content: "Site Name" },
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
      link: [{ rel: "icon", href: "/favicon.ico" }], // type属性を省略
    },
  },
  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      "Noto Sans JP": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
    download: true,
    inject: true,
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
