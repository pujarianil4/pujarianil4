import React from "react";
import styles from "./ProjectCard.module.css";
import GitHubIcon from '@material-ui/icons/GitHub';
const ProjectCard = () => {
 
    
  return (
    <div  className={styles.box}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className={styles.content}>
        <img src="laptop1.jpg" alt="" />
        <h2>Strawberrynet Clone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          tempore voluptatibus sed dolorem, placeat enim amet nisi optio.
        </p>
        <div style={{margin:"auto"}} className={styles.github}>
           <GitHubIcon /> <h3>GitHub</h3>
        </div>
        <div className={styles.tech_stack}>
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
