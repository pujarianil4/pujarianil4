import React from 'react';
import styles from "./ThemeButton.module.css"
import FlareIcon from '@material-ui/icons/Flare';
import { dark } from '@material-ui/core/styles/createPalette';
import NightsStayIcon from '@material-ui/icons/NightsStay';
const ThemeButton = ({theme,setTheme}) => {
    return (
         <>
         <div className={styles.btn_div}>
           {theme==="light"? <FlareIcon fontSize="large" className={styles.btn} onClick={()=> setTheme(theme==="dark"?"white":"dark")}/>
       : <NightsStayIcon fontSize="large" className={styles.btn} onClick={()=> setTheme(theme==="dark"?"light":"dark")} />
            } 
            </div>
       </>
    );
};

export default ThemeButton;