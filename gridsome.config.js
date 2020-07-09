// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Book of a Thousand Tales',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: 'https://bookofathousandtales.com',
  settings: {
    web: process.env.URL_WEB || false,
    twitter: 'https://twitter.com/tomheinan',
    github: 'https://github.com/bookofathousandtales/bookofathousandtales.github.io',
    nav: {
      links: [
        { path: '/core-rules/', title: 'Core Rules' },
        { path: '/compendium/', title: 'Compendium' }
      ]
    },
    sidebar: [
      {
        name: 'core-rules',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/core-rules/'
            ]
          },
          {
            title: 'Player\'s Guide',
            items: [
              '/core-rules/character-creation/'
            ]
          },
          {
            title: 'Storyteller\'s Guide',
            items: [
              '/core-rules/storytellers-guide/'
            ]
          },
          {
            title: 'Appendix',
            items: [
              '/core-rules/license/'
            ]
          }
        ]
      },
      {
        name: 'compendium',
        sections: [
          {
            title: 'Preface',
            items: [
              '/compendium/'
            ]
          },
          {
            title: 'Grimoires',
            items: [
              '/compendium/necronomicon/'
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
