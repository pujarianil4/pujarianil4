import { THEME_HANDLER } from "./ActionTypes"


export const themeHandler=()=>{
    console.log("action");
    return{
        type:THEME_HANDLER
    }
}