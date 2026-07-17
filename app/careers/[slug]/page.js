import { notFound } from "next/navigation";
import { openRoles } from "@/data/careers";

export function generateStaticParams() {
  return openRoles.map((r) => ({ slug: r.slug }));
}

export default function CareerRolePage({ params }) {
  const role = openRoles.find((r) => r.slug === params.slug);
  if (!role) return notFound();

  return (
    <main className="single-career pad-h pv-80">
      <div className="left">
        <h1>{role.title}</h1>
        <p>
          To apply for this role, please email your CV and a short covering note to{" "}
          <a href="mailto:careers@knowles.uk.com">careers@knowles.uk.com</a>.
        </p>
      </div>
    </main>
  );
}
