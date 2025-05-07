import type { Favicon } from "@/types/config.ts";

export const defaultFavicons: Favicon[] = [
	{
		src: "/favicon/favicon-light.png",
		theme: "light",
		sizes: "32x32",
	},
	{
		src: "/favicon/favicon-night.png",
		theme: "dark",
		sizes: "32x32",
	},
];
