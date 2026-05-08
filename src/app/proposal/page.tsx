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
          families, and built to scale your centre&apos;s operations.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/40 bg-[#FFF9F0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
          <span className="text-xs font-medium text-[#1A1A2E]">
            Live in 5&ndash;7 days from kickoff
          </span>
        </div>

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
            <p className="text-xs uppercase tracking-[0.2em] text-[#E84671] mb-1">
              Staff Dashboard
            </p>
            <p className="text-[10px] text-gray-400 mb-4">Included in Centre Plus &amp; Full Suite</p>
            <div className="space-y-3">
              {[
                "Inquiries inbox (Secretary)",
                "Bookings &amp; calendar (all roles)",
                "Students &amp; lesson library (Teacher, Directress)",
                "Website content &amp; staff billing (Directress)",
                "SaligPay payment tracking",
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
            <p className="text-xs uppercase tracking-[0.2em] text-[#2BAA8E] mb-1">
              Parent Portal
            </p>
            <p className="text-[10px] text-gray-400 mb-4">Full Suite only</p>
            <div className="space-y-3">
              {[
                "Each parent logs in to view <strong>their child&rsquo;s</strong> progress",
                "Reading-level growth charts &amp; milestones",
                "Session notes from the educator",
                "Upcoming schedule &amp; package status",
                "Auto-generated quarterly progress reports",
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

      {/* INVESTMENT */}
      <section id="investment" className="border-t border-gray-100 px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          05 &mdash; Investment
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Start small. Grow into it.
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl mb-12 font-light leading-relaxed">
          Most centres should start with <strong className="text-[#1A1A2E]">Centre Plus</strong> &mdash; it&apos;s the
          tier that actually replaces the daily chaos (inquiries in DMs,
          bookings in notebooks, payments in deposit slips). Starter is
          pure marketing site; Full Suite adds the parent-facing experience.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              tier: "Starter",
              price: "₱12,000",
              note: "One-time",
              desc: "A polished public website",
              features: [
                "1 chosen design iteration",
                "Up to 6 pages (Home, About, Programs, Contact, etc.)",
                "Mobile-first &amp; fully responsive",
                "Inquiry form delivered to your email",
                "WhatsApp click-to-chat button",
                "Domain &amp; hosting setup",
                "30 days post-launch support",
              ],
            },
            {
              tier: "Centre Plus",
              price: "₱28,000",
              note: "One-time",
              desc: "Run the centre digitally &mdash; from inquiry to paid",
              features: [
                "Everything in Starter",
                "Inquiries inbox for the secretary",
                "Bookings &amp; schedule view",
                "Students &amp; lesson library",
                "Teacher tools (lesson plans, session notes)",
                "Role-based access (Secretary, Teacher, Directress)",
                "<strong>SaligPay payments</strong> (free for you, parents pay convenience fee)",
                "Recurring billing for monthly class packages",
                "1 staff training session",
                "60 days support",
              ],
              featured: true,
              highlight: "Replaces 4 spreadsheets, 3 chat threads, and the deposit-slip dance.",
            },
            {
              tier: "Full Suite",
              price: "₱48,000",
              note: "One-time",
              desc: "Everything &mdash; including the parent-facing experience",
              features: [
                "Everything in Centre Plus",
                "<strong>Parent portal</strong> &mdash; parents log in to view progress, milestones &amp; session notes",
                "Automated session reminders (email + SMS)",
                "Google Reviews widget on the website",
                "Facebook feed widget on the website",
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
              <p
                className={`text-3xl font-normal ${tier.featured ? "text-white" : "text-[#1A1A2E]"}`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {tier.price}
              </p>
              <p className={`text-xs ${tier.featured ? "text-white/40" : "text-gray-300"}`}>
                {tier.note}
              </p>
              <p
                className={`text-sm font-medium mt-4 mb-5 ${tier.featured ? "text-white/80" : "text-[#1A1A2E]"}`}
                dangerouslySetInnerHTML={{ __html: tier.desc }}
              />

              {tier.highlight && (
                <div className="mb-5 rounded-lg p-3 bg-[#C9A84C]/15 border border-[#C9A84C]/30">
                  <p className="text-xs leading-relaxed text-[#C9A84C] font-medium italic">
                    &ldquo;{tier.highlight}&rdquo;
                  </p>
                </div>
              )}

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
              Third-Party Services Used
            </p>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              The dashboard runs on Supabase (database &amp; auth) and Vercel
              (hosting). Most services have generous free tiers that fit
              R.E.A.D.&apos;s scale. See the breakdown below for full
              transparency.
            </p>
          </div>
        </div>

        {/* Infrastructure cost disclosure */}
        <div className="mt-6 rounded-2xl border border-gray-100 p-6 sm:p-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
            Ongoing Infrastructure &mdash; Honest Breakdown
          </p>
          <p className="text-xs text-gray-500 mb-5 max-w-2xl leading-relaxed">
            These are services we plug into during the build. Most fit
            comfortably in their free tiers at R.E.A.D.&apos;s starting scale.
            We&apos;re listing them all so there are no surprises a year in.
          </p>

          <div className="space-y-3">
            {[
              {
                service: "Domain name",
                cost: "~₱600/year",
                detail: "e.g. readcentre.ph via Namecheap or local registrar",
                tier: "All tiers",
                tierColor: "#9CA3AF",
              },
              {
                service: "Vercel hosting",
                cost: "Free",
                detail: "Free tier handles years of normal traffic. Upgrade only if you spike past 100GB bandwidth/month.",
                tier: "All tiers",
                tierColor: "#9CA3AF",
              },
              {
                service: "Supabase (database & auth)",
                cost: "Free → ~₱1,400/mo if exceeded",
                detail: "Free tier covers ~500 active students, 50K monthly logins, 500MB data. Pro plan at $25/mo (~₱1,400) only if you outgrow it.",
                tier: "Centre Plus & Full Suite",
                tierColor: "#C9A84C",
              },
              {
                service: "Resend (email reminders)",
                cost: "Free",
                detail: "3,000 emails/month free — plenty for inquiry confirmations, parent updates, and reminders.",
                tier: "Centre Plus & Full Suite",
                tierColor: "#C9A84C",
              },
              {
                service: "Semaphore (SMS reminders)",
                cost: "~₱0.50 per SMS",
                detail: "At ~400 reminders/month, expect ~₱200/mo. Optional — turn off any time. Pay-as-you-go top-ups.",
                tier: "Full Suite only",
                tierColor: "#1A1A2E",
              },
              {
                service: "SaligPay convenience fees",
                cost: "Paid by parents",
                detail: "Free signup. R.E.A.D. receives the full session price. Parents see a small fee at checkout (e.g. 2.5% on GCash).",
                tier: "Centre Plus & Full Suite",
                tierColor: "#C9A84C",
              },
              {
                service: "Google Reviews & FB feed",
                cost: "Free",
                detail: "Both have free APIs / embed widgets. No usage fees.",
                tier: "Full Suite only",
                tierColor: "#1A1A2E",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid sm:grid-cols-12 gap-3 py-3 border-b border-gray-50 last:border-0"
              >
                <div className="sm:col-span-3">
                  <p className="text-sm font-medium text-[#1A1A2E]">{row.service}</p>
                  <span
                    className="inline-block mt-1 text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded"
                    style={{
                      backgroundColor: `${row.tierColor}15`,
                      color: row.tierColor,
                    }}
                  >
                    {row.tier}
                  </span>
                </div>
                <div className="sm:col-span-3">
                  <p className="text-sm font-semibold text-[#1A1A2E]">{row.cost}</p>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-xs text-gray-500 leading-relaxed">{row.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 border-t border-gray-100 flex items-start gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2BAA8E" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
              <strong className="text-[#1A1A2E]">Realistic year-1 ongoing cost</strong> for Centre Plus:
              roughly <strong className="text-[#1A1A2E]">₱600 (domain only)</strong>.
              For Full Suite with active SMS reminders: <strong className="text-[#1A1A2E]">~₱2,400-3,000/year</strong> (domain + SMS).
              Supabase typically stays free for years.
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
          06 &mdash; Timeline
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Live in 5&ndash;7 days.
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl mb-12 font-light leading-relaxed">
          The Starter website goes live within a week of kickoff. Centre Plus
          and Full Suite layer on dashboard and integrations after launch
          &mdash; so the public-facing site doesn&apos;t wait for the
          back-of-house work.
        </p>

        {/* Starter timeline */}
        <div className="rounded-2xl border-2 border-[#C9A84C] bg-[#FFF9F0] p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
              Starter Website
            </span>
            <span className="text-[10px] text-gray-400">5&ndash;7 days from kickoff</span>
          </div>

          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-[#C9A84C]/30" />
            {[
              { day: "Day 0", title: "Discovery &amp; onboarding", desc: "Brand assets, content, and photos gathered. Doesn&rsquo;t count toward the 7-day clock." },
              { day: "Day 1", title: "Kickoff &amp; direction", desc: "Final iteration locked in. Site map and content outline approved." },
              { day: "Days 2-3", title: "Design", desc: "Homepage, About, Programs, and inquiry form designs ready for sign-off." },
              { day: "Days 4-5", title: "Build", desc: "Site built and reviewed on mobile, tablet, and desktop." },
              { day: "Day 6", title: "QA &amp; polish", desc: "Cross-browser checks, performance pass, SEO basics in place." },
              { day: "Day 7", title: "Launch 🚀", desc: "Site goes live, you get the keys, walkthrough call done." },
            ].map((step, i) => (
              <div key={i} className="relative pl-12 pb-6 last:pb-0">
                <div className="absolute left-0 top-0 w-7 h-7 rounded-full border-2 border-[#C9A84C] bg-white flex items-center justify-center text-[10px] font-bold text-[#C9A84C]">
                  {i}
                </div>
                <p className="text-xs text-[#C9A84C] font-semibold mb-0.5">{step.day}</p>
                <h3 className="text-sm font-medium text-[#1A1A2E]" dangerouslySetInnerHTML={{ __html: step.title }} />
                <p className="text-xs text-gray-500 mt-0.5 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
              </div>
            ))}
          </div>
        </div>

        {/* What comes next */}
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-4">
          Optional &mdash; layered on after launch
        </p>
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-100" />
          {[
            { range: "Weeks 2-4", title: "Dashboard buildout", desc: "If you choose Centre Plus, the operations dashboard (CMS + LMS) is built and populated with R.E.A.D.&apos;s real data." },
            { range: "Week 5", title: "Integrations &amp; staff training", desc: "SaligPay, WhatsApp, parent portal connected. Hands-on training session for Secretary, Teacher, and Directress roles." },
            { range: "Ongoing", title: "Quarterly check-ins", desc: "If you want a retainer, we meet every quarter to update content, tune performance, and ship small improvements." },
          ].map((step, i) => (
            <div key={i} className="relative pl-12 pb-8 last:pb-0">
              <div className="absolute left-0 top-0 w-7 h-7 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-[10px] font-bold text-gray-400">
                +{i + 1}
              </div>
              <p className="text-xs text-gray-400 mb-1">{step.range}</p>
              <h3 className="text-base font-medium text-[#1A1A2E]" dangerouslySetInnerHTML={{ __html: step.title }} />
              <p className="text-sm text-gray-500 mt-1 font-light" dangerouslySetInnerHTML={{ __html: step.desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* ACCEPT PROPOSAL */}
      <section className="border-t border-gray-100 px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          07 &mdash; How to Accept
        </p>
        <h2
          className="text-3xl sm:text-4xl font-normal text-[#1A1A2E] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pick a package, send a reply.
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl mb-10 font-light leading-relaxed">
          Tap the package you&apos;d like to start with. It opens a pre-filled
          message you can send via email, Messenger, or WhatsApp &mdash; and
          that counts as your go-signal. I&apos;ll reply within 24 hours with
          a short agreement and the kickoff schedule.
        </p>

        {/* Package accept buttons */}
        <div className="grid md:grid-cols-3 gap-3 mb-10">
          {[
            {
              tier: "Starter",
              price: "₱12,000",
              accent: "#9CA3AF",
              featured: false,
            },
            {
              tier: "Centre Plus",
              price: "₱28,000",
              accent: "#C9A84C",
              featured: true,
            },
            {
              tier: "Full Suite",
              price: "₱48,000",
              accent: "#1A1A2E",
              featured: false,
            },
          ].map((pkg) => {
            const subject = encodeURIComponent(
              `R.E.A.D. Centre — Let's go with ${pkg.tier}`
            );
            const body = encodeURIComponent(
              `Hi Mika,\n\nWe'd like to proceed with the ${pkg.tier} package (${pkg.price}). Please send the short agreement and let's set a kickoff date.\n\nThanks,\nR.E.A.D. Centre`
            );
            const mailto = `mailto:mikatesalonadecastro@gmail.com?subject=${subject}&body=${body}`;
            return (
              <a
                key={pkg.tier}
                href={mailto}
                className={`group block rounded-2xl border-2 p-5 transition-all hover:shadow-lg cursor-pointer ${
                  pkg.featured
                    ? "border-[#C9A84C] bg-[#FFF9F0]"
                    : "border-gray-100 bg-white hover:border-gray-300"
                }`}
              >
                {pkg.featured && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-2 block">
                    Recommended
                  </span>
                )}
                <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                  Accept {pkg.tier}
                </p>
                <p
                  className="text-2xl font-normal text-[#1A1A2E] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {pkg.price}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium group-hover:gap-2.5 transition-all"
                  style={{ color: pkg.accent }}
                >
                  Send pre-filled email
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>

        {/* Alternative reply channels */}
        <div className="rounded-2xl border border-gray-100 p-6 sm:p-7 max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">
            Or reply through any of these
          </p>
          <div className="space-y-3">
            {[
              {
                channel: "WhatsApp",
                handle: "+63 915 661 0901",
                href: "https://wa.me/639156610901?text=Hi%20Mika%2C%20we%27d%20like%20to%20proceed%20with%20the%20R.E.A.D.%20website%20proposal.",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.981 1.287 2.981.858 3.518.804.537-.054 1.758-.718 2.006-1.413.247-.694.247-1.289.173-1.413-.075-.124-.272-.198-.57-.347zM12.05 22a9.84 9.84 0 01-5.026-1.378l-.36-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 012.16 12.05c0-5.45 4.434-9.882 9.89-9.882a9.82 9.82 0 016.989 2.898 9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.94-9.89 9.94zm8.412-18.295A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
              },
              {
                channel: "Email",
                handle: "mikatesalonadecastro@gmail.com",
                href: "mailto:mikatesalonadecastro@gmail.com?subject=R.E.A.D.%20Centre%20%E2%80%94%20Website%20Proposal",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
            ].map((c) => (
              <a
                key={c.channel}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between gap-4 p-3 rounded-lg border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  {c.icon}
                  <div>
                    <p className="text-sm font-medium text-[#1A1A2E]">{c.channel}</p>
                    <p className="text-xs text-gray-400">{c.handle}</p>
                  </div>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-300 group-hover:text-[#1A1A2E] group-hover:translate-x-1 transition-all"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* What happens after */}
        <div className="mt-8 max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">
            What happens after you reply
          </p>
          <ol className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-[10px] font-bold text-[#C9A84C] mt-0.5">01</span>
              <span>I&apos;ll send a one-page agreement (PDF, no legalese) within 24 hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[10px] font-bold text-[#C9A84C] mt-0.5">02</span>
              <span>You sign digitally, I countersign, we book the 30-min kickoff call.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[10px] font-bold text-[#C9A84C] mt-0.5">03</span>
              <span>50% deposit (₱6,000 for Starter) via GCash, Maya, or bank transfer &mdash; the 7-day clock starts the day after.</span>
            </li>
          </ol>
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
