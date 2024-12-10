import { Link, useNavigate } from 'react-router-dom';
import gamesData from './gamesData';
import { TiArrowBack } from 'react-icons/ti';

const Games = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };


  return (
    <div className="text-white mt-[130px] md:mt-[160px] px-4 md:px-10 pb-10">
      <button
        onClick={handleBackClick}
        className="game-info square-button">
          <TiArrowBack className='icon' />
        <span className='button-text'>Volver</span>
      </button>
      <div className="grid text-center">
        <h1
          className="text-center mb-[-20px] text-[20px] md:text-2xl p-6 font-pixel py-5 font-retro leading-tight"
          style={{
            color: '#FFC0CB',
            textShadow: '0 0 10px rgba(255, 192, 203, 0.7), 0 0 20px rgba(255, 105, 180, 0.6)',
            WebkitTextStroke: '1px rgba(0, 0, 0, 0.8)',
          }}
        >
          Sección de Juegos Usados
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {gamesData.map((game) => (
            <Link
              key={game.id}
              to={`/game/${game.id}`}
              style={{
                textDecoration: 'none',
                width: '100%',
                maxWidth: '400px',
                height: '500px',
                margin: '0 auto',
                border: '2px solid #03e9f4',
                borderRadius: '10px',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, #001F3F, #011627)',
                boxShadow: '0 0 0 rgba(3, 233, 244, 0)',
                transition: 'box-shadow 0.5s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(3, 233, 244, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(3, 233, 244, 0)';
              }}
            >
              <div
                style={{
                  height: '75%',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={game.images[0]}
                  alt={game.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div
                style={{
                  padding: '5px',
                  height: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '0 0 10px 10px',
                  background: 'transparent',
                }}
              >
                <h1
                  style={{
                    fontFamily: 'Racing Sans One, sans-serif',
                    marginTop:'20px',
                    color: '#03e9f4',
                    fontSize: '18px',
                    textAlign: 'center',
                    marginBottom: '15px',
                    textShadow: '0 0 3px rgba(3, 233, 244, 0.7), 0 0 30px rgba(3, 233, 244, 0.6)',
                  }}
                >
                  {game.title}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <p
                  style={{
                    fontFamily: 'Racing Sans One, sans-serif',
                    color: '#ff00ff', 
                    fontSize: '20px',
                    fontWeight: 'bold',
                    textShadow: '0 0 3px rgba(254, 0, 238, 0.7)',
                    marginRight:'15px',
                    marginBottom:'15px',
                  }}
                >
                  Precio:
                </p>
                <p
              style={{
                fontFamily: 'Racing Sans One, sans-serif',
                color: '#ffd700', 
                fontSize: '25px',
                fontWeight: 'bold',
                textShadow: '0 0 3px rgba(255, 215, 0, 0.6)',
                marginBottom: '15px',
              }}
            >
                  {game.price} € 
                </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;


















