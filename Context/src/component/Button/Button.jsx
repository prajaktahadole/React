import { useContext } from "react"
import {AppContext} from "../AppContext/AppContextProvider"

function Button ({text}){
    const context = useContext(AppContext);
    console.log(context);
    return(
        <Button>{text}</Button>

    )
}

export default Button