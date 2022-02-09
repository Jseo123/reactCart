import React from "react";
import NavButton from "../buttons/Buttons";
import "./navbar.scss";

export default function Navbar (){
    const styles = {
            display:"flex"
    }
    return(
        <div className="flex navbar">
<p className="logo">Logo</p>
<NavButton title={"Inico"} style={styles}/>
<NavButton title={"Noticias"}/>
<NavButton title={"Menu"}/>
        </div>
    )
}