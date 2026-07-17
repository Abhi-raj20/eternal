import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageWithLoader from "@/components/ImageWithLoader";
import { newsItems } from "@/data/content";

export default function LatestNews() {
  return (
    <section className="latest-news pt-80 pad-h">
      <Reveal as="div" className="top pb-80 ourservice">
        <h2>Latest News</h2>
        <Link className="button desktop-only" href="/news">
          More News
        </Link>
      </Reveal>

      <div className="news-grid">
        {newsItems.map((item) => (
          <Reveal as="div" key={item.slug}>
            <Link href={`/news/${item.slug}`} className="news-card news-thumb">
              <div className="image">
                <ImageWithLoader
                  src={item.image}
                  alt={item.title}
                  fill
                  imgClassName="full-bleed-image"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="overlay" />
                <div className="read-link brygada-font uppercase">Read</div>
              </div>
              <div className="details">
                <div>{item.category}</div>
                <div className="dark-grey">{item.date}</div>
              </div>
              <div className="title dark-grey">{item.title}</div>
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
