"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Mail, Sparkles } from "lucide-react";
import {
  QuoteHeader,
  QuoteHero,
  QuoteFooter,
  FormCard,
  Success,
} from "@/components/form/QuoteShell";
import {
  Field,
  SelectField,
  TextareaField,
  FieldGroup,
  Consent,
} from "@/components/form/Fields";

const enquiryTypes = [
  "Where can I buy Minecraft Drinks?",
  "Product information",
  "Become a stockist (small business)",
  "Marketing / collaboration",
  "Something else",
];

export default function B2CQuotePage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    payload.audience = "b2c";
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* DB wiring later — UI success regardless */
    }
    setLoading(false);
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-white text-ink-900">
      <QuoteHeader />
      <QuoteHero
        eyebrow="Consumer · Enquiry"
        title="Get in touch about"
        highlight="Minecraft Drinks."
        subtitle="Looking for where to buy, want product info, or got a question? Send us a message and our team will get back to you."
        tabs={[
          { href: "/quote/b2b", label: "Business / Trade", active: false },
          { href: "/quote/b2c", label: "Consumer Enquiry", active: true },
        ]}
      />

      <section className="container-x py-14 lg:py-20">
        {!sent ? (
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: info */}
            <div className="lg:col-span-5">
              <div className="eyebrow mb-5">Send us a message</div>
              <h2 className="heading-display text-ink-900 text-[28px] lg:text-[36px] leading-[1.05]">
                One of the world&apos;s biggest games. <span className="text-primary">Now a drink.</span>
              </h2>
              <p className="mt-4 text-ink-500 leading-relaxed">
                Minecraft Drinks are rolling out across the UK. Tell us what you&apos;re after and
                we&apos;ll point you in the right direction.
              </p>

              <div className="mt-8 space-y-px bg-line border border-line overflow-hidden">
                {[
                  { icon: MapPin, label: "Find a stockist", val: "Tell us your postcode below" },
                  { icon: Mail, label: "General enquiries", val: "hello@demanddistro.co.uk" },
                  { icon: Sparkles, label: "Trade buyer?", val: "Switch to the B2B form above" },
                ].map((r) => {
                  const Icon = r.icon;
                  return (
                    <div key={r.label} className="flex items-center gap-4 bg-white p-5">
                      <span className="grid h-11 w-11 place-items-center bg-primary/10 text-primary">
                        <Icon size={18} strokeWidth={2.2} />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-400">
                          {r.label}
                        </div>
                        <div className="mt-0.5 text-ink-900 font-medium text-sm">{r.val}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">Your details</div>
              <FormCard>
                <form onSubmit={onSubmit} className="space-y-5">
                  <FieldGroup>
                    <Field label="Full name" name="name" placeholder="Alex Player" required />
                    <Field label="Email" name="email" type="email" placeholder="alex@email.com" required />
                  </FieldGroup>
                  <FieldGroup>
                    <Field label="Phone (optional)" name="phone" placeholder="+44 7700 000000" />
                    <Field label="Postcode" name="postcode" placeholder="E14 5AB" />
                  </FieldGroup>
                  <SelectField
                    label="What's your enquiry about?"
                    name="enquiryType"
                    required
                    options={enquiryTypes}
                  />
                  <TextareaField
                    label="Message"
                    name="message"
                    placeholder="How can we help?"
                    required
                  />
                  <Consent />

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-mc w-full text-base"
                    style={{ padding: "16px 24px" }}
                  >
                    {loading ? "Sending…" : "Send Enquiry"}
                    {!loading && <ArrowRight size={16} />}
                  </button>
                </form>
              </FormCard>
            </div>
          </div>
        ) : (
          <Success
            title="Message sent."
            message="Thanks for reaching out — we'll get back to you as soon as we can."
          />
        )}
      </section>

      <QuoteFooter />
    </main>
  );
}
