// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopicsPlugin from "starlight-sidebar-topics";
import starlightDocSearch from "@astrojs/starlight-docsearch";


// https://astro.build/config
export default defineConfig({
  site: "https://docs.oneshot3d-game.com/",
  integrations: [
    starlight({
      title: "",
      logo: {
        src: "./src/assets/cat.png",
        replacesTitle: true
      },
    expressiveCode: {
      themes: ['starlight-dark'],
    },
      head: [{
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.alex427.com/fonts/terminus.css',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
          },
        }],
        plugins: [ 
          starlightDocSearch({
              appId: "AR8K7THRQ9",
              apiKey: "99b3dce4d0a46a993344c4d8d1375996", //search api key
              indexName: "docs"
          }),
          starlightSidebarTopicsPlugin([
                        {
            label: 'Guides',
            link: '/guide/',
            icon: 'open-book',
            items: [
              { label: 'Home', slug: 'guide' },
              {
                label: 'Modding',
                collapsed: false,
                items: [
                  { label: 'Overview', slug: 'guide/modding' },
                  { label: 'Getting Started', slug: 'guide/modding/getting-started' },
                ],
              },
            ],
          },
          {
            label: 'Reference',
            link: '/reference/',
            icon: 'information',
            items: [
              { label: 'API Reference', autogenerate: { directory: 'reference' } },
            ],
          },
        ]),
      ],
      customCss: ["./src/styles/custom.css"]
    }),
  ],

  

});