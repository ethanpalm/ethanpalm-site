import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "Ethan Palm",
	prologue: "Technical writing & content strategy",
	author: {
		name: "Ethan Palm",
		link: "https://ethanpalm.com"
	},
	description: "Personal website of Ethan Palm, technical writer and content person",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2025"
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en"
	},
	pagination: {
		note: 15,
		jotting: 24
	},
	heatmap: {
		unit: "day",
		weeks: 20
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
