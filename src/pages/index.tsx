import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MemojiWave from "@/images/wave.png";
import MemojiMac from "@/images/mac.png";
import { Github, Folder } from "react-bootstrap-icons";
import FFIcon from "@/images/LOGO_FF_Black_Emblem.png";

import { Fugaz_One } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const fugaz_One = Fugaz_One({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-fugaz_One",
	fallback: ["sf-pro-text", "sans-serif"],
});

const INTRO_TEXT = "Hi! I'm Sam Neale.";

const paragraphVariants = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: 16 },
};

const cursorVariants = {
	blink: {
		opacity: [0, 1, 1, 0],
		transition: { duration: 0.8, ease: "linear" as const, repeat: Infinity },
	},
	hidden: {
		opacity: 0,
		transition: { duration: 0.2, ease: "easeOut" as const, repeat: 0 },
	},
};

const softwareSectionVariants = {
	hidden: { opacity: 0, y: 48 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: "easeOut" as const },
	},
};

const sectionVariants = {
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

const headerVariants = {
	hidden: { opacity: 0, y: 12 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: "easeOut" as const },
	},
};

const badgeListVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.05, delayChildren: 0.05 },
	},
};

const badgeItemVariants = {
	hidden: { opacity: 0, y: 8 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3, ease: "easeOut" as const },
	},
};

const flyingSectionVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.8, ease: "easeOut" as const },
	},
};

const flyingContentVariants = {
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.1 },
	},
};

const flyingButtonVariants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.25 },
	},
};

// Flying Photos
import plane1 from "@/images/flying/plane1.jpeg";
import plane2 from "@/images/flying/plane2.jpeg";
import plane3 from "@/images/flying/plane3.jpeg";
import plane4 from "@/images/flying/plane4.jpeg";
import plane5 from "@/images/flying/plane5.jpeg";
import plane6 from "@/images/flying/plane6.jpeg";
import plane7 from "@/images/flying/plane7.jpeg";

const PLANE_IMAGES = [plane1, plane2, plane3, plane4, plane5, plane6, plane7];

