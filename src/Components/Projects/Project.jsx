import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import "./project.css";
import styles from "./style.module.css";
function Project() {
  const projects = [
    {
      name: "E-commerce Application",
      skillArray: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "mysql" },
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
      flip: false,
    },
    {
      name: "College- Suite",
      skillArray: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "mysql" },
        { name: "Redux" },
        { name: "Material UI" },
      ],
      githubLink: ["https://github.com/krsamir/college-suite-complete"],
      websiteLink: "https://my-college.herokuapp.com/",
      flip: false,
    },
  ];
  const [flipped, set] = useState(projects);
  const { transform, opacity } = useSpring({
    opacity: flipped[0].flip ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped[0].flip ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  console.log(flipped);
  return (
    <>
      <div className="projects">
        {flipped.map((value, index) => {
          return (
            <div
              className={styles.container}
              key={index}
              onClick={() =>
                set((state) => {
                  console.log(state);
                  const states = [...state];
                  states[index].flip = !states[index].flip;
                  return set(states);
                })
              }
            >
              <a.div
                className={`${styles.c} ${styles.back}`}
                style={{ opacity: opacity.to((o) => 1 - o), transform }}
              >
                A
              </a.div>
              <a.div
                className={`${styles.c} ${styles.front}`}
                style={{
                  opacity,
                  transform,
                  rotateX: "180deg",
                }}
              >
                B
              </a.div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Project;
