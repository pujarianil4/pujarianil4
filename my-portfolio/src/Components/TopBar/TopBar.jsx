import React from 'react';
import styles from "./TopBar.module.css"
import CloseIcon from '@material-ui/icons/Close';
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
const areEqual=(prev,next)=>{
    if(prev.topbar===next.topbar){
        return true
    } else{
        return false
    }
}

const TopBar = React.memo(({theme,setTheme,handleTopBar,topbar}) => {
    console.log(topbar);

    return (
        <div style={topbar?{top:"0px"}:{}} className={styles.topbar}>
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
           <CloseIcon onClick={handleTopBar}    style={{ fontSize: 50 }} />
        </div>
    );
},areEqual)

export default TopBar;