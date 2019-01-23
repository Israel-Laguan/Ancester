import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Banner0 from "../Assets/img/Home/Web-banner.svg";
import Banner1 from "../Assets/img/Home/banner-ancester-academy.svg";

export default () => (
  <Carousel autoPlay dynamicHeight infiniteLoop showThumbs={false}>
    <div>
      <img src={Banner1} alt='Gunz0'/>
      <Link to="/"><p className="legend">Plataforma de Aprendizaje</p></Link>
      
    </div>
    <div>
      <img src={Banner0} alt='Gunz1'/>
      <Link to="/"><p className="legend">Prueba nuestro Juego Hack'n'slash</p></Link>      
    </div>
    {/* <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
      <p className="legend">Legend 8</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
      <p className="legend">Legend 9</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
      <p className="legend">Legend 10</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
      <p className="legend">Legend 11</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
      <p className="legend">Legend 12</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
      <p className="legend">Legend 13</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
      <p className="legend">Legend 14</p>
    </div> */}
  </Carousel>
  );

