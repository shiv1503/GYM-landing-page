import { facilities } from "@/lib/facilities";
import FacilityCard from "@/components/FacilityCard";

export default function Facilities() {
  return (
    <section id="facilities" className="pt-[150px]">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Built For Results</div>
          <h2>Every Corner, Engineered To Work</h2>
          <p>Take a look around before you commit — or better yet, book a walk-through and see it in person.</p>
        </div>

        <div className="fac-grid">
          {facilities.map((f) => (
            <FacilityCard key={f.slug} facility={f} />
          ))}
        </div>

        <div className="text-center mt-11">
          <a href="#" className="btn btn-outline">
            Take The Virtual Tour →
          </a>
        </div>
      </div>
    </section>
  );
}
