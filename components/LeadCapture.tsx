"use client";

import { locationOptions } from "@/lib/location";

export default function LeadCapture() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to Formspree, EmailJS, or your CRM
    // (e.g. app/api/lead/route.ts) to actually receive trial sign-ups.
    alert("Demo form — connect this to Formspree, EmailJS, or your CRM to actually receive trial sign-ups.");
  }

  return (
    <section id="lead">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="eyebrow">Try Before You Commit</div>
          <h2 className="text-[clamp(36px,4.6vw,52px)] mb-4 uppercase">Get Your Free Trial Pass</h2>
          <p className="text-muted max-w-[44ch] mb-5">
            Three full days of access — every class, every piece of equipment, zero obligation. See if it&apos;s the
            right fit before you decide.
          </p>
          <div className="no-cc">
            <span className="w-[18px] h-[18px] rounded-full bg-lime/15 flex items-center justify-center text-[11px]">✓</span>
            No credit card required
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-panel border border-border rounded-xl p-7.5 flex flex-col gap-4">
          <div className="field flex flex-col gap-1.5">
            <label htmlFor="ld-name" className="mono text-[11px] text-muted uppercase tracking-wide">
              Full Name
            </label>
            <input id="ld-name" name="name" type="text" required autoComplete="name" />
          </div>
          <div className="field flex flex-col gap-1.5">
            <label htmlFor="ld-email" className="mono text-[11px] text-muted uppercase tracking-wide">
              Email
            </label>
            <input id="ld-email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="field flex flex-col gap-1.5">
            <label htmlFor="ld-phone" className="mono text-[11px] text-muted uppercase tracking-wide">
              Phone
            </label>
            <input id="ld-phone" name="phone" type="tel" required autoComplete="tel" />
          </div>
          <div className="field flex flex-col gap-1.5">
            <label htmlFor="ld-loc" className="mono text-[11px] text-muted uppercase tracking-wide">
              Preferred Location
            </label>
            <select id="ld-loc" name="location" required defaultValue="">
              <option value="" disabled>
                Select a location
              </option>
              {locationOptions.map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary justify-center">
            Claim My Free Trial Pass
          </button>
          <p className="text-[11.5px] text-muted text-center">
            This form is a UI template — wire it to Formspree, EmailJS, or your CRM to actually receive
            submissions.
          </p>
        </form>
      </div>
    </section>
  );
}
