import React, { useState } from 'react';
import styles from "./Home.module.css"
const Home = () => {
const [theme,setTheme]=useState("dark")
    const dark={
        color:"white"
    }
const light={
    color:"black"
}
    const bg=theme==="dark"?"dark.png":"white.png"
    return (
        <div style={theme==="dark"?dark:light} className={styles.home}>
             <img src={bg} alt="" />
           <div className={styles.title} >
               <h1 onClick={()=>setTheme(theme==="dark"?"light":"dark") }>Hi </h1>
           </div>
           
        </div>
    );
};

export default Home;