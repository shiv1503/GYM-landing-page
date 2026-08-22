import Image from "next/image";
import type { Facility } from "@/lib/facilities";

export default function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <div className={`fac-card ${facility.featured ? "featured" : ""}`}>
      <div className="fac-bg">
        {facility.image && (
          // Drop a real photo in /public/facilities/<slug>.jpg and set
          // `image` in lib/facilities.ts to replace the placeholder pattern.
          <Image
            src={facility.image}
            alt={facility.title}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <span className="fac-glyph mono">{facility.tag}</span>
      <div className="fac-overlay">
        <h3>{facility.title}</h3>
        <p>{facility.description}</p>
      </div>
    </div>
  );
}
