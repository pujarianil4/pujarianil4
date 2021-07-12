import React from "react";
import styles from "./Navbar.module.css";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import MenuIcon from '@material-ui/icons/Menu';
const Navbar = ({ theme, topbar,handleTopBar }) => {
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

        <div>
          <div className={styles.line}></div>
          <h3>Projects</h3>
        </div>
        <div>
          <div className={styles.line}></div>
          <h3>About</h3>
        </div>
        <div>
          <div className={styles.line}></div>
          <h3>Contact</h3>
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
