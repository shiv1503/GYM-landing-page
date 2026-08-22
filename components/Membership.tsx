import { plans } from "@/lib/plans";
import PlanCard from "@/components/PlanCard";

export default function Membership() {
  return (
    <section id="membership" className="bg-panel border-t border-b border-border">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Choose Your Path</div>
          <h2>Membership Plans For Every Goal</h2>
          <p>No long-term contracts hiding in the fine print. Upgrade or cancel anytime.</p>
        </div>

        <div className="plans-grid">
          {plans.map((p) => (
            <PlanCard key={p.slug} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
