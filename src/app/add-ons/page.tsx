"use client";

import Link from "next/link";
import {
  CreditCard,
  MessageSquare,
  Calendar,
  Star,
  FileText,
  Users,
  Zap,
  ArrowLeft,
  Check,
} from "lucide-react";

function ReadLogo({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/logo.jpg"
      alt="R.E.A.D. Center"
      style={{ height: `${size}px`, width: "auto" }}
      className="object-contain"
    />
  );
}

const addOns = [
  {
    icon: <MessageSquare size={20} />,
    name: "WhatsApp / Viber Chat Widget",
    price: "₱4,500",
    unit: "/one-time",
    color: "#25D366",
    body: "Floating chat button that connects parents directly to your team's WhatsApp or Viber. Perfect since most Alabang parents prefer messaging over calling.",
    features: [
      "Pre-filled message templates",
      "Office hours auto-reply",
      "Multiple staff routing",
    ],
  },
  {
    icon: <Calendar size={20} />,
    name: "Online Booking System",
    price: "₱8,500",
    unit: "/one-time",
    color: "#E84671",
    body: "Calendly-style booking flow integrated into the website. Parents book assessments, reading classes, or consultations 24/7 — synced to your team's calendar.",
    features: [
      "Service-based scheduling",
      "Auto email + SMS reminders",
      "Google Calendar sync",
      "Prevents double-booking",
    ],
  },
  {
    icon: <Users size={20} />,
    name: "Parent Portal",
    price: "₱18,000",
    unit: "/one-time",
    color: "#2BAA8E",
    body: "Secure login area for parents to view their child's progress, session history, upcoming schedules, and developmental milestones in one place.",
    features: [
      "Per-child dashboards",
      "Progress reports & timelines",
      "Document downloads",
      "Educator messaging",
    ],
  },
  {
    icon: <FileText size={20} />,
    name: "Digital Intake Forms",
    price: "₱5,500",
    unit: "/one-time",
    color: "#2E7AB8",
    body: "Online assessment questionnaires that parents complete before their first visit. Data flows directly to your records — no more paper forms.",
    features: [
      "Conditional logic forms",
      "PDF export & printing",
      "Auto-fills client records",
    ],
  },
  {
    icon: <Star size={20} />,
    name: "Google Reviews Widget",
    price: "₱2,500",
    unit: "/one-time",
    color: "#E8B731",
    body: "Embed real, verified Google reviews directly on the website. Social proof is the #1 factor for Alabang parents choosing a learning clinic.",
    features: [
      "Auto-syncs new reviews",
      "Star rating display",
      "Filter by rating",
    ],
  },
  {
    icon: <Zap size={20} />,
    name: "Facebook Feed Integration",
    price: "₱3,500",
    unit: "/one-time",
    color: "#1877F2",
    body: "Latest posts from your R.E.A.D. Center Facebook page displayed live on the website. Keeps content fresh without extra work.",
    features: [
      "Auto-updates from FB",
      "Photos, videos, events",
      "Click-through to FB",
    ],
  },
];

