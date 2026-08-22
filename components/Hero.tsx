import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="wrap relative z-[2] max-w-[760px]">
        <div className="eyebrow">Premium Fitness Experience</div>
        <h1 className="text-[clamp(52px,8.4vw,104px)] mb-6 uppercase">
          Transform Your Body.
          <br />
          <span className="line2">Transform Your Life.</span>
        </h1>
        <p className="text-[clamp(17px,2vw,20px)] text-muted max-w-[52ch] mb-10 font-medium">
          {siteConfig.subheadline}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#lead" className="btn btn-primary">
            Start Your Free 3-Day Trial
          </a>
          <a href="#membership" className="btn btn-outline">
            View Membership Plans
          </a>
        </div>
      </div>

      <div className="access-card" aria-hidden="true">
        <div className="flex justify-between items-start mt-[26px] mb-[22px]">
          <span className="mono text-[10px] tracking-widest text-muted uppercase">Member Access</span>
          <span className="mono text-[10px] text-lime flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-lime shadow-[0_0_8px_var(--lime)]" />
            Active
          </span>
        </div>
        <h4 className="display text-[26px] mb-1">{siteConfig.name}</h4>
        <div className="text-muted text-xs mb-4">All-Access · 24/7 Entry</div>
        <div className="h-px bg-border mb-3.5" />
        <div className="flex justify-between mono text-[10.5px] text-muted">
          <span>ID 04471</span>
          <span>EXP —/—</span>
        </div>
      </div>
    </section>
  );
}
