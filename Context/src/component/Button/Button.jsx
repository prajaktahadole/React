import { useContext } from "react"
import {AppContext} from "../AppContext/AppContextProvider"
import style from "./Button.module.css";

function Button ({text, onClick}){
    const [theme, toggleTheme] = useContext(AppContext);
   // console.log(context);

    return(
        <Button
        className={`${style.buttonBase} ${theme === "light" ? style.buttonLight : style.buttonDark}`}
        
        >{text}</Button>

    )
}
export default Button;