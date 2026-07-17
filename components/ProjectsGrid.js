"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { filters, projects } from "@/data/projects";

function ProjectCard({ project }) {
  const content = (
    <>
      <div className="image">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        <div className="overlay" style={{ backgroundColor: project.overlay }} />
        <div className="short-description">{project.description}</div>
      </div>
      <div className="details">
        <div>{project.title}</div>
        <div className="dark-grey">
          {project.category
            .split("-")
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ")}
        </div>
      </div>
    </>
  );

  if (project.hasDetail && project.slug) {
    return (
      <Link className="projects-thumb" href={`/projects/${project.slug}`}>
        {content}
      </Link>
    );
  }

  return <div className="projects-thumb">{content}</div>;
}

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("*");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "*") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className="filter-menu">
        {filters.map((f) => (
          <div
            key={f.value}
            className={`filter-button${activeFilter === f.value ? " is-checked" : ""}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </div>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={project.slug ?? `${project.title}-${i}`} project={project} />
        ))}
      </div>
    </>
  );
}
