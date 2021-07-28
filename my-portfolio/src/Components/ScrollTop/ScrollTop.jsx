import React, { useEffect, useState } from 'react';
import MouseIcon from '@material-ui/icons/Mouse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from "./ScrollTop.module.css"
import { useWindowScroll} from "react-use"
const MouseMove = () => {
    const {y:pageYoffset} =useWindowScroll()
    const [visible,setVisible]=useState(true)

    useEffect(()=>{
       if(pageYoffset>300){
          setVisible(false)
       }else{
        setVisible(true)
       }
    },[pageYoffset])

    if(!visible){
        return false
    }

    return (
        <div className={styles.div}>
            <div>
            <MouseIcon fontSize="large" className={styles.mouse} />
            </div>
           <div>
           <ExpandMoreIcon fontSize="large" className={styles.arrow}/>
           </div>
           
        </div>
    );
};

export default MouseMove;