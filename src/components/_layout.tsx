import Footer from "./Footer";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-montserrat",
	fallback: ["sf-pro-text", "sans-serif"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={`${montserrat.className} flex flex-col min-h-screen`}>
			<main>{children}</main>
			<Footer />
		</div>
	);
}
