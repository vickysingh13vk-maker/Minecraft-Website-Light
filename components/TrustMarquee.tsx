"use client";

const logos = [
  "TESCO",
  "SAINSBURY'S",
  "WAITROSE",
  "OCADO",
  "SELFRIDGES",
  "HARRODS",
  "BOXPARK",
  "WHSMITH",
  "GAME UK",
  "FORTNUM & MASON",
];

export default function TrustMarquee() {
  return (
    <section
      aria-label="Trusted by"
      className="relative bg-white py-12 lg:py-14 overflow-hidden"
    >
      <div className="container-x mb-7 flex items-center justify-center gap-3">
        <span className="hr-line flex-1 max-w-[80px]" />
        <p className="text-[11px] uppercase tracking-[0.3em] text-ink-400 font-semibold">
          As Stocked Across UK Retail &amp; Hospitality
        </p>
        <span className="hr-line flex-1 max-w-[80px]" />
      </div>

      <div
        className="relative flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="flex animate-scroll-x">
          {[...logos, ...logos].map((l, i) => (
            <div
              key={i}
              className="mx-9 flex shrink-0 items-center gap-3 text-ink-400"
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-ink-300" />
              <span className="font-display text-lg md:text-xl font-bold tracking-[0.16em] whitespace-nowrap">
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
