import { testimonials, videoTestimonial, testimonialDisclosure } from "@/lib/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-panel border-t border-b border-border">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Real Results</div>
          <h2>Stories From Our Members</h2>
          <p>Transformation photos shared with member permission — nothing here without their sign-off.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        <div className="mt-10 bg-bg border border-border rounded-xl p-10 flex items-center gap-6 flex-wrap">
          <div className="video-thumb">
            <span className="play-btn">▶</span>
          </div>
          <div>
            <h4 className="text-xl uppercase mb-2">{videoTestimonial.title}</h4>
            <p className="text-muted text-sm max-w-[52ch] m-0">
              {videoTestimonial.description}
              {!videoTestimonial.embedUrl && " (Video embed placeholder — add a YouTube/Vimeo URL in lib/testimonials.ts.)"}
            </p>
          </div>
        </div>

        <p className="text-[11px] text-muted opacity-70 mt-16 text-center">{testimonialDisclosure}</p>
      </div>
    </section>
  );
}
