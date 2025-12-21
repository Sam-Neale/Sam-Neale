import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fugaz_One } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const fugaz_One = Fugaz_One({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-fugaz_One",
	fallback: ["sf-pro-text", "sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={fugaz_One.className}>
			<Component {...pageProps} />
		</div>
	);
}
