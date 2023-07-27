import React, { useRef } from "react";

const Company = () => {
  const learnMoreRef = useRef(null);

  const handleArrowClick = () => {
    if (learnMoreRef.current) {
      learnMoreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="company">
      <div className="devoteam columns large-6 small-12"></div>
      <div className="ampersand">&</div>
      <div className="arrow-container">
        <div
          className="arrow fa fa-arrow-down"
          aria-hidden="true"
          onClick={handleArrowClick}
        ></div>
      </div>
      <div className="typekev columns large-6 small-12"></div>
      <div className="company columns small-12" ref={learnMoreRef}>
        <h2 className="page">TypeKev & Devoteam</h2>
        <h3>Creating together</h3>
        <a href="http://devoteam.lu" target="_blank" className="button">
          Learn more
        </a>
        <h2 className="page"></h2>
      </div>
    </div>
  );
};

export default Company;
