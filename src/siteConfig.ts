import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Ethan Palm",
  description:
    "Personal website of Ethan Palm, technical writer and content person",
  href: "https://ethanpalm.com",
  author: "Ethan Palm",
  locale: "en",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "Blog",
  },
  projects: {
    path: "/projects",
    label: "Projects",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  github: {
    label: "GitHub",
    href: "https://github.com/ethanpalm",
  },
};
