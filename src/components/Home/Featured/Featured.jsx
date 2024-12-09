import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FeaturedCard from '../Featured/FeaturedCard';
import GamesData from '../../../pages/gamesData';
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
        color: '#00FFFF', 
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
        color: '#00FFFF',
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
    arrows: false,
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
        className='text-center md:text-center text-[20px] mb-8 font-pixel py-5 lg:text-2xl font-retro leading-tight'
        style={{
          color: '#FFC0CB', 
          textShadow:
            '0 0 15px rgba(255, 192, 203, 0.7), 0 0 30px rgba(255, 105, 180, 0.6)',
          WebkitTextStroke: '1px rgba(0, 0, 0, 0.8)',
          display: 'inline-block',
          paddingTop: '10px',
        }}
      >
        Juegos Destacados
      </h1>

      <div className="mt-[50px]">
        <Slider {...settings}>
          {GamesData.map((game) => (
            <div key={game.id}>
              <FeaturedCard
                id={game.id}
                img={game.images && game.images[0]} 
                name={game.title} 
                price={game.price} 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;

