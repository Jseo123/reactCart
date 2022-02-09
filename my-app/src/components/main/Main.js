import React from "react";
import "./main.scss";

export default function Main ({title, src, price}){
    return(
<main>
<h2>{title}</h2>
<div>
<img alt="Security" src={src}/>
<p>{price}</p>
</div>
</main>
)
}