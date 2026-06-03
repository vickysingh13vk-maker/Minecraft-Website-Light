"use client";

import { ReactNode } from "react";

export function Field({
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
        className="mt-2 w-full bg-white border border-line px-4 py-3.5 text-ink-900 placeholder:text-ink-300 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </label>
  );
}

export function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-500">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full bg-white border border-line px-4 py-3.5 text-ink-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export function TextareaField({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-500">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </span>
      <textarea
        name={name}
        rows={4}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-white border border-line px-4 py-3.5 text-ink-900 placeholder:text-ink-300 outline-none resize-none focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </label>
  );
}

export function NumberField({
  label,
  name,
  placeholder,
  hint,
  required,
  min = 1,
}: {
  label: string;
  name: string;
  placeholder?: string;
  hint?: string;
  required?: boolean;
  min?: number;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-500">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </span>
      <input
        type="number"
        name={name}
        min={min}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-white border border-line px-4 py-3.5 text-ink-900 placeholder:text-ink-300 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
      {hint && <span className="mt-1.5 block text-[11px] text-ink-400">{hint}</span>}
    </label>
  );
}

export function Consent() {
  return (
    <div className="flex items-start gap-3 pt-2">
      <input
        type="checkbox"
        id="consent"
        name="consent"
        required
        className="mt-1 h-4 w-4 border border-ink-300 accent-primary"
      />
      <label htmlFor="consent" className="text-sm text-ink-500 leading-relaxed">
        I agree to be contacted by Demand Distribution regarding my enquiry, and accept the
        privacy policy.
      </label>
    </div>
  );
}

export function FieldGroup({ children }: { children: ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-5">{children}</div>;
}
