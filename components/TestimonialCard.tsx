import Image from "next/image";
import type { Testimonial } from "@/lib/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-bg border border-border rounded-xl overflow-hidden">
      <div className="testi-photos">
        <div className="before relative">
          {testimonial.beforePhoto && (
            <Image src={testimonial.beforePhoto} alt="Before" fill style={{ objectFit: "cover" }} />
          )}
        </div>
        <div className="after relative">
          {testimonial.afterPhoto && (
            <Image src={testimonial.afterPhoto} alt="After" fill style={{ objectFit: "cover" }} />
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="text-lime text-sm mb-2.5 tracking-[2px]">★★★★★</div>
        <p className="text-sm text-muted mb-3.5">&quot;{testimonial.quote}&quot;</p>
        <div className="font-bold text-sm">{testimonial.name}</div>
        <div className="text-xs text-muted">{testimonial.meta}</div>
      </div>
    </div>
  );
}
