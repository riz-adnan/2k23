import React from "react";
import "./Scroll.css";

export default function Scroll(props,{className}){

    const scrollToSection=(elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior:'smooth'
        })
    }
    // const technicalCards=useRef(null);
    return (
        <div onClick={()=>scrollToSection
            (props.section)} class={"arrow bounce "+(props.className || "")}>
        <div style={{color: props.arrowColor}} class="arrow-down fa fa-arrow-down fa-2x"></div>
        </div>
    )
}