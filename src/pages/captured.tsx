import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Camera, BoxArrowUpRight, Bluesky } from "react-bootstrap-icons";
import FlickrIcon from "@/images/flickr.svg";

import Captured1 from "@/images/captured/pic1.jpg";
import Captured2 from "@/images/captured/pic2.jpg";
import Captured3 from "@/images/captured/pic3.jpg";
import Captured4 from "@/images/captured/pic4.jpg";
import Captured5 from "@/images/captured/pic5.jpg";
import Captured6 from "@/images/captured/pic6.jpg";
import Seo from "@/components/Seo";

export default function Captured() {
	return (
		<>
			<Seo
				canonical="https://samneale.dev/captured"
				title="Captured"
				description="Explore Sam Neale's photography side project, Captured. A collection of landscapes, travel, and quiet details from around the world."
			/>
			<Navbar />

			{/* Hero */}
			<section className="hero min-h-[60vh] bg-base-200">
				<div className="hero-content flex-col text-center">
					<Camera size={48} className="mb-6 opacity-80" />

					<h1 className="text-5xl font-bold tracking-tight">Captured</h1>

					<p className="mt-6 max-w-xl font-medium text-base-content">
						Captured is my photography side project — a place for moments,
						light, and places I notice while moving through the world. Mostly
						landscapes, travel, and quiet details.
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<a
							href="https://www.flickr.com/sam_neale"
							target="_blank"
							rel="noreferrer"
							className="btn btn-ghost"
						>
							<svg
								role="img"
								width={16}
								height={16}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Flickr</title>
								<path
									fill="currentColor"
									d="M5.334 6.666C2.3884 6.666 0 9.055 0 12c0 2.9456 2.3884 5.334 5.334 5.334 2.9456 0 5.332-2.3884 5.332-5.334 0-2.945-2.3864-5.334-5.332-5.334zm13.332 0c-2.9456 0-5.332 2.389-5.332 5.334 0 2.9456 2.3864 5.334 5.332 5.334C21.6116 17.334 24 14.9456 24 12c0-2.945-2.3884-5.334-5.334-5.334Z"
								/>
							</svg>
							Flickr
						</a>

						<a
							href="https://bsky.app/profile/yourhandle"
							target="_blank"
							rel="noreferrer"
							className="btn btn-ghost"
						>
							<Bluesky className="mr-2" />
							Bluesky
						</a>
					</div>
				</div>
			</section>

			{/* Gallery preview */}
			<section className="bg-base-100">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="mb-10 text-center">
						<h2 className="text-2xl font-bold">A few favourites</h2>
						<p className="mt-2 text-base-content/60">
							A small selection — more on Flickr.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{/* Replace these with your real images */}
						{[
							Captured1.src,
							Captured2.src,
							Captured3.src,
							Captured4.src,
							Captured5.src,
							Captured6.src,
						].map((src, i) => (
							<div
								key={i}
								className="overflow-hidden rounded-2xl bg-base-200 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
							>
								<Image
									src={src}
									alt={`Captured photograph ${i + 1}`}
									width={800}
									height={600}
									className="h-full w-full object-cover"
								/>
							</div>
						))}
					</div>

					<div className="mt-12 text-center">
						<a
							href="https://www.flickr.com/sam_neale"
							target="_blank"
							rel="noreferrer"
							className="btn btn-outline"
						>
							View full gallery on{" "}
							<svg
								role="img"
								width={16}
								height={16}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Flickr</title>
								<path
									fill="currentColor"
									d="M5.334 6.666C2.3884 6.666 0 9.055 0 12c0 2.9456 2.3884 5.334 5.334 5.334 2.9456 0 5.332-2.3884 5.332-5.334 0-2.945-2.3864-5.334-5.332-5.334zm13.332 0c-2.9456 0-5.332 2.389-5.332 5.334 0 2.9456 2.3864 5.334 5.332 5.334C21.6116 17.334 24 14.9456 24 12c0-2.945-2.3884-5.334-5.334-5.334Z"
								/>
							</svg>{" "}
							Flickr
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
