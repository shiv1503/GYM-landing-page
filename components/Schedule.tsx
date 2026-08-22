"use client";

import { useState } from "react";
import { classes, classFilters, type ClassType } from "@/lib/classes";
import ClassCard from "@/components/ClassCard";

export default function Schedule() {
  const [filter, setFilter] = useState<ClassType | "all">("all");
  const visible = classes.filter((c) => filter === "all" || c.type === filter);

  return (
    <section id="schedule">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Weekly Schedule</div>
          <h2>Find Your Class</h2>
          <p>Filter by type, check who&apos;s teaching, and see how many spots are left before you show up.</p>
        </div>

        <div className="flex gap-2.5 flex-wrap mb-9" role="group" aria-label="Filter classes by type">
          {classFilters.map((f) => (
            <button
              key={f.value}
              className={`filter-pill mono ${filter === f.value ? "active" : ""}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
          {visible.map((c, i) => (
            <ClassCard key={`${c.day}-${c.name}-${i}`} gymClass={c} />
          ))}
        </div>

        <div className="text-center mt-9">
          <a href="#" className="text-lime no-underline font-bold text-sm uppercase tracking-wide">
            View Full Schedule →
          </a>
        </div>
      </div>
    </section>
  );
}
