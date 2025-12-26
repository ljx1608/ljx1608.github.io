import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "ljx1608",
  DESCRIPTION: "some website.",
  EMAIL: "ljx1608@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "see everything.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "some writings.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "some codes.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/ljx1608/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ljx1608",
  },
];
