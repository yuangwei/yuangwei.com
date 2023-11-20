import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	author: "Yuang Wei",
	title: "Yuang's blog",
	description: "LifeNotes journal",
	lang: "en-GB",
	ogLocale: "en_GB",
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	includeViewTransitions: false,
	webmentions: {
		link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Articles",
		path: "/posts/",
	},
	{
		title: "About",
		path: "/about/",
	},
];

export const socialLinks: Array<{
	name: string;
	friendlyName: string;
	link: string;
	isWebmention?: boolean;
}> = [
		{
			name: "mdi:github",
			friendlyName: "Github",
			link: "https://github.com/yuangwei",
		},
		{
			name: "mdi:linkedin",
			friendlyName: "LinkedIn",
			link: "https://www.linkedin.com/in/yuangwei/",
		},
		{
			name: "mdi:twitter",
			friendlyName: "Twitter",
			link: "https://twitter.com/yuangwya/",
		},
		{
			name: "mdi:email",
			friendlyName: "email",
			link: "mailto:yuang.wya@gmail.com",
			isWebmention: true,
		},
	];