import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const BASE = "/ddf/";

// A LP é renderizada no cliente, então o navegador só descobre a imagem do
// herói (o elemento de LCP) depois de baixar e executar o bundle. Este plugin
// injeta um <link rel="preload"> com o nome real do arquivo (que tem hash),
// para o download começar junto com o do JS. Uma media query por variante
// garante que cada dispositivo pré-carregue só a imagem que vai usar.
const preloadHeroImages = (): Plugin => ({
  name: "preload-hero-images",
  apply: "build",
  transformIndexHtml: {
    order: "post",
    handler(html, ctx) {
      if (!ctx.bundle) return html;
      const findAsset = (prefix: string) =>
        Object.keys(ctx.bundle!).find((f) => f.startsWith(`assets/${prefix}-`) && f.endsWith(".webp"));

      const variants = [
        { prefix: "banner2", media: "(min-width: 768px)" },
        { prefix: "mobile", media: "(max-width: 767.98px)" },
      ];

      const tags = variants
        .map(({ prefix, media }) => {
          const file = findAsset(prefix);
          if (!file) {
            this.warn(`preload-hero-images: asset "${prefix}" não encontrado no bundle`);
            return null;
          }
          return `<link rel="preload" as="image" href="${BASE}${file}" media="${media}" fetchpriority="high" />`;
        })
        .filter(Boolean)
        .join("\n    ");

      return tags ? html.replace("</head>", `  ${tags}\n  </head>`) : html;
    },
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: BASE, // Adicionado aqui para definir o caminho base
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), preloadHeroImages()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));