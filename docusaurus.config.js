const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Badaso Documentation",
    tagline: "Badaso official documentation",
    url: "https://badaso-docs.uatech.co.id",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",
    organizationName: "uasoft-indonesia", // Usually your GitHub org/user name.
    projectName: "badaso-docs", // Usually your repo name.
    trailingSlash: false,
    i18n: {
      defaultLocale: "en",
      locales: ["en", "id"],
    },

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            routeBasePath: "/",
            editUrl:
              "https://github.com/uasoft-indonesia/badaso-docs/edit/main/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          contextualSearch: true,
          appId: 'F9ZREGGLRC',
          apiKey: "b149e29a4ae24941c2e50cd450311c9d",
          indexName: "badaso-docs",
        },
        navbar: {
          logo: {
            alt: "Badaso logo",
            src: "img/full-logo-badaso.png",
            srcDark: "img/full-logo-badaso-background-black.png",
          },
          items: [
            {
              type: "search",
              position: "right",
            },

            {
              type: "localeDropdown",
              position: "right",
            },

            {
              href: "https://github.com/uasoft-indonesia/badaso",
              position: "right",
              label: "Github",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial Video",
                  to: "https://www.youtube.com/playlist?list=PLO-UCDr2KEwPZPeQvjLmj-RVfNHycttPl",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/groups/badaso",
                },
                {
                  label: "Telegram",
                  href: "https://t.me/badaso_developers",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Donation",
                  to: "https://opencollective.com/badaso",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} UASOFT. All right reserved`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
