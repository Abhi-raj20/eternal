"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { news, newsFilters } from "@/data/news";

export function NewsCard({ item }) {
  return (
    <Link className="news-thumb1" href={`/news/${item.slug}`}>
      <div className="image">
        <Image src={item.image} alt={item.title} fill sizes="25vw" />
        <div className="overlay" />
        <div className="read-link brygada-font uppercase">Read</div>
      </div>
      <div className="text">
        <div className="details">
          <div>{item.category[0].toUpperCase() + item.category.slice(1)}</div>
          <div className="dark-grey">{item.date}</div>
        </div>
        <div className="title dark-grey">{item.title}</div>
      </div>
    </Link>
  );
}

export default function NewsGrid({ limit } = {}) {
  const [activeFilter, setActiveFilter] = useState("*");

  const visible = useMemo(() => {
    const filtered = activeFilter === "*" ? news : news.filter((n) => n.category === activeFilter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [activeFilter, limit]);

  return (
    <>
      {!limit && (
        <div id="news-filters" className="filter-menu mb-40">
          {newsFilters.map((f) => (
            <div
              key={f.value}
              className={`filter-button${activeFilter === f.value ? " is-checked" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </div>
          ))}
        </div>
      )}

      <div className="news-grid1">
        {visible.map((item) => (
          <NewsCard key={item.slug} item={item} />
        ))}
      </div>
    </>
  );
}
