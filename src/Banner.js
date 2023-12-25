import Carousel from 'react-bootstrap/Carousel';

function Banner(){
    return(
        <div>
            <Carousel data-bs-theme="dark" className='mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="image/images.jpg"
          alt="First slide"
          style={{height:400}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/movies1.jpg"
          alt="Second slide"
          style={{height:400}}

      
        />
        
      </Carousel.Item>
      
    </Carousel>
        </div>
    )
}
export default Banner