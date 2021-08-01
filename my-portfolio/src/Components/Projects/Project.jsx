import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from "./Project.module.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import {Link} from "react-router-dom"
import { Button, Tooltip } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
        Strawberrynet.com is an e-commerce website
which sales cosmetic products online.
        </p>
   <div   className={styles.github}>
   <Button startIcon={ <VisibilityIcon/>}>View</Button>
       <a href="https://github.com/makkardeepak25/strawberry_net_clone" target="_blank"> <Button startIcon={ <GitHubIcon />}>Github</Button></a>
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
        </Tooltip>
        <Tooltip title="Heroku">
        <img src="https://www.coddletech.com/sites/default/files/heroku-logo.png" alt="logo" />
        </Tooltip>
      
        </div>
             </ProjectCard>
              </div>

              <div>
              <ProjectCard>
             <img src="harvest.png" alt="" />
        <h2>Harvest.com Clone</h2>
        <p>
        Getharvest.com is project management and
invoicing web application.
        </p>
        <div   className={styles.github}>
   <Button startIcon={ <VisibilityIcon/>}>View</Button>
       <a href="https://github.com/pujarianil4/getharvest_clone" target="_blank"> <Button startIcon={ <GitHubIcon />}>Github</Button></a>
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
        Orbitz.com is one of the best online Hotel booking
web application.
        </p>
        <div   className={styles.github}>
   <Button startIcon={ <VisibilityIcon/>}>View</Button>
       <a href="https://github.com/nrjrwt0/Orbitz-clone" target="_blank"> <Button startIcon={ <GitHubIcon />}>Github</Button></a>
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
        Disney Plus Hotstar is one of the top OTT platform in
India.
        </p>
        <div   className={styles.github}>
   <Button startIcon={ <VisibilityIcon/>}>View</Button>
       <a href="https://github.com/pujarianil4/Disneyplus_Hotstar_clone" target="_blank"> <Button startIcon={ <GitHubIcon />}>Github</Button></a>
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
        </Tooltip>
         </div>
             </ProjectCard>
              </div>
            </div>
        </div>
    );
};

export default Project;