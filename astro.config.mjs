import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
import rehypeExternalLinks from "rehype-external-links";
import starlightLinksValidator from "starlight-links-validator";

export default defineConfig({
    site: "https://fsdlp.github.io",
    base: "spec",
    integrations: [
        mermaid(),
        starlight({
            title: "Flight Simulation Data Link Protocol",
            titleDelimiter: "::",
            editLink: { baseUrl: "https://github.com/fsdlp/spec/edit/main" },
            lastUpdated: true,
            favicon: "/icon.svg",
            logo: {
                dark: "/public/wordmark-dark.svg",
                light: "/public/wordmark-light.svg",
                alt: "FSDLP v1",
                replacesTitle: true,
            },
            sidebar: [
                { slug: "index" },
                { slug: "definitions" },
                {
                    label: "Specification",
                    items: [
                        "discovery",
                        "transport",
                        {
                            label: "CPDLC",
                            items: [
                                "cpdlc",
                                "cpdlc/logon",
                                "cpdlc/connections",
                                "cpdlc/uplink",
                                "cpdlc/downlink",
                            ],
                        },
                        {
                            label: "ACARS",
                            items: ["acars"],
                        },
                    ],
                },
                {
                    label: "Guides",
                    items: ["guides/aircraft", "guides/airlines", "guides/networks"],
                },
            ],
            customCss: [
                "./src/styles/global.css",
                "@fontsource/poppins",
                "@fontsource/hind",
                "@fontsource/ibm-plex-mono/500.css",
            ],
            plugins: [starlightLinksValidator()],
        }),
    ],

    markdown: {
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    target: "_blank",
                    rel: "noreferrer",
                    content: { type: "text", value: " 🔗" },
                },
            ],
        ],
    },

    vite: { plugins: [tailwindcss()] },
});
