"use client";
import Image from "next/image";
import Link from "next/link";
import { openRoles } from "@/data/careers";
import { news } from "@/data/news";

const IMG = "https://knowles.uk.com/wp-content/uploads";


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
export default function CareersPage() {
  const interviews = news.filter((n) =>
    ["primeresi-23-5mn-price-tag-for-shh-designed-little-venice-villa", "phase-2-st-johns-wood-residence"].includes(
      n.slug
    )
  );

  return (
    <main className="careers">
      <div className="hero">
        <Image
          src={`${IMG}/2024/10/Careers-Opener-e1729605426702.jpg`}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="tint-overlay" style={{ backgroundColor: "#3F3F3F" }} />
        <h1 className="hero-text" style={{ color: "#FFFFFF" }}>
          Build your career with us
        </h1>
        <button
          className="down-arrow"
          onClick={scrollToNext}
          aria-label="Scroll down"
        >
          <DownArrow />
        </button>
      </div>

      <div className="block-2 pad-h pv-80">
        <div className="top">
          <div>
            <h4>Why work for us?</h4>
            <div className="text">
              <p>
                A career with Knowles Construction is unlike any other in the construction
                industry. Our projects are labours of love and the people who work on them are our
                trusted ambassadors for the excellence and quality of service we pride ourselves
                on. We are a family-run business and open our arms to the people who choose to
                join us, offering development, career progression and a project portfolio you are
                unlikely to experience elsewhere.
              </p>
              <p>
                If you are interested in joining Knowles, please see our current vacancies below.
                <br />
                For any other career queries, please email careers@knowles.uk.com.
              </p>
            </div>
          </div>
          <a className="button" href="/about#team">
            Meet the Team
          </a>
        </div>

        <div className="interviews">
          {interviews.map((item) => (
            <Link key={item.slug} className="interview-item" href={`/news/${item.slug}`}>
              <div className="image" style={{ position: "relative", aspectRatio: "3/2" }}>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="row-1">
                <span>{item.category[0].toUpperCase() + item.category.slice(1)}</span>
                <span>{item.date}</span>
              </div>
              <div className="row-2">Read {item.title}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="block-1 pad-h pb-80">
        <div style={{ position: "relative", aspectRatio: "2560/1710" }}>
          <Image
            src={`${IMG}/2025/12/KN-Raynwood-Nov24-08947-2-scaled.jpg.webp`}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div>
          <h2 className="mb-20">Current Opportunities</h2>
          <div className="text mb-80">
            <p>
              We are always looking for new talent and committed individuals to join our team. If
              you would like to join Knowles, please see a list of our open and current
              opportunities below and apply directly via the application form. We will be in touch
              if your application is of interest. Please no recruiters/ agencies.
            </p>
          </div>

          {openRoles.map((role) => (
            <Link key={role.slug} className="careers-item mb-40" href={`/careers/${role.slug}`}>
              <span>{role.title}</span>
              <span className="view">View</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="block-3 pad-h pv-80">
        <div className="top mb-80">
          <h2>Watch our Film</h2>
          <div className="text h3">
            <p>
              Our success is the shared endeavour of everyone at Knowles and every colleague is
              like-minded in their ambition to deliver excellence to our clients. To find our more
              about life working with Knowles, watch our film below.
            </p>
          </div>
        </div>

        <div className="video-wrap">
          <div className="video-container">
            <video
              controls
              playsInline
              poster={`${IMG}/2025/12/KNHamilton-Nov24-08880-scaled.jpg.webp`}
              style={{ width: "100%", aspectRatio: "1920/1080" }}
            >
              <source src="https://player.vimeo.com/progressive_redirect/playback/1142104826/rendition/1080p/file.mp4" />
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}
