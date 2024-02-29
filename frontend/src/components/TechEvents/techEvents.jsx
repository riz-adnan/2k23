import React, { useEffect, useRef, useState } from "react";
import axios from "../../axios";
import Card from "../Card/card.jsx";
import Carousel from "../Carousel/carousel";
import Footer from '../Footer/footer';
import NavigationBar from "../Navbar/navigationBar";
import Scroll from "../Scroll/Scroll";
import "./techEvents.css";

import hihj from "./../../Images/Hihj.gif";

export default function TechEvents() {
    const [techEventsData,setTechEventsData]= useState();

    const upcomingSection=useRef(null);
    const onGoingSection=useRef(null);
    console.log("hello");
    useEffect(()=>{axios.get("/techevent").then((res)=>{console.log("f",res.data) ;setTechEventsData(res.data)})},[]);
    for(let x in techEventsData){
        console.log(techEventsData[x]);
    }
    if(techEventsData)
    techEventsData.map((data)=>{
        data.page="tech"
        data.image_carousel=`/technicalContent/technicalImageCarousel/${data.sname}.png`
        data.image_card=`/technicalContent/technicalImageCard/${data.sname}.png`
        if(data.rulebook.length==0){
            data.rulebook=`/technicalContent/technicalRuleBook/${data.sname}_rulebook.pdf`
        }
    })
    if (techEventsData)
    return(
        <div className="Technical">
            <NavigationBar pagetype="TechEvent"/>
            {/* <div className="styled-TechnicalIntro">
                <iframe className="styled-IntroGif" title="intro"  src={tv}></iframe>
                <h1 className="styled-IntroHeading">TECHNICAL</h1>
            </div> */}
            <div className="container-fluid vh-100 tech-introgif">
                <div className="d-flex flex-column justify-content-center justify-content-md-end h-100">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="tech-heading text-white text-center d-block d-md-none d-sm" id="tech-heading">TECHNICAL</h1>
                            <h1 className="tech-heading text-white d-none d-md-block">TECHNICAL</h1>
                            
                            <Scroll className="upcoming-scroll" section={upcomingSection} arrowColor="white"/>
                        </div>
                        <div className="col-12 p-3 buffer"></div>
                        <div className="col-12 p-3 buffer"></div>
                        <div className="col-12 p-3 buffer"></div>
                    </div>
                </div>
             </div>
            <div ref={upcomingSection} className="styled-TechnicalUpcoming mt-3">
                <div className="styled-UpcomingHeading text-center ">
                    <h2 className="styled-UpcomingHeading2" >UPCOMING EVENTS</h2>
                </div>
                
                <iframe className="styled-UpcomingGif_1" src={hihj} title="anim1"alt=""></iframe>
                <iframe className="styled-UpcomingGif_2" src={hihj} title="anim2" alt=""></iframe>
                
                <div className="row justify-content-center styled-Carousel mt-3">
                    <Carousel data={techEventsData} />
                    <Scroll section={onGoingSection} arrowColor="white"/>
                </div>
               
            </div>
            <div ref={onGoingSection} className="styled-TechnicalCards mt-3">
                <div className="styled-CardsHeading text-center">
                        <h2 className="styled-cardsHeading2">On-GOING EVENTS</h2>
                </div>
                <div className="styled-CardContainer">
                    <div className="row justify-content-start">
                         <Card data={techEventsData}/>
                    </div>
                </div>
                <Footer/>
            </div>
            
            
            
        </div>
    )

}