export default function Home() {
	const [displayText, setDisplayText] = useState("");
	const [isIntroComplete, setIsIntroComplete] = useState(false);
	const [showCurrentOnly, setShowCurrentOnly] = useState(false);
	const [planeIndex, setPlaneIndex] = useState(0);
	const [isPlaneTransitioning, setIsPlaneTransitioning] = useState(false);

	useEffect(() => {
		let index = 0;
		const typer = window.setInterval(() => {
			index += 1;
			setDisplayText(INTRO_TEXT.slice(0, index));
			if (index === INTRO_TEXT.length) {
				window.clearInterval(typer);
				window.setTimeout(() => {
					setIsIntroComplete(true);
				}, 500);
			}
		}, 85);

		return () => window.clearInterval(typer);
	}, []);

	useEffect(() => {
		const nextIndex = Math.floor(Math.random() * PLANE_IMAGES.length);
		setPlaneIndex(nextIndex);

		const timeouts: number[] = [];

		// Cycle through plane images with a blur transition on each swap.
		const intervalId = window.setInterval(() => {
			setIsPlaneTransitioning(true);

			const swapTimeout = window.setTimeout(() => {
				setPlaneIndex((prev) => (prev + 1) % PLANE_IMAGES.length);

				const unblurTimeout = window.setTimeout(() => {
					setIsPlaneTransitioning(false);
				}, 320);

				timeouts.push(unblurTimeout);
			}, 320);

			timeouts.push(swapTimeout);
		}, 15000);

		return () => {
			window.clearInterval(intervalId);
			timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
		};
	}, []);

	const groups = [
		{
			id: "languages",
			title: "Languages",
			badges: [
				{
					src: "https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",
					alt: "Swift",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
					alt: "TypeScript",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
					alt: "HTML5",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css&logoColor=white",
					alt: "CSS3",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
					alt: "JavaScript",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
					alt: "Markdown",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/TSX-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
					alt: "TSX",
					current: true,
				},
			],
		},
		{
			id: "frameworks",
			title: "Frameworks, Platforms, Libraries & Technologies",
			badges: [
				{
					src: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
					alt: "Node.js",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
					alt: "React",
					current: true,
				},
				{
					alt: "React Native",
					src: "https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
					alt: "React Router",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white",
					alt: "DaisyUI",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
					alt: "Tailwind CSS",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white",
					alt: "Electron",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
					alt: "Express",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
					alt: "Bootstrap",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE",
					alt: "Insomnia",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white",
					alt: "NPM",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
					alt: "Next.js",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
					alt: "Socket.io",
					current: false,
				},
			],
		},
		{
			id: "browsers",
			title: "Browsers",
			badges: [
				{
					src: "https://img.shields.io/badge/Safari-006CFF?style=for-the-badge&logo=Safari&logoColor=white",
					alt: "Safari",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white",
					alt: "Chrome",
					current: true,
				},
			],
		},
		{
			id: "os",
			title: "Operating Systems",
			badges: [
				{
					src: "https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white",
					alt: "iOS",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/macOs-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0",
					alt: "macOS",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
					alt: "Ubuntu",
					current: false,
				},
				{
					alt: "iPadOS",
					src: "https://img.shields.io/badge/iPadOS-000000?style=for-the-badge&logo=ios&logoColor=white",
					current: true,
				},
			],
		},
		{
			id: "hosting",
			title: "Hosting Providers",
			badges: [
				{
					src: "https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white",
					alt: "DigitalOcean",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white",
					alt: "GitHub Pages",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
					alt: "Firebase",
					current: false,
				},
			],
		},
		{
			id: "databases",
			title: "Databases",
			badges: [
				{
					src: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
					alt: "MySQL",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
					alt: "SQLite",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=Firebase&logoColor=white",
					alt: "Firebase",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white",
					alt: "Strapi",
					current: false,
				},
			],
		},
		{
			id: "ides",
			title: "IDEs",
			badges: [
				{
					src: "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white",
					alt: "VS Code",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/Xcode-147EFB.svg?style=for-the-badge&logo=Xcode&logoColor=white",
					alt: "Xcode",
					current: false,
				},
			],
		},
		{
			id: "orms",
			title: "ORMs",
			badges: [
				{
					src: "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
					alt: "Prisma",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white",
					alt: "Sequelize",
					current: false,
				},
			],
		},
		{
			id: "vcs",
			title: "Version Control",
			badges: [
				{
					src: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
					alt: "GitHub",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
					alt: "Git",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white",
					alt: "GitLab",
					current: false,
				},
			],
		},
		{
			id: "design",
			title: "Design Software",
			badges: [
				{
					src: "https://img.shields.io/badge/Sketch-F7B500?style=for-the-badge&logo=Sketch&logoColor=white",
					alt: "Sketch",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6",
					alt: "Adobe XD",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
					alt: "Figma",
					current: false,
				},
				{
					src: "https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white",
					alt: "Dribbble",
					current: true,
				},
				{
					src: "https://img.shields.io/badge/behance-1769FF?style=for-the-badge&logo=behance&logoColor=white",
					alt: "Behance",
					current: true,
				},
			],
		},
	];

	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<div className="hero bg-base-200 text-base-content grow">
					<motion.div
						className="hero-content flex-col lg:flex-row-reverse"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
						>
							<Image
								src={MemojiWave}
								alt="Memoji waving"
								className="max-w-sm rounded-lg drop-shadow-2xl"
							/>
						</motion.div>
						<div>
							<motion.h1
								className="text-8xl font-bold text-center lg:text-left"
								initial={{ opacity: 0, y: -12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
								aria-label={INTRO_TEXT}
							>
								<span
									className={`relative inline-block ${fugaz_One.className}`}
								>
									<span aria-hidden className="invisible select-none block">
										{INTRO_TEXT}
									</span>
									<span className="absolute inset-0 block">
										<span className="whitespace-pre-wrap">{displayText}</span>
										<motion.span
											className="inline-block align-baseline"
											variants={cursorVariants}
											animate={isIntroComplete ? "hidden" : "blink"}
											style={{
												marginLeft: displayText ? "0.15em" : 0,
												width: "0.15em",
												height: "0.95em",
												backgroundColor: "currentColor",
											}}
										/>
									</span>
								</span>
							</motion.h1>
							<motion.p
								className="py-6 text-2xl text-center lg:text-left"
								variants={paragraphVariants}
								initial="hidden"
								animate={isIntroComplete ? "visible" : "hidden"}
								transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
							>
								I write code and fly planes.
							</motion.p>
						</div>
					</motion.div>
				</div>
			</div>
			{/* Software Section */}
			<motion.section
				className="bg-neutral text-neutral-content font-mono"
				variants={softwareSectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.25 }}
			>
				<div className="mx-auto max-w-6xl px-6 pb-16 md:py-24">
					<div className="flex flex-col gap-10">
						{/* Left: hero */}
						<div className="relative">
							<div className="sticky top-20">
								<div className="flex flex-row items-center gap-5">
									<div className="flex flex-col mt-auto">
										<div className="flex flex-row gap-3">
											<a
												href="https://github.com/sam-neale"
												target="_blank"
												rel="noopener noreferrer"
												className="btn btn-outline btn-sm rounded-full me-2"
												aria-label="Visit my GitHub profile"
											>
												<Github size={20} />
											</a>
											<a
												href="/projects"
												className="btn btn-outline btn-sm rounded-full me-2"
												aria-label="Visit my Projects page"
											>
												<Folder size={20} /> Projects
											</a>
										</div>
										<h2 className="text-5xl md:text-8xl self-bottom mt-auto z-10 font-black tracking-tight">
											I write code.
										</h2>
									</div>
									<Image
										src={MemojiMac}
										alt="Memoji on MacBook"
										className="relative max-w-[240px] ms-auto rounded-3xl drop-shadow-2xl"
										priority
									/>
								</div>
							</div>
						</div>

						{/* Right: content */}
						<div className="rounded-3xl border text-base-content border-base-300/60 bg-base-100/60 p-6 md:p-8 shadow-xl backdrop-blur">
							{/* header controls */}
							<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
								<div>
									<p className="text-sm font-mono opacity-70">Software</p>
									<h3 className="text-2xl font-bold">My stack, at a glance</h3>
								</div>
								<label className="flex items-center gap-3 self-start md:self-auto">
									<label className="label text-base-content">
										<input
											type="checkbox"
											className="checkbox me-1"
											checked={showCurrentOnly}
											onChange={(event) =>
												setShowCurrentOnly(event.target.checked)
											}
											aria-checked={showCurrentOnly}
											aria-label="Toggle currently used technologies"
										/>
										Currently Using
									</label>
								</label>
							</div>

							<div className="mt-8 space-y-10">
								{groups.map((g) => (
									<SkillSection
										key={g.id}
										id={g.id}
										title={g.title}
										badges={g.badges}
										showCurrentOnly={showCurrentOnly}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</motion.section>
			{/* Flying Section */}
			<motion.section
				className="hero relative z-5 min-h-screen overflow-hidden"
				variants={flyingSectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.25 }}
			>
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: `url(${PLANE_IMAGES[planeIndex].src})`,
						transition: "filter 0.32s ease",
						filter: isPlaneTransitioning ? "blur(12px)" : "blur(0)",
					}}
				/>
				<div className="absolute inset-0 bg-gray-900/50" />
				<div className="hero-content relative z-10 text-neutral-content text-center">
					<div className="max-w-md">
						<motion.h1
							variants={flyingContentVariants}
							initial="hidden"
							animate="visible"
							className="mb-5 text-5xl font-bold"
						>
							✈️ I Fly Planes
						</motion.h1>
						<motion.a
							href="https://plan.foreflight.com/recap/2c205c4f-57d9-4797-bdd2-937f086ea38a"
							className="btn btn-soft btn-primary font-mono group"
							variants={flyingButtonVariants}
							initial="hidden"
							animate="visible"
							target="_blank"
						>
							<Image
								src={FFIcon}
								alt="ForeFlight Logo"
								className="inline-block h-6 w-auto me-2 group-hover:invert dark:group-hover:invert-0 dark:invert transition-all"
							/>{" "}
							ForeFlight Recap 2025
						</motion.a>
					</div>
				</div>
			</motion.section>
		</>
	);
}

