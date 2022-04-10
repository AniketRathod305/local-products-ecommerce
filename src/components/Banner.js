import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Banner.css'

function Banner() {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 size"
      src="https://i.pinimg.com/originals/b7/4e/0d/b74e0d85eb44c376b281bc9233289b01.jpg"
      alt="First slide"
    />
    <div class="carousel-caption d-none d-md-block">
          <h5>Wooden toys from Sawantwadi</h5>
          <p>Experience the excellent craftsmanship of Maharashtra</p>
    </div>
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 size"
      src="https://shop.gaatha.com/image/cache/catalog/Gaatha/17_03_2020/%E0%A4%B6%E0%A5%81%E0%A4%AD-%E0%A4%B2%E0%A4%BE%E0%A4%AD-%E2%81%82-Glass-Bead-%E2%81%82-Temple-Toran-%E2%81%82-35-x-2-8-845x435.jpg"
      alt="Second slide"
    />
    <div class="carousel-caption d-none d-md-block">
          <h5>Saurashtra bead work toran</h5>
          <p>Decorate your homes with Handicrafts of Gujarat</p>
        </div>
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 size"
      src="https://static.toiimg.com/photo/66151586.cms"
      alt="Third slide"
    />
    <div class="carousel-caption d-none d-md-block">
          <h5>Jaipur mojris</h5>
          <p>Colourful mojris of Rajasthan</p>
        </div>
   
  </Carousel.Item>
</Carousel>



    </div>
  )
}

export default Banner