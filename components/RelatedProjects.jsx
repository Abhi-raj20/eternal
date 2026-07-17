import Link from "next/link";
import Image from "next/image";

export default function RelatedProjects({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="pd-related">
      <h2 className="pd-related__heading">Related</h2>

      <div className="pd-related__grid">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/projects/${item.slug}`}
            className="pd-related__card"
          >
            <div className="pd-related__image-wrap">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="pd-related__image"
              />
              <div className="pd-related__overlay" />
              <span className="pd-related__read">Read</span>
            </div>

            <div className="pd-related__details">
              <div className="pd-related__top">
                <span>{item.title}</span>
                <span className="pd-related__date">{item.date}</span>
              </div>
              <div className="pd-related__status">{item.status}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}