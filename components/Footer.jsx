"use client";

import Link from "next/link";
import Image from "next/image";

const footerLogos = [
  {
    src: "/images/2024/05/Ecologi-Logo-BW-1.png",
    w: 120,
    h: 76,
  },
  {
    src: "/images/2024/05/CL_TOP100_2023_LOGO-BW-1.png",
    w: 120,
    h: 76,
  },
  {
    src: "/images/2025/01/GBB-Brand-Partner-Logo-2025-white.png",
    w: 76,
    h: 76,
  },
  {
    src: "/images/2024/05/ASUC-Logo-BW-1.png",
    w: 120,
    h: 76,
  },
  {
    src: "/images/2024/05/Chas-Accredited-Contractor-Logo-BW-1.png",
    w: 120,
    h: 76,
  },
  {
    src: "/images/2024/05/Considerate-Constructors-Logo-BW-1.png",
    w: 120,
    h: 76,
  },
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
    <footer className="site-footer pad-h">
      <div className="footer-row1">
        <div>
          <h3>Super-Prime Construction.</h3>
          <br />
          <h3>
            Building Excellence,
            <br />
            from Concept to Completion.
          </h3>
        </div>

        <div className="footer-right">
          <div>
            <h4>Contact</h4>
            <p>
              12th Floor Capital House,
              <br />
              25 Chapel Street, London
              <br />
              NW1 5DH
            </p>
            <a href="mailto:info@knowles.uk.com">info@knowles.uk.com</a>
            <a href="tel:+442039887994">+44 (0)20 3988 7994</a>
          </div>

          <div>
            <h4>Follow</h4>
            <a href="https://www.instagram.com/knowles_construction/">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/knowlesconstruction/">
              Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="footer-logos">
        {footerLogos.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt=""
            width={logo.w}
            height={logo.h}
            style={{ objectFit: "contain" }}
          />
        ))}
      </div>

      <div className="footer-row3">
        <div>© Knowles 2026. All Rights Reserved</div>
        <ul className="footer-menu">
          {footerMenu.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Top
        </button>
      </div>
    </footer>
  );
}
