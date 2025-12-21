import Navbar from "@/components/Navbar";
import { Tools, Github, BoxArrowUpRight } from "react-bootstrap-icons";
import Seo from "@/components/Seo";

type Project = {
	title: string;
	description: string;
	tags: string[];
	github: string;
	demo?: string;
	status?: "WIP" | "Shipped" | "Paused";
};

const projects: Project[] = [
	{
		title: "React Loader Continued",
		description:
			"Continued development of a React full page loading modal with spinners and random custom text.",
		tags: ["React", "TypeScript"],
		github: "https://github.com/Sam-Neale/react-loader-continued",
		status: "Shipped",
	},
];

function StatusBadge({ status }: { status?: Project["status"] }) {
	if (!status) return null;

	const cls =
		status === "Shipped"
			? "badge-success"
			: status === "Paused"
			? "badge-warning"
			: "badge-info";

	return <span className={`badge ${cls} badge-sm`}>{status}</span>;
}

export default function Projects() {
	return (
		<div>
			<Seo
				canonical="https://samneale.dev/projects"
				title="Projects"
				description="Discover Sam Neale's projects, showcasing his work with React, TypeScript, and more. Explore live demos and GitHub repositories."
			/>
			<Navbar />

			<div className="hero bg-base-300 min-h-[30vh]">
				<div className="hero-content py-24 text-center">
					<div className="max-w-md">
						<Tools size={48} className="mx-auto mb-8" />
						<h1 className="text-5xl font-bold">My Projects</h1>
						<p className="py-6 font-mono text-base-content/70">
							Here are some of the projects I've been working on. Feel free to
							explore and check them out! I've mostly been working with React,
							TS, and Node.
						</p>
					</div>
				</div>
			</div>

			{/* Projects */}
			<section className="bg-base-200">
				<div className="mx-auto max-w-6xl px-6 py-14">
					<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{projects.map((p) => (
							<div
								key={p.title}
								className="card border border-base-300/60 bg-base-100 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
							>
								<div className="card-body">
									<div className="flex items-start justify-between gap-3">
										<h3 className="card-title text-xl">{p.title}</h3>
										<StatusBadge status={p.status} />
									</div>

									<p className="text-sm text-base-content/70">
										{p.description}
									</p>

									<div className="mt-2 flex flex-wrap gap-2">
										{p.tags.map((t) => (
											<span key={t} className="badge badge-outline">
												{t}
											</span>
										))}
									</div>

									<div className="card-actions mt-4 justify-end">
										{p.demo && (
											<a
												href={p.demo}
												target="_blank"
												rel="noreferrer"
												className="btn btn-ghost font-mono btn-sm"
											>
												<BoxArrowUpRight className="mr-2" />
												Live
											</a>
										)}

										<a
											href={p.github}
											target="_blank"
											rel="noreferrer"
											className="btn btn-neutral font-mono btn-sm"
										>
											<Github className="mr-2" />
											GitHub
										</a>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Empty-state helper (if you remove sample projects) */}
					{projects.length === 0 && (
						<div className="mt-10 rounded-2xl border border-base-300 bg-base-100 p-8 text-center">
							<h3 className="text-lg font-bold">No projects yet</h3>
							<p className="mt-2 text-base-content/70">
								Add your projects to the <code>projects</code> array above and
								they’ll show up here.
							</p>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
