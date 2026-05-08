"use client";

type Variant = "warm" | "playful" | "editorial";

const styles = {
  warm: {
    bg: "#FFF9F0",
    accent: "#C9A84C",
    headingFont: "'Playfair Display', serif",
    bodyFont: "'Inter', sans-serif",
    headingColor: "#1A1A2E",
  },
  playful: {
    bg: "#FFF0F3",
    accent: "#E84671",
    headingFont: "'Cormorant', serif",
    bodyFont: "'Montserrat', sans-serif",
    headingColor: "#1A1A2E",
  },
  editorial: {
    bg: "#FAFAF8",
    accent: "#1A1A2E",
    headingFont: "'Bodoni Moda', serif",
    bodyFont: "'Jost', sans-serif",
    headingColor: "#1A1A2E",
  },
};

export default function InquiryForm({
  variant = "warm",
  isMobile = false,
}: {
  variant?: Variant;
  isMobile?: boolean;
}) {
  const s = styles[variant];

  return (
    <section
      className={`${isMobile ? "px-5 py-12" : "px-8 py-16 lg:px-16"}`}
      style={{ backgroundColor: s.bg, fontFamily: s.bodyFont }}
    >
      <div className="max-w-4xl mx-auto">
        <div className={`${!isMobile ? "grid grid-cols-12 gap-10" : ""}`}>
          {/* Header */}
          <div className={!isMobile ? "col-span-5" : ""}>
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] mb-3"
              style={{ color: s.accent }}
            >
              Schedule a Visit
            </p>
            <h2
              className={`font-semibold leading-tight mb-4 ${
                isMobile ? "text-2xl" : "text-3xl"
              }`}
              style={{ fontFamily: s.headingFont, color: s.headingColor }}
            >
              Tell us about your child.
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Fill out this short inquiry and our secretary will be in touch
              within 24 hours to schedule your visit and complimentary reading
              assessment at our Ayala Alabang center.
            </p>

            <div className="space-y-3 text-xs text-gray-500">
              <div className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: s.accent }}
                />
                <span>Free initial consultation, no obligations</span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: s.accent }}
                />
                <span>We&apos;ll match your child with the right reading specialist</span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: s.accent }}
                />
                <span>Your information stays private &amp; confidential</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`${!isMobile ? "col-span-7" : "mt-8"}`}>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm">
              <div className="space-y-4">
                {/* Parent name */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Parent&apos;s Full Name <span style={{ color: s.accent }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Maria Mendoza"
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-300"
                  />
                </div>

                {/* Two cols: phone + email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Mobile <span style={{ color: s.accent }}>*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+63 917 ..."
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="parent@email.com"
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-300"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="pt-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-3">
                    About your child
                  </p>
                </div>

                {/* Child name + age */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Child&apos;s Name <span style={{ color: s.accent }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Sofia"
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Age <span style={{ color: s.accent }}>*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="8"
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-300"
                    />
                  </div>
                </div>

                {/* School + grade */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      School
                    </label>
                    <input
                      type="text"
                      placeholder="PAREF Woodrose"
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Grade Level
                    </label>
                    <select className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-300">
                      <option>Select grade</option>
                      <option>Pre-school / Nursery</option>
                      <option>Kindergarten</option>
                      <option>Grade 1</option>
                      <option>Grade 2</option>
                      <option>Grade 3</option>
                      <option>Grade 4</option>
                      <option>Grade 5</option>
                      <option>Grade 6</option>
                      <option>High School</option>
                    </select>
                  </div>
                </div>

                {/* Preferred schedule */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Preferred Schedule
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Weekday Mornings", "Weekday Afternoons", "Saturdays"].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 px-3 py-2 text-xs bg-gray-50 border border-gray-100 rounded-lg cursor-pointer hover:bg-gray-100"
                      >
                        <input type="checkbox" className="accent-current" style={{ accentColor: s.accent }} />
                        <span className="text-gray-600">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Concerns */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Any concerns or questions? <span className="text-gray-300">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a little about your child's reading journey and what you're hoping we can help with..."
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  className="w-full mt-2 py-3.5 rounded-xl text-white text-sm font-semibold cursor-pointer transition-all hover:shadow-md hover:scale-[1.01]"
                  style={{ backgroundColor: s.accent }}
                >
                  Send Inquiry
                </button>
                <p className="text-[10px] text-gray-400 text-center">
                  Our secretary will respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
