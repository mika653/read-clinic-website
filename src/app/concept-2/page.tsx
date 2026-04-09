"use client";

import DeviceSwitcher from "@/components/DeviceSwitcher";
import {
  WhatsAppButton,
  BookingWidget,
  ParentPortal,
  PaymentSection,
} from "@/components/Integrations";

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

export default function Concept2() {
  return (
    <DeviceSwitcher
      conceptName="Modern Playful"
      conceptNumber={2}
      accentColor="#E84671"
    >
      {(device) => <ModernPlayfulDesign device={device} />}
    </DeviceSwitcher>
  );
}

function ModernPlayfulDesign({ device }: { device: string }) {
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";
  const isDesktop = device === "desktop";

  return (
    <div
      className="min-h-full"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        background: "#FFFFFF",
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
          <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <span className="cursor-pointer hover:text-[#E84671] transition-colors">Programs</span>
            <span className="cursor-pointer hover:text-[#E84671] transition-colors">Our Story</span>
            <span className="cursor-pointer hover:text-[#E84671] transition-colors">Families</span>
            <button className="px-5 py-2.5 rounded-2xl text-white text-sm font-semibold cursor-pointer transition-transform hover:scale-105 bg-[#E84671]">
              Get Started
            </button>
          </div>
        )}
        {isMobile && (
          <button className="cursor-pointer p-2" aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        )}
      </nav>

      {/* Hero */}
      <section className={`${isMobile ? "px-5 pt-6 pb-8" : isTablet ? "px-8 pt-10 pb-12" : "px-16 pt-14 pb-16"}`}>
        {/* Colorful pill badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { label: "Reading Enhancement", color: "#E8B731", bg: "#FFF8E7" },
            { label: "Educational Therapy", color: "#2E7AB8", bg: "#EBF5FF" },
            { label: "Academic Development", color: "#E84671", bg: "#FFF0F3" },
            { label: "Developmental Support", color: "#2BAA8E", bg: "#F0FBF8" },
          ].map((tag, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ color: tag.color, backgroundColor: tag.bg }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <h1
          className={`font-bold leading-tight text-[#1A1A2E] ${
            isMobile ? "text-3xl" : isTablet ? "text-5xl" : "text-6xl"
          }`}
          style={{ fontFamily: "'Cormorant', serif" }}
        >
          Where Every Child
          <br />
          Discovers the{" "}
          <span
            className="relative inline-block"
            style={{ color: "#E84671" }}
          >
            Joy
            <svg
              className="absolute -bottom-1 left-0 w-full"
              height="8"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <path
                d="M0 6 Q25 0 50 4 Q75 8 100 2"
                stroke="#E8B731"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </span>
          <br />
          of Learning
        </h1>

        <p
          className={`mt-6 leading-relaxed text-gray-500 ${
            isMobile ? "text-sm" : "text-base"
          }`}
          style={{ maxWidth: "520px" }}
        >
          We&apos;ve moved into a bigger, brighter home — and we can&apos;t wait to
          welcome you! R.E.A.D. Center is where every child discovers the joy
          of learning through reading enhancement, executive function skills,
          and academic development.
        </p>

        <div className={`flex items-center gap-3 mt-8 ${isMobile ? "flex-col" : ""}`}>
          <button
            className={`${
              isMobile ? "w-full" : ""
            } px-8 py-3.5 rounded-2xl text-white font-semibold text-sm cursor-pointer transition-all hover:shadow-lg hover:scale-105 bg-[#E84671]`}
          >
            Book Free Assessment
          </button>
          <button
            className={`${
              isMobile ? "w-full" : ""
            } flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-sm cursor-pointer transition-all hover:bg-gray-50 border-2 border-gray-200 text-gray-700`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#E84671">
              <polygon points="5,3 19,12 5,21" />
            </svg>
            Watch Our Story
          </button>
        </div>
      </section>

      {/* Stats banner */}
      <section
        className={`${isMobile ? "mx-5" : isTablet ? "mx-8" : "mx-16"} rounded-3xl overflow-hidden`}
        style={{
          background: "linear-gradient(135deg, #E84671 0%, #2E7AB8 50%, #2BAA8E 100%)",
        }}
      >
        <div
          className={`grid ${
            isMobile ? "grid-cols-2 gap-4 p-6" : "grid-cols-4 gap-6 p-8"
          } text-white text-center`}
        >
          {[
            { number: "500+", label: "Happy Families" },
            { number: "10+", label: "Years of Excellence" },
            { number: "New!", label: "Bigger, Brighter Space" },
            { number: "Top", label: "School Partnerships" },
          ].map((stat, i) => (
            <div key={i}>
              <div
                className={`font-bold ${isMobile ? "text-2xl" : "text-3xl"}`}
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {stat.number}
              </div>
              <div className="text-xs mt-1 opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section
        className={`${isMobile ? "px-5 py-12" : isTablet ? "px-8 py-14" : "px-16 py-20"}`}
      >
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E84671]">
            How It Works
          </span>
          <h2
            className={`mt-3 font-bold text-[#1A1A2E] ${
              isMobile ? "text-2xl" : "text-3xl"
            }`}
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Your Child&apos;s Journey with Us
          </h2>
        </div>

        <div
          className={`grid gap-6 ${
            isDesktop ? "grid-cols-4" : isTablet ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {[
            {
              step: "01",
              color: "#E8B731",
              title: "Connect",
              desc: "Schedule a free consultation. We listen to your concerns and understand your child's unique learning profile.",
            },
            {
              step: "02",
              color: "#2E7AB8",
              title: "Assess",
              desc: "Psychoeducational and reading assessments by certified specialists to identify strengths and areas for growth.",
            },
            {
              step: "03",
              color: "#E84671",
              title: "Personalize",
              desc: "A custom intervention plan — reading enhancement, educational therapy, speech-language support, or academic enrichment.",
            },
            {
              step: "04",
              color: "#2BAA8E",
              title: "Transform",
              desc: "Regular sessions, monthly progress reports, and parent workshops to ensure lasting academic confidence.",
            },
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div
                className="rounded-3xl p-6 h-full transition-all group-hover:shadow-lg"
                style={{ backgroundColor: `${item.color}10` }}
              >
                <span
                  className="text-4xl font-bold opacity-20"
                  style={{
                    fontFamily: "'Cormorant', serif",
                    color: item.color,
                  }}
                >
                  {item.step}
                </span>
                <h3
                  className="mt-2 text-lg font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs - Card Style */}
      <section
        className={`${isMobile ? "px-5 py-12" : isTablet ? "px-8 py-14" : "px-16 py-20"}`}
        style={{ backgroundColor: "#FFF9F0" }}
      >
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7AB8]">
            Programs
          </span>
          <h2
            className={`mt-3 font-bold text-[#1A1A2E] ${
              isMobile ? "text-2xl" : "text-3xl"
            }`}
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Programs for Every Stage
          </h2>
        </div>

        <div className={`grid gap-5 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
          {[
            {
              emoji_alt: "Seedling",
              color: "#E8B731",
              gradient: "linear-gradient(135deg, #FFF8E7, #FFF3D6)",
              name: "Early Learners",
              age: "3-5 years",
              desc: "Building pre-reading foundations through structured phonics, sensory play, and guided story exploration.",
              features: ["Phonics & letter recognition", "Pre-writing & fine motor skills", "Speech-language screening"],
            },
            {
              emoji_alt: "Star",
              color: "#E84671",
              gradient: "linear-gradient(135deg, #FFF0F3, #FFE0E8)",
              name: "Reading Enhancement",
              age: "6-9 years",
              desc: "Core literacy program strengthening fluency, decoding, comprehension, and reading confidence.",
              features: ["Structured literacy intervention", "Reading comprehension strategies", "Educational therapy sessions"],
            },
            {
              emoji_alt: "Rocket",
              color: "#2BAA8E",
              gradient: "linear-gradient(135deg, #F0FBF8, #E0F7F1)",
              name: "Academic Development",
              age: "10-14 years",
              desc: "Advanced reading, analytical thinking, academic writing, and study skills mastery.",
              features: ["Critical reading & analysis", "Essay & academic writing", "Study skills & executive function"],
            },
          ].map((program, i) => (
            <div
              key={i}
              className="rounded-3xl p-7 hover:shadow-xl transition-all cursor-pointer group"
              style={{ background: program.gradient }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${program.color}20` }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={program.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3
                  className="text-xl font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {program.name}
                </h3>
                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  style={{
                    color: program.color,
                    backgroundColor: `${program.color}15`,
                  }}
                >
                  {program.age}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {program.desc}
              </p>
              <ul className="space-y-2.5">
                {program.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${program.color}15` }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 5L4.5 7.5L8 3"
                          stroke={program.color}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className="w-full mt-6 py-3 rounded-2xl text-white font-semibold text-sm cursor-pointer transition-all hover:shadow-md group-hover:scale-[1.01]"
                style={{ backgroundColor: program.color }}
              >
                Explore Program
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section
        className={`${isMobile ? "px-5 py-12" : isTablet ? "px-8 py-14" : "px-16 py-20"}`}
      >
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2BAA8E]">
            Testimonials
          </span>
          <h2
            className={`mt-3 font-bold text-[#1A1A2E] ${
              isMobile ? "text-2xl" : "text-3xl"
            }`}
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            What Alabang Moms Say
          </h2>
        </div>

        <div className={`grid gap-5 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
          {[
            {
              quote:
                "My son used to dread reading time. After just 8 weeks at READ, he now picks up books on his own. The transformation is incredible.",
              name: "Andrea L.",
              detail: "Mom of 2 | Ayala Alabang Village",
              color: "#E8B731",
            },
            {
              quote:
                "The therapists at READ don't just teach reading — they build confidence. My daughter now raises her hand in class. Priceless.",
              name: "Christine T.",
              detail: "Mom of 1 | Portofino South",
              color: "#E84671",
            },
            {
              quote:
                "Worth every peso. The personalized assessment opened our eyes to things we never noticed. READ truly understands children.",
              name: "Isabel G.",
              detail: "Mom of 3 | Alabang Hills",
              color: "#2BAA8E",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 border-2 hover:shadow-lg transition-all"
              style={{ borderColor: `${t.color}30` }}
            >
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill={t.color}>
                    <path d="M8 0L10.12 5.26L16 6.1L11.76 10.04L12.94 16L8 13.26L3.06 16L4.24 10.04L0 6.1L5.88 5.26L8 0Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-600 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: t.color }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A2E]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Impact */}
      <section
        className={`${isMobile ? "px-5 py-12" : isTablet ? "px-8 py-14" : "px-16 py-16"}`}
      >
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
            Beyond Our Walls
          </span>
          <h2
            className={`mt-3 font-bold text-[#1A1A2E] ${
              isMobile ? "text-2xl" : "text-3xl"
            }`}
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Community &amp; Partnerships
          </h2>
        </div>

        <div className={`grid gap-5 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
          {[
            {
              color: "#E84671",
              bg: "linear-gradient(135deg, #FFF0F3, #FFE8ED)",
              title: "School Workshops",
              desc: "Executive function talks and literacy training for educators at PAREF Woodrose and other leading Alabang schools.",
              tag: "PAREF Woodrose",
            },
            {
              color: "#2E7AB8",
              bg: "linear-gradient(135deg, #EBF5FF, #E0EEFF)",
              title: "Volunteer Teaching",
              desc: "Partnering with AlpaBasa Phil to bring reading programs and volunteer teachers to local elementary schools.",
              tag: "AlpaBasa Phil",
            },
            {
              color: "#2BAA8E",
              bg: "linear-gradient(135deg, #F0FBF8, #E0F7F1)",
              title: "Community Outreach",
              desc: "Working alongside the Rotary Club of Pilipinas to bring reading resources and developmental support to more communities.",
              tag: "Rotary Club",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-6"
              style={{ background: item.bg }}
            >
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{
                  color: item.color,
                  backgroundColor: `${item.color}15`,
                }}
              >
                {item.tag}
              </span>
              <h3
                className="text-lg font-bold text-[#1A1A2E] mb-2"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team */}
      <section
        className={`${isMobile ? "mx-5 mb-6" : isTablet ? "mx-8 mb-8" : "mx-16 mb-12"} rounded-3xl overflow-hidden`}
        style={{
          background: "linear-gradient(135deg, #2BAA8E 0%, #1E8C74 100%)",
        }}
      >
        <div className={`${isMobile ? "p-8" : "p-10"} text-white`}>
          <div className={`${isDesktop ? "flex items-center justify-between" : ""}`}>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Join the R.E.A.D. Team
              </span>
              <h3
                className={`mt-2 font-bold ${isMobile ? "text-xl" : "text-2xl"}`}
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                We&apos;re Hiring!
              </h3>
              <p className="mt-2 text-sm text-white/70 max-w-md leading-relaxed">
                Our clinic is growing! We&apos;re looking for dedicated Teacher /
                Reading Clinicians and a Clinic Administrator. Education or
                Psychology graduates welcome — training provided!
              </p>
            </div>
            <button
              className={`${
                isMobile ? "w-full mt-6" : "mt-4"
              } px-8 py-3 rounded-2xl bg-white text-[#2BAA8E] font-semibold text-sm cursor-pointer transition-all hover:shadow-lg`}
            >
              Send Resume
            </button>
          </div>
        </div>
      </section>

      {/* Integration: Online Booking */}
      <BookingWidget variant="playful" isMobile={isMobile} />

      {/* Integration: Parent Portal */}
      <ParentPortal variant="playful" isMobile={isMobile} />

      {/* Integration: Payments */}
      <PaymentSection variant="playful" isMobile={isMobile} />

      {/* Floating WhatsApp */}
      <WhatsAppButton style="pink" />

      {/* Location & CTA */}
      <section
        className={`${isMobile ? "mx-5 mb-8" : isTablet ? "mx-8 mb-10" : "mx-16 mb-16"} rounded-3xl overflow-hidden`}
        style={{
          background: "linear-gradient(135deg, #E84671 0%, #C73B60 100%)",
        }}
      >
        <div className={`${isMobile ? "p-8" : "p-12"} text-center text-white`}>
          <h2
            className={`font-bold ${isMobile ? "text-2xl" : "text-3xl"}`}
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Visit Our Alabang Center
          </h2>
          <p className="mt-3 text-sm opacity-80 max-w-md mx-auto leading-relaxed">
            4th Floor, JD Tower, Commerce Ave. cor. Acacia Ave., Madrigal
            Business Park, Ayala Alabang, Muntinlupa City
          </p>
          <div className={`mt-8 flex gap-3 justify-center ${isMobile ? "flex-col" : ""}`}>
            <button
              className={`${
                isMobile ? "w-full" : ""
              } px-8 py-3.5 rounded-2xl bg-white text-[#E84671] font-semibold text-sm cursor-pointer transition-all hover:shadow-lg hover:scale-105`}
            >
              Book Free Consultation
            </button>
            <button
              className={`${
                isMobile ? "w-full" : ""
              } px-8 py-3.5 rounded-2xl font-semibold text-sm cursor-pointer transition-all border-2 border-white/30 text-white hover:bg-white/10`}
            >
              Call Us: 0956-844-4552
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${isMobile ? "px-5 py-8" : "px-8 py-10"} bg-[#1A1A2E] text-white`}
      >
        <div
          className={`${
            isDesktop ? "flex items-start justify-between" : "space-y-6"
          }`}
        >
          <div>
            <ReadLogo size={24} />
            <p className="mt-3 text-xs text-white/40 max-w-xs leading-relaxed">
              Reading Enhancement &amp; Academic Development. Ayala Alabang&apos;s
              premier children&apos;s learning center. Nurturing Minds, Shaping
              Futures since 2014.
            </p>
          </div>
          <div className={`${isDesktop ? "flex gap-16" : isTablet ? "flex gap-12" : "space-y-6"}`}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-white/60">
                Quick Links
              </p>
              <div className="space-y-2">
                {["Programs", "About Us", "Testimonials", "Contact"].map((link) => (
                  <p key={link} className="text-xs text-white/40 cursor-pointer hover:text-white transition-colors">
                    {link}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-white/60">
                Connect
              </p>
              <p className="text-xs text-white/40">readclinicph@gmail.com</p>
              <p className="text-xs text-white/40 mt-1">0956-844-4552</p>
              <p className="text-xs text-white/40 mt-1">0947-462-5503</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">
            &copy; 2026 READ Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
