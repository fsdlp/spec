import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
import rehypeExternalLinks from "rehype-external-links";
import starlightLinksValidator from "starlight-links-validator";

export default defineConfig({
    integrations: [
        mermaid(),
        starlight({
            title: "Flight Simulation Data Link Protocol",
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
                        "spec/discovery",
                        "spec/transport",
                        {
                            label: "CPDLC",
                            items: [
                                "spec/cpdlc",
                                "spec/cpdlc/logon",
                                "spec/cpdlc/connection",
                                "spec/cpdlc/uplink",
                                "spec/cpdlc/downlink",
                                "spec/cpdlc/messages",
                            ],
                        },
                        {
                            label: "ACARS",
                            items: ["spec/acars"],
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
