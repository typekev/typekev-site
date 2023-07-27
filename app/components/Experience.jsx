import React from "react";

const projects = [
  {
    name: "Dimkast",
    imageSrc: "images/dimkast.png",
    description:
      "Making nightlife work easy & safe. I led the Design and Development of this project. Full-Stack.",
    link: "https://dimkast.com",
  },
  {
    name: "JugaTV",
    imageSrc: "images/juga.png",
    description:
      "Making social engagements more social. I was a User Experience Design Consultant on this project.",
    link: "https://juga.tv",
  },
  {
    name: "Unduit",
    imageSrc: "images/unduit.png",
    description:
      "Get your device fixed without leaving your home. I worked on the Front-End of this project.",
    link: "https://unduit.com",
  },
  {
    name: "TrackTax",
    imageSrc: "images/track.png",
    description:
      "Financial tracking for freelancers. My focus was on this product's perceived trustworthiness. Experience Design.",
    link: "https://track.tax",
  },
  {
    name: "psdtomt",
    imageSrc: "images/psdto.png",
    description:
      "Developing your PSD's into literally anything. I was a Front-End Consultant on this project.",
    link: "https://psdtomanythings.com",
  },
];

const Experience = () => (
  <div className="experience">
    <div className="row page">
      <div className="large-12 columns left">
        <h2>{"<My Work/>"}</h2>
        <br />
        <br />
      </div>
      <div className="experience-container small-8 medium-12 columns">
        {projects.map((project, index) => (
          <div className="row work" key={index}>
            <img
              className={`works columns large-7 ${
                index % 2 ? "right" : "left"
              }`}
              src={project.imageSrc}
              alt={project.name}
            />
            <div
              className={`exp-text columns large-5 ${
                index % 2 ? "right" : "left"
              }`}
            >
              <h2 className="experience-name">{project.name}</h2>
              <h3>{project.description}</h3>
              <a href={project.link} target="_blank" className="button">
                See Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
