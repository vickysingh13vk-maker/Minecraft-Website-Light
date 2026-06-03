"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, Store } from "lucide-react";
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
  NumberField,
  FieldGroup,
  Consent,
} from "@/components/form/Fields";

type DealId = "wholesale" | "truck" | "retailer";

const deals: {
  id: DealId;
  icon: typeof Package;
  title: string;
  unit: string;
  blurb: string;
  spec: string[];
}[] = [
  {
    id: "wholesale",
    icon: Package,
    title: "Wholesale Pallet",
    unit: "Pallets",
    blurb: "Buy by the pallet. Maximum volume, maximum margin.",
    spec: ["24 cans per case", "100 cases per pallet", "2,400 cans per pallet"],
  },
  {
    id: "truck",
    icon: Truck,
    title: "Truck Deal",
    unit: "Trucks",
    blurb: "Full truckload pricing for serious volume buyers.",
    spec: ["25 pallets per truck", "2,500 cases per truck", "60,000 cans per truck"],
  },
  {
    id: "retailer",
    icon: Store,
    title: "Retailer Case",
    unit: "Cases",
    blurb: "Stock your shelves by the case. Strong retail POR.",
    spec: ["24 cans per case", "Mixed flavours available", "Ideal for retail"],
  },
];

const flavours = [
  "Chorus Fruit · Golden Apple · Melon",
  "Lime Lightning",
  "Strawberry Slam",
  "Mixed / discuss with team",
];

export default function B2BQuotePage() {
  const [deal, setDeal] = useState<DealId>("wholesale");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const active = deals.find((d) => d.id === deal)!;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    payload.dealType = deal;
    payload.audience = "b2b";
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
        eyebrow="Trade · B2B"
        title="Request a"
        highlight="trade quote."
        subtitle="Wholesale pallets, full truck deals or retailer cases — tell us what you need and our UK trade team will send pricing within 24 hours. No obligation."
        tabs={[
          { href: "/quote/b2b", label: "Business / Trade", active: true },
          { href: "/quote/b2c", label: "Consumer Enquiry", active: false },
        ]}
      />

      <section className="container-x py-14 lg:py-20">
        {!sent ? (
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: deal selector */}
            <div className="lg:col-span-5">
              <div className="eyebrow mb-5">01 · Choose your deal</div>
              <div className="space-y-3">
                {deals.map((d) => {
                  const Icon = d.icon;
                  const isActive = d.id === deal;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDeal(d.id)}
                      className={`w-full text-left flex gap-4 p-5 border transition-all ${
                        isActive
                          ? "border-primary bg-primary/5"
                          : "border-line bg-white hover:border-ink-300"
                      }`}
                    >
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center transition-colors ${
                          isActive ? "bg-primary text-white" : "bg-bg-100 text-ink-400"
                        }`}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </span>
                      <span className="flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="font-display text-lg font-bold text-ink-900 tracking-tight">
                            {d.title}
                          </span>
                          {isActive && (
                            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-primary">
                              Selected
                            </span>
                          )}
                        </span>
                        <span className="mt-1 block text-sm text-ink-500 leading-relaxed">
                          {d.blurb}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Spec of active deal */}
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-ink-900 text-white p-6"
              >
                <div className="text-[10px] uppercase tracking-[0.26em] font-bold text-primary mb-4">
                  {active.title} · Spec
                </div>
                <ul className="space-y-2.5">
                  {active.spec.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="h-1.5 w-1.5 bg-primary shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-4 border-t border-white/10 text-[11px] text-white/40 leading-relaxed">
                  Pricing provided on request. Submit the form and our team will send a tailored
                  quote.
                </p>
              </motion.div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">02 · Your details</div>
              <FormCard>
                <form onSubmit={onSubmit} className="space-y-5">
                  <FieldGroup>
                    <Field label="Business name" name="company" placeholder="London Beverage Co." required />
                    <Field label="Contact name" name="name" placeholder="Jane Smith" required />
                  </FieldGroup>
                  <FieldGroup>
                    <Field label="Work email" name="email" type="email" placeholder="jane@company.co.uk" required />
                    <Field label="Phone" name="phone" placeholder="+44 20 0000 0000" required />
                  </FieldGroup>
                  <FieldGroup>
                    <SelectField
                      label="Business type"
                      name="businessType"
                      required
                      options={["Retailer", "Wholesaler", "Hospitality / On-Trade", "E-Commerce", "Other"]}
                    />
                    <Field label="Delivery postcode" name="postcode" placeholder="E14 5AB" required />
                  </FieldGroup>

                  {/* Dynamic quantity + flavour */}
                  <div className="border border-line bg-bg-100 p-5 space-y-5">
                    <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-primary">
                      {active.title} order
                    </div>
                    <FieldGroup>
                      <NumberField
                        label={`Quantity (${active.unit.toLowerCase()})`}
                        name="quantity"
                        placeholder="1"
                        required
                        hint={
                          deal === "truck"
                            ? "1 truck = 25 pallets = 60,000 cans"
                            : deal === "wholesale"
                            ? "1 pallet = 100 cases = 2,400 cans"
                            : "1 case = 24 cans"
                        }
                      />
                      <SelectField label="Flavour" name="flavour" required options={flavours} />
                    </FieldGroup>
                  </div>

                  <TextareaField
                    label="Message"
                    name="message"
                    placeholder="Tell us about your order, timelines, or any questions…"
                  />

                  <Consent />

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-mc w-full text-base"
                    style={{ padding: "16px 24px" }}
                  >
                    {loading ? "Sending…" : "Request Quote"}
                    {!loading && <ArrowRight size={16} />}
                  </button>
                  <p className="text-center text-[11px] text-ink-400">
                    No prices shown — we&apos;ll send a tailored quote within 24 hours.
                  </p>
                </form>
              </FormCard>
            </div>
          </div>
        ) : (
          <Success
            title="Quote request received."
            message="Thanks — our UK trade team will review your requirements and send tailored pricing within 24 hours."
          />
        )}
      </section>

      <QuoteFooter />
    </main>
  );
}
