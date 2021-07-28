import React from "react";
import styles from "./Navbar.module.css";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from "react-router-dom";

const Navbar = ({ theme, topbar,handleTopBar,handleScroll }) => {

  const handleSocialMedia=(link)=>{
    window.open(link)
  }
  return (
    <>
      <div className={styles.navbar}>
        {/* <FormatColorTextIcon  className={styles.dark_logo}/> */}

        {theme === "dark" ? (
          <FormatColorTextIcon
            style={{ fontSize: 50 }}
            className={styles.white_logo}
          />
        ) : (
          <FormatColorTextIcon
            style={{ fontSize: 50 }}
            className={styles.dark_logo}
          />
        )}

        <div onClick={()=>handleScroll("projects")}>
          <div className={styles.line}></div>
          <h3 >Projects</h3>
        </div>
        <div onClick={()=>handleScroll("about")}>
          <div className={styles.line}></div>
          <h3 >About</h3>
        </div>
        <div>
          <div className={styles.line}></div>
          <h3>Contact</h3>
        </div>
        <div>
      <GitHubIcon onClick={()=>handleSocialMedia("https://github.com/pujarianil4")} className={styles.social_icon}/>
        </div>
        <div>
         <LinkedInIcon onClick={()=>handleSocialMedia("https://www.linkedin.com/in/anil-pujari-644282112/")} className={styles.social_icon}/>
        </div>
        <div>
       <TwitterIcon  className={styles.social_icon}/>
        </div>
      </div>

      <div className={styles.bar}>
      {theme === "dark" ? (
          <FormatColorTextIcon
            style={{ fontSize: 50 }}
            className={styles.white_logo}
          />
        ) : (
          <FormatColorTextIcon
            style={{ fontSize: 50 }}
            className={styles.dark_logo}
          />
        )}
        <MenuIcon onClick={handleTopBar} style={{ fontSize: 50 }} />
      </div>
    </>
  );
};

export default Navbar;
