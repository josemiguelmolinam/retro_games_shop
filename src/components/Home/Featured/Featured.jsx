import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FeaturedCard from '../Featured/FeaturedCard';
import CarsData from '../../../pages/CarsData';
import '../../../index.css';
import { PiCaretLeftFill, PiCaretRightFill } from 'react-icons/pi';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: 'block',
        color: '#03e9f4',
        fontSize: '40px',
        marginRight: '-10px',
      }}
      onClick={onClick}
    >
      <PiCaretRightFill />
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: 'block',
        color: '#03e9f4',
        fontSize: '40px',
        marginLeft: '-30px',
      }}
      onClick={onClick}
    >
      <PiCaretLeftFill />
    </button>
  );
};

const Featured = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '0',
        },
      },
    ],
  };

  return (
    <div className="container text-center mt-38 mx-auto">
      <h1
        className="text-center md:text-center text-3xl mt-10 font-racing py-5 lg:text-4xl font-bold leading-tight"
        style={{
          color: '#03e9f4',
          textShadow:
            '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
          WebkitTextStroke: '1px rgba(0,0,0,0.8)',
          display: 'inline-block',
          paddingBottom: '70px',
        }}
      >
        Featured Cars
      </h1>

      <div className="mt-[50px]">
        <Slider {...settings}>
          {CarsData.map((car) => (
            <div key={car.id}>
              <FeaturedCard
                id={car.id}
                img={car.image || (car.images && car.images[0])}
                name={`${car.make} ${car.model}`}
                price={car.price}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
