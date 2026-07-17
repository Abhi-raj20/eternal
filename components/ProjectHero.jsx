"use client";

export default function ProjectHero({ title, location, desktopImage, mobileImage }) {
  return (
    <>
      <div
        className="pd-hero pd-hero--desktop"
        style={{ backgroundImage: `url(${desktopImage})` }}
      >
        <div className="pd-hero__tint" />
        <div className="pd-hero__text">
          <h1 className="pd-hero__title">{title}</h1>
          <div className="pd-hero__location">{location}</div>
        </div>
        <svg
          className="pd-hero__arrow"
          viewBox="0 0 21.4 26.4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10.7" y1="0" x2="10.7" y2="15" stroke="#fff" strokeWidth="1.5" />
          <path
            d="M20.7,15l-10,10l-10-10"
            fill="none"
            stroke="#fff"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div
        className="pd-hero pd-hero--mobile"
        style={{ backgroundImage: `url(${mobileImage || desktopImage})` }}
      >
        <div className="pd-hero__tint" />
        <div className="pd-hero__text">
          <h1 className="pd-hero__title">{title}</h1>
          <div className="pd-hero__location">{location}</div>
        </div>
      </div>
    </>
  );
}