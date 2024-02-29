import React from 'react';
import CarouselEvents from './../Carousel/carouselEvents';
import CarouselFilm from './../Carousel/carouselFilm';
import './homepage.css';

export default function Homepage() {

const [ isArrowVisible, setIsArrowVisible ] = React.useState(false);

    const handleButtonClick = () => {
        setIsArrowVisible(true);

        setTimeout(() => {
            setIsArrowVisible(false);
        }, 3000);
    }

  return (
    <div className="container-fluid w-100 p-0 homePage-body">
        {/* <div className="container-fluid home-head" >

            <div className='row vh-100 text-center'>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src={require("./Images/home_logo.png")} alt="tirutsava logo" width={"90%"} />
            </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center home-clock">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-12">
                                <p className="Countdown-Clock">FEST STARTS IN</p>
                            </div>
                            <div className->
                                <CountdownClock />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>    */}
            
        
        {/* <div className="container-fluid p-0 Tirutsava-Image">
            <img src={require("./Images/home_bg2.png")} alt="tirutsava logo" width={"100%"} />
        </div> */}

        {/* Main HomePage Display */}
        <div className="container-fluid vh-100 p-0 home-head">
            <p className='home-heading text-center'>Tirutsava</p>
            <p className='dates text-center justify-content-end'>31ST MARCH-2ND APRIL</p>
            <svg   className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
			</svg>
        </div>


        <div className='about p-0'></div>

        {/* About section */}
        <div className="about-count text-center">
            <div className='about-part-1 d-flex justify-content-around'>
                <div className="about-circles">
                    <div className="about1 d-flex align-items-center justify-content-center p-0 mb-4">
                        <p className="about-des m-0">45+</p>
                    </div>
                    <p className="d-flex justify-content-center about-content">Events</p>
                </div>
                <div className="about-circles">
                    <div className="about1 d-flex align-items-center justify-content-center p-0 mb-4 mr-0">
                        <p className="about-des m-0 mb-1 ml-2">20K</p>
                    </div>
                    <p className="d-flex justify-content-center about-content">Participation</p>
                </div>
                <div className="about-circles">
                    <div className="about1 d-flex align-items-center justify-content-center p-0 mb-4">
                        <p className="about-des m-0">3L+</p>
                    </div>
                    <p className="d-flex justify-content-center about-content">Prizes</p>
                </div>
            </div>
            

            {/* about heading and description */}
            <div className='about-details'>
                <h1 className='about-heading'>ABOUT</h1>
                <p className='about-text'>Fancy yourself an experience of the 6th rendition of Tirutsava with a fresh pop of retro and classical tones, a spring composition of synthwaves and cassettes, a painting of arcades and neon beams. Every type of entertainment you could ask for, for the tastes of every soul, waiting here with us.</p>
            </div>

        </div>



        {/* Events */}
        
        <div className='container home-events'>
            <h1 className="text-center events-header"> EVENTS </h1>
            <CarouselEvents/>
        </div>

        {/* Memories */}
        <div className='container home-events memories'>
            <h1 className="text-center events-header memories-header"> MEMORIES </h1>
                <div className="home-carousel-memories">
                    <CarouselFilm/>

                </div>
        </div>
        
    </div>
  )
}