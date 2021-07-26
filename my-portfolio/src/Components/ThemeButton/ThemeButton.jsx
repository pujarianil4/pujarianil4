import React from 'react';
import styles from "./ThemeButton.module.css"
import FlareIcon from '@material-ui/icons/Flare';
import { dark } from '@material-ui/core/styles/createPalette';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useDispatch } from 'react-redux';
import { themeHandler } from '../../Redux/Action';
const ThemeButton = ({theme,setTheme}) => {
    const dispatch=useDispatch()

    const handletheme=()=>{
        console.log("function");
        dispatch(themeHandler())
    }
    return (
         <>
         <div className={styles.btn_div}>
           {theme==="light"? <FlareIcon fontSize="large" className={styles.btn} onClick={handletheme}/>
       : <NightsStayIcon fontSize="large" className={styles.btn} onClick={ handletheme} />
            } 
            </div>
       </>
    );
};

export default ThemeButton;