const SkillBadge = ({ src, alt }: { src: string; alt: string }) => (
	<motion.div
		className="tooltip tooltip-bottom"
		data-tip={alt}
		variants={badgeItemVariants}
		initial="hidden"
		animate="visible"
		exit="hidden"
		layout
	>
		<img
			src={src}
			alt={alt}
			loading="lazy"
			className="h-6 md:h-9 w-auto select-none rounded-lg"
		/>
	</motion.div>
);

const SkillSection = ({
	id,
	title,
	badges,
	showCurrentOnly,
}: {
	id: string;
	title: string;
	badges: { src: string; alt: string; current?: boolean }[];
	showCurrentOnly: boolean;
}) => {
	const visibleBadges = showCurrentOnly
		? badges.filter((b) => b.current ?? true)
		: badges;

	return (
		<motion.section
			id={id}
			className="scroll-mt-24"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<motion.div
				className="flex items-center justify-between gap-3"
				variants={headerVariants}
			>
				<h3 className="text-base md:text-lg font-bold font-mono opacity-80">
					{title}
				</h3>
				<motion.span className="badge badge-ghost" variants={headerVariants}>
					{visibleBadges.length}
				</motion.span>
			</motion.div>

			{visibleBadges.length ? (
				<motion.div
					key={showCurrentOnly ? "current" : "all"}
					className="mt-3 flex flex-wrap gap-2"
					variants={badgeListVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<AnimatePresence initial={false}>
						{visibleBadges.map((b) => (
							<SkillBadge key={b.src} src={b.src} alt={b.alt} />
						))}
					</AnimatePresence>
				</motion.div>
			) : (
				<AnimatePresence initial={false}>
					<motion.p
						className="mt-3 text-sm font-mono italic opacity-70"
						variants={headerVariants}
					>
						No current tools listed here yet.
					</motion.p>
				</AnimatePresence>
			)}
		</motion.section>
	);
};
