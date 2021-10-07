const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Badaso Documentation",
    tagline: "Dinosaurs are cool",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "badaso-docs", // Usually your repo name.

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
              "https://github.com/facebook/docusaurus/edit/main/website/",
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
          apiKey: "a790a1d5087c0b331c354501a4f782a4",
          indexName: "index",
        },
        navbar: {
          logo: {
            alt: "My Site Logo",
            src: "img/full-logo-badaso.png",
            srcDark: "img/full-logo-badaso-background-black.png",
          },
          items: [
            {
              type: "search",
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
                  to: "/",
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
