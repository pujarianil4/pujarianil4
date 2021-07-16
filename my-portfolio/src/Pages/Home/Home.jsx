import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ThemeButton from "../../Components/ThemeButton/ThemeButton";
import styles from "./Home.module.css";
import AddIcon from "@material-ui/icons/Add";
import { useDencrypt } from "use-dencrypt-effect";
import TopBar from "../../Components/TopBar/TopBar";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Project from "../../Components/Projects/Project";


const Home = () => {
  const title_list = ["","Designer","", "Trader","", "Choreographer"];
  const { result, dencrypt } = useDencrypt();
  const [theme, setTheme] = useState("light");
  const [title, setTitle] = useState(0);
  const dark = {
    color: "white",
  };
  const light = {
    color: "#616161",
  };
  const bg = theme === "dark" ? "dark.png" : "white.png";
  const [rib, setRib] = useState(true);
  const [topbar,setTopbar]=useState(false)
   const handleTopBar=()=>{
      setTopbar(!topbar)
   }


  var action;
  const interval = () => {
    var i = 0;

    action = setInterval(() => {
      setRib((prev) => !prev);
      setTimeout(() => {
        setTitle(i);
      }, 100);
     
      i = i === title_list.length - 1 ? 0 : i + 1;
    }, 2000);
  };
  useEffect(() => {
    interval();
    dencrypt("I'M ANIL PUJARI");
if(theme==="dark"){
  document.body.style.backgroundColor= "#111111"
}else{
  document.body.style.backgroundColor= "#F2F2F2"
}
   
    return () => clearInterval(action);
  }, [theme]);
  return (
    <>
    <div className={styles.container} style={theme === "dark" ? dark : light}>
    <div style={theme === "dark" ? dark : light}  className={styles.home}>
      { <img src={bg} alt="background" /> }
      <div className={styles.title}>
        <Navbar theme={theme} handleTopBar={handleTopBar} topbar={topbar} />
        <ThemeButton theme={theme} setTheme={setTheme} />
     
        <div className={styles.profile}>
          <h2 >{result}</h2>
        
          <div
            className={
              theme === "light"
                ? styles.light_profile_title
                : styles.dark_profile_title
            }
          >
            <h1>Developer </h1>
            <div
              className={
                theme === "light" ? styles.light_title : styles.dark_title
              }
            >
              <AddIcon className={styles.plus_icon} style={{ fontSize: 60 }} />
              <h1> {title_list[title]} </h1>
              <div
                style={
                  rib
                    ? { width: "100%", left: "0px" }
                    : { width: "0%", right: "0px" }
                }
                className={styles.rib}
              ></div>
            </div>
          </div>
        </div>
      </div>
         {/* About */}
    

      
    </div>
      <About theme={theme}/>
      <Skills theme={theme}/>
      <Project theme={theme}/>

      <TopBar theme={theme} setTheme={setTheme} handleTopBar={handleTopBar} topbar={topbar}/>
      </div>
      </>
  );
};

export default Home;
