import React from "react";
import styles from "./ProjectCard.module.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import { useSelector } from "react-redux";
const ProjectCard = ({ children}) => {
 
    const theme=useSelector((state)=> state.theme)
  return (
    <div  className={theme==="light"?styles.light_box:styles.dark_box}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className={styles.content}>
      {children}
      </div>
    </div>
  );
};

export default ProjectCard;
