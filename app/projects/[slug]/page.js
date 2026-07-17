import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projectsdetails";
import ProjectHero from "@/components/ProjectHero";
import ProjectGallerySlider from "@/components/ProjectGallerySlider";
import RelatedProjects from "@/components/RelatedProjects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="project-detail">
      <ProjectHero
        title={project.title}
        location={project.location}
        desktopImage={project.heroImageDesktop}
        mobileImage={project.heroImageMobile}
      />

      {/* Intro */}
      <section className="pd-intro">
        <div className="pd-intro__left">
          <h2 className="pd-intro__tagline">{project.tagline}</h2>

          <div className="pd-intro__meta-grid">
            <div className="pd-intro__meta-col">
              <div className="pd-intro__meta-block">
                <h4>Division</h4>
                <div>{project.division}</div>
              </div>

              <div className="pd-intro__meta-block">
                <h4>Details</h4>
                <div>
                  Duration: {project.details.duration}
                  <br />
                  Size: {project.details.size}
                </div>
              </div>

              <div className="pd-intro__meta-block">
                <h4>Project Team</h4>
                <div>
                  {project.team.map((t, i) => (
                    <span key={i}>
                      {t.label}: {t.value}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pd-intro__meta-col">
              <h4>Scope</h4>
              <ul className="pd-intro__scope">
                {project.scope.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pd-intro__description">
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {project.testimonial && (
            <div className="pd-testimonial">
              <h4>Testimonials</h4>
              <blockquote className="pd-testimonial__quote">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <p className="pd-testimonial__author">{project.testimonial.author}</p>
            </div>
          )}
        </div>

        <div className="pd-intro__right">
          {project.sideImages?.map((src, i) => (
            <div className="pd-intro__side-image" key={i}>
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="pd-intro__side-image-img"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Gallery slider */}
      {project.galleryImages?.length > 0 && (
        <section className="pd-gallery">
          <ProjectGallerySlider images={project.galleryImages} />
        </section>
      )}

      {/* Related projects */}
      <RelatedProjects items={project.related} />
    </div>
  );
}