import './globals.css';

const siteUrl = 'https://sunnymondal.com';

export const metadata = {
    // ── Core ──────────────────────────────────────────────────────
    title: {
        default: 'Sunny Mondal Podcast — India\'s #1 Business & Entrepreneurship Podcast',
        template: '%s | Sunny Mondal Podcast',
    },
    description:
        'Join 1M+ listeners every week as Sunny Mondal sits down with India\'s top founders, investors, and CEOs. Raw, unfiltered conversations about building businesses, managing money, and thinking bigger. New episodes every week.',
    keywords: [
        'Sunny Mondal podcast',
        'India business podcast',
        'entrepreneurship podcast India',
        'startup podcast',
        'Indian founders podcast',
        'best business podcast India',
        'CEO interviews India',
        'investor podcast',
        'personal growth podcast',
        'figuring out podcast',
    ],
    authors: [{ name: 'Sunny Mondal', url: siteUrl }],
    creator: 'Sunny Mondal',
    publisher: 'Sunny Mondal',

    // ── Indexing ──────────────────────────────────────────────────
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    },
    alternates: { canonical: siteUrl },

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────────
    openGraph: {
        type: 'website',
        url: siteUrl,
        siteName: 'Sunny Mondal Podcast',
        title: 'Sunny Mondal Podcast — India\'s #1 Business & Entrepreneurship Podcast',
        description:
            'Raw conversations with India\'s top founders and investors. 350+ episodes. 1M+ monthly listeners. Tune in on Spotify, YouTube, and Apple Podcasts.',
        images: [
            {
                url: `${siteUrl}/og-image.png`,
                width: 1200,
                height: 630,
                alt: 'Sunny Mondal Podcast — The Blueprint for the Modern Indian Entrepreneur',
            },
        ],
        locale: 'en_IN',
    },

    // ── Twitter Card ──────────────────────────────────────────────
    twitter: {
        card: 'summary_large_image',
        site: '@sunnymondal',
        creator: '@sunnymondal',
        title: 'Sunny Mondal Podcast — India\'s #1 Business Podcast',
        description:
            'Conversations with India\'s top founders, investors & CEOs. 1M+ listeners. New episodes every week.',
        images: [`${siteUrl}/og-image.png`],
    },

    // ── Icons ──────────────────────────────────────────────────────
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
};

// JSON-LD structured data for Google Podcast rich results
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    name: 'Sunny Mondal Podcast',
    description:
        'India\'s #1 business and entrepreneurship podcast, hosted by Sunny Mondal. Raw, unfiltered conversations with the founders, CEOs, and investors building India\'s future.',
    url: siteUrl,
    image: `${siteUrl}/host.png`,
    author: {
        '@type': 'Person',
        name: 'Sunny Mondal',
        url: siteUrl,
    },
    publisher: {
        '@type': 'Organization',
        name: 'Sunny Mondal',
        logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.png` },
    },
    inLanguage: 'en-IN',
    genre: ['Business', 'Entrepreneurship', 'Personal Finance', 'Self-Improvement'],
    numberOfEpisodes: 350,
    webFeed: 'https://feeds.spotify.com/sunnymondal',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en-IN">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,700&family=Inter:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
