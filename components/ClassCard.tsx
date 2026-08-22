import type { GymClass } from "@/lib/classes";

export default function ClassCard({ gymClass }: { gymClass: GymClass }) {
  return (
    <div className="class-card">
      <div className="mono text-[10.5px] text-blue uppercase tracking-widest mb-2.5">{gymClass.day}</div>
      <h4 className="text-[19px] mb-1.5 uppercase">{gymClass.name}</h4>
      <div className="text-muted text-[13.5px] mb-1">{gymClass.time}</div>
      <div className="text-muted text-[13px] mb-3.5">with {gymClass.instructor}</div>
      <span className={`spots ${gymClass.level}`}>{gymClass.spots}</span>
    </div>
  );
}
