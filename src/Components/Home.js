import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../Assets/Images/1.jpg";
import image2 from "../Assets/Images/2.jpg";
import image3 from "../Assets/Images/3.jpg";
import AllProducts from "./AllProducts";

const Home = () => {

  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              src={image1}
              alt="First slide"
              style={{ height: "500px", width: "1500px" }}
            />
            <Carousel.Caption>
              <h3>Smart watch</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              src={image2}
              alt="Second slide"
              style={{ height: "500px", width: "1500px" }}
            />
            <Carousel.Caption>
              <h3>Smart phones</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={image3}
              alt="Third slide"
              style={{ height: "500px", width: "1500px" }}
            />
            <Carousel.Caption>
              <h3>Sport shoes</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <AllProducts />
    </>
  );
};

export default Home;
