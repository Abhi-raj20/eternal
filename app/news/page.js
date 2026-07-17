import NewsGrid from "@/components/NewsGrid";
import Header from "@/components/Header";

export default function NewsPage() {
  return (
    <>
      <Header theme="black" />
      <main className="news-page">
        <NewsGrid />
      </main>
    </>
  );
}
