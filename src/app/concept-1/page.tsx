"use client";

import DeviceSwitcher from "@/components/DeviceSwitcher";

function ReadLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size * 4} height={size} viewBox="0 0 160 40" fill="none">
      {/* R - Yellow circle with bite */}
      <circle cx="18" cy="20" r="16" fill="#E8B731" />
      <rect x="18" y="12" width="10" height="8" fill="white" />
      {/* E - Blue steps */}
      <rect x="44" y="8" width="20" height="12" fill="#2E7AB8" />
      <rect x="44" y="20" width="14" height="12" fill="#2E7AB8" />
      {/* A - Pink triangle */}
      <polygon points="92,32 80,8 104,32" fill="#E84671" />
      {/* D - Teal semicircle */}
      <path d="M 116 8 A 16 16 0 0 1 116 40 Z" fill="#2BAA8E" />
    </svg>
  );
}

export default function Concept1() {
  return (
    <DeviceSwitcher
      conceptName="Warm Elegant"
      conceptNumber={1}
      accentColor="#C9A84C"
    >
      {(device) => <WarmElegantDesign device={device} />}
    </DeviceSwitcher>
  );
}

function WarmElegantDesign({ device }: { device: string }) {
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";
  const isDesktop = device === "desktop";

  return (
    <div
      className="min-h-full"
      style={{
        fontFamily: "'Playfair Display', 'Inter', serif",
        background: "linear-gradient(180deg, #FFF9F0 0%, #FFFFFF 40%)",
      }}
    >
      {/* Navigation */}
      <nav
        className={`flex items-center justify-between ${
          isMobile ? "px-5 py-4" : "px-8 py-5"
        }`}
        style={{ paddingTop: isMobile ? "40px" : undefined }}
      >
        <ReadLogo size={isMobile ? 28 : 36} />
        {!isMobile && (
          <div
            className="flex items-center gap-8 text-sm tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif", color: "#6B6B6B" }}
          >
            <span className="cursor-pointer hover:text-[#1A1A2E] transition-colors">Programs</span>
            <span className="cursor-pointer hover:text-[#1A1A2E] transition-colors">About</span>
            <span className="cursor-pointer hover:text-[#1A1A2E] transition-colors">Testimonials</span>
            <button
              className="px-5 py-2 rounded-full text-white text-sm font-medium cursor-pointer transition-transform hover:scale-105"
              style={{ backgroundColor: "#C9A84C" }}
            >
              Book a Visit
            </button>
          </div>
        )}
        {isMobile && (
          <button className="cursor-pointer p-2" aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        )}
      </nav>

      {/* Hero Section */}
      <section className={`${isMobile ? "px-5 pt-8 pb-10" : isTablet ? "px-8 pt-12 pb-14" : "px-16 pt-16 pb-20 flex items-center gap-16"}`}>
        <div className={isDesktop ? "flex-1" : ""}>
          <p
            className="text-xs font-medium uppercase tracking-[0.25em] mb-2"
            style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C" }}
          >
            Reading Enhancement &amp; Academic Development
          </p>
          <p
            className="text-xs tracking-wide mb-4"
            style={{ fontFamily: "'Inter', sans-serif", color: "#B0A08A" }}
          >
            Ayala Alabang&apos;s Premier Learning Center
          </p>
          <h1
            className={`font-bold leading-tight text-[#1A1A2E] ${
              isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-5xl"
            }`}
          >
            Nurturing Minds,
            <br />
            <span style={{ color: "#E84671" }}>Shaping Futures</span>
          </h1>
          <p
            className={`mt-5 leading-relaxed ${
              isMobile ? "text-sm" : "text-base"
            }`}
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#6B6B6B",
              maxWidth: "480px",
            }}
          >
            A specialized center for Reading Enhancement and Academic
            Development. We partner with Alabang&apos;s most dedicated families to
            unlock every child&apos;s potential through expert-guided assessment,
            intervention, and enrichment programs.
          </p>

          <div className={`flex items-center gap-3 mt-8 ${isMobile ? "flex-col" : ""}`}>
            <button
              className={`${
                isMobile ? "w-full" : ""
              } px-8 py-3.5 rounded-full text-white font-medium text-sm cursor-pointer transition-all hover:shadow-lg hover:scale-105`}
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: "#C9A84C",
              }}
            >
              Schedule a Consultation
            </button>
            <button
              className={`${
                isMobile ? "w-full" : ""
              } px-8 py-3.5 rounded-full font-medium text-sm cursor-pointer transition-all hover:bg-gray-50`}
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#1A1A2E",
                border: "1.5px solid #E5E0D8",
              }}
            >
              Explore Programs
            </button>
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-8 flex items-center gap-6 ${
              isMobile ? "flex-wrap" : ""
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-white"
                    style={{
                      backgroundColor: ["#E8B731", "#2E7AB8", "#E84671", "#2BAA8E"][i - 1],
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                500+ families trust us
              </span>
            </div>
          </div>
        </div>

        {isDesktop && (
          <div className="flex-1 relative">
            <div
              className="w-full aspect-[4/3] rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #FFF3E0 0%, #FCE4EC 100%)",
              }}
            >
              <img
                src="/hero-banner.jpg"
                alt="READ Clinic learning environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div className="text-2xl font-bold text-[#2BAA8E]">10+</div>
              <div className="text-xs text-gray-500">Years of Excellence</div>
            </div>
          </div>
        )}
      </section>

      {/* Mobile/Tablet Hero Image */}
      {!isDesktop && (
        <div className={`${isMobile ? "px-5" : "px-8"} pb-8`}>
          <div
            className="w-full aspect-video rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #FFF3E0 0%, #FCE4EC 100%)",
            }}
          >
            <img
              src="/hero-banner.jpg"
              alt="READ Clinic learning environment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Why READ Section */}
      <section
        className={`${isMobile ? "px-5 py-12" : isTablet ? "px-8 py-14" : "px-16 py-20"}`}
        style={{ backgroundColor: "#FDFBF7" }}
      >
        <p
          className="text-xs font-medium uppercase tracking-[0.25em] mb-3"
          style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C" }}
        >
          Why Choose READ
        </p>
        <h2
          className={`font-bold text-[#1A1A2E] ${
            isMobile ? "text-2xl" : "text-3xl"
          }`}
        >
          A Sanctuary for
          <br />
          Young Learners
        </h2>

        <div
          className={`mt-10 grid gap-6 ${
            isDesktop ? "grid-cols-3" : isTablet ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {[
            {
              icon: "R",
              color: "#E8B731",
              title: "Reading Enhancement",
              desc: "Comprehensive reading assessment and structured literacy programs that build fluency, phonics mastery, and comprehension from the ground up.",
            },
            {
              icon: "E",
              color: "#2E7AB8",
              title: "Educational Therapy",
              desc: "One-on-one intervention sessions with certified specialists addressing dyslexia, reading difficulties, and learning differences.",
            },
            {
              icon: "A",
              color: "#E84671",
              title: "Academic Development",
              desc: "Enrichment programs in writing, math readiness, and study skills that complement school curricula and build academic confidence.",
            },
            {
              icon: "D",
              color: "#2BAA8E",
              title: "Developmental Support",
              desc: "Speech-language pathology, occupational therapy, and psychoeducational assessments to support the whole child's growth.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#F0EBE3] hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4"
                style={{
                  backgroundColor: item.color,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {item.icon}
              </div>
              <h3
                className="font-semibold text-[#1A1A2E] text-base mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", color: "#8B8B8B" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section
        className={`${isMobile ? "px-5 py-12" : isTablet ? "px-8 py-14" : "px-16 py-20"}`}
      >
        <p
          className="text-xs font-medium uppercase tracking-[0.25em] mb-3"
          style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C" }}
        >
          Our Programs
        </p>
        <h2
          className={`font-bold text-[#1A1A2E] ${
            isMobile ? "text-2xl" : "text-3xl"
          }`}
        >
          Curated Learning
          <br />
          Experiences
        </h2>

        <div className={`mt-10 grid gap-5 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
          {[
            {
              name: "Early Learners",
              age: "Ages 3-5",
              color: "#E8B731",
              bg: "#FFF8E7",
              features: ["Phonics & letter recognition", "Pre-writing readiness", "Speech-language screening"],
            },
            {
              name: "Reading Enhancement",
              age: "Ages 6-9",
              color: "#E84671",
              bg: "#FFF0F3",
              features: ["Structured literacy intervention", "Reading comprehension", "Educational therapy"],
              featured: true,
            },
            {
              name: "Academic Development",
              age: "Ages 10-14",
              color: "#2BAA8E",
              bg: "#F0FBF8",
              features: ["Academic writing mastery", "Study skills coaching", "Critical analysis"],
            },
          ].map((program, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 ${
                program.featured
                  ? "ring-2 ring-[#C9A84C] shadow-md"
                  : "border border-[#F0EBE3]"
              }`}
              style={{ backgroundColor: program.bg }}
            >
              {program.featured && (
                <span
                  className="inline-block text-xs font-medium px-3 py-1 rounded-full text-white mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: "#C9A84C",
                  }}
                >
                  Most Popular
                </span>
              )}
              <h3
                className="font-bold text-xl text-[#1A1A2E] mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {program.name}
              </h3>
              <p
                className="text-xs font-medium mb-5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: program.color,
                }}
              >
                {program.age}
              </p>
              <ul className="space-y-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                {program.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle cx="8" cy="8" r="8" fill={program.color} fillOpacity="0.15" />
                      <path
                        d="M5 8L7 10L11 6"
                        stroke={program.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className="w-full mt-6 py-3 rounded-full font-medium text-sm cursor-pointer transition-all hover:shadow-md"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: program.featured ? "#C9A84C" : "white",
                  color: program.featured ? "white" : "#1A1A2E",
                  border: program.featured ? "none" : "1.5px solid #E5E0D8",
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className={`${isMobile ? "px-5 py-12" : isTablet ? "px-8 py-14" : "px-16 py-20"}`}
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <p
          className="text-xs font-medium uppercase tracking-[0.25em] mb-3"
          style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C" }}
        >
          Parent Voices
        </p>
        <h2
          className={`font-bold text-white ${
            isMobile ? "text-2xl" : "text-3xl"
          }`}
        >
          Trusted by Alabang&apos;s
          <br />
          Finest Families
        </h2>

        <div className={`mt-10 grid gap-5 ${isDesktop ? "grid-cols-2" : "grid-cols-1"}`}>
          {[
            {
              quote:
                "READ transformed my daughter's relationship with books. In just three months, she went from reluctant reader to asking for bedtime stories every night.",
              name: "Patricia M.",
              location: "Ayala Alabang Village",
            },
            {
              quote:
                "The assessments gave us clarity we never had. The team is incredibly patient, professional, and genuinely invested in each child's success.",
              name: "Carmina S.",
              location: "Hillsborough, Alabang",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#C9A84C"
                  >
                    <path d="M8 0L10.12 5.26L16 6.1L11.76 10.04L12.94 16L8 13.26L3.06 16L4.24 10.04L0 6.1L5.88 5.26L8 0Z" />
                  </svg>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`${isMobile ? "px-5 py-12" : isTablet ? "px-8 py-14" : "px-16 py-20"} text-center`}
      >
        <h2
          className={`font-bold text-[#1A1A2E] ${
            isMobile ? "text-2xl" : "text-3xl"
          }`}
        >
          Begin Your Child&apos;s
          <br />
          Reading Journey
        </h2>
        <p
          className="mt-4 text-sm leading-relaxed max-w-md mx-auto"
          style={{ fontFamily: "'Inter', sans-serif", color: "#8B8B8B" }}
        >
          Book a complimentary consultation at our Ayala Alabang center. Let us
          show you how we can help your child thrive.
        </p>
        <button
          className="mt-8 px-10 py-4 rounded-full text-white font-medium text-sm cursor-pointer transition-all hover:shadow-lg hover:scale-105"
          style={{
            fontFamily: "'Inter', sans-serif",
            backgroundColor: "#C9A84C",
          }}
        >
          Book a Free Consultation
        </button>
      </section>

      {/* Footer */}
      <footer
        className={`${isMobile ? "px-5 py-8" : "px-8 py-10"} border-t border-[#F0EBE3]`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div
          className={`${
            isDesktop ? "flex items-start justify-between" : "space-y-6"
          }`}
        >
          <div>
            <ReadLogo size={24} />
            <p className="mt-3 text-xs text-gray-400 max-w-xs leading-relaxed">
              4th Floor, JD Tower, Commerce Ave. cor. Acacia Ave., Madrigal
              Business Park, Ayala Alabang, Muntinlupa City
            </p>
          </div>
          <div className={`${isDesktop ? "flex gap-16" : isTablet ? "flex gap-12" : "space-y-6"}`}>
            <div>
              <p className="text-xs font-semibold text-[#1A1A2E] uppercase tracking-wider mb-3">
                Contact
              </p>
              <p className="text-xs text-gray-400">0956-844-4552</p>
              <p className="text-xs text-gray-400">0947-462-5503</p>
              <p className="text-xs text-gray-400 mt-1">
                readclinicph@gmail.com
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1A1A2E] uppercase tracking-wider mb-3">
                Hours
              </p>
              <p className="text-xs text-gray-400">Mon - Sat: 9AM - 6PM</p>
              <p className="text-xs text-gray-400">Sun: By Appointment</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#F0EBE3] text-center">
          <p className="text-xs text-gray-300">
            &copy; 2026 READ Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
