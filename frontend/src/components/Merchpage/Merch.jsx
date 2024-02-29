import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Merchitem from "./Merchitem";
// import "./carousel.css";
import React from 'react';
import "./merch.css";
import BTshirtFront  from "./MerchImages/merchShirt1Front.png";
import BTshirtBack from "./MerchImages/merchShirt1Back.png";
import WShirtFront from "./MerchImages/merchShirt2Front.png";
import WShirtBack from "./MerchImages/merchShirt2Back.png";
import HoodieFront from "./MerchImages/merchHoodieFront.png";
import HoodieBack from "./MerchImages/merchHoodieBack.png";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

export default function Merch() {
  return (
    <ComingSoon/>
    // <div className="merchpage">
    //     <Merchitem name="Tirutsava T-Shirt" price = "349" images = {[BTshirtFront,BTshirtBack]}  id={0}/>
    //     <Merchitem name="Tirutsava T-Shirt" price = "349" images = {[WShirtFront,WShirtBack]}  id={1}/>
    //     <Merchitem name="Tirutsava Hoodie" price = "649" images = {[HoodieFront,HoodieBack]}  id={2}/>
  
    // </div>
  )
}
