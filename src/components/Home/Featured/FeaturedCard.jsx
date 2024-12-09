import { Link } from 'react-router-dom';

const FeaturedCard = ({ id, img, name, price }) => {
  return (
    <div
      className="shadow-lg transition-all duration-300"
      key={id}
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
          src={img || '/assets/images/placeholder.jpg'}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <div
        style={{
          
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
            marginTop:'20px',
            fontFamily: 'Racing Sans One, sans-serif',
            color: '#03e9f4',
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '15px',
            textShadow: '0 0 15px rgba(3, 233, 244, 0.7), 0 0 30px rgba(3, 233, 244, 0.6)',
          }}
        >
          {name}
        </h1>

        <div className="">
          <p
            style={{
              fontFamily: 'Racing Sans One, sans-serif',
              color: '#ffd700',
              fontSize: '25px',
              fontWeight: 'bold',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.6)',
              marginBottom: '-39px',
              marginLeft:"250px",
            }}
          >
            {price} €
          </p>
         
          <Link to={`/game/${id}`}>
          <div>
            <button
              style={{
                marginBottom:'9px',
                fontFamily: 'Racing Sans One, sans-serif',
                marginRight:'200px',
                color: '#03e9f4',
                fontSize: '12px',
                textTransform: 'uppercase',
                border: '2px solid #03e9f4',
                borderRadius: '8px',
                padding: '8px 16px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                transition: 'border-color 0.7s ease, box-shadow 0.7s ease, background-color 0.7s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffffff';
                e.target.style.backgroundColor = '#03e9f4';
                e.target.style.boxShadow = '0 0 25px rgba(3, 233, 244, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#03e9f4';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.boxShadow = 'none';
              }}
            >
              + info
            </button>
            </div>
          </Link>
          </div>
        </div>
      </div>
  );
};

export default FeaturedCard;

