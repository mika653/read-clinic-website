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

const mockups = [
  {
    number: 1,
    name: "Warm Elegant",
    tagline: "Serif typography, gold accents, warm cream tones",
    href: "/concept-1",
    gradient: "linear-gradient(135deg, #FFF9F0 0%, #F5EDE0 100%)",
    accent: "#C9A84C",
    integrations: ["Online Booking", "Parent Portal", "GCash / Maya"],
  },
  {
    number: 2,
    name: "Modern Playful",
    tagline: "Vibrant gradients, rounded elements, bold brand colors",
    href: "/concept-2",
    gradient: "linear-gradient(135deg, #FFF0F3 0%, #FFE8ED 100%)",
    accent: "#E84671",
    integrations: ["WhatsApp Chat", "Assessment Forms", "FB Feed"],
  },
  {
    number: 3,
    name: "Minimalist Editorial",
    tagline: "High-contrast editorial with generous whitespace",
    href: "/concept-3",
    gradient: "linear-gradient(135deg, #FAFAF8 0%, #F5F5F0 100%)",
    accent: "#1A1A2E",
    integrations: ["Calendly Scheduling", "Progress Dashboard", "Google Reviews"],
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Minimal header */}
      <header className="px-6 sm:px-10 pt-10 pb-8">
        <ReadLogo size={32} />
        <p className="mt-1 text-xs tracking-[0.15em] text-gray-400 uppercase">
          Reading Enhancement &amp; Academic Development
        </p>
      </header>

      {/* Simple intro */}
      <section className="px-6 sm:px-10 pb-10 max-w-3xl">
        <h1
          className="text-3xl sm:text-4xl font-semibold leading-tight text-[#1A1A2E]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Website Mockups
        </h1>
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          Three design directions — each includes suggested integrations to
          streamline bookings, parent communication, and daily operations.
          Switch between mobile, tablet, and desktop views.
        </p>
      </section>

      {/* Mockup cards */}
      <section className="px-6 sm:px-10 pb-16">
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl">
          {mockups.map((m) => (
            <Link
              key={m.number}
              href={m.href}
              className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Preview */}
              <div
                className="h-44 sm:h-52 relative overflow-hidden flex items-center justify-center"
                style={{ background: m.gradient }}
              >
                {/* Mini phone mockup */}
                <div className="w-[100px] h-[175px] bg-white rounded-xl shadow-lg overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2.5 rounded-b-lg"
                    style={{ backgroundColor: m.accent }}
                  />
                  <div className="pt-5 px-2.5 space-y-1.5">
                    <div
                      className="h-1.5 w-7 rounded-full"
                      style={{ backgroundColor: m.accent, opacity: 0.5 }}
                    />
                    <div className="h-1 w-14 rounded-full bg-gray-200" />
                    <div className="h-1 w-10 rounded-full bg-gray-100" />
                    <div className="mt-2 h-6 rounded" style={{ backgroundColor: `${m.accent}12` }} />
                    <div className="h-6 rounded" style={{ backgroundColor: `${m.accent}08` }} />
                    <div className="mt-2 h-4 rounded" style={{ backgroundColor: m.accent }} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="text-lg font-semibold text-[#1A1A2E] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {m.name}
                </h3>
                <p className="text-xs text-gray-400 mb-4">{m.tagline}</p>

                {/* Integration badges */}
                <div className="flex flex-wrap gap-1.5">
                  {m.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="text-[10px] font-medium px-2 py-1 rounded-full"
                      style={{
                        color: m.accent,
                        backgroundColor: `${m.accent}10`,
                      }}
                    >
                      {integration}
                    </span>
                  ))}
                </div>

                <div
                  className="mt-4 flex items-center gap-1.5 text-xs font-medium group-hover:gap-2.5 transition-all"
                  style={{ color: m.accent }}
                >
                  Preview
                  <svg
                    width="12"
                    height="12"
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

      {/* Suggested Integrations Overview */}
      <section className="px-6 sm:px-10 pb-16">
        <div className="max-w-6xl">
          <h2
            className="text-xl font-semibold text-[#1A1A2E] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Suggested Integrations
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B731" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                ),
                title: "Online Booking",
                desc: "Calendly or Cal.com for 24/7 appointment scheduling. Parents can book assessments and sessions without calling.",
                impact: "Saves 2-3 hrs/day on phone bookings",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2BAA8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
                title: "WhatsApp / Viber Chat",
                desc: "Floating chat button for instant parent inquiries. Most Alabang parents prefer messaging over calling.",
                impact: "Faster response, higher conversion",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E84671" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <polyline points="17 11 19 13 23 9" />
                  </svg>
                ),
                title: "Parent Portal",
                desc: "Secure login for parents to view progress reports, session schedules, and developmental milestones.",
                impact: "Fewer update calls, happier parents",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E7AB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                ),
                title: "GCash / Maya Payments",
                desc: "Online payment for sessions and packages. GCash and Maya are the most used e-wallets in the Philippines.",
                impact: "No more bank deposits or cash-only",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                ),
                title: "Digital Intake Forms",
                desc: "Online assessment questionnaires that parents complete before their first visit. Data flows directly to your records.",
                impact: "Paperless intake, faster first sessions",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B731" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
                title: "Google Reviews Widget",
                desc: "Embed real Google reviews on the website. Social proof is the #1 factor for Alabang parents choosing a clinic.",
                impact: "Builds trust, drives new inquiries",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-[#1A1A2E] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                  {item.desc}
                </p>
                <p className="text-[10px] font-medium text-[#2BAA8E] uppercase tracking-wide">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="px-6 sm:px-10 py-6 border-t border-gray-50">
        <div className="flex items-center justify-between text-xs text-gray-300">
          <ReadLogo size={16} />
          <span>readclinicph@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}
