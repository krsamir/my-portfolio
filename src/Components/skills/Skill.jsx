import React from "react";
import "./skill.css";
import ReactLogo from "../..//Assets/Logo/react.svg";
import NodejsLogo from "../../Assets/Logo/nodejs.svg";
import ReduxLogo from "../../Assets/Logo/redux.svg";
import AngularLogo from "../../Assets/Logo/angular.svg";
import sequelizeLogo from "../../Assets/Logo/sequelize.svg";
import mysqlLogo from "../../Assets/Logo/mysql.svg";
import reactNativeLogo from "../../Assets/Logo/react-native.svg";
function Skill() {
  const skills = [
    {
      name: "React.js",
      imagesrc: ReactLogo,
      link: `https://reactjs.org/`,
    },
    {
      name: "Node.js",
      imagesrc: NodejsLogo,
      link: `https://nodejs.org/en/`,
    },
    {
      name: "Redux.js",
      imagesrc: ReduxLogo,
      link: `https://redux.js.org/`,
    },
    {
      name: "React Native.js",
      imagesrc: reactNativeLogo,
      link: `https://reactnative.dev/`,
    },
    {
      name: "Angular",
      imagesrc: AngularLogo,
      link: `https://angular.io/`,
    },
    {
      name: "MySQL",
      imagesrc: mysqlLogo,
      link: `https://www.mysql.com/`,
    },
    {
      name: "Sequelize",
      imagesrc: sequelizeLogo,
      link: `https://sequelize.org/`,
    },
  ];
  return (
    <div className="skillBox">
      <div className="skillTitle">Technologies I Know:</div>
      <div className="imageContainer">
        {skills.map(({ name, imagesrc, link }) => (
          <div key={name} className="cardContainer">
            <div className="img">
              {imagesrc !== "" ? (
                <img src={imagesrc} alt={name} className="image" />
              ) : (
                <div></div>
              )}
            </div>
            <a
              className="name"
              href={link}
              target="_blank"
              rel="noreferrer"
              title={`Open ${name} website in new tab.`}
            >
              {name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
