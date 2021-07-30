import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import Divider from "../Divider/Divider";
import { Button, Input, makeStyles, TextField } from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";
import SendIcon from '@material-ui/icons/Send';

import TextFieldMui from "@material-ui/core/TextField";


const useStyle = makeStyles({
  email: {
    color: "white",
    width: "100%",
    "& .MuiFormLabel-root.Mui-disabled": {
      color: "red",
    },
  },
  label: {
    "&$focusedLabel": {
      color: "cyan",
    },
    "&$erroredLabel": {
      color: "orange",
    },
  },
});

const styless = (muiTheme) => ({
  darklabel: {
    "&$focusedLabel": {
      color: "gray",
    },
    color: "gray",
    fontSize: "20px",

    "&$erroredLabel": {
      color: "gray",
    },
  },
  focusedLabel: {
    borderBottomColor: "",
  },
  erroredLabel: {
   
  },
  underline: {
    "&$error:after": {
      borderBottomColor: "#F44336",
    },
    color: "gray",
    borderBottom: `0.5px solid gray`,
    "&:after": {
      borderBottom: `2px solid cyan`,
    },
  },
  error: {},
});

const TextFielD = withStyles(styless)(function TextField({
  classes,
  ...props
}) {
  return (
    <TextFieldMui
      InputLabelProps={{
        classes: {
          root: classes.darklabel,
          focused: classes.focusedLabel,
          error: classes.erroredLabel,
        },
      }}
      InputProps={{
        classes: {
          root: classes.underline,
          focused: classes.focusedLabel,
          error: classes.error,
        },
      }}
     
      style={{padding:"15px 0px"}}
      {...props}
    />
  );
});
const Contact = () => {
  const classes = useStyle();
  const [email,setEmail]=useState("")
   const [Error,setError]=useState(false)

   useEffect(()=>{
     if(email.length>0&&email.includes("@")&&email.includes(".")){
         setError(false)
     }else if(email.length>0){
         setError(true)
     }else{
         setError(false)
     }
   },[email])
  return (
    <div>
      <div className={styles.contact}>
        <h1>Say Hello</h1>
        <Divider />
        <div className={styles.form}>
          <div className={styles.form_email}>
            <TextFielD
              label="Your Email"
              margin="normal"
              fullWidth
              type="email"
              error={Error}
              helperText={Error&&"Please include an '@' and '.' in the email address."}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <p> </p>
          </div>
          <div className={styles.form_massage}>
            <TextFielD
              label="Your Massage"
              margin="normal"
              fullWidth
              type="text"
            />
          </div>

          <div className={styles.form_button}>
          <Button  startIcon={<SendIcon/>}>Send a message </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
