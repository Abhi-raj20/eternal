import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { divisions } from "@/data/divisions";
import { projects } from "@/data/projects";
import DivisionSections from "@/components/DivisionSections";

export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export default function DivisionDetailPage({ params }) {
  const division = divisions.find((d) => d.slug === params.slug);
  if (!division) return notFound();

  const relatedProjects = projects.filter((p) => p.category === division.slug).slice(0, 8);
  const otherDivisions = divisions.filter((d) => d.slug !== division.slug);

  return (
    <main className="single-divisions">
      <div className="hero">
        <Image src={division.heroImage} alt={division.title} fill style={{ objectFit: "cover" }} />
        <div className="tint-overlay" style={{ backgroundColor: "#3F3F3F" }} />
        <h1 className="hero-text" style={{ color: "#FFFFFF" }}>
          {division.title}
        </h1>
      </div>

      <div className="block-1 pad-h pv-80">
        <div className="left">
          <h4>{division.kicker}</h4>
          <div>
            <h3>{division.heading}</h3>
            <p>&nbsp;</p>
            {division.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <DivisionSections sections={division.sections} />
        </div>

        <div className="right" style={{ position: "relative", aspectRatio: "899/1080" }}>
          <Image src={division.heroImage} alt="" fill style={{ objectFit: "cover" }} />
        </div>
      </div>

      {relatedProjects.length > 0 && (
        <div className="related-projects pv-80">
          <div className="top pad-h mb-80">
            <h2>Related Projects</h2>
            <Link className="button" href="/projects">
              More Projects
            </Link>
          </div>

          <div className="divisions-grid pad-h">
            {relatedProjects.map((p, i) => {
              const content = (
                <>
                  <div className="image" style={{ position: "relative" }}>
                    <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
                    <div className="overlay" style={{ backgroundColor: division.overlay }} />
                  </div>
                  <div className="details">
                    <div>{p.title}</div>
                    <div className="dark-grey">{division.title}</div>
                  </div>
                </>
              );
              return p.hasDetail && p.slug ? (
                <Link className="projects-thumb" href={`/projects/${p.slug}`} key={p.slug}>
                  {content}
                </Link>
              ) : (
                <div className="projects-thumb" key={`${p.title}-${i}`}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-80 mb-80">
        <div className="divisions-grid pad-h">
          {otherDivisions.map((d) => (
            <Link className="divisions-thumb" key={d.slug} href={`/divisions/${d.slug}`}>
              <div className="image" style={{ position: "relative" }}>
                <Image src={d.thumbImage} alt={d.title} fill style={{ objectFit: "cover" }} />
                <div className="overlay" style={{ backgroundColor: d.overlay }} />
                <div className="title brygada-font">{d.title}</div>
              </div>
              <div className="details">
                <div>{d.title}</div>
                <div className="dark-grey">View</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
