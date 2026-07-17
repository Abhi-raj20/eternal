import ProjectsGrid from "@/components/ProjectsGrid";
import Header from "@/components/Header";

export default function ProjectsPage() {
  return (
    <>
      <Header theme="black" />
      <main className="projects-page">
        <ProjectsGrid />
      </main>
    </>
  );
}
