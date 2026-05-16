"use client";

/* Mission band + email signup — Suorin-style closing pre-footer block. */

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  return (
    <section id="contact" className="relative isolate bg-white py-20 lg:py-28">
      <div className="container-x">
        {/* Mission band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
        >
          <div className="eyebrow mb-5">Our Mission</div>
          <h2 className="heading-display text-ink-900 text-[40px] md:text-[56px] lg:text-[68px] text-balance leading-[1.05]">
            Build the <span className="text-primary">next chapter</span> of UK beverage with the world&apos;s biggest game.
          </h2>
          <p className="mt-7 text-lg md:text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto">
            One brand. One UK distribution partner. Every channel from Tesco to the corner shop —
            and every postcode in between. We move Minecraft Drinks from London to wherever the
            shelf lives.
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: contact rows */}
          <div className="lg:col-span-5">
            <div className="eyebrow-dark mb-4">04 · Contact</div>
            <h3 className="heading-display text-ink-900 text-3xl md:text-4xl lg:text-5xl text-balance">
              Talk to the <span className="text-primary">UK trade desk.</span>
            </h3>
            <p className="mt-5 text-ink-500 text-lg leading-relaxed max-w-md">
              Multiple, independent, hospitality, or e-commerce — our team replies within 24 hours
              with case pricing and stock allocations.
            </p>

            <div className="mt-10 space-y-px bg-line rounded-2xl overflow-hidden border border-line">
              {[
                { icon: Mail, label: "Trade enquiries", val: "trade@demanddistribution.co.uk" },
                { icon: Phone, label: "London office", val: "+44 (0)20 3970 0000" },
                { icon: MapPin, label: "HQ", val: "1 Canada Square, Canary Wharf, London E14 5AB" },
              ].map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.label} className="flex items-center gap-4 bg-white p-5">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                      <Icon size={18} strokeWidth={2.2} />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-400">
                        {r.label}
                      </div>
                      <div className="mt-0.5 text-ink-900 font-medium">{r.val}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-sm text-ink-500">
              <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
              Team online · Mon–Fri 08:00–18:00 GMT
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="mc-frame p-7 md:p-10">
              {!sent ? (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" name="name" placeholder="Jane Smith" required />
                    <Field label="Company" name="company" placeholder="London Beverage Co." required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(v) => setEmail(v)}
                      placeholder="jane@company.co.uk"
                      required
                    />
                    <Field label="Phone" name="phone" placeholder="+44 20 0000 0000" />
                  </div>
                  <SelectField
                    label="I'm enquiring as a"
                    name="type"
                    options={[
                      "Major retailer",
                      "Independent / convenience",
                      "Hospitality / on-trade",
                      "E-commerce",
                      "Wholesale",
                      "Other",
                    ]}
                  />
                  <TextareaField
                    label="What can we help with?"
                    name="message"
                    placeholder="Volumes, regions, timeline…"
                  />

                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="h-4 w-4 border border-ink-300 rounded accent-primary"
                    />
                    <label htmlFor="consent" className="text-sm text-ink-500">
                      I agree to be contacted by Demand Distribution&apos;s trade team.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-mc w-full text-base"
                    style={{ padding: "16px 24px" }}
                  >
                    {loading ? "Sending…" : "Request Trade Pack"}
                    {!loading && <ArrowRight size={16} />}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink-900 tracking-tight">
                    Trade pack on its way.
                  </h3>
                  <p className="mt-2 text-ink-500 max-w-md mx-auto">
                    Our team will be in touch within 24 hours. Check your inbox for our latest UK
                    volume sheet.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-500">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="mt-2 w-full bg-white border border-line rounded-xl px-4 py-3.5 text-ink-900 placeholder:text-ink-300 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-500">
        {label}
      </span>
      <select
        name={name}
        className="mt-2 w-full bg-white border border-line rounded-xl px-4 py-3.5 text-ink-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-500">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="mt-2 w-full bg-white border border-line rounded-xl px-4 py-3.5 text-ink-900 placeholder:text-ink-300 outline-none resize-none focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </label>
  );
}
