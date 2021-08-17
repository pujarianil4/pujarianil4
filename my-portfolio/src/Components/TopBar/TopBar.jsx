import React from 'react';
import styles from "./TopBar.module.css"
import CloseIcon from '@material-ui/icons/Close';
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import FlareIcon from '@material-ui/icons/Flare';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useDispatch, useSelector } from 'react-redux';
import { themeHandler } from '../../Redux/Action';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
const areEqual=(prev,next)=>{

    if(prev.topbar===next.topbar ){
        return true
    } else{
        return false
    }

   
}

const TopBar = React.memo(({handleTopBar,topbar,handleScroll}) => {

  const theme= useSelector((state)=> state.theme)
  const dispatch=useDispatch()
  const handletheme=(tm)=>{
 
 
    dispatch(themeHandler())
  }
const handleBar=(item)=>{
  handleScroll(item)
  handleTopBar()
}

  const style =
  theme === "dark"
    ? { backgroundColor: "#111111",color:"white" }
    : { backgroundColor: "#F2F2F2",color:"#616161" };
    return (
      <div  className={styles.container} style={style}>
        
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

            <div className={styles.social}>
             <a style={style} href="https://github.com/pujarianil4" target="_blank"> <GitHubIcon fontSize="large" /></a>
             <a style={style} href="https://github.com/pujarianil4" target="_blank">  <LinkedInIcon fontSize="large" /></a>
             <a style={style} href="https://github.com/pujarianil4" target="_blank">  <TwitterIcon fontSize="large" /></a>
            </div>
        
       
        <div className={styles.list}>
          <h2 onClick={()=>handleBar("about") }>About</h2>
          <h2 onClick={()=>handleBar("projects")}>Project</h2>
          <h2 onClick={()=>handleBar("contact")}>Contact</h2>
        </div>
       
           
        </div>
     
      
        </div>
    );
},areEqual)

export default TopBar;