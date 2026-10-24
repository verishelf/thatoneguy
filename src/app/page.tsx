"use client";

import { useState, FormEvent } from "react";

const services = [
  {
    title: "Residential Junk Removal",
    description:
      "Furniture, appliances, mattresses, yard waste, and garage cleanouts. We haul it all so you don’t have to.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Commercial Cleanouts",
    description:
      "Office furniture, retail fixtures, storage units, and warehouse debris. Minimal disruption to your business.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Construction Debris",
    description:
      "Drywall, lumber, concrete, roofing, and renovation waste. We handle the heavy stuff so your crew can keep working.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.062 1.105-.119 1.667-.17a4.5 4.5 0 004.5-4.5c0-1.33-.57-2.53-1.48-3.36l-4.32 4.32a2.25 2.25 0 01-1.59.66H12a2.25 2.25 0 01-2.25-2.25V6.75a2.25 2.25 0 01.66-1.59l4.32-4.32A4.5 4.5 0 0012 1.5c-1.33 0-2.53.57-3.36 1.48l-4.32 4.32a2.25 2.25 0 00-.66 1.59v2.25a2.25 2.25 0 002.25 2.25h2.25a2.25 2.25 0 001.59.66z" />
      </svg>
    ),
  },
  {
    title: "Appliance & Electronics",
    description:
      "Refrigerators, washers, dryers, TVs, and computers. Responsible disposal and recycling whenever possible.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Yard & Green Waste",
    description:
      "Tree branches, leaves, dirt, and landscaping debris. Keep your property looking clean and ready.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Estate & Move-Outs",
    description:
      "Full property cleanouts for estates, move-outs, and foreclosures. Fast, respectful, and thorough service.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "Local & Reliable",
    text: "Chula Vista based. We show up on time, every time. No big corporate runaround.",
  },
  {
    title: "Fair, Upfront Pricing",
    text: "Transparent quotes with no hidden fees. You know the price before we start.",
  },
  {
    title: "Same-Day Available",
    text: "Need it gone today? Call early and we’ll do our best to get there the same day.",
  },
  {
    title: "Eco-Conscious Disposal",
    text: "We recycle and donate what we can. Less in the landfill, more peace of mind.",
  },
];

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate form submission – in production wire to Formspree, Resend, or your backend
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 900);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <a href="#" className="flex items-center gap-2 group">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 text-white font-bold text-lg group-hover:bg-blue-900 transition-colors">
                TG
              </span>
              <div className="leading-tight">
                <span className="block font-bold text-slate-900 text-lg tracking-tight">
                  That Guy!
                </span>
                <span className="block text-xs text-slate-500 font-medium">
                  Junk Hauling • Chula Vista
                </span>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
              <a href="#services" className="hover:text-blue-800 transition-colors">
                Services
              </a>
              <a href="#why-us" className="hover:text-blue-800 transition-colors">
                Why Us
              </a>
              <a href="#area" className="hover:text-blue-800 transition-colors">
                Service Area
              </a>
              <a href="#contact" className="hover:text-blue-800 transition-colors">
                Contact
              </a>
            </nav>
            <a
              href="tel:+18584396109"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2.5 shadow-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-blue-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Serving Chula Vista & South Bay
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Junk gone.{" "}
                <span className="text-orange-400">Stress free.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-xl">
                That Guy! provides fast, affordable junk hauling in Chula Vista.
                From single items to full cleanouts — we show up, we work hard,
                and we leave your space clean.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02]"
                >
                  Get a Free Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:+18584396109"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 transition-colors"
                >
                  (858) 439-6109
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Same-day available
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No hidden fees
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fully insured
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                What We Haul
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                From a single sofa to a full property cleanout — if it needs to go, we can take it.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative rounded-2xl border border-slate-200 bg-slate-50/50 p-6 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-colors mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why-us" className="py-20 sm:py-24 bg-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  Why choose That Guy?
                </h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  We’re not a faceless franchise. We’re a local crew that takes pride in
                  doing the job right — on time, at a fair price, and with respect for
                  your property and your time.
                </p>
                <div className="mt-8 space-y-5">
                  {reasons.map((reason) => (
                    <div key={reason.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{reason.title}</h3>
                        <p className="text-slate-600 text-sm mt-0.5">{reason.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-blue-800 to-blue-950 p-8 sm:p-10 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">How it works</h3>
                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-sm">
                        1
                      </span>
                      <div>
                        <p className="font-semibold">Request a quote</p>
                        <p className="text-blue-200 text-sm mt-1">
                          Call, text, or fill out the form. Tell us what needs to go.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-sm">
                        2
                      </span>
                      <div>
                        <p className="font-semibold">We confirm the price</p>
                        <p className="text-blue-200 text-sm mt-1">
                          Clear, upfront quote. No surprises when we arrive.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-sm">
                        3
                      </span>
                      <div>
                        <p className="font-semibold">We haul it away</p>
                        <p className="text-blue-200 text-sm mt-1">
                          We load everything, clean up, and leave your space ready.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 font-semibold transition-colors"
                  >
                    Get started today
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section id="area" className="py-20 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Proudly serving Chula Vista
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Based in Chula Vista and serving the greater South Bay area of San Diego.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Chula Vista",
                "National City",
                "Imperial Beach",
                "Bonita",
                "Otay Mesa",
                "Eastlake",
                "San Ysidro",
                "South San Diego",
              ].map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                >
                  <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium text-slate-800">{city}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-slate-500 text-sm">
              Outside these areas? Give us a call — we may still be able to help.
            </p>
          </div>
        </section>

        {/* Contact / Quote */}
        <section id="contact" className="py-20 sm:py-24 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Ready to clear the clutter?
                </h2>
                <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                  Tell us what you need hauled and we’ll get back to you quickly with a
                  free, no-obligation quote.
                </p>
                <div className="mt-10 space-y-5">
                  <a
                    href="tel:+18584396109"
                    className="flex items-center gap-4 group"
                  >
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 group-hover:bg-orange-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">Call or text</p>
                      <p className="font-semibold text-lg group-hover:text-orange-300 transition-colors">
                        (858) 439-6109
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="font-semibold text-lg">hello@thatguyhauling.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">Hours</p>
                      <p className="font-semibold text-lg">Mon–Sat 7am – 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl">
                {formStatus === "sent" ? (
                  <div className="text-center py-10">
                    <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Request received!</h3>
                    <p className="mt-2 text-slate-600">
                      We’ll get back to you as soon as possible with a free quote.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormStatus("idle")}
                      className="mt-6 text-blue-700 font-semibold hover:underline"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Request a free quote
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">
                      We’ll respond within a few hours during business hours.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Name *
                        </label>
                        <input
                          id="name"
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                          Phone *
                        </label>
                        <input
                          id="phone"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="(858) 439-6109"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                        What do you need hauled?
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                      >
                        <option value="">Select a service…</option>
                        <option value="residential">Residential junk removal</option>
                        <option value="commercial">Commercial cleanout</option>
                        <option value="construction">Construction debris</option>
                        <option value="appliance">Appliance / electronics</option>
                        <option value="yard">Yard & green waste</option>
                        <option value="estate">Estate / move-out cleanout</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Details
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                        placeholder="Describe the items, approximate volume, and preferred date…"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full rounded-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-semibold py-3.5 transition-colors shadow-md"
                    >
                      {formStatus === "sending" ? "Sending…" : "Get My Free Quote"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-800 text-white font-bold text-sm">
                TG
              </span>
              <span className="font-semibold text-white">That Guy!</span>
            </div>
            <p className="text-sm text-center sm:text-right">
              © {new Date().getFullYear()} That Guy! Junk Hauling. Chula Vista, CA.
              <br className="sm:hidden" /> Local • Reliable • Fair.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
