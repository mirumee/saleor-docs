const path = require('path');

module.exports = {
  title: "Documentation – Saleor Commerce", // Title for your website.
  tagline:
    "A modular, high performance e-commerce storefront built with Python, GraphQL, Django, and ReactJS.",
  url: "https://docs.saleor.io",
  baseUrl: "/",

  // Used for publishing and more
  projectName: "saleor-docs",
  organizationName: "mirumee",

  favicon: "img/saleor-icon.png",

  plugins: [
    [path.resolve(__dirname, 'docusaurus2-graphql-doc-generator'),
      {
        schema: "http://localhost:8000/graphql/",
        rootPath: "../docs/",
        baseURL: "developer/api-reference",
        homepage: "../docs/developer/api-reference.mdx",
        homepageURL: "developer/api-reference",
      },
    ],
  ],

  themeConfig: {
    algolia: {
      apiKey: "33843c1b27663cc760ddc60811ba51d7",
      indexName: "saleor",
      placeholder: "Search Saleor Documentation",
    },

    /* Colors for website */
    colors: {
      primaryColor: "#0c7d7b",
      secondaryColor: "#5d623c",
    },

    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Saleor",
        src: "img/saleor-logo.svg",
        srcDark: "img/saleor-logo-dark.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          to: "/versions",
          label: "All versions",
          position: "right",
        },
        {
          to: "docs/dashboard/before-you-start",
          label: "Dashboard Manual",
          position: "left",
        },
        {
          to: "docs/developer",
          label: "Developer's Guide",
          position: "left",
        },
      ],
    },

    footer: {
      // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
      copyright: `Copyright © 2009–${new Date().getFullYear()} <a href="https://mirumee.com/">Mirumee Software</a>`,
      links: [
        {
          title: "Saleor Commerce",
          items: [
            { href: "https://saleor.io", label: "Home" },
            {
              href: "https://saleor.io/terms-and-conditions/",
              label: "Terms of use",
            },
            {
              href: "https://saleor.io/terms-and-conditions/#privacy",
              label: "Privacy policy",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              href: "https://spectrum.chat/saleor",
              label: "Spectrum",
            },
            {
              href: "https://stackoverflow.com/questions/tagged/saleor",
              label: "Stack Overflow",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              href: "https://saleor.io/blog/",
              label: "Blog",
            },
            {
              href: "https://github.com/mirumee/saleor/",
              label: "GitHub",
            },
            {
              href: "https://twitter.com/getsaleor",
              label: "Twitter",
            },
          ],
        },
      ],
    },

    // Open Graph and Twitter card images.
    image: "img/og-image.png",

    // Google Analytics tracking ID to track page views.
    googleAnalytics: {
      trackingID: "UA-10159761-25",
    },

    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
  },

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/theme.css"),
        },
        docs: {
          // docs folder path relative to website dir.
          path: "../docs",
          editUrl: "https://github.com/mirumee/saleor-docs/edit/master/docs/",
          // sidebars file relative to website dir.
          sidebarPath: require.resolve("./sidebars.js"),
        },
      },
    ],
  ],
};
