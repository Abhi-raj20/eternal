"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { team, teamFilters } from "@/data/team";

export default function TeamGrid() {
  const [activeFilter, setActiveFilter] = useState("*");

  const visible = useMemo(() => {
    if (activeFilter === "*") return team;
    return team.filter((m) => m.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <div className="filter-menu">
        {teamFilters.map((f) => (
          <div
            key={f.value}
            className={`filter-button${activeFilter === f.value ? " is-checked" : ""}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </div>
        ))}
      </div>

      <div className="team-grid">
        {visible.map((member) => (
          <div className="team-thumb" key={member.name}>
            <div className="image">
              <Image src={member.image} alt={member.name} fill sizes="25vw" />
            </div>
            <div className="details">
              <div className="left">
                <div>{member.name}</div>
                <div>{member.role}</div>
              </div>
              {(member.email || member.linkedin) && (
                <div className="right">
                  {member.email && <a href={`mailto:${member.email}`} target="_blank" rel="noreferrer">Email</a>}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
