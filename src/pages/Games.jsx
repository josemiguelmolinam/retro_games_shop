import { Link } from 'react-router-dom';
import gamesData from './gamesData';

const Games = () => {
  return (
    <div className='text-white mt-[120px] md:mt-[160px] px-4 md:px-10 pb-10'>
      <div className='grid text-center'>
        <h1
          className='text-center text-[20px] md:text-2xl p-6 mb-4 font-pixel py-5 font-retro leading-tight'
          style={{
            color: '#FFC0CB',
            textShadow:
              '0 0 10px rgba(255, 192, 203, 0.7), 0 0 20px rgba(255, 105, 180, 0.6)',
            WebkitTextStroke: '1px rgba(0, 0, 0, 0.8)',
          }}
        >
          Sección de Juegos
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
          {gamesData.map((game) => (
            <div
              key={game.id}
              style={{
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
                e.currentTarget.style.boxShadow =
                  '0 0 25px rgba(3, 233, 244, 0.6)';
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
                  padding: '20px',
                  height: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '0 0 10px 10px',
                  background: 'transparent',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'Racing Sans One, sans-serif',
                    color: '#03e9f4',
                    fontSize: '17px',
                    textAlign: 'center',
                    marginBottom: '15px',
                    textShadow:
                      '0 0 15px rgba(3, 233, 244, 0.7), 0 0 30px rgba(3, 233, 244, 0.6)',
                  }}
                >
                  {game.title}
                </h2>
                <div>
                  <p
                    style={{
                      fontFamily: 'Racing Sans One, sans-serif',
                      marginLeft: '250px',
                      color: '#ffd700',
                      fontSize: '29px',
                      fontWeight: 'bold',
                      textShadow: '0 0 10px rgba(255, 215, 0, 0.6)',
                      marginBottom: '-200px',
                    }}
                  >
                    {game.price} &euro;
                  </p>
                </div>
                <div>
                  <Link to={`/game/${game.id}`}>
                    <button
                      style={{
                        fontFamily: 'Racing Sans One, sans-serif',
                        marginBottom: '55px',
                        marginRight: '200px',
                        color: '#03e9f4',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        border: '2px solid #03e9f4',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        transition:
                          'border-color 0.7s ease, box-shadow 0.7s ease, background-color 0.7s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#ffffff';
                        e.target.style.backgroundColor = '#03e9f4';
                        e.target.style.boxShadow =
                          '0 0 25px rgba(3, 233, 244, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#03e9f4';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      + info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
