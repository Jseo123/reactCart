import React from "react";
import Navbar from "../../components/Navbar";
import "./home.scss";
import Main from "../../components/main";

const products = [
{
  title: "Security",
  src: "https://c4.wallpaperflare.com/wallpaper/19/245/317/sci-fi-astronaut-gun-soldier-space-hd-wallpaper-preview.jpg",
  price:"200$"
}
]

function Home (){
return(
  <div className="background">
<Navbar />
<div>
<Main
title={products[0].title}
src={products[0].src}
price={products[0].price}
/>
</div>
</div>

)
}
export default Home;
