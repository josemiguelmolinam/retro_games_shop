const Hero = () => {
  return (
    <div className='md:mt-6 text-white'>
      <div className='h-screen flex flex-col md:flex-row justify-center items-center'>
        <div className='w-full md:text-center md:ml-[450px]  md:mb-24 space-x-5 mt-[-5px] md:mt-0 p-4'>
        <h1
  className="text-[43px] ml-2 md:text-[92px] text-3xl font-racing text-[#00FFFF]"
  style={{
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 4px 6px rgba(0, 255, 255, 0.7)",
  }}
>
  Retro Games Japan
</h1>

  
          <p
            className='text-[11px] mt-16 font-retro font-semibold p-6 text-gray-100 lg:text-base py-3 text-center mx-auto'
            style={{
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0,0,0,0.1)',
            }}
          >
            Bienvenido a Retro Games Japan, donde te traemos consolas y títulos de videojuegos raros y clásicos directamente desde Japón
          </p>
        </div>

        <div className='w-full py-4 px-7 md:w-2/5 mt-4 md:mt-0 md:order-1'>

        </div>
      </div>
    </div>
  );
};

export default Hero;

