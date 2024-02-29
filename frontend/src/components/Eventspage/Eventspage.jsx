import React from "react";
import Footer from '../../components/Footer/footer';
import retro_image from "../../Images/retro_image.png";
import sign from "../../Images/sign.jpg";
import Card from "../Card/card.jsx";
import Carousel from "../Carousel/carousel";
import data from "../Carousel/carouselData.jsx";
import "./Eventspage.css";

export default function Eventspage() {
    return (
        <div className="Eventspage">
           {/* // <NavigationBar /> */}
            <div >
                <div className="row justify-content-center event-section">
                    <div className="col-md-6 gy-2 gx-2">
                        <img src="https://images.unsplash.com/photo-1559424452-eeb3a13ffe2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Disco" width="100%" height="100%" />
                    </div>
                    <div className="col-md-6 gy-2 gx-2">
                        <div className="d-flex align-items-center justify-content-center" style={{ height: "100%" }}>
                            <h1 className="text-center upcoming-events event-text">Upcoming Events Technical</h1>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3 event-section">
                    <Carousel data={data} />
                </div>

                <div className="sign">
                    <img align="center"src={sign} alt="..."  width="40%" height="40%"/>
                </div>

                <div className="row justify-content-center mt-3 event-section">
                    <div className=" col-md-6 gy-2 gx-2">
                        <h2 className="justify-content-center ongoing-events event-text">Ongoing Events</h2>

                    </div>
                </div>
                <Card />
            </div>
            <div className="justify-content-center event-section ">
                <img src={retro_image} alt='retro sun and hills' className="events-image2" />

            </div>
            <Footer />
        </div>
    );
}