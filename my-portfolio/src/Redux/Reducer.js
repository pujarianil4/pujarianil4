
import { THEME_HANDLER } from "./ActionTypes";



const init={
    theme: JSON.parse(localStorage.getItem("theme")) || "light"
}

export const Reducer=(state=init,action)=>{
    switch (action?.type) {
        case THEME_HANDLER:{
            localStorage.setItem("theme",JSON.stringify(state.theme=="light"?"dark":"light"))
            return{
                ...state,
                theme:state.theme=="light"?"dark":"light"
            }
        }
            
        
            
            
    
        default:{
            return{
                ...state
            }
        }
            
    }
}