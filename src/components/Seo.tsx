// components/Seo.tsx
import Head from "next/head";

type JsonLd = Record<string, any>;

type SeoProps = {
	title?: string; // Plain title (no site name)
	description?: string; // 50–160 chars
	canonical: string; // Absolute URL
	ogImage?: string; // Absolute OG image (1200x630)
	ogType?: "website" | "article"; // Defaults to article for content pages
	locale?: string; // e.g. "en_AU"
	siteName?: string; // e.g. "Sam Neale"
	twitter?: {
		card?: "summary" | "summary_large_image";
		site?: string;
		creator?: string;
	};
	noindex?: boolean;
	jsonLd?: JsonLd[]; // One or many JSON-LD blocks
	extraMeta?: Array<{ name?: string; property?: string; content: string }>;
};

export default function Seo({
	title = "",
	description = "Sam Neale's personal website and portfolio. Explore projects, captured moments, and more.",
	canonical,
	ogImage = "",
	ogType = "article",
	locale = "en_AU",
	siteName = "Sam Neale",
	twitter = { card: "summary_large_image", site: "@samneale.dev" },
	noindex = false,
	jsonLd = [],
	extraMeta = [],
}: SeoProps) {
	const fullTitle = title ? `${title} | ${siteName}` : siteName;

	return (
		<Head>
			{/* Primary */}
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={canonical} />
			{noindex && <meta name="robots" content="noindex, nofollow" />}

			{/* Favicons */}
			<link
				rel="icon"
				type="image/png"
				href="/favicon/favicon-96x96.png"
				sizes="96x96"
			/>
			<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
			<link rel="shortcut icon" href="/favicon/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<meta name="apple-mobile-web-app-title" content="GWU" />
			<link rel="manifest" href="/favicon/site.webmanifest" />

			{/* Open Graph */}
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={ogType} />
			<meta property="og:url" content={canonical} />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:locale" content={locale} />
			{ogImage && <meta property="og:image" content={ogImage} />}

			{/* Twitter */}
			<meta
				name="twitter:card"
				content={twitter.card ?? "summary_large_image"}
			/>
			{twitter.site && <meta name="twitter:site" content={twitter.site} />}
			{twitter.creator && (
				<meta name="twitter:creator" content={twitter.creator} />
			)}
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			{ogImage && <meta name="twitter:image" content={ogImage} />}

			{/* Extra meta (e.g., theme-color, viewport fine-tuning, etc.) */}
			{extraMeta.map((m, i) => (
				<meta key={i} {...m} />
			))}

			{/* JSON-LD (multiple blocks) */}
			{jsonLd.map((block, i) => (
				<script
					key={i}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
				/>
			))}
		</Head>
	);
}
