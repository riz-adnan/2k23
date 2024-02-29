import Carousel from 'react-bootstrap/Carousel';
function MerchCarousel(props){
    let arr =props.images;

    const arrayVal = arr.map((item) =>
        <Carousel.Item>
          <img
            className="d-block w-100 merch-image"
            src={item}
            alt="First slide"
          />
      </Carousel.Item>
    )
    // console.log(arrayVal[0]);
    console.log(props.images[0]);
    return <div>
        <Carousel>
            {arrayVal}
        </Carousel>
    </div>
}
export default MerchCarousel;