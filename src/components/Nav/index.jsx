import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

export default function Nav(){

    const {lang, setLang} = useContext(GlobalContext)

    function changeLang(){
        setLang( lang === "Eng" ? "Rus" : "Eng" )
    }

    return (<div>
           <button onClick={changeLang} > Switch Language </button>
        </div>)

}