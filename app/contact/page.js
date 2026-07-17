// import Image from "next/image";

// const IMG = "https://knowles.uk.com/wp-content/uploads";

// export default function ContactPage() {
//   return (
//     <main className="contact pad-h charcoal-bg">
//       <div className="inner-wrap">
//         <div className="left">
//           <div className="top mb-80">
//             <p>
//               We like a challenge, and with over 15 years&rsquo; experience in specialist
//               construction, Knowles is widely regarded as a leading expert in complex super-prime
//               projects.
//             </p>
//             <p>
//               If you have a project you would like to discuss or have a question about our
//               services and approach, please get in touch and a member of the team will respond.
//             </p>
//           </div>

//           <div className="bottom">
//             <div>
//               <h4>Contact</h4>
//               <p>
//                 12th Floor Capital House,
//                 <br />
//                 25 Chapel Street, London
//                 <br />
//                 NW1 5DH
//               </p>
//               <p>
//                 <a href="mailto:info@eternaldesignandbuild.com">info@eternaldesignandbuild.com</a>
//                 <br />
//                 07728034763
//               </p>
//             </div>

//             <div>
//               <h4>Follow</h4>
//               <p>
//                 <a href="https://www.instagram.com/knowles_construction/" target="_blank" rel="noreferrer">
//                   Instagram
//                 </a>
//                 <br />
//                 <a
//                   href="https://www.linkedin.com/company/knowlesconstruction/?viewAsMember=true"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   LinkedIn
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="right" style={{ position: "relative", aspectRatio: "2560/1440" }}>
//           <Image
//             src={`${IMG}/2025/06/Sequence-06.00_04_49_03.Still002wide-copy.png.webp`}
//             alt=""
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";

const IMG = "https://knowles.uk.com/wp-content/uploads";

