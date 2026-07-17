"use client";

import Link from "next/link";
import Image from "next/image";

const footerLogos = [
  "/images/social_media/dark.svg",
  "/images/social_media/trustmark_logo_light.svg",
  "/images/social_media/logo-footer.svg",
  "/images/social_media/logo.jpg",
  "/images/social_media/installsure-white.png",
  "/images/social_media/environment-agency.png"
];

const footerMenu = [
  { label: "Projects", href: "/projects" },
  { label: "Divisions", href: "/divisions" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

export default function Footer() {
  return (
    <footer className="site-footer charcoal-bg">
      <div className="row-1 pad-h">
        <div>
          <h3>Super-Prime Construction.</h3>
          <br />
          <h3>
            Building Excellence,
            <br />
            from Concept to Completion.
          </h3>
        </div>

        <div className="right">
          <div>
            <h4>Contact</h4>
            <p>
              3 Sussex House,
              <br />
              Stratton Close, Edgware, London,
              <br />
              HA8 6PY
            </p>
            <p>
              <a href="mailto:info@eternaldesignandbuild.com">info@eternaldesignandbuild.com</a>
              <br />
              <a href="tel:07728034763">07728034763</a>
            </p>
          </div>

          <div>
            <h4>Follow</h4>
            <p>
              <a href="https://instagram.com/eternaldesignandbuild" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <br />
              <a href="https://linkedin.com/company/eternaldesignandbuild" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="row-2">
  {footerLogos.map((src, i) => (
    <div key={i} className="footer-logo">
      <Image
        src={src}
        alt=""
        width={200}
        height={130}
        className="footer-logo-img"
        sizes="(max-width: 480px) 45vw, (max-width: 768px) 30vw, (max-width: 1200px) 16vw, 200px"
      />
    </div>
  ))}
</div>

      <div className="row-3 pad-h">
        <div>© Eternal Design and Build 2026. All Rights Reserved</div>

        <ul className="footer-menu">
          {footerMenu.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <button
          id="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Top
        </button>
      </div>
    </footer>
  );
}