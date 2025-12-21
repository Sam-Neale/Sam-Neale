import { Camera, CodeSlash } from "react-bootstrap-icons";

import { Fugaz_One } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const fugaz_One = Fugaz_One({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-fugaz_One",
	fallback: ["sf-pro-text", "sans-serif"],
});

export default function Navbar() {
	return (
		<div className={`navbar bg-base-100 shadow-sm ${fugaz_One.className}`}>
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={-1}
						className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<a href="/projects">
								<CodeSlash />
								Projects
							</a>
						</li>
						<li>
							<a href="/captured">
								<Camera /> Captured
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost text-xl" href="/">
					Sam Neale
				</a>
			</div>
			<div className="navbar-end"></div>
		</div>
	);
}
