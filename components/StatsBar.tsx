"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function CountUpStat({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted.current) {
            counted.current = true;
            const duration = 1400;
            const start = performance.now();
            function tick(now: number) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      <span className="text-blue">{suffix}</span>
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="stats-bar wrap">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="bg-panel py-8 px-6 text-center">
            <div className="display text-[52px] text-lime leading-none">
              {s.target !== null ? <CountUpStat target={s.target} suffix={s.suffix ?? ""} /> : s.display}
            </div>
            <div className="text-xs text-muted uppercase tracking-wide mt-2 font-semibold">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
