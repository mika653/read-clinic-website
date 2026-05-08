"use client";

import Link from "next/link";

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

const concepts = [
  {
    number: 1,
    name: "Warm Elegant",
    tagline: "Serif typography, gold accents, warm cream tones",
    href: "/concept-1",
    gradient: "linear-gradient(135deg, #FFF9F0 0%, #F5EDE0 100%)",
    accent: "#C9A84C",
  },
  {
    number: 2,
    name: "Modern Playful",
    tagline: "Vibrant gradients, rounded elements, bold brand colors",
    href: "/concept-2",
    gradient: "linear-gradient(135deg, #FFF0F3 0%, #FFE8ED 100%)",
    accent: "#E84671",
  },
  {
    number: 3,
    name: "Minimalist Editorial",
    tagline: "High-contrast editorial with generous whitespace",
    href: "/concept-3",
    gradient: "linear-gradient(135deg, #FAFAF8 0%, #F5F5F0 100%)",
    accent: "#1A1A2E",
  },
];

export default function ProposalHome() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Top nav */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <ReadLogo size={32} />
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-500">
            <a href="#overview" className="hover:text-[#1A1A2E] transition-colors">Overview</a>
            <a href="#iterations" className="hover:text-[#1A1A2E] transition-colors">Iterations</a>
            <Link href="/add-ons" className="hover:text-[#1A1A2E] transition-colors">Add-Ons</Link>
            <Link href="/dashboard" className="hover:text-[#1A1A2E] transition-colors">Dashboard</Link>
            <a href="#investment" className="hover:text-[#1A1A2E] transition-colors">Investment</a>
          </div>
        </div>
      </nav>

      {/* COVER */}
      <section className="px-6 sm:px-10 py-20 sm:py-28 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C] mb-6">
          Website &amp; Operations Proposal
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.05] text-[#1A1A2E] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A Digital Home for
          <br />
          <em style={{ color: "#E84671" }}>R.E.A.D. Center</em>
        </h1>
        <p className="mt-8 text-base text-gray-500 max-w-xl leading-relaxed font-light">
          A complete digital ecosystem for Reading Enhancement and Academic
          Development &mdash; designed for Ayala Alabang&apos;s most discerning
          families, and built to scale your clinic&apos;s operations.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl">
          {[
            { label: "Prepared for", value: "R.E.A.D. Center" },
            { label: "Date", value: "May 2026" },
            { label: "Validity", value: "60 days" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium text-[#1A1A2E]">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-3 flex-wrap">
          <a
            href="#overview"
            className="px-7 py-3.5 bg-[#1A1A2E] text-white text-sm font-medium rounded-full cursor-pointer transition-all hover:bg-[#2a2a44] hover:scale-105"
          >
            Begin Reading Proposal
          </a>
          <Link
            href="/concept-1"
            className="px-7 py-3.5 text-[#1A1A2E] text-sm font-medium rounded-full border border-gray-200 cursor-pointer transition-all hover:bg-gray-50"
          >
            Skip to Mockups
          </Link>
        </div>
      </section>

      {/* OVERVIEW / EXECUTIVE SUMMARY */}
      <section id="overview" className="border-t border-gray-100 px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          01 &mdash; Executive Summary
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Why R.E.A.D. needs more than just a website.
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              R.E.A.D. Center has built a respected practice in Ayala Alabang
              through expert care, school partnerships (PAREF Woodrose,
              AlpaBasa Phil, Rotary Club), and a community of trusting parents.
              But the daily operations &mdash; bookings, parent updates,
              session notes, payments &mdash; still depend on phone calls,
              chat threads, and manual spreadsheets.
            </p>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed font-light">
              This proposal addresses both the front of house (the website
              parents see) and the back of house (the clinic operations your
              team uses every day).
            </p>
          </div>
          <div className="space-y-4">
            {[
              { number: "3", label: "Website Iterations", sub: "Pick the one that fits R.E.A.D.&apos;s voice" },
              { number: "1", label: "Unified Dashboard", sub: "CMS + LMS in one place for staff" },
              { number: "6+", label: "Workflow Integrations", sub: "Booking, payments, parent portal, and more" },
            ].map((m) => (
              <div key={m.label} className="flex items-baseline gap-4 pb-4 border-b border-gray-100 last:border-0">
                <span
                  className="text-3xl font-normal text-[#E84671]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {m.number}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#1A1A2E]">{m.label}</p>
                  <p className="text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: m.sub }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="border-t border-gray-100 px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          02 &mdash; Scope of Work
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What&apos;s included.
        </h2>

        <div className="space-y-0">
          {[
            {
              num: "I",
              title: "Public Website",
              desc: "A mobile-first marketing site with full responsive layouts. Includes hero, programs, R.E.A.D. method, partnerships, testimonials, careers, and contact sections. Three design directions to choose from.",
              link: "#iterations",
              linkText: "Browse iterations",
            },
            {
              num: "II",
              title: "Operations Dashboard (CMS + LMS)",
              desc: "Internal staff dashboard combining content management (students, bookings, website edits, staff & billing) with a learning management system (lesson library, parent portal, teacher tools).",
              link: "/dashboard",
              linkText: "View dashboard",
            },
            {
              num: "III",
              title: "Add-On Services",
              desc: "Optional integrations to deepen functionality: SaligPay payment processing, parent communication tools, automated booking, and more. Choose what you need now, add later as you grow.",
              link: "/add-ons",
              linkText: "View add-ons",
            },
          ].map((item, i) => (
            <div key={i} className="border-t border-gray-100 py-8 first:border-t-0 first:pt-0">
              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-1">
                  <span
                    className="text-2xl text-gray-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.num}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h3
                    className="text-xl font-normal text-[#1A1A2E] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="md:col-span-4 flex md:justify-end items-start">
                  {item.link.startsWith("/") ? (
                    <Link
                      href={item.link}
                      className="text-sm text-[#1A1A2E] underline underline-offset-4 decoration-gray-200 hover:decoration-[#1A1A2E] transition-colors"
                    >
                      {item.linkText} &rarr;
                    </Link>
                  ) : (
                    <a
                      href={item.link}
                      className="text-sm text-[#1A1A2E] underline underline-offset-4 decoration-gray-200 hover:decoration-[#1A1A2E] transition-colors"
                    >
                      {item.linkText} &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WEBSITE ITERATIONS */}
      <section id="iterations" className="border-t border-gray-100 px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          03 &mdash; Website Iterations
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Three directions, one R.E.A.D.
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mb-12 font-light leading-relaxed">
          Each iteration is fully responsive (iPhone, iPad, desktop) and built
          on the same content. The visual personality is what changes &mdash;
          pick what fits how you want to be perceived.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {concepts.map((c) => (
            <Link
              key={c.number}
              href={c.href}
              className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div
                className="h-48 sm:h-56 relative overflow-hidden flex items-center justify-center"
                style={{ background: c.gradient }}
              >
                <div className="w-[110px] h-[195px] bg-white rounded-xl shadow-lg overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2.5 rounded-b-lg"
                    style={{ backgroundColor: c.accent }}
                  />
                  <div className="pt-5 px-2.5 space-y-1.5">
                    <div className="h-1.5 w-7 rounded-full" style={{ backgroundColor: c.accent, opacity: 0.5 }} />
                    <div className="h-1 w-14 rounded-full bg-gray-200" />
                    <div className="h-1 w-10 rounded-full bg-gray-100" />
                    <div className="mt-2 h-6 rounded" style={{ backgroundColor: `${c.accent}12` }} />
                    <div className="h-6 rounded" style={{ backgroundColor: `${c.accent}08` }} />
                    <div className="mt-2 h-4 rounded" style={{ backgroundColor: c.accent }} />
                  </div>
                </div>
                <div
                  className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: c.accent }}
                >
                  {c.number}
                </div>
              </div>
              <div className="p-5">
                <h3
                  className="text-lg font-semibold text-[#1A1A2E] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {c.name}
                </h3>
                <p className="text-xs text-gray-400 mb-3">{c.tagline}</p>
                <div
                  className="flex items-center gap-1.5 text-xs font-medium group-hover:gap-2.5 transition-all"
                  style={{ color: c.accent }}
                >
                  Preview iteration
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="border-t border-gray-100 px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          04 &mdash; Operations Dashboard
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          One workspace for the whole centre.
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mb-10 font-light leading-relaxed">
          A unified Content Management System and Learning Management System
          for staff &mdash; replacing scattered spreadsheets and chat threads
          with one secure, organized hub.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#E84671] mb-4">
              CMS Capabilities
            </p>
            <div className="space-y-3">
              {[
                "Manage students &amp; client profiles",
                "Calendar view of all bookings",
                "Edit website content (hero, programs, testimonials)",
                "Staff hiring pipeline &amp; billing log",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#E84671]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#E84671" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#2BAA8E] mb-4">
              LMS Capabilities
            </p>
            <div className="space-y-3">
              {[
                "Lesson library by age group &amp; level",
                "Parent-facing portal for progress tracking",
                "Teacher tools for lesson plans &amp; observations",
                "Auto-generated progress reports",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#2BAA8E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#2BAA8E" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/dashboard"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A2E] text-white text-sm font-medium rounded-full cursor-pointer transition-all hover:bg-[#2a2a44]"
        >
          Open Dashboard Preview
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      {/* TEAM & RECOMMENDATIONS */}
      <section className="border-t border-gray-100 px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          05 &mdash; Team &amp; Recommendations
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Built with input from people who&apos;ve done this.
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl mb-12 font-light leading-relaxed">
          This proposal was shaped by perspectives beyond just design and
          development. Each contributor weighed in on what would actually
          serve R.E.A.D.&apos;s parents, educators, and operations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              role: "Web Developer",
              expertise: "Next.js, performance, integrations",
              note: "Built mobile-first so it&rsquo;s fast on any phone Alabang parents use to inquire from the school car.",
              color: "#1A1A2E",
            },
            {
              role: "UX/UI Designer",
              expertise: "Information hierarchy, parent flow",
              note: "Inquiry form stays short — every extra field cuts conversions. Schedule preference is the most important after name + child age.",
              color: "#2E7AB8",
            },
            {
              role: "Graphic Artist",
              expertise: "Brand visual system",
              note: "The four logo colors are doing a lot of work — kept them as accents only so the site doesn&rsquo;t feel like a kindergarten flyer.",
              color: "#E84671",
            },
            {
              role: "Copywriter",
              expertise: "Tone, parent-facing language",
              note: "Avoided &lsquo;therapy&rsquo; and &lsquo;intervention&rsquo; throughout. R.E.A.D. is a reading and learning centre — clinical language overpromises and may scare parents off.",
              color: "#2BAA8E",
            },
            {
              role: "Educator",
              expertise: "Learning specialist, classroom experience",
              note: "Skip &lsquo;therapist&rsquo; — call them educators or reading specialists, matching how R.E.A.D. hires (&ldquo;Teacher / Reading Clinician&rdquo;). Add the inquiry form because that&rsquo;s where the actual journey starts.",
              color: "#E8B731",
              featured: true,
            },
            {
              role: "Centre Directress",
              expertise: "Operations, staffing, parent relations",
              note: "Three roles need dashboard access — Secretary handles inquiries, Teachers track lessons, Directress sees everything. Don&rsquo;t over-engineer; keep it boringly simple for the team.",
              color: "#C9A84C",
              featured: true,
            },
            {
              role: "Parent (Target Audience)",
              expertise: "Alabang mom of two, school-age kids",
              note: "I want to see real parent stories, photos of the actual centre, and a short form. WhatsApp button is non-negotiable &mdash; calling is awkward when I&rsquo;m at the office.",
              color: "#E84671",
            },
          ].map((member, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 border ${
                member.featured ? "border-[#C9A84C] bg-[#FFF9F0]" : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: member.color }}
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                  {member.role}
                </p>
                {member.featured && (
                  <span className="ml-auto text-[9px] font-bold uppercase tracking-[0.15em] text-[#C9A84C]">
                    + New
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 mb-3">{member.expertise}</p>
              <p
                className="text-sm text-gray-600 leading-relaxed italic"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${member.note}&rdquo;` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investment" className="border-t border-gray-100 px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          06 &mdash; Investment
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Honest, friends-rate pricing.
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl mb-12 font-light leading-relaxed">
          Standard agency pricing for this scope in Manila is roughly
          ₱45,000-75,000 for the website alone, and ₱120,000+ with a custom
          dashboard. These are the friends &amp; family rates &mdash; about
          50% off &mdash; because some of you are college friends, not
          enterprise clients.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              tier: "Starter",
              price: "₱18,000",
              standardPrice: "₱45,000",
              note: "One-time",
              desc: "Just the website",
              features: [
                "1 chosen design iteration",
                "Up to 6 pages (Home, About, Programs, etc.)",
                "Mobile-first &amp; fully responsive",
                "Inquiry form connected to your email",
                "Domain &amp; Vercel hosting setup",
                "30 days post-launch support",
              ],
            },
            {
              tier: "Centre Plus",
              price: "₱42,000",
              standardPrice: "₱120,000",
              note: "One-time",
              desc: "Website + Operations Dashboard",
              features: [
                "Everything in Starter",
                "Inquiries inbox for the secretary",
                "Bookings &amp; schedule view for staff",
                "Lesson library &amp; teacher tools",
                "Parent portal for progress tracking",
                "Role-based access (Secretary, Teacher, Directress)",
                "1 staff training session",
                "60 days support",
              ],
              featured: true,
            },
            {
              tier: "Full Suite",
              price: "₱68,000",
              standardPrice: "₱195,000",
              note: "One-time",
              desc: "Everything + payments &amp; chat",
              features: [
                "Everything in Centre Plus",
                "SaligPay payment integration",
                "WhatsApp / Messenger chat widget",
                "Google Reviews &amp; FB feed widgets",
                "Automated email reminders",
                "Quarterly reviews for 6 months",
                "Priority support &amp; small edits",
              ],
            },
          ].map((tier, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 ${
                tier.featured
                  ? "bg-[#1A1A2E] text-white"
                  : "bg-white border border-gray-100"
              }`}
            >
              {tier.featured && (
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-3 block">
                  Recommended
                </span>
              )}
              <p className={`text-xs uppercase tracking-wider mb-1 ${tier.featured ? "text-white/60" : "text-gray-400"}`}>
                {tier.tier}
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <p
                  className={`text-3xl font-normal ${tier.featured ? "text-white" : "text-[#1A1A2E]"}`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {tier.price}
                </p>
                <p className={`text-xs line-through ${tier.featured ? "text-white/30" : "text-gray-300"}`}>
                  {tier.standardPrice}
                </p>
              </div>
              <p className={`text-xs ${tier.featured ? "text-white/40" : "text-gray-300"}`}>
                {tier.note} &middot; Friends rate
              </p>
              <p className={`text-sm font-medium mt-4 mb-5 ${tier.featured ? "text-white/80" : "text-[#1A1A2E]"}`}>
                {tier.desc}
              </p>
              <ul className={`space-y-2.5 text-xs ${tier.featured ? "text-white/70" : "text-gray-500"}`}>
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-1 flex-shrink-0">
                      <path
                        d="M2.5 6L5 8.5L9.5 4"
                        stroke={tier.featured ? "#C9A84C" : "#E84671"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-gray-100 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
              Optional Monthly Retainer
            </p>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              After launch, optional retainers (₱1,500-3,500/mo) cover content
              updates, monthly check-ins, and small edits so your team
              isn&apos;t troubleshooting alone.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-5 bg-[#FFF9F0]">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C9A84C] mb-2">
              What&apos;s Not Included
            </p>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Domain registration (~₱600/year), Vercel hosting (free tier
              should suffice for a year), and SaligPay transaction fees
              (per-transaction, no monthly minimum).
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-400 max-w-2xl">
          Payment terms: 50% upfront to start, 50% on launch. Bank
          transfer, GCash, or Maya all welcome.
        </p>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-gray-100 px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          07 &mdash; Timeline
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          From handshake to launch.
        </h2>

        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-100" />
          {[
            { week: "Week 1", title: "Discovery &amp; Direction", desc: "Final iteration selected. Brand assets and content gathered." },
            { week: "Week 2-3", title: "Website Design &amp; Build", desc: "Public site built page-by-page with weekly review checkpoints." },
            { week: "Week 4-5", title: "Dashboard Development", desc: "CMS and LMS modules built, populated with R.E.A.D.&apos;s real data." },
            { week: "Week 6", title: "Integrations &amp; Testing", desc: "SaligPay, parent portal, and any add-ons connected and stress-tested." },
            { week: "Week 7", title: "Staff Training &amp; Launch", desc: "Hands-on training session, soft launch, then public go-live." },
          ].map((step, i) => (
            <div key={i} className="relative pl-12 pb-10 last:pb-0">
              <div className="absolute left-0 top-0 w-7 h-7 rounded-full border-2 border-[#C9A84C] bg-white flex items-center justify-center text-[10px] font-bold text-[#C9A84C]">
                {i + 1}
              </div>
              <p className="text-xs text-gray-400 mb-1">{step.week}</p>
              <h3 className="text-base font-medium text-[#1A1A2E]" dangerouslySetInnerHTML={{ __html: step.title }} />
              <p className="text-sm text-gray-500 mt-1 font-light" dangerouslySetInnerHTML={{ __html: step.desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* SIGN-OFF */}
      <section className="border-t border-gray-100 px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          08 &mdash; Next Steps
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to begin?
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mb-10 font-light leading-relaxed">
          Reply to this proposal to confirm your chosen package, schedule a
          kickoff call, and we&apos;ll send the agreement for signature.
        </p>

        <div className="rounded-2xl border border-gray-100 p-8 max-w-2xl">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-3">
                Approved By
              </p>
              <div className="h-px bg-gray-200 mt-12" />
              <p className="text-xs text-gray-400 mt-2">R.E.A.D. Center Representative</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-3">
                Date
              </p>
              <div className="h-px bg-gray-200 mt-12" />
              <p className="text-xs text-gray-400 mt-2">Signature date</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 sm:px-10 py-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <ReadLogo size={28} />
          <div className="text-xs text-gray-400">
            <p>R.E.A.D. Center &mdash; Reading Enhancement &amp; Academic Development</p>
            <p className="mt-1">Ayala Alabang, Muntinlupa City</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
