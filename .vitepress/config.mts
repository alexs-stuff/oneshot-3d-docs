import { defineConfig, DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",

  srcDir: "docs",
  
  title: "OS3D Docs",
  markdown: {
    config: (md) => {
      md.core.ruler.push('custom_tag', (state) => {
        state.tokens.forEach(token => {
          if (token.type === 'inline' && token.children) {
            token.children.forEach(child => {
              if (child.type === 'text') {
                child.content = child.content.replace(
                  /:\[(.+?)\]:/g,
                  (_, text) => `<span class="vp-tag">${text}</span>`
                )
                if (child.content.includes('vp-tag')) {
                  child.type = 'html_inline'
                }
              }
            })
          }
        })
      })
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

     outline: [2, 3],

    nav: [
      { text: "Guides", link: "/guide"},
      { text: "Reference", link: "/reference"}
    ],

    search: {
      provider: "algolia",
      options: {
        appId: "AR8K7THRQ9",
        apiKey: "99b3dce4d0a46a993344c4d8d1375996", //search api key
        indexName: "docs"
      }
    },

    footer: {
      message: "Niko (OneShot), OneShot is property of Future Cat Games. All credits of their assets goes to them",
      copyright: "Copyright © Alex's Stuff 2025-2026"
    },

    sidebar: {
        '/guide/': { base: '/guide/', items: sb_guide() },
        '/reference/': {base: '/reference/', items: sb_refs() }
    },
    
  }
})

type NewSidebarItem = Omit<DefaultTheme.SidebarItem, 'items'> & {
  badge?: { text: string; color: string }
  items?: NewSidebarItem[]
}
function sb_guide(): NewSidebarItem[] {
    return [
        {
            text: "Home", 
            link: "/",
        },
        {
            text: "Modding", 
            collapsed: false,
            link: "/modding/",
            items: [
              { text: "Getting Started", link: "/modding/getting-started" }
            ]
        }
    ]
}

function sb_refs(): NewSidebarItem[] {
    return [
        {
            text: "OneShot.Modding.Models",
            collapsed: false,
            
            
            items: [
              { text: "ModConfiguration", link: "/modding/mod-configuration", badge: {text: "T", color: 'var(--vp-c-indigo-3)' }, }
              
            ]
        }
    ]
}