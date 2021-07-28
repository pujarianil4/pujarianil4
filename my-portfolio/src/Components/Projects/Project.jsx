import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from "./Project.module.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import {Link} from "react-router-dom"
import { Tooltip } from '@material-ui/core';

const Project = ({theme}) => {
    const style=theme==="dark"?{color:"white"}:{color:"white"}
    return (
        <div style={style}>
          <div className={styles.heading}>
          <h1 style={theme === "dark" ? {} : { color: "black" }}>Projects</h1>
          </div>
          
            <div className={styles.projects}>
           
              <div>
             <ProjectCard>
             <img src="strawberry.png" alt="" />
        <h2>Strawberrynet Clone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          tempore voluptatibus sed dolorem, placeat enim amet nisi optio.
        </p>
        <a>   <div  style={{margin:"auto"}} className={styles.github}>
        <GitHubIcon /> <h3>GitHub</h3>
        </div>
        </a>
        <div className={styles.tech_stack}>
          <Tooltip title="React">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
        </Tooltip>
        <Tooltip title="Redux">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
        </Tooltip>
        <Tooltip title="NodeJS">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
        </Tooltip>
        <Tooltip title="Express">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
        </Tooltip>
        <Tooltip title="MongoDB">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
        </Tooltip>
        </div>
             </ProjectCard>
              </div>

              <div>
              <ProjectCard>
             <img src="harvest.png" alt="" />
        <h2>Harvest.com Clone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          tempore voluptatibus sed dolorem, placeat enim amet nisi optio.
        </p>
        <div style={{margin:"auto"}} className={styles.github}>
           <GitHubIcon /> <h3>GitHub</h3>
        </div>
        <div className={styles.tech_stack}>
        <Tooltip title="React">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
        </Tooltip>
        <Tooltip title="Redux">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
        </Tooltip>
        <Tooltip title="NodeJS">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
        </Tooltip>
        <Tooltip title="Express">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
        </Tooltip>
        <Tooltip title="MongoDB">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
        </Tooltip> </div>
             </ProjectCard>
              </div>
              <div>
              <ProjectCard>
             <img src="orbitz.png" alt="" />
        <h2>Orbitz.com Clone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          tempore voluptatibus sed dolorem, placeat enim amet nisi optio.
        </p>
        <div style={{margin:"auto"}} className={styles.github}>
           <GitHubIcon /> <h3>GitHub</h3>
        </div>
        <div className={styles.tech_stack}>
        <Tooltip title="React">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
        </Tooltip>
        <Tooltip title="Redux">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
        </Tooltip>
        <Tooltip title="NodeJS">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
        </Tooltip>
        <Tooltip title="Express">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
        </Tooltip>
        <Tooltip title="MongoDB">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
        </Tooltip>   </div>
             </ProjectCard>
              </div>
              <div>
              <ProjectCard>
             <img src="hotstar.png" alt="" />
        <h2>Hotstar.com Clone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          tempore voluptatibus sed dolorem, placeat enim amet nisi optio.
        </p>
        <div style={{margin:"auto"}} className={styles.github}>
           <GitHubIcon /> <h3>GitHub</h3>
        </div>
        
        <div className={styles.tech_stack}>
        <Tooltip title="React">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
        </Tooltip>
        <Tooltip title="Redux">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
        </Tooltip>
        <Tooltip title="NodeJS">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
        </Tooltip>
        <Tooltip title="Express">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
        </Tooltip>
        <Tooltip title="MongoDB">
        <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
        </Tooltip> </div>
             </ProjectCard>
              </div>
            </div>
        </div>
    );
};

export default Project;