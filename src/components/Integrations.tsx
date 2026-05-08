"use client";

/* Floating WhatsApp button */
export function WhatsAppButton({ style = "default" }: { style?: "default" | "pink" | "dark" }) {
  const colors = {
    default: { bg: "#25D366", hover: "#20BD5A" },
    pink: { bg: "#E84671", hover: "#D63D65" },
    dark: { bg: "#1A1A2E", hover: "#2a2a44" },
  };
  const c = colors[style];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-110"
        style={{ backgroundColor: c.bg }}
        aria-label="Chat with us on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>
      <span
        className="absolute -top-2 -left-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-md"
        style={{ backgroundColor: c.bg }}
      >
        Chat
      </span>
    </div>
  );
}

/* Booking Widget Section */
export function BookingWidget({
  variant = "warm",
  isMobile = false,
}: {
  variant?: "warm" | "playful" | "editorial";
  isMobile?: boolean;
}) {
  const styles = {
    warm: {
      bg: "#FFF9F0",
      accent: "#C9A84C",
      btn: "#C9A84C",
      font: "'Playfair Display', serif",
      bodyFont: "'Inter', sans-serif",
    },
    playful: {
      bg: "#FFF0F3",
      accent: "#E84671",
      btn: "#E84671",
      font: "'Cormorant', serif",
      bodyFont: "'Montserrat', sans-serif",
    },
    editorial: {
      bg: "#FAFAF8",
      accent: "#1A1A2E",
      btn: "#1A1A2E",
      font: "'Bodoni Moda', serif",
      bodyFont: "'Jost', sans-serif",
    },
  };
  const s = styles[variant];

  return (
    <section
      className={`${isMobile ? "px-5 py-10" : "px-8 py-14 lg:px-16"}`}
      style={{ backgroundColor: s.bg }}
    >
      <div className="max-w-4xl mx-auto">
        <div className={`${!isMobile ? "flex items-start gap-12" : ""}`}>
          <div className="flex-1">
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] mb-2"
              style={{ color: s.accent }}
            >
              Online Booking
            </p>
            <h2
              className={`font-semibold text-[#1A1A2E] ${isMobile ? "text-xl" : "text-2xl"}`}
              style={{ fontFamily: s.font }}
            >
              Book a Session Anytime
            </h2>
            <p
              className="mt-2 text-sm text-gray-500 leading-relaxed"
              style={{ fontFamily: s.bodyFont }}
            >
              No need to call — schedule assessments, reading classes, or
              consultations online. Pick a time that works for your family.
            </p>
          </div>

          {/* Booking mock UI */}
          <div className={`${isMobile ? "mt-6" : "flex-1"}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Select a Service
              </p>
              <div className="space-y-2">
                {["Free Consultation", "Reading Assessment", "Reading Class"].map(
                  (service, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: ["#E8B731", "#E84671", "#2BAA8E"][i],
                          }}
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                      <span className="text-xs text-gray-400">
                        {["Free", "60 min", "45 min"][i]}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="mt-4 grid grid-cols-5 gap-1.5">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                  <div
                    key={day}
                    className="text-center py-2 rounded-lg bg-gray-50 text-xs text-gray-400 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <button
                className="w-full mt-4 py-3 rounded-xl text-white text-sm font-medium cursor-pointer transition-all hover:shadow-md"
                style={{ backgroundColor: s.btn }}
              >
                Continue Booking
              </button>
              <p className="mt-2 text-[10px] text-gray-300 text-center">
                Powered by Calendly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Parent Portal Teaser */
export function ParentPortal({
  variant = "warm",
  isMobile = false,
}: {
  variant?: "warm" | "playful" | "editorial";
  isMobile?: boolean;
}) {
  const accents = {
    warm: "#C9A84C",
    playful: "#2BAA8E",
    editorial: "#1A1A2E",
  };
  const fonts = {
    warm: "'Playfair Display', serif",
    playful: "'Cormorant', serif",
    editorial: "'Bodoni Moda', serif",
  };
  const accent = accents[variant];

  return (
    <section className={`${isMobile ? "px-5 py-10" : "px-8 py-14 lg:px-16"}`}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs font-medium uppercase tracking-[0.2em] mb-2"
          style={{ color: accent }}
        >
          Parent Portal
        </p>
        <h2
          className={`font-semibold text-[#1A1A2E] ${isMobile ? "text-xl" : "text-2xl"}`}
          style={{ fontFamily: fonts[variant] }}
        >
          Track Your Child&apos;s Progress
        </h2>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-lg">
          A secure parent dashboard to view session history, progress reports,
          upcoming schedules, and developmental milestones — all in one place.
        </p>

        {/* Mock dashboard */}
        <div className={`mt-8 grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
          {[
            {
              label: "Sessions Completed",
              value: "24",
              sub: "This semester",
              color: "#E8B731",
            },
            {
              label: "Reading Level",
              value: "Grade 3.5",
              sub: "+1.2 levels since start",
              color: "#2BAA8E",
            },
            {
              label: "Next Session",
              value: "Apr 12",
              sub: "Saturday, 10:00 AM",
              color: "#E84671",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-5"
            >
              <p className="text-xs text-gray-400 mb-1">{card.label}</p>
              <p
                className="text-2xl font-bold"
                style={{ color: card.color }}
              >
                {card.value}
              </p>
              <p className="text-xs text-gray-300 mt-1">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Progress bar mock */}
        <div className="mt-6 bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-[#1A1A2E]">
              Reading Fluency Progress
            </p>
            <span className="text-xs text-[#2BAA8E] font-medium">78%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "78%",
                background: "linear-gradient(90deg, #E8B731, #2BAA8E)",
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-gray-300">
            <span>Started: Jan 2026</span>
            <span>Target: Jun 2026</span>
          </div>
        </div>

        <button
          className="mt-6 px-6 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all hover:shadow-md"
          style={{
            backgroundColor: accent,
            color: variant === "editorial" ? "white" : "white",
          }}
        >
          Log In to Parent Portal
        </button>
      </div>
    </section>
  );
}

/* Payment Section */
export function PaymentSection({
  variant = "warm",
  isMobile = false,
}: {
  variant?: "warm" | "playful" | "editorial";
  isMobile?: boolean;
}) {
  const accents = { warm: "#C9A84C", playful: "#E84671", editorial: "#1A1A2E" };
  const fonts = {
    warm: "'Playfair Display', serif",
    playful: "'Cormorant', serif",
    editorial: "'Bodoni Moda', serif",
  };
  const bgs = { warm: "#FDFBF7", playful: "#FFF9F0", editorial: "#FAFAF8" };

  return (
    <section
      className={`${isMobile ? "px-5 py-10" : "px-8 py-14 lg:px-16"}`}
      style={{ backgroundColor: bgs[variant] }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs font-medium uppercase tracking-[0.2em] mb-2"
          style={{ color: accents[variant] }}
        >
          Easy Payment
        </p>
        <h2
          className={`font-semibold text-[#1A1A2E] ${isMobile ? "text-xl" : "text-2xl"}`}
          style={{ fontFamily: fonts[variant] }}
        >
          Pay Your Way
        </h2>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-lg">
          Convenient online payment for sessions and packages. No more bank
          deposits — pay securely from your phone.
        </p>

        {/* Featured: SaligPay add-on */}
        <div
          className={`mt-8 rounded-2xl overflow-hidden border-2 ${isMobile ? "p-6" : "p-7"}`}
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: accents[variant],
          }}
        >
          <div className={`${!isMobile ? "flex items-start gap-6" : ""}`}>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: accents[variant] }}
                >
                  Recommended Add-On
                </span>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Made for Filipino Businesses
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`font-bold text-[#1A1A2E] ${isMobile ? "text-xl" : "text-2xl"}`}
                  style={{ fontFamily: fonts[variant] }}
                >
                  SaligPay
                </span>
                <span className="text-xs italic text-gray-400">
                  &mdash; Kasalig Mo Sa Negosyo
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                One unified payment platform that lets parents pay through
                Messenger links, the website, or even Facebook chat.{" "}
                <strong className="text-[#1A1A2E]">
                  No monthly subscription from SaligPay &mdash; parents pay
                  a small convenience fee at checkout.
                </strong>
              </p>

              {/* Feature list */}
              <div
                className={`mt-5 grid gap-2.5 ${
                  isMobile ? "grid-cols-1" : "grid-cols-2"
                }`}
              >
                {[
                  "No monthly subscription from SaligPay",
                  "Accepts GCash, Maya, cards, online banking, QR Ph",
                  "Recurring billing for monthly class packages",
                  "Send payment links via Messenger or WhatsApp",
                  "Automated invoicing & payment reminders",
                  "Same-day or next-day payout settlement",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 flex-shrink-0"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="8"
                        fill={accents[variant]}
                        fillOpacity="0.12"
                      />
                      <path
                        d="M5 8L7 10L11 6"
                        stroke={accents[variant]}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs text-gray-600 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Fee transparency */}
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Convenience Fees (paid by parent at checkout)
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                  <span>
                    <strong className="text-[#1A1A2E]">2.0%</strong> Maya
                  </span>
                  <span className="text-gray-200">|</span>
                  <span>
                    <strong className="text-[#1A1A2E]">2.5%</strong> GCash
                  </span>
                  <span className="text-gray-200">|</span>
                  <span>
                    <strong className="text-[#1A1A2E]">1.5%</strong> QR Ph
                  </span>
                  <span className="text-gray-200">|</span>
                  <span>
                    <strong className="text-[#1A1A2E]">3.5% + ₱15</strong> Cards
                  </span>
                </div>
                <p className="text-[10px] text-gray-300 mt-2">
                  Centre pays nothing monthly. Parents see a small fee added
                  at checkout (standard for online payments here).
                </p>
              </div>

              <button
                className="mt-5 px-6 py-3 rounded-xl text-white text-sm font-medium cursor-pointer transition-all hover:shadow-md"
                style={{ backgroundColor: accents[variant] }}
              >
                Enable SaligPay Integration
              </button>
            </div>

            {/* Mock payment link preview */}
            {!isMobile && (
              <div className="w-64 flex-shrink-0">
                <div className="rounded-xl border border-gray-100 p-4 bg-gray-50">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Payment Link Preview
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-[10px] text-gray-400">R.E.A.D. Center</p>
                    <p className="text-sm font-semibold text-[#1A1A2E] mt-0.5">
                      Reading Assessment
                    </p>
                    <p
                      className={`mt-2 text-xl font-bold`}
                      style={{ fontFamily: fonts[variant] }}
                    >
                      ₱3,500.00
                    </p>
                    <div className="mt-3 space-y-1.5">
                      {["GCash", "Maya", "QR Ph", "Card"].map((m) => (
                        <div
                          key={m}
                          className="flex items-center justify-between px-2.5 py-1.5 rounded bg-gray-50 text-[10px] text-gray-500"
                        >
                          <span>{m}</span>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <button
                      className="w-full mt-3 py-2 rounded text-white text-[10px] font-semibold"
                      style={{ backgroundColor: accents[variant] }}
                    >
                      Pay Securely
                    </button>
                    <p className="text-[8px] text-gray-300 text-center mt-1.5">
                      Powered by SaligPay
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Supported methods strip */}
        <p className="mt-6 text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
          All Accepted Through SaligPay
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "GCash", color: "#0070E0" },
            { name: "Maya", color: "#00B140" },
            { name: "QR Ph", color: "#E94B3C" },
            { name: "Visa", color: "#1A1F71" },
            { name: "Mastercard", color: "#EB001B" },
            { name: "BPI", color: "#A52125" },
            { name: "UnionBank", color: "#F58220" },
            { name: "BillEase", color: "#7C3AED" },
          ].map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-100 text-xs text-gray-600"
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: m.color }}
              />
              {m.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
