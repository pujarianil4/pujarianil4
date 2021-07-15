import React from 'react';
import styles from "./TopBar.module.css"
import CloseIcon from '@material-ui/icons/Close';
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import FlareIcon from '@material-ui/icons/Flare';
import NightsStayIcon from '@material-ui/icons/NightsStay';
const areEqual=(prev,next)=>{

    if(prev.topbar===next.topbar ){
        return true
    } else{
        return false
    }

   
}

const TopBar = React.memo(({theme,setTheme,handleTopBar,topbar}) => {

  const handletheme=(tm)=>{
    handleTopBar()
    setTheme(tm)
  }
  const style =
  theme === "dark"
    ? { backgroundColor: "#111111",color:"white" }
    : { backgroundColor: "#F2F2F2",color:"#616161" };
    return (
      <div style={style}>
        <div style={topbar?{top:"0px"}:{}} className={theme==="dark"?styles.dark_topbar:styles.light_topbar}>
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
        {theme === "dark" ? (
          <CloseIcon
            style={{ fontSize: 50 }}
            className={styles.white_Close_logo}
            onClick={handleTopBar}
          />
        ) : (
          <CloseIcon
            style={{ fontSize: 50 }}
            className={styles.dark_Close_logo}
            onClick={handleTopBar}
          />
        )}
       
           {theme==="light"? <FlareIcon fontSize="large" className={styles.btn} onClick={()=>  handletheme("dark")}/>
       : <NightsStayIcon fontSize="large" className={styles.btn} onClick={()=> handletheme("light")} />
            } 
          
           
        </div>
        </div>
    );
},areEqual)

export default TopBar;