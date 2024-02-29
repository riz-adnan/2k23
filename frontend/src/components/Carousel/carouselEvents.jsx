import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './carouselEvent.css';

const CarouselEvents = () => {

const settings = {
    centerMode: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    edgeFriction: 0.05,
    infinite: true,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1
        }
    }
    ]
};

return (
  <div className="eventContent">
      <Slider {...settings}>
          <Grid container spacing={1} className="slideGrid">
                      <Grid item lg={12} xs={12} md={12} >
                      <Link to="/technical">
                      <div><img src="https://picsum.photos/200"alt="" className='eventItem eventImage' /></div>
                      </Link>
                      </Grid>
          </Grid>
          <Grid container spacing={1} className="slideGrid">
                      <Grid item lg={12} xs={12} md={12} >
                      <Link to="/cultural">
                      <div><img src="https://picsum.photos/200"alt="" className='eventItem eventImage' /></div>
                      </Link>
                      </Grid>
          </Grid>
          <Grid container spacing={1} className="slideGrid">
                      <Grid item lg={12} xs={12} md={12} >
                      <Link to="/workshop">
                      <div><img src="https://picsum.photos/200"alt="" className='eventItem eventImage' /></div>
                      </Link>
                      </Grid>
          </Grid>
          <Grid container spacing={1} className="slideGrid">
                      <Grid item lg={12} xs={12} md={12} >
                      <Link to="/sponsors">
                      <div><img src="https://picsum.photos/200"alt="" className='eventItem eventImage' /></div>
                      </Link>
                      </Grid>
          </Grid>
          <Grid container spacing={1} className="slideGrid">
                      <Grid item lg={12} xs={12} md={12} >
                      <Link to="/merchendise">
                      <div><img src="https://picsum.photos/200"alt="" className='eventItem eventImage' /></div>
                      </Link>
                      </Grid>
          </Grid>
          <Grid container spacing={1} className="slideGrid">
                      <Grid item lg={12} xs={12} md={12} >
                      <Link to="/ourteam">
                      <div><img src="https://picsum.photos/200"alt="" className='eventItem eventImage' /></div>
                      </Link>
                      </Grid>
          </Grid>

      </Slider>
  </div>
);
};

export default CarouselEvents;