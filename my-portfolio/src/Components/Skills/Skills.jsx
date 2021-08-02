import React, { useEffect } from "react";
import styles from "./Skills.module.css";
import { useDencrypt } from "use-dencrypt-effect";
const Skills = ({ theme }) => {
  const { result, dencrypt } = useDencrypt();
  const style =
    theme === "dark"
      ? { backgroundColor: "#111111", color: "white" }
      : { backgroundColor: "#F2F2F2", color: "#616161" };

  useEffect(() => {
    dencrypt("Tech Stack");
  }, []);
  return (
    <div style={style} className={styles.container}>
      <div className={styles.skills}>
        <div className={styles.heading}>
        <h1 style={theme === "dark" ? {} : { color: "black" }}>{result}</h1>
        </div>
       

        <div
          className={theme === "dark" ? styles.light_cards : styles.dark_cards}
        >
          <div className={styles.grid_item}>
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>GIT</h2>
            </div>
          </div>
          <div className={styles.grid_item}>
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>HTML</h2>
            </div>
          </div>
          <div className={styles.grid_item}>
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>CSS</h2>
            </div>
          </div>
          <div className={styles.grid_item}>
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>JAVASCRIPT</h2>
            </div>
          </div>
          <div className={styles.grid_item}>
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>REACTJS</h2>
            </div>
          </div>
          <div className={styles.grid_item}>
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>NODEJS</h2>
            </div>
          </div>
          <div className={styles.grid_item}>
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/json/json.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>JSON</h2>
            </div>
          </div>
          <div className={styles.grid_item}>
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>EXPRESS</h2>
            </div>
          </div>
          <div className={styles.grid_item}>
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>MONGODB</h2>
            </div>
          </div>
          <div className={styles.grid_item}>
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>FIREBASE</h2>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.proficiency}>
        <div  className={styles.heading1}>
        <h1 style={theme === "dark" ? {} : { color: "black" }}>Proficiencies</h1>
        </div>
       

        <div
          className={theme === "dark" ? styles.light_cards_pro : styles.dark_cards_pro}
        >
          <div className={styles.grid_item_pro}>
            <img alt="logo" src="frontend.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>FRONTEND</h2>
            </div>
          </div>
          <div className={styles.grid_item_pro}>
            <img alt="logo" src="backend.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>BACKEND</h2>
            </div>
          </div>
          <div className={styles.grid_item_pro}>
            <img alt="logo" src="data.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>DATA STRUCTURE</h2>
            </div>
          </div>
          <div className={styles.grid_item_pro}>
            <img alt="logo" src="algo.jpg" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>ALGORITHM</h2>
            </div>
          </div>
          <div className={styles.hide }  >
            <img alt="logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
            <div className={theme==="dark"?styles.dark_rib:styles.light_rib}>
              <h2>REACT APPS</h2>
            </div>
          </div>
    
       
     
        </div>
      </div>



    </div>
  );
};

export default Skills;
