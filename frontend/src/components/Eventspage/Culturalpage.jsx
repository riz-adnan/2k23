import React from "react";
import Card from "../Card/card.jsx";
import cardData from '../Card/cardData';
import Carousel from "../Carousel/carousel";
import data from "../Carousel/carouselData.jsx";

import CountdownClock from "../CountdownClock";
import "./Eventspage.css";

export default function Cultural() {
    return (
         <div className="Eventspage">
            <div>
                <div>
                    <div className="gif-container">
                    <img  src={require("../Eventspage/gifs/logo2.gif")} alt="Example Gif" className="left-gif"/>
                    <img  src={require("../Eventspage/gifs/logo1.gif")} alt="Example Gif" className="right-gif" />
                </div>
                <h1 className="text-center upcoming-events event-text justify-content-left event-section">Cultural Events </h1>
                <h1 className="text-center upcoming-events event-text justify-content-center event-section">Upcoming Events </h1>
                </div>
                <CountdownClock/>
                <div className="row justify-content-center mt-3 event-section">
                    <Carousel data={data} />
                </div>
                <div className="row justify-content-center mt-3 event-section">
                    <div className=" col-md-6 gy-2 gx-2">
                        <h2 className="justify-content-center ongoing-events event-text">Ongoing Events</h2>
                    </div>
                </div>
                <div className="styled-CardContainer">
                    <div className="row justify-content-start">
                        <Card data={cardData}/>
                    </div>
                </div>
            </div>
            <div className="justify-content-center event-section-two">
                <img src={require("../Eventspage/gifs/logo3.gif")} alt='retro sun and hills' className="events-image2 bottom-gif" />
            </div>
         </div>
    );
}