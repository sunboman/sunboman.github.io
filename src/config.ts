import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/",
  author: "Sat Naing",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "UGST",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/sunboman",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bosun_mia_san_mia/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/homefeed/",
    linkTitle: `${SITE.title} on Pinterest`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://tea.codes/web/@ugst",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
