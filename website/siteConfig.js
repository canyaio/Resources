/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
  title: 'CanYa', // Title for your website.
  tagline: 'The decentralised serviceplace for the world',
  url: 'https://canyaio.github.io', // Your website URL
  baseUrl: '/Resources/', // Base URL for your project */
  blogUrl: 'https://medium.com/canyacoin',
  telegramUrl: 'https://t.me/joinchat/GI97FhDD1lf6dh-r9XRdvA',
  
  socials: [
    { name : "Facebook", url : "https://www.facebook.com/CanYaCoin/", className : "social-facebook", fontAwesome : "fab fa-facebook-square" },
    { name : "Twitter", url : "https://twitter.com/canyacoin" , className : "social-twitter", fontAwesome : "fab fa-twitter"},
    { name : "Instagram", url : "https://www.instagram.com/canyacoin/", className : "social-instagram", fontAwesome : "fab fa-instagram" },
    { name : "Youtube", url : "https://www.youtube.com/channel/UCbbpsDWjpdC-4LjDnF4Ec6w/",  className : "social-youtube", fontAwesome : "fab fa-youtube" },
    { name : "Telegram", url : "https://t.me/joinchat/GI97FhDD1lf6dh-r9XRdvA", className : "social-telegram", fontAwesome : "fab fa-telegram"} 
  ],

  // Used for publishing and more
  projectName: 'Resources',
  organizationName: 'canyaio',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{
      doc: 'overview',
      label: 'Docs'
    },
    {
      page: 'help',
      label: 'Help'
    }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  // headerIcon: 'img/icon.svg',
  footerIcon: 'img/icon.svg',
  favicon: 'img/favicon/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#33ccff',
    secondaryColor: '#f0fbff',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} CanYa`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/opengraph.png',
  twitterImage: 'img/opengraph.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;