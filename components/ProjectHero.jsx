"use client";

export default function ProjectHero({ title, location, desktopImage, mobileImage }) {
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
          <button
          className="down-arrow"
          onClick={scrollToNext}
          aria-label="Scroll down"
        >
          <DownArrow />
        </button>
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