export default function AddOnsPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <Link href="/proposal" className="flex items-center gap-3">
            <ReadLogo size={32} />
          </Link>
          <Link
            href="/proposal"
            className="text-xs text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft size={14} /> Back to proposal
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 sm:px-10 py-16 sm:py-20 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C] mb-5">
          Optional Add-On Services
        </p>
        <h1
          className="text-4xl sm:text-5xl font-normal leading-[1.1] text-[#1A1A2E] tracking-tight max-w-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Build the digital ecosystem that fits R.E.A.D.&apos;s pace.
        </h1>
        <p className="mt-6 text-base text-gray-500 max-w-2xl leading-relaxed font-light">
          Start with what you need today. Layer on additional integrations as
          the clinic grows. Each add-on is independent and can be activated at
          any time after launch.
        </p>
      </section>

      {/* FEATURED: SaligPay */}
      <section className="px-6 sm:px-10 pb-12 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          Featured Integration
        </p>
        <h2
          className="text-2xl sm:text-3xl font-normal text-[#1A1A2E] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The recommended payment platform.
        </h2>

        <div className="rounded-3xl overflow-hidden border-2 border-[#C9A84C] bg-gradient-to-br from-[#FFF9F0] to-white p-7 sm:p-10">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full text-white bg-[#C9A84C]">
                  Recommended Add-On
                </span>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Built for Filipino Businesses
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                <h3
                  className="text-3xl font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  SaligPay
                </h3>
                <span className="text-sm italic text-gray-400">
                  &mdash; Kasalig Mo Sa Negosyo
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                An all-in-one Philippine payment platform that unifies GCash,
                Maya, cards, online banking, QR Ph, and BillEase into a single
                integration. Send payment links via Messenger or WhatsApp
                &mdash; perfect for how Alabang parents already inquire and
                pay.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {[
                  "70+ local banks &amp; e-wallets in one integration",
                  "Recurring billing for monthly class packages",
                  "Send payment links via Messenger, IG, WhatsApp",
                  "Automated invoicing with payment reminders",
                  "PCI DSS compliant with fraud protection",
                  "Same-day or next-day payout settlement",
                  "Works with custom websites &amp; Shopify",
                  "Built-in CRM via Salig AI for clients",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#C9A84C]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} color="#C9A84C" strokeWidth={2.5} />
                    </span>
                    <span
                      className="text-xs text-gray-600 leading-snug"
                      dangerouslySetInnerHTML={{ __html: feature }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-200">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Transparent Per-Transaction Fees
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-600">
                  <span><strong className="text-[#1A1A2E]">2.0%</strong> Maya</span>
                  <span className="text-gray-200">|</span>
                  <span><strong className="text-[#1A1A2E]">2.5%</strong> GCash</span>
                  <span className="text-gray-200">|</span>
                  <span><strong className="text-[#1A1A2E]">1.5%</strong> QR Ph / BillEase</span>
                  <span className="text-gray-200">|</span>
                  <span><strong className="text-[#1A1A2E]">0.8%</strong> Online Banking</span>
                  <span className="text-gray-200">|</span>
                  <span><strong className="text-[#1A1A2E]">3.5% + ₱15</strong> Cards</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-2">
                  No monthly subscription. No setup costs. Pay only per transaction.
                </p>
              </div>
            </div>

            {/* Why it fits READ */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-[#F0EBE3] p-6 h-full">
                <p className="text-[10px] font-semibold text-[#C9A84C] uppercase tracking-wider mb-4">
                  Why it fits R.E.A.D.
                </p>
                <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <li>
                    <strong className="text-[#1A1A2E] block mb-0.5">Parents pay via FB chat.</strong>
                    <span className="text-xs text-gray-500">
                      Send a link in Messenger after the consultation &mdash; no
                      need to leave the conversation.
                    </span>
                  </li>
                  <li>
                    <strong className="text-[#1A1A2E] block mb-0.5">Monthly class packages.</strong>
                    <span className="text-xs text-gray-500">
                      Auto-charge parents on the same date each month. Set it
                      and forget it.
                    </span>
                  </li>
                  <li>
                    <strong className="text-[#1A1A2E] block mb-0.5">No more deposit slips.</strong>
                    <span className="text-xs text-gray-500">
                      Payments confirmed instantly, freeing up clinic admin time
                      for what matters.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">Setup investment</p>
                  <p className="text-3xl font-bold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    ₱12,000
                  </p>
                  <p className="text-xs text-gray-400">One-time integration fee + KYC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER ADD-ONS */}
      <section className="px-6 sm:px-10 py-12 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
          Other Add-On Services
        </p>
        <h2
          className="text-2xl sm:text-3xl font-normal text-[#1A1A2E] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Each one solves a real day-to-day pain.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {addOns.map((addon, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${addon.color}15`, color: addon.color }}
              >
                {addon.icon}
              </div>
              <h3 className="text-base font-semibold text-[#1A1A2E] mb-1">
                {addon.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span
                  className="text-xl font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {addon.price}
                </span>
                <span className="text-xs text-gray-400">{addon.unit}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                {addon.body}
              </p>
              <ul className="space-y-1.5">
                {addon.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                    <Check size={12} color={addon.color} className="mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* RETAINER INFO */}
      <section className="px-6 sm:px-10 py-16 max-w-6xl mx-auto">
        <div className="rounded-2xl bg-[#1A1A2E] text-white p-8 sm:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
            Ongoing Support
          </p>
          <h2
            className="text-2xl sm:text-3xl font-normal mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Optional monthly retainer.
          </h2>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-8 font-light">
            Once your site and integrations are live, an optional monthly
            retainer keeps everything running smoothly &mdash; updates, content
            refreshes, performance monitoring, and quick edits handled by us
            so your team can focus on the kids.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Lite", price: "₱2,500", unit: "/month", desc: "Bug fixes, small content edits, monthly check-in" },
              { name: "Standard", price: "₱5,000", unit: "/month", desc: "Up to 4 content updates, blog management, analytics report" },
              { name: "Premium", price: "₱8,500", unit: "/month", desc: "Unlimited edits, SEO management, social posts, priority support" },
            ].map((tier) => (
              <div key={tier.name} className="rounded-xl bg-white/5 border border-white/10 p-5">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{tier.name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {tier.price}
                  </span>
                  <span className="text-xs text-white/40">{tier.unit}</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 sm:px-10 py-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <ReadLogo size={28} />
          <div className="text-xs text-gray-400">
            <p>R.E.A.D. Center &mdash; Reading Enhancement &amp; Academic Development</p>
            <p className="mt-1">readclinicph@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
