import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MemojiWave from "@/images/wave.png";

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

export default function Home() {
	const [displayText, setDisplayText] = useState("");
	const [isIntroComplete, setIsIntroComplete] = useState(false);

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
								<span className="relative inline-block">
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
			<div></div>
		</>
	);
}
