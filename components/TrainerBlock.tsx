import Image from "next/image";
import type { Trainer } from "@/lib/trainers";

export default function TrainerBlock({ trainer, reverse }: { trainer: Trainer; reverse?: boolean }) {
  return (
    <div className={`trainer-block ${reverse ? "reverse" : ""}`}>
      <div className="trainer-photo">
        {trainer.photo ? (
          // Drop a real photo in /public/trainers/<slug>.jpg and set
          // `photo` in lib/trainers.ts to replace the placeholder.
          <Image src={trainer.photo} alt={trainer.name} fill sizes="340px" style={{ objectFit: "cover" }} />
        ) : (
          <span className="absolute bottom-4 left-4 display text-[38px] text-ink/10">{trainer.initials}</span>
        )}
      </div>
      <div>
        <div className="mono text-xs text-blue uppercase tracking-widest mb-3">{trainer.specialty}</div>
        <h3 className="text-[34px] mb-2.5 uppercase">{trainer.name}</h3>
        <div className="flex gap-2 flex-wrap mb-4.5">
          {trainer.certs.map((c) => (
            <span key={c} className="cert-tag mono">
              {c}
            </span>
          ))}
        </div>
        <p className="text-muted text-[15px] max-w-[52ch] mb-6">{trainer.bio}</p>
        <a href="#lead" className="btn btn-blue">
          Book Session
        </a>
      </div>
    </div>
  );
}
