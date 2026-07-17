"use client";
import Image from "next/image";
import DivisionsBlock from "@/components/DivisionsBlock";
import TeamGrid from "@/components/TeamGrid";

const IMG = "https://knowles.uk.com/wp-content/uploads";

const partners = [
  { name: "MWA", logo: `${IMG}/2025/01/MWA_PrimaryLogo.png` },
  { name: "Corrigan Gore", logo: `${IMG}/2025/01/CorriganGore-Grey-logo.png` },
  { name: "TEI", logo: `${IMG}/2025/01/TEI-high-res-logo.png` },
  { name: "KSR", logo: `${IMG}/2025/01/2020-KSR-White-Logo-Vector-File.png` },
  { name: "KH", logo: `${IMG}/2025/01/KH-Logo.png` },
  { name: "GT", logo: `${IMG}/2025/01/GT_LOGO_PROCESS_Coated.png` },
  { name: "SHH", logo: `${IMG}/2025/01/SHH_Logo_Full_RecordStore.png` },
  { name: "Taylor Howes", logo: `${IMG}/2025/01/Taylor-Howes.png` },
  { name: "Regency Grove", logo: `${IMG}/2025/01/Regency-Grove.png` },
  { name: "Rossco", logo: `${IMG}/2024/05/Rossco-BW.png` },
  { name: "Darke and Taylor", logo: `${IMG}/2024/05/logo-darke-and-taylor-BW.png` },
  { name: "Partner", logo: `${IMG}/2024/05/Group-470.png` },
  { name: "Partner", logo: `${IMG}/2024/05/AJRzXI8C_400x400-BW.png` },
];


  const scrollToNext = () => {
    // Original: ".arrow-scroll" element ke offset tak scroll
    const target = document.querySelector(".arrow-scroll");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  function DownArrow() {
  return (
    <svg viewBox="0 0 21.4 26.4" xmlns="http://www.w3.org/2000/svg">
      <line
        className="st0"
        x1="10.7"
        y1="0"
        x2="10.7"
        y2="25"
      />
      <path className="st0" d="M20.7,15l-10,10l-10-10" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="about charcoal-bg">
      <div className="hero">
        <Image
          src={`${IMG}/2025/01/KN_windsor-02518-2-scaled-e1738143611979.jpg`}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="tint-overlay" style={{ backgroundColor: "#3F3F3F" }} />
        <h1 className="hero-text" style={{ color: "#FFFFFF" }}>
          Built on Solid Foundations
        </h1>
         <button
          className="down-arrow"
          onClick={scrollToNext}
          aria-label="Scroll down"
        >
          <DownArrow />
        </button>
      </div>

      <div className="block-1 pad-h pv-80">
        <div>
          <div className="text brygada-font mb-160">
            <p>
              Knowles is a family-run construction business, founded by Robin Knowles over 15
              years ago. Our headquarters in Marylebone, London, coordinates our 250 strong
              workforce, across London and the Home Counties, with all members of the Knowles
              team sharing our commitment to delivering a service for our clients that is like no
              other.
            </p>
            <p>
              Our focus on retaining in-house excellence is what sets us apart. Our ethos allows
              us to be dynamic, agile and self-sufficient, by keeping trades in house, which gives
              us the ability to deliver and manage work directly; a service unique in this
              industry.
            </p>
          </div>
          <a className="button dark" href="#team">
            Meet the Team
          </a>
        </div>

        <div style={{ position: "relative", aspectRatio: "1600/1050" }}>
          <Image src={`${IMG}/2026/05/Warwick-Full-Room.jpg.webp`} alt="" fill style={{ objectFit: "cover" }} />
        </div>
      </div>

      <div className="divisions-block pb-80">
        <div className="top pad-h mb-80 ourservice">
          <h2>Our Divisions</h2>
          <a className="button dark" href="/divisions">
            Discover More
          </a>
        </div>
        <DivisionsBlock />
      </div>

      <div className="block-2 pad-h pv-80">
        <div className="top">
          <div className="left" style={{ position: "relative", aspectRatio: "973/649" }}>
            <Image src={`${IMG}/2024/10/Careers-3.jpg.webp`} alt="" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="right">
            <h4>Our Experience</h4>
            <div className="text">
              <p>
                As Principal Contractor, Knowles provides an all-encompassing construction
                service to clients and professional teams, taking a project from concept to
                completion and beyond. We thrive on the schemes that other contractors shy away
                from. Our commitment to in-house management on every project guarantees a
                consistent approach and the best experience for our clients.
              </p>
              <p>
                The established reputation of our management and in-house teams has made Knowles
                a trusted partner for architects, quantity surveyors, professional teams and
                private clients. Our long-standing presence in London and the Home Counties means
                that we are expertly-versed in the complexities and challenges of working with
                councils and privately-owned estates, including The Royal Borough of Kensington
                and Chelsea and Westminster Council, as well as the prestigious Grosvenor and
                Cadogan estates.
              </p>
            </div>
          </div>
        </div>

        <div className="top">
          <div className="left" style={{ position: "relative", aspectRatio: "900/649" }}>
            <Image src={`${IMG}/2024/05/About_2.jpg.webp`} alt="" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="right">
            <h4>Health, Safety &amp; Sustainability</h4>
            <div className="text">
              <p>We believe in considerate construction – in fact, it informs every decision we make.</p>
              <p>
                Our in-house health and safety team ensures that our workforce put health and
                safety first, promote environmental awareness and communicate with the local
                communities in which we operate. That&rsquo;s why Knowles is recognised by all the
                construction industry&rsquo;s major trade bodies, including the ASUC and
                Considerate Constructors.
              </p>
              <p>
                Alongside Knowles&rsquo; commitment to the health and safety of our staff, we are
                constantly looking forward and measuring our industries impact on the environment,
                which is why we are also committed to sustainable construction.
              </p>
              <p>
                Every site, whether in London or the Home Counties adheres to our environmental
                manifesto. Knowles also makes monthly donations to climate action charity Ecologi
                where each month we donate 5 trees per employee at Knowles, which aims at reducing
                4.5 tonnes of CO2.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="team" className="team-block pt-80 pb-40">
        <h2 className="pad-h">Our Team</h2>
        <TeamGrid />
      </div>

      <div className="partners-block pt-80 pb-160">
        <div className="top pad-h mb-160">
          <h2>Proud Partners</h2>
          <div className="text">
            <p>
              Our unrivalled expertise and experience makes Knowles the go-to partner for the
              UK&rsquo;s top architects, engineers, and property developers. But, our work
              isn&rsquo;t limited to commissions from industry professionals, we&rsquo;re also
              proud to have worked on some of the UK&rsquo;s finest building projects for a range
              of private clients.
            </p>
          </div>
        </div>

        <div className="partners-scroll pad-h">
          {partners.map((p, i) => (
            <div className="partner-logo" key={i}>
              <Image src={p.logo} alt={p.name} width={200} height={60} style={{ width: "auto", height: "40px" }} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
