import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	author: "Yuang Wei",
	title: "YuAng's blog",
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
		title: "Tags",
		path: "/tags/",
	},
];

export const socialLinks: Array<{
	name: string;
	friendlyName: string;
	link: string;
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
			link: "https://twitter.com/_yuangwei/",
		},
		{
			name: "mdi:instagram",
			friendlyName: "Instagram",
			link: "https://www.instagram.com/_yuangwei/",
		},
		{
			name: "mdi:email",
			friendlyName: "email",
			link: "mailto:hi@yuangwei.com",
		},
	];