const HEAR_ABOUT_OPTIONS = [
  "Instagram",
  "Google",
  "Branded vehicles",
  "Recommendation",
  "Hoarding",
  "Houzz",
  "FMB (Federation Of Master Builders)",
  "Other (Please state below)",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    details: "",
    hearAbout: "",
    newsletter: true,
  });
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.hearAbout) {
      alert("Please let us know where you first heard about us.");
      return;
    }
    if (!isRobotChecked) {
      alert("Please confirm you're not a robot.");
      return;
    }

    setStatus("submitting");
    try {
      // TODO: wire this up to your API route / email service
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({
        name: "",
        email: "",
        number: "",
        details: "",
        hearAbout: "",
        newsletter: true,
      });
      setIsRobotChecked(false);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main className="contact-page">
      <div className="bg-image">
        <Image
          src={`${IMG}/2024/10/Country-e1727868371153.jpg`}
          alt=""
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="bg-overlay" />
      </div>

      <div className="contact-card">
        <h1>Contact us</h1>

        <p className="intro">
          If you would like to arrange an initial consultation at your property,
          please do not hesitate to get in touch. We will happily travel to your
          home to listen to your ideas and concepts before giving expert advice
          and guidance. We also offer free no-obligation quotations for all of
          our projects.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Number"
            value={form.number}
            onChange={handleChange}
          />
          <textarea
            name="details"
            placeholder="Details of your enquiry"
            rows={4}
            value={form.details}
            onChange={handleChange}
          />

          <fieldset className="hear-about">
            <legend>
              Where did you first hear about us? (please pick one) <span>*</span>
            </legend>

            <div className="radio-grid">
              {HEAR_ABOUT_OPTIONS.map((option) => (
                <label key={option} className="radio-option">
                  <input
                    type="radio"
                    name="hearAbout"
                    value={option}
                    checked={form.hearAbout === option}
                    onChange={handleChange}
                  />
                  <span className="radio-circle" />
                  <span className="radio-label">{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/*
            Swap this placeholder for a real reCAPTCHA widget, e.g.
            react-google-recaptcha with NEXT_PUBLIC_RECAPTCHA_SITE_KEY
          */}
          <label className="recaptcha-placeholder">
            <input
              type="checkbox"
              checked={isRobotChecked}
              onChange={(e) => setIsRobotChecked(e.target.checked)}
            />
            <span className="checkbox-box" />
            <span>I&apos;m not a robot</span>
            <span className="recaptcha-badge">reCAPTCHA</span>
          </label>

          <button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Submit"}
          </button>

          <label className="newsletter">
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, newsletter: e.target.checked }))
              }
            />
            <span className="checkbox-box small" />
            Please tick to receive our quarterly newsletters
          </label>

          {status === "success" && (
            <p className="form-status success">
              Thanks — your enquiry has been sent. We&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="form-status error">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>

      <style jsx>{`
        .contact-page {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 80px 24px;
          overflow: hidden;
        }

        .bg-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 12, 0.55);
        }

        .contact-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1240px;
          margin: 50px auto;
          padding: 56px 64px;
          border: 1px solid #ffffff;
          border-radius: 20px;          
          color: #ffffff;
        }

        h1 {
          font-size: 3rem;
          font-weight: 600;
          margin: 0 0 28px;
        }

        .intro {
          max-width: 760px;
          line-height: 1.6;
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 36px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 620px;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        textarea {
          width: 100%;
          border: none;
          border-radius: 4px;
          padding: 16px 18px;
          font-size: 0.95rem;
          background: #ffffff;
          color: #1a1a1a;
          font-family: inherit;
          resize: vertical;
        }

        input::placeholder,
        textarea::placeholder {
          color: #8a8a8a;
        }

        input:focus,
        textarea:focus {
          outline: 2px solid rgba(255, 255, 255, 0.6);
        }

        .hear-about {
          border: none;
          padding: 0;
          margin: 18px 0 6px;
        }

        .hear-about legend {
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 14px;
          padding: 0;
        }

        .hear-about legend span {
          color: #ffffff;
        }

        .radio-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 14px;
          column-gap: 24px;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          font-size: 0.98rem;
        }

        .radio-option input[type="radio"] {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .radio-circle {
          width: 20px;
          height: 20px;
          min-width: 20px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          position: relative;
        }

        .radio-option input[type="radio"]:checked + .radio-circle::after {
          content: "";
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: #ffffff;
        }

        .recaptcha-placeholder {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          width: fit-content;
          margin-top: 18px;
          padding: 14px 18px;
          background: #ffffff;
          color: #1a1a1a;
          border-radius: 4px;
          border: 1px solid #d3d3d3;
          cursor: pointer;
          font-size: 0.95rem;
        }

        .recaptcha-placeholder input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .checkbox-box {
          width: 22px;
          height: 22px;
          border: 2px solid #999999;
          border-radius: 3px;
          display: inline-block;
          position: relative;
        }

        .recaptcha-placeholder input:checked + .checkbox-box {
          background: #4285f4;
          border-color: #4285f4;
        }

        .recaptcha-badge {
          margin-left: auto;
          font-size: 0.75rem;
          color: #999999;
        }

        button[type="submit"] {
          width: fit-content;
          margin-top: 8px;
          padding: 16px 40px;
          background: #5c5c5c;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        button[type="submit"]:hover {
          background: #6f6f6f;
        }

        button[type="submit"]:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .newsletter {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          font-size: 0.95rem;
          cursor: pointer;
        }

        .newsletter input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .checkbox-box.small {
          width: 18px;
          height: 18px;
          border-color: #ffffff;
        }

        .newsletter input:checked + .checkbox-box.small {
          background: #2f6fed;
          border-color: #2f6fed;
        }

        .form-status {
          margin-top: 12px;
          font-size: 0.95rem;
        }

        .form-status.success {
          color: #8be08b;
        }

        .form-status.error {
          color: #ff8b8b;
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 36px 24px;
          }

          h1 {
            font-size: 2.2rem;
          }

          .radio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}