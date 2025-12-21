import MemojiWave from "@/images/wave.png";
import Image from "next/image";
import { Bluesky, Github, Key } from "react-bootstrap-icons";

export default function Footer() {
	return (
		<footer className="z-20 footer mt-auto sm:footer-horizontal bg-base-100 text-base-content items-center p-4">
			<aside className="grid-flow-col items-center">
				<Image src={MemojiWave} alt="Wave Memoji" width={36} height={36} />
				<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
			</aside>
			<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<div className="tooltip" data-tip="PGP Public Key">
					<a href="/pgpPublic.asc" target="_blank" rel="noreferrer">
						<Key size={24} />
					</a>
				</div>
				<a href="https://github.com/sam-neale" target="_blank" rel="noreferrer">
					<Github size={24} />
				</a>
				<a
					href="https://bsky.app/profile/samneale.dev"
					target="_blank"
					rel="noreferrer"
				>
					<Bluesky size={24} />
				</a>
			</nav>
		</footer>
	);
}
