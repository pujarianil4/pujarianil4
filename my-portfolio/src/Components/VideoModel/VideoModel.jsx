import React from "react";
import styles from "./VideoModel.module.css";
import ReactPlayer from "react-player"
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const VideoModel = ({ link, handleLink }) => {
  if (link != false) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
  if (link == false) {
    return false;
  }
  return (
    <div className={styles.model}>
      <div className={styles.video}>
        <HighlightOffIcon
          onClick={() => handleLink(false)}
          fontSize="large"
          className={styles.closeIcon}
        />
  
  <div className={styles.ReactPlayer}>
       <ReactPlayer
               controls
               width="100%"
               height="100%"
               
               stopOnUnmount={true}
                url={link}/>
       </div>
      </div>
  
    </div>
  );
};

export default VideoModel;
