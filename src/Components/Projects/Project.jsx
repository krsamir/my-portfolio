import React, { useState } from "react";
import "./project.css";
function Project() {
  const projects = [
    {
      name: "E-commerce Application",
      skillArray: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "MySQL" },
        { name: "Sequelize ORM" },
        { name: "Redux" },
        { name: "Material UI" },
        { name: "SMTP" },
      ],
      githubLink: [
        "https://github.com/krsamir/E-Commerce-FE",
        "https://github.com/krsamir/E-Commerce-Backend",
      ],
      websiteLink: "https://ecom-app-in.herokuapp.com/",
    },
    {
      name: "College- Suite",
      skillArray: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "MySQL" },
        { name: "Redux" },
        { name: "Material UI" },
      ],
      githubLink: ["https://github.com/krsamir/college-suite-complete"],
      websiteLink: "https://my-college.herokuapp.com/",
    },
  ];
  return (
    <>
      <div className="projects">
        <div className="row projectOutBox">
          {projects.map(({ name, skillArray, githubLink, websiteLink }) => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={name}>
              <div className="projectCardContainer">
                <div className="projectName">{name}</div>
                <div className="projectLink">
                  <span>Source Code: </span>
                  {githubLink.map((data, index) => (
                    <div className="toasts pointer" key={index}>
                      <a
                        key={index}
                        className="links"
                        href={data}
                        target="_blank"
                        rel="noreferrer"
                        title={`Open in new tab.`}
                      >
                        Link {index + 1}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="projectLink">
                  <span>URL: </span>
                  <a
                    className="projectURL"
                    href={websiteLink}
                    target="_blank"
                    rel="noreferrer"
                    title={`Open in new tab.`}
                  >
                    {websiteLink}
                  </a>
                </div>
                <div className="projectLink skillbox">
                  <span>Skills/ Tools used: </span>
                  {skillArray.map(({ name }, index) => (
                    <div className="toasts" key={index}>
                      <div>{name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
