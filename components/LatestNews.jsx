import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageWithLoader from "@/components/ImageWithLoader";
import { newsItems } from "@/data/content";

export default function LatestNews() {
  return (
    <section className="latest-news pt-80 pb-80 pad-h">
      <Reveal as="div" className="section-top">
        <h2>Latest News</h2>
        <Link className="button desktop-only" href="/news">
          More News
        </Link>
      </Reveal>

      <div className="news-grid">
        {newsItems.map((item, i) => (
          <Reveal as="div" key={item.slug} delay={i * 100}>
            <Link href={`/news/${item.slug}`} className="news-card">
              <div className="image">
                <ImageWithLoader
                  src={item.image}
                  alt={item.title}
                  fill
                  imgClassName="full-bleed-image"
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </div>
              <div className="details">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <div className="title">{item.title}</div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link className="button mobile-only" href="/news">
          More News
        </Link>
      </div>
    </section>
  );
}
