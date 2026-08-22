import type { Plan } from "@/lib/plans";

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`plan-card ${plan.popular ? "popular" : ""}`}>
      {plan.popular && <span className="plan-badge">Most Popular</span>}
      <div className={`mono text-xs uppercase tracking-widest mb-3.5 ${plan.popular ? "text-lime" : "text-muted"}`}>
        {plan.name}
      </div>
      <div className="plan-price">
        <span className="text-[22px] text-muted">₹</span>
        {plan.price}
        <span className="text-sm text-muted font-medium">/month</span>
      </div>
      <ul className="plan-features">
        {plan.features.map((f) => (
          <li key={f}>
            <span className="text-lime font-bold flex-shrink-0">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <a href="#lead" className={`btn ${plan.popular ? "btn-primary" : "btn-outline"} justify-center`}>
        Get Started
      </a>
    </div>
  );
}
