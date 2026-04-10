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
    <img
      src="/logo.jpg"
      alt="R.E.A.D. Center"
      style={{ height: `${size}px`, width: "auto" }}
      className="object-contain"
    />
  );
}

export default function Concept3() {
  return (
    <DeviceSwitcher
      conceptName="Minimalist Editorial"
      conceptNumber={3}
      accentColor="#1A1A2E"
    >
      {(device) => <MinimalistEditorialDesign device={device} />}
    </DeviceSwitcher>
  );
}

function MinimalistEditorialDesign({ device }: { device: string }) {
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";
  const isDesktop = device === "desktop";

  return (
    <div
      className="min-h-full bg-white"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* Navigation - ultra clean */}
      <nav
        className={`flex items-center justify-between ${
          isMobile ? "px-5 py-5" : "px-10 py-6"
        } border-b border-gray-100`}
        style={{ paddingTop: isMobile ? "42px" : undefined }}
      >
        <ReadLogo size={isMobile ? 24 : 30}  />
        {!isMobile && (
          <div className="flex items-center gap-10 text-sm text-gray-500 font-light tracking-wide">
            <span className="cursor-pointer hover:text-[#1A1A2E] transition-colors">Services</span>
            <span className="cursor-pointer hover:text-[#1A1A2E] transition-colors">Method</span>
            <span className="cursor-pointer hover:text-[#1A1A2E] transition-colors">Stories</span>
            <span className="cursor-pointer hover:text-[#1A1A2E] transition-colors">Location</span>
            <button className="px-5 py-2 text-sm font-normal text-[#1A1A2E] border border-[#1A1A2E] cursor-pointer transition-all hover:bg-[#1A1A2E] hover:text-white">
              Inquire
            </button>
          </div>
        )}
        {isMobile && (
          <button className="cursor-pointer" aria-label="Open menu">
            <div className="space-y-1.5">
              <div className="w-5 h-[1.5px] bg-[#1A1A2E]" />
              <div className="w-3.5 h-[1.5px] bg-[#1A1A2E]" />
            </div>
          </button>
        )}
      </nav>

      {/* Hero - Editorial Style */}
      <section
        className={`${isMobile ? "px-5 pt-10 pb-8" : isTablet ? "px-10 pt-16 pb-12" : "px-10 pt-20 pb-16"}`}
      >
        {isDesktop ? (
          <div className="flex items-center gap-16 max-w-6xl mx-auto">
            <div className="flex-1">
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-2">
                Reading Enhancement &amp; Academic Development
              </p>
              <p className="text-xs tracking-[0.2em] text-gray-300 uppercase mb-6">
                Est. 2014 &mdash; Ayala Alabang
              </p>
              <h1
                className="text-6xl font-normal leading-[1.1] text-[#1A1A2E] tracking-tight"
                style={{ fontFamily: "'Bodoni Moda', serif" }}
              >
                Nurturing
                <br />
                Minds,
                <br />
                <em className="font-normal" style={{ color: "#E84671" }}>Shaping</em>
                <br />
                Futures.
              </h1>
              <div className="mt-10 flex gap-4">
                <button className="px-8 py-3.5 bg-[#1A1A2E] text-white text-sm font-light tracking-wider cursor-pointer transition-all hover:bg-[#2a2a44]">
                  Schedule a Visit
                </button>
                <button className="px-8 py-3.5 text-sm font-light tracking-wider text-gray-500 cursor-pointer transition-all hover:text-[#1A1A2E] border border-gray-200">
                  Our Method
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="aspect-[3/4] max-h-[500px] overflow-hidden">
                <img
                  src="/hero-banner.jpg"
                  alt="READ Clinic"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
              <p className="mt-3 text-xs text-gray-300 tracking-wide">
                Our reading sanctuary at Madrigal Business Park
              </p>
            </div>
          </div>
        ) : (
          <>
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-2">
              Reading Enhancement &amp; Academic Development
            </p>
            <p className="text-xs tracking-[0.2em] text-gray-300 uppercase mb-5">
              Est. 2014 &mdash; Ayala Alabang
            </p>
            <h1
              className={`font-normal leading-[1.1] text-[#1A1A2E] tracking-tight ${
                isMobile ? "text-4xl" : "text-5xl"
              }`}
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              Nurturing
              <br />
              Minds,
              <br />
              <em className="font-normal" style={{ color: "#E84671" }}>Shaping</em>
              <br />
              Futures.
            </h1>
            <div className="mt-8 flex gap-3">
              <button className="px-6 py-3 bg-[#1A1A2E] text-white text-sm font-light tracking-wider cursor-pointer transition-all hover:bg-[#2a2a44]">
                Schedule a Visit
              </button>
              <button className="px-6 py-3 text-sm font-light tracking-wider text-gray-500 cursor-pointer transition-all hover:text-[#1A1A2E] border border-gray-200">
                Our Method
              </button>
            </div>
            <div className={`mt-10 ${isMobile ? "" : ""}`}>
              <div className="aspect-video overflow-hidden">
                <img
                  src="/hero-banner.jpg"
                  alt="READ Clinic"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
              <p className="mt-2 text-xs text-gray-300 tracking-wide">
                Our reading sanctuary at Madrigal Business Park
              </p>
            </div>
          </>
        )}
      </section>

      {/* Thin divider with text */}
      <div className={`${isMobile ? "px-5" : "px-10"} py-8`}>
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs tracking-[0.3em] text-gray-300 uppercase">
            The READ Method
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
      </div>

      {/* Method Section - Grid with numbers */}
      <section className={`${isMobile ? "px-5 pb-12" : isTablet ? "px-10 pb-14" : "px-10 pb-20"}`}>
        <div className={`${isDesktop ? "max-w-6xl mx-auto" : ""}`}>
          <div
            className={`grid gap-0 ${
              isDesktop ? "grid-cols-4" : isTablet ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {[
              {
                letter: "R",
                color: "#E8B731",
                title: "Reading",
                subtitle: "Enhancement",
                desc: "Structured literacy programs, phonics-based intervention, and fluency training grounded in the science of reading.",
              },
              {
                letter: "E",
                color: "#2E7AB8",
                title: "Executive",
                subtitle: "Function",
                desc: "From planning to problem-solving — we build the executive function skills that shape success in school and beyond.",
              },
              {
                letter: "A",
                color: "#E84671",
                title: "Academic",
                subtitle: "Development",
                desc: "Writing workshops, math readiness, study skills, and enrichment programs aligned to school curricula.",
              },
              {
                letter: "D",
                color: "#2BAA8E",
                title: "Developmental",
                subtitle: "Support",
                desc: "Speech-language pathology, occupational therapy, psychoeducational assessment, and parent consultations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 ${
                  !isMobile ? "border-l first:border-l-0" : "border-b last:border-b-0"
                } border-gray-100`}
              >
                <span
                  className="text-5xl font-normal"
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    color: item.color,
                    opacity: 0.4,
                  }}
                >
                  {item.letter}
                </span>
                <h3
                  className="mt-3 text-lg font-normal text-[#1A1A2E]"
                  style={{ fontFamily: "'Bodoni Moda', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 tracking-wide mt-0.5">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs - Clean list style */}
      <section
        className={`${isMobile ? "px-5 py-12" : isTablet ? "px-10 py-14" : "px-10 py-20"} bg-[#FAFAF8]`}
      >
        <div className={`${isDesktop ? "max-w-6xl mx-auto" : ""}`}>
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-2">
            Programs
          </p>
          <h2
            className={`font-normal text-[#1A1A2E] ${
              isMobile ? "text-2xl" : "text-3xl"
            }`}
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            Tailored for Every Stage
          </h2>

          <div className="mt-10 space-y-0">
            {[
              {
                name: "Early Learners",
                age: "Ages 3\u20135",
                desc: "Pre-reading foundations through structured phonics, sensory play, and speech-language screening.",
                color: "#E8B731",
              },
              {
                name: "Reading Enhancement",
                age: "Ages 6\u20139",
                desc: "Core literacy intervention: fluency, decoding, comprehension strategies, and educational therapy.",
                color: "#E84671",
              },
              {
                name: "Academic Development",
                age: "Ages 10\u201314",
                desc: "Advanced reading, academic writing, study skills, and executive function coaching.",
                color: "#2BAA8E",
              },
              {
                name: "Developmental Services",
                age: "All Ages",
                desc: "Speech-language pathology, occupational therapy, psychoeducational assessments, and parent workshops.",
                color: "#2E7AB8",
              },
            ].map((program, i) => (
              <div
                key={i}
                className={`${
                  isDesktop ? "flex items-center justify-between" : ""
                } py-6 border-b border-gray-200 group cursor-pointer hover:pl-2 transition-all`}
              >
                <div className={`${isDesktop ? "flex items-center gap-8" : ""}`}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: program.color }}
                    />
                    <h3
                      className={`font-normal text-[#1A1A2E] group-hover:text-[#E84671] transition-colors ${
                        isMobile ? "text-lg" : "text-xl"
                      }`}
                      style={{ fontFamily: "'Bodoni Moda', serif" }}
                    >
                      {program.name}
                    </h3>
                  </div>
                  {!isDesktop && (
                    <p className="text-xs text-gray-400 mt-1 ml-5 tracking-wide">
                      {program.age}
                    </p>
                  )}
                </div>
                {isDesktop && (
                  <div className="flex items-center gap-12">
                    <p className="text-sm text-gray-400 max-w-sm font-light">
                      {program.desc}
                    </p>
                    <span className="text-xs text-gray-400 tracking-wide whitespace-nowrap">
                      {program.age}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-gray-300 group-hover:text-[#E84671] group-hover:translate-x-1 transition-all"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                {!isDesktop && (
                  <p className="text-sm text-gray-400 mt-2 ml-5 font-light leading-relaxed">
                    {program.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Partnerships */}
      <section
        className={`${isMobile ? "px-5 py-10" : isTablet ? "px-10 py-12" : "px-10 py-16"}`}
      >
        <div className={`${isDesktop ? "max-w-6xl mx-auto" : ""}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs tracking-[0.3em] text-gray-300 uppercase">
              Beyond Our Walls
            </span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <div className={`${isDesktop ? "grid grid-cols-3 gap-12" : "space-y-8"}`}>
            {[
              {
                title: "School Workshops",
                partner: "PAREF Woodrose",
                desc: "Executive function talks and literacy training for teachers at leading Alabang schools.",
                color: "#E84671",
              },
              {
                title: "Volunteer Teaching",
                partner: "AlpaBasa Phil",
                desc: "Reading programs and volunteer teachers brought to local elementary schools and communities.",
                color: "#2E7AB8",
              },
              {
                title: "Community Outreach",
                partner: "Rotary Club of Pilipinas",
                desc: "Reading resources and developmental support for underserved communities across the South.",
                color: "#2BAA8E",
              },
            ].map((item, i) => (
              <div key={i}>
                <div
                  className="w-2 h-2 rounded-full mb-3"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-xs text-gray-400 tracking-wide mb-1">
                  {item.partner}
                </p>
                <h3
                  className="text-lg font-normal text-[#1A1A2E] mb-2"
                  style={{ fontFamily: "'Bodoni Moda', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section
        className={`${isMobile ? "px-5 py-10" : isTablet ? "px-10 py-12" : "px-10 py-14"} bg-[#FAFAF8]`}
      >
        <div className={`${isDesktop ? "max-w-6xl mx-auto flex items-center justify-between" : ""}`}>
          <div>
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-2">
              Careers
            </p>
            <h3
              className={`font-normal text-[#1A1A2E] ${isMobile ? "text-xl" : "text-2xl"}`}
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              Join the R.E.A.D. Team
            </h3>
            <p className="mt-2 text-sm text-gray-400 font-light max-w-md leading-relaxed">
              We&apos;re growing and looking for Teacher / Reading Clinicians and
              a Clinic Administrator. Education or Psychology graduates welcome.
              Training provided.
            </p>
          </div>
          <button
            className={`${
              isMobile ? "w-full mt-6" : "mt-0 ml-8"
            } px-8 py-3.5 bg-[#1A1A2E] text-white text-sm font-light tracking-wider cursor-pointer transition-all hover:bg-[#2a2a44] whitespace-nowrap`}
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Testimonials - Editorial quote style */}
      <section
        className={`${isMobile ? "px-5 py-12" : isTablet ? "px-10 py-14" : "px-10 py-20"}`}
      >
        <div className={`${isDesktop ? "max-w-6xl mx-auto" : ""}`}>
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-8">
            Parent Voices
          </p>

          <div className={`${isDesktop ? "grid grid-cols-2 gap-16" : "space-y-10"}`}>
            {[
              {
                quote:
                  "READ didn't just teach my daughter to read \u2014 they ignited a passion. She now reads two grades above her level.",
                name: "Patricia Mendoza",
                detail: "Ayala Alabang Village",
              },
              {
                quote:
                  "The level of care and expertise is unmatched. It feels like a second home for my children.",
                name: "Carmina Santos",
                detail: "Hillsborough, Alabang",
              },
            ].map((t, i) => (
              <div key={i}>
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  className="mb-4"
                >
                  <path
                    d="M0 24V14.4C0 10.56 0.8 7.44 2.4 5.04C4.08 2.56 6.48 0.88 9.6 0L12.8 4.32C10.72 5.04 9.12 6.16 8 7.68C6.96 9.12 6.4 10.8 6.32 12.72H12.8V24H0ZM19.2 24V14.4C19.2 10.56 20 7.44 21.6 5.04C23.28 2.56 25.68 0.88 28.8 0L32 4.32C29.92 5.04 28.32 6.16 27.2 7.68C26.16 9.12 25.6 10.8 25.52 12.72H32V24H19.2Z"
                    fill="#F0EBE3"
                  />
                </svg>
                <p
                  className={`font-normal leading-relaxed text-[#1A1A2E] ${
                    isMobile ? "text-lg" : "text-xl"
                  }`}
                  style={{ fontFamily: "'Bodoni Moda', serif" }}
                >
                  {t.quote}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-px h-8 bg-gray-200" />
                  <div>
                    <p className="text-sm text-[#1A1A2E]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration: Online Booking */}
      <BookingWidget variant="editorial" isMobile={isMobile} />

      {/* Integration: Parent Portal */}
      <ParentPortal variant="editorial" isMobile={isMobile} />

      {/* Integration: Payments */}
      <PaymentSection variant="editorial" isMobile={isMobile} />

      {/* Floating WhatsApp */}
      <WhatsAppButton style="dark" />

      {/* CTA - Full bleed */}
      <section
        className={`${isMobile ? "px-5 py-14" : isTablet ? "px-10 py-16" : "px-10 py-24"} text-center`}
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">
            Begin the Journey
          </p>
          <h2
            className={`font-normal text-white leading-tight ${
              isMobile ? "text-2xl" : "text-4xl"
            }`}
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            Every great reader
            <br />
            <em>starts with a single page.</em>
          </h2>
          <p className="mt-5 text-sm text-gray-400 font-light max-w-sm mx-auto leading-relaxed">
            We invite you to visit our center in Ayala Alabang for a
            complimentary reading assessment.
          </p>
          <div className={`mt-8 flex gap-3 justify-center ${isMobile ? "flex-col" : ""}`}>
            <button
              className={`${
                isMobile ? "w-full" : ""
              } px-8 py-3.5 bg-white text-[#1A1A2E] text-sm font-light tracking-wider cursor-pointer transition-all hover:bg-gray-100`}
            >
              Book a Consultation
            </button>
            <button
              className={`${
                isMobile ? "w-full" : ""
              } px-8 py-3.5 text-sm font-light tracking-wider text-gray-400 cursor-pointer transition-all border border-gray-600 hover:text-white hover:border-white`}
            >
              0956-844-4552
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer
        className={`${isMobile ? "px-5 py-8" : "px-10 py-10"} border-t border-gray-100`}
      >
        <div
          className={`${
            isDesktop
              ? "max-w-6xl mx-auto flex items-start justify-between"
              : "space-y-6"
          }`}
        >
          <div>
            <ReadLogo size={20}  />
            <p className="mt-3 text-xs text-gray-300 max-w-xs leading-relaxed font-light">
              4th Floor, JD Tower, Commerce Ave. cor. Acacia Ave.,
              <br />
              Madrigal Business Park, Ayala Alabang, Muntinlupa City
            </p>
          </div>
          <div className={`${isDesktop ? "flex gap-16" : isTablet ? "flex gap-10" : "space-y-5"}`}>
            <div>
              <p className="text-xs text-[#1A1A2E] tracking-wide mb-2">
                Contact
              </p>
              <p className="text-xs text-gray-300 font-light">readclinicph@gmail.com</p>
              <p className="text-xs text-gray-300 font-light mt-1">
                0956-844-4552 / 0947-462-5503
              </p>
            </div>
            <div>
              <p className="text-xs text-[#1A1A2E] tracking-wide mb-2">
                Hours
              </p>
              <p className="text-xs text-gray-300 font-light">Monday \u2013 Saturday, 9AM \u2013 6PM</p>
              <p className="text-xs text-gray-300 font-light mt-1">Sunday by appointment</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-50 text-center">
          <p className="text-xs text-gray-200 font-light tracking-wide">
            &copy; 2026 READ Clinic &mdash; All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
