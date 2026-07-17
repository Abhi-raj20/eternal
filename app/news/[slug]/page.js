import { notFound } from "next/navigation";
import Image from "next/image";
import { news } from "@/data/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export default function NewsDetailPage({ params }) {
  const item = news.find((n) => n.slug === params.slug);
  if (!item) return notFound();

  return (
    <main className="news-post pad-h pv-80">
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", marginBottom: "2rem" }}>
        <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="date">{item.date}</div>
      <h1>{item.title}</h1>
      <p className="dark-grey">{item.category[0].toUpperCase() + item.category.slice(1)}</p>
    </main>
  );
}
