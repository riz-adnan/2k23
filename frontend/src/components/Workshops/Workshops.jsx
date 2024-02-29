import React, { Fragment } from "react";
import Card from "../Card/card";
import cardData from "../Card/cardData";
import CountdownClock from "../CountdownClock";
import NavigationBar from "../Navbar/navigationBar";
import { useState, useEffect,useRef } from "react";
import axios from "../../axios";
import InfoPopout from "../InfoPopout";
import Footer from "../Footer/footer";
import "./Workshops.css";
import carouselData from "./../Carousel/carouselData";
import Carousel from "../Carousel/carousel";
import WorkshopGIF from "./workshops.gif";
import Scroll from "../Scroll/Scroll";

export default function Workshops() {
    const [workshopData, setworkshopData] = useState();
    const upcomingSection=useRef(null);
    const onGoingSection=useRef(null);
    console.log("hello");
    useEffect(() => {
        axios.get("/workshop").then((res) => {
            console.log("f", res.data);
            setworkshopData(res.data);
        });
    }, []);
    for (let x in workshopData) {
        console.log(workshopData[x]);
        
    }
    if (workshopData)
        workshopData.map((data) => {
            data.page = "work";
            data.image_carousel=`/workshopContent/workshopImageCarousel/${data.sname}.png`
            data.image_card=`/workshopContent/workshopImageCard/${data.sname}.png`
            if(data.rulebook.length==0){
                data.rulebook=`/workshopContent/workshopRuleBook/${data.sname}_rulebook.pdf`
            }
        });
    if (workshopData)
        return (
            <React.Fragment>
                <NavigationBar pagetype="Workshop" />
                <div className="container-fluid vh-100 wks-img">
                    <div className="d-flex flex-column justify-content-center justify-content-md-end h-100">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="wks-mobile-heading text-white text-center d-block d-md-none">
                                    WORKSHOPS
                                </h1>
                                <h1 className="wks-heading text-white d-none d-md-block">
                                    WORKSHOPS
                                </h1>
                                <Scroll className="upcoming-scroll" section={upcomingSection} arrowColor="white"/>
                            </div>
                            <div className="col-12 p-3 buffer"></div>
                            <div className="col-12 p-3 buffer"></div>
                            <div className="col-12 p-3 buffer"></div>
                        </div>
                    </div>
                </div>
                <div ref={upcomingSection} className="container-fluid bg-black">
                    <div className="row">
                        <h1 className="wks-heading2 text-white text-center mt-5 mb-5">
                            UPCOMING WORKSHOPS
                        </h1>
                    </div>
                    <div className="row mb-5">
                        <div className="row justify-content-center mb-5">
                            <Carousel data={workshopData} />
                            <Scroll section={onGoingSection} arrowColor="white"/>
                        </div>
                    </div>
                    <div ref={onGoingSection} className="container pb-5">
                        <div className="row pt-5">
                            <h1 className="wks-heading2 text-white text-center">
                                ALL WORKSHOPS
                            </h1>
                        </div>
                        <div className="row pt-3">
                            <Card data={workshopData} />
                        </div>
                    </div>
                    {/* <div className="container p-5 bg-black text-bg-dark">
                <p>Need to integrate this button for cards.</p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#info-popout">
                    Launch popout
                </button>
                <div className="modal fade" id="info-popout" tabindex="-1" aria-labelledby="info-popout" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
                        <InfoPopout />
                    </div>
                </div>
            </div> */}
                </div>
                <Footer />
            </React.Fragment>
        );
}
