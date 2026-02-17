import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Ethan Palm",
  description:
    "Personal website of Ethan Palm, writer.",
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
  about: {
    path: "/about",
    label: "About",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  github: {
    label: "GitHub",
    href: "https://github.com/ethanpalm",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ethanpalm/",
  },
  email: {
    label: "Email",
    href: "mailto:info@ethanpalm.com",
  },
};
