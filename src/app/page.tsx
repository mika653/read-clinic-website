"use client";

import Link from "next/link";

function ReadLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size * 4} height={size} viewBox="0 0 160 40" fill="none">
      <circle cx="18" cy="20" r="16" fill="#E8B731" />
      <rect x="18" y="12" width="10" height="8" fill="white" />
      <rect x="44" y="8" width="20" height="12" fill="#2E7AB8" />
      <rect x="44" y="20" width="14" height="12" fill="#2E7AB8" />
      <polygon points="92,32 80,8 104,32" fill="#E84671" />
      <path d="M 116 8 A 16 16 0 0 1 116 40 Z" fill="#2BAA8E" />
    </svg>
  );
}

const concepts = [
  {
    number: 1,
    name: "Warm Elegant",
    description:
      "A sophisticated, warm approach using Playfair Display serif typography with gold accents. Cream backgrounds, editorial spacing, and a trust-building visual language that resonates with discerning parents.",
    style: "Serif + Gold + Cream Tones",
    typography: "Playfair Display + Inter",
    mood: "Premium, Warm, Trustworthy",
    href: "/concept-1",
    gradient: "linear-gradient(135deg, #FFF9F0 0%, #F5EDE0 100%)",
    accent: "#C9A84C",
    preview: {
      bg: "#FFF9F0",
      card1: "#E8B731",
      card2: "#E84671",
    },
  },
  {
    number: 2,
    name: "Modern Playful",
    description:
      "Vibrant and engaging, featuring Cormorant serif headlines with rounded elements and bold brand colors. Energetic gradients and playful geometry that celebrates childhood learning.",
    style: "Vibrant + Rounded + Gradient",
    typography: "Cormorant + Montserrat",
    mood: "Energetic, Joyful, Contemporary",
    href: "/concept-2",
    gradient: "linear-gradient(135deg, #FFF0F3 0%, #FFE8ED 100%)",
    accent: "#E84671",
    preview: {
      bg: "#FFF0F3",
      card1: "#E84671",
      card2: "#2BAA8E",
    },
  },
  {
    number: 3,
    name: "Minimalist Editorial",
    description:
      "Clean, high-contrast editorial design using Bodoni Moda with generous whitespace. A gallery-like presentation that communicates exclusivity and refined taste.",
    style: "Black + White + Minimal",
    typography: "Bodoni Moda + Jost",
    mood: "Refined, Exclusive, Intellectual",
    href: "/concept-3",
    gradient: "linear-gradient(135deg, #FAFAF8 0%, #F5F5F0 100%)",
    accent: "#1A1A2E",
    preview: {
      bg: "#FAFAF8",
      card1: "#1A1A2E",
      card2: "#E84671",
    },
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(180deg, #FAFAF8 0%, #FFFFFF 100%)",
      }}
    >
      {/* Header */}
      <header className="px-6 sm:px-10 pt-10 pb-6 flex items-center justify-between">
        <ReadLogo size={28} />
        <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">
          Website Proposal
        </span>
      </header>

      {/* Hero */}
      <section className="px-6 sm:px-10 pt-8 pb-16 max-w-4xl">
        <p
          className="text-xs font-medium uppercase tracking-[0.25em] mb-4"
          style={{ color: "#C9A84C" }}
        >
          Client Presentation &mdash; April 2026
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] text-[#1A1A2E] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          READ Clinic
          <br />
          <span className="text-gray-300">Website Concepts</span>
        </h1>
        <p className="mt-2 text-sm tracking-wide text-gray-300 uppercase mb-4" style={{ letterSpacing: "0.15em" }}>
          Reading Enhancement &amp; Academic Development
        </p>
        <p className="mt-2 text-base text-gray-400 max-w-lg leading-relaxed font-light">
          Three distinct design directions for R.E.A.D. Center&apos;s digital
          presence. Each concept is fully responsive and designed with Ayala
          Alabang&apos;s most discerning families in mind.
        </p>

        <div className="mt-8 flex flex-wrap gap-6 text-xs text-gray-400">
          <div>
            <span className="text-gray-300 block mb-1">Target Audience</span>
            <span className="text-[#1A1A2E] font-medium">
              Affluent Parents, Ayala Alabang
            </span>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div>
            <span className="text-gray-300 block mb-1">Approach</span>
            <span className="text-[#1A1A2E] font-medium">
              Mobile-First, Premium
            </span>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div>
            <span className="text-gray-300 block mb-1">Devices</span>
            <span className="text-[#1A1A2E] font-medium">
              iPhone, iPad, Desktop
            </span>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div>
            <span className="text-gray-300 block mb-1">Partners</span>
            <span className="text-[#1A1A2E] font-medium">
              PAREF Woodrose, AlpaBasa Phil, Rotary Club
            </span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 sm:px-10">
        <div className="h-px bg-gray-100" />
      </div>

      {/* Concept Cards */}
      <section className="px-6 sm:px-10 py-16">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl">
          {concepts.map((c) => (
            <Link
              key={c.number}
              href={c.href}
              className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Preview area */}
              <div
                className="h-48 sm:h-56 relative overflow-hidden"
                style={{ background: c.gradient }}
              >
                {/* Mini mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[120px] h-[200px] bg-white rounded-xl shadow-lg overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 rounded-b-lg"
                      style={{ backgroundColor: c.accent }}
                    />
                    <div className="pt-6 px-3 space-y-2">
                      <div
                        className="h-1.5 w-8 rounded-full"
                        style={{ backgroundColor: c.preview.card1, opacity: 0.6 }}
                      />
                      <div className="h-1 w-16 rounded-full bg-gray-200" />
                      <div className="h-1 w-12 rounded-full bg-gray-100" />
                      <div className="mt-3 h-8 rounded-md" style={{ backgroundColor: `${c.preview.card1}15` }} />
                      <div className="h-8 rounded-md" style={{ backgroundColor: `${c.preview.card2}15` }} />
                      <div className="mt-3 h-5 rounded-md" style={{ backgroundColor: c.accent }} />
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: c.accent }}
                >
                  {c.number}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: c.accent }}
                  >
                    Concept {c.number}
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold text-[#1A1A2E] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {c.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {c.description}
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Typography</span>
                    <span className="text-gray-500">{c.typography}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Mood</span>
                    <span className="text-gray-500">{c.mood}</span>
                  </div>
                </div>

                <div
                  className="mt-5 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                  style={{ color: c.accent }}
                >
                  View with Device Switcher
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Project details */}
      <div className="px-6 sm:px-10">
        <div className="h-px bg-gray-100" />
      </div>

      <section className="px-6 sm:px-10 py-12">
        <div className="max-w-6xl grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-xs">
          <div>
            <p className="text-gray-300 mb-1">Brand Colors</p>
            <div className="flex gap-2 mt-2">
              {["#E8B731", "#2E7AB8", "#E84671", "#2BAA8E"].map((color) => (
                <div
                  key={color}
                  className="w-8 h-8 rounded-lg"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-300 mb-1">Location</p>
            <p className="text-gray-500 leading-relaxed">
              4th Floor, JD Tower, Madrigal Business Park, Ayala Alabang,
              Muntinlupa City
            </p>
          </div>
          <div>
            <p className="text-gray-300 mb-1">Contact</p>
            <p className="text-gray-500">0956-844-4552</p>
            <p className="text-gray-500">readclinicph@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-300 mb-1">Stack</p>
            <p className="text-gray-500">Next.js + Tailwind CSS</p>
            <p className="text-gray-500">Deployed on Vercel</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 py-8 border-t border-gray-50 text-center">
        <p className="text-xs text-gray-200">
          Prepared with care for READ Clinic &mdash; April 2026
        </p>
      </footer>
    </div>
  );
}
