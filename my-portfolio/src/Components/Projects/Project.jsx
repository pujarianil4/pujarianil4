import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from "./Project.module.css";

const Project = ({theme}) => {
    const style=theme==="dark"?{color:"white"}:{color:"white"}
    return (
        <div style={style}>
            <div className={styles.projects}>
              <div>
             <ProjectCard/>
              </div>

              <div>
              <ProjectCard/>
              </div>
              <div>
              <ProjectCard/>
              </div>
              <div>
              <ProjectCard/>
              </div>
            </div>
        </div>
    );
};

export default Project;