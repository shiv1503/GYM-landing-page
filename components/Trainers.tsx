import { trainers } from "@/lib/trainers";
import TrainerBlock from "@/components/TrainerBlock";

export default function Trainers() {
  return (
    <section id="trainers">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Meet The Team</div>
          <h2>Trainers Who Get Results</h2>
          <p>Certified, experienced, and genuinely invested in whether you hit your goal.</p>
        </div>

        <div className="flex flex-col gap-20">
          {trainers.map((t, i) => (
            <TrainerBlock key={t.slug} trainer={t} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
