import { Grid } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./carousel.css";
import image from "./../../Images/event1.png"

/*
here data is imported from the carouselData.jsx file
*/

const Carousel = ({ data }) => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 4000, // 4 seconds duration between each slide

    };
    // Get today's date
    const today = new Date();

    // Filter events that are after today's date
    const filteredEvents = data.filter(
        (event) => new Date(event.date) >= today
    );

    // Sort filtered events by date in ascending order
    const sortedEvents = filteredEvents.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );

    // Slice sorted events to get only four elements
    const slicedEvents = sortedEvents.slice(0, 4);
    return (
        <>
            {
                /*
                The data is mapped to the carousel.
                the members of the data array are accessed using the dot notation as :
                item.eventName, item.src, item.description, item.alt
                item.eventDate, item.eventTime can also be used.
                */
            }
            
            <div className="slideContent">
                <Slider {...settings}>
                    {slicedEvents.map((item) => (
                        <div key={item.id}>
                            <Grid container spacing={0} className="slideGrid">
                                <Grid item lg={6} xs={12} md={12} >
                                    <div className="imageSlide"><a href={item.registrationlink}><img src={item.image_carousel} alt="" className='gridItem slideImage' /></a></div>
                                </Grid>
                                <Grid item lg={6} xs={12} md={12}  className='gridItem'>
                                    <h3 className={`slideHeading_${item.page}`}>{item.name}</h3>
                                    <p className="slideDescription">{item.description}</p>
                                </Grid>
                            </Grid>

                        </div>
                    ))}
                </Slider>
            </div >
        </>
    )
}
export default Carousel;