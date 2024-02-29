import React, { useEffect, useRef, useState } from "react";
import axios from "../../axios";
import Card from "../Card/card.jsx";
import Carousel from "../Carousel/carousel";
import Footer from "../Footer/footer";
import NavigationBar from "../Navbar/navigationBar";
import Scroll from "../Scroll/Scroll";
import "./Culturalspage.css";

import one from "./gifs/logo1.gif";
import two from "./gifs/logo2.gif";

export default function Culturals() {
    const [cultEventsData, setCultEventsData] = useState();
    const upcomingSection=useRef(null);
    const onGoingSection=useRef(null);
    useEffect(() => {
        axios.get("/cultevent").then((res) => {
            setCultEventsData(res.data);
        });
    }, []);
    if (cultEventsData)
        cultEventsData.map((data) => {
            data.page = "cult";
            data.image_carousel=`/culturalContent/culturalImageCarousel/${data.sname}.png`
            data.image_card=`/culturalContent/culturalImageCard/${data.sname}.png`
            if(data.rulebook.length==0){
                data.rulebook=`/culturalContent/culturalRuleBook/${data.sname}_rulebook.pdf`
            }
        });
    if (cultEventsData)
        return (
            <div className="Cultural">
                <NavigationBar pagetype="CultEvent" />
                {/* <div className="styled-CulturalIntro">
        <iframe className="styled-IntroGif" title="intro" src={tv}></iframe>
        <h1 className="styled-IntroHeading">Cultural</h1>
      </div> */}
                <div className="container-fluid vh-100 Cult-introgif">
                    <div className="d-flex flex-column justify-content-center justify-content-md-end h-100">
                        <div className="row">
                            <div className="gifs col-10">
                                <img
                                    className="two-gif"
                                    src={two}
                                    style={{ maxHeight: "50vh" }}
                                    alt="Tirutsava"
                                ></img>
                                <div className="one col-8">
                                    <img
                                        className="one-gif"
                                        src={one}
                                        alt="Tirutsava"
                                    ></img>
                                </div>
                            </div>
                            <div className="col-12">
                                <h1 className="Cult-heading text-white text-center d-block d-md-none d-sm  wks-mobile-heading">
                                    CULTURAL
                                </h1>
                                <h1 className="Cult-heading text-white d-none d-md-block  wks-mobile-heading">
                                    CULTURAL
                                </h1>
                                
                                <Scroll className="upcoming-scroll" section={upcomingSection} arrowColor="white"/>
                            </div>
                            <div className="col-12 p-3 buffer"></div>
                            <div className="col-12 p-3 buffer"></div>
                            <div className="col-12 p-3 buffer"></div>
                        </div>
                    </div>
                </div>
                <div ref={upcomingSection} className="styled-CulturalUpcoming mt-3">
                    <div className="styled-UpcomingHeading text-center ">
                        <h2 className="styled-UpcomingHeading2">
                            UPCOMING EVENTS
                        </h2>
                    </div>

                    {/* <iframe
          className="styled-UpcomingGif_1"
          src={hihj}
          title="anim1"
          alt=""
        ></iframe>
        <iframe
          className="styled-UpcomingGif_2"
          src={hihj}
          title="anim2"
          alt=""
        ></iframe> */}

                    <div className="row justify-content-center styled-Carousel mt-3">
                        <Carousel data={cultEventsData} />
                        <Scroll section={onGoingSection} arrowColor="white"/>
                    </div>
                </div>
                <div ref={onGoingSection}className="styled-CulturalCards mt-3">
                    <div className="styled-CardsHeading text-center">
                        <h2 className="styled-cardsHeading2">
                            On-GOING EVENTS
                        </h2>
                    </div>
                    <div className="styled-CardContainer">
                        <div className="row justify-content-start">
                            <Card data={cultEventsData} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
}
