import React, { useEffect } from "react";
import styles from "./About.module.css";
import SendIcon from '@material-ui/icons/Send';
import { Button }from "@material-ui/core"
import { useDencrypt } from "use-dencrypt-effect";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  send_dark: {
    fontWeight:600,
    backgroundColor:"#F2F2F2"
  },
  send_light:{
    fontWeight:600,
      color: "white",
      backgroundColor:"#111111"
  }
});
const About = ({ theme }) => {
  const { result, dencrypt } = useDencrypt();
    const classes=useStyles()
  const style =
    theme === "dark"
      ? { backgroundColor: "#111111",color:"white" }
      : { backgroundColor: "#F2F2F2",color:"#616161" };

      useEffect(()=>{
        dencrypt("Hi there");
      },[])
  return (
    <div style={style} className={styles.container}>
      <div className={styles.about}>
      <h1 style={theme==="dark"?{}:{color:"black"}}>{result}</h1>
        <div className={styles.info}>
          <div>
          
          <p>
          Hi, I'm Anil Pujari, a passionate Full Stack Web Developer and a
            freelance software engineer from India. My passion for software lies
            with dreaming up ideas and making them come true with elegant
            interfaces. I take great care in the experience, architecture, and
            code quality of the things I build.
          </p>
            <Button variant="contained" className={theme==="dark"?classes.send_light:classes.send_dark} startIcon={<SendIcon/>}>Send me a message </Button>
          </div>
          <div>
              <img src="profile.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
