import Image from "next/image";
import Link from "next/link";
import DivisionsBlock from "@/components/DivisionsBlock";
import { divisions, divisionsIndexIntro } from "@/data/divisions";

const IMG = "https://knowles.uk.com/wp-content/uploads";

export default function DivisionsPage() {
  return (
    <main className="divisions">
      <div className="hero">
        <Image src={`${IMG}/2024/10/Divisions-e1727869777541.jpg`} alt="" fill style={{ objectFit: "cover" }} />
        <div className="tint-overlay" style={{ backgroundColor: "#3F3F3F" }} />
        <h1 className="hero-text" style={{ color: "#FFFFFF" }}>
          Super Prime Construction
        </h1>
      </div>

      <div className="block-1 pad-h pv-80">
        <div className="top">
          <h2>Our Divisions</h2>
          <div className="brygada-font">
            <h3>{divisionsIndexIntro.heading}</h3>
            {divisionsIndexIntro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <DivisionsBlock />
      </div>

      <div className="block-2 pad-h pv-80">
        <div className="top">
          <div>
            <h4>An Approach Like No Other</h4>
            <div>
              <p>
                Where other contractors might shy away from a project, Knowles steps forward and
                thrives. And as a result, we have become the trusted go-to partner for architects,
                quantity surveyors, professional teams and private clients alike.
              </p>
              <p>
                Our commitment to in-house management on every project guarantees a consistent
                approach and the best experience for our clients; from the management of
                structural design, to the coordination and management of all consultant and
                subcontractor design packages. As Principal Contractor, Knowles provides a
                comprehensive construction service to clients and professional teams, taking a
                project from concept to completion.
              </p>
              <p>
                We retain a greater control over on-site operations without the need to rely on
                others, which also provides an optimum programme duration by overlapping
                construction phases where possible. And our maintenance aftercare provision is the
                final touch to our world-renowned service.
              </p>
              <p>
                It is our aim to exceed expectations at every point, regardless of the complexity
                of the project. This excellence is the foundation upon which Knowles is built.
              </p>
            </div>
          </div>
          <Link className="button" href="/about#team">
            Meet the Team
          </Link>
        </div>

        <div style={{ position: "relative", aspectRatio: "973/648" }}>
          <Image src={`${IMG}/2024/10/KNTY-08902-e1727869994984.jpg`} alt="" fill style={{ objectFit: "cover" }} />
        </div>
      </div>
    </main>
  );
}
