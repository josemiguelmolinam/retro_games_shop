const FAQs = () => {
  return (
    <div className='container mt-36 mx-auto px-10 py-10 text-gray-300'>
      <h1
        className='text-3xl text-gray-200 font-racing mb-16'
        style={{
          textShadow:
            '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
          WebkitTextStroke: '1px rgba(0,0,0,0.8)',
        }}
      >
        Preguntas Frecuentes
      </h1>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          ¿Qué tipos de juegos y consolas ofrecen?
        </h2>
        <p>
          Ofrecemos una amplia variedad de juegos y consolas retro, desde
          modelos clásicos hasta ediciones raras. Nuestra selección incluye
          marcas bien conocidas como Nintendo, Sega, PlayStation, y más. Ya sea
          que busques una consola de tu infancia o un juego difícil de
          encontrar, tenemos opciones para todos los gustos y necesidades.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          ¿Cómo puedo comprar un juego o consola?
        </h2>
        <p>
          Para comprar un juego o consola de Retro Games Japan, simplemente
          navega por nuestro catálogo en línea para ver los modelos disponibles.
          Una vez que encuentres lo que te interesa, puedes contactarnos
          directamente a través de nuestro sitio web o por teléfono. Nuestro
          equipo te guiará a lo largo del proceso de compra, incluyendo opciones
          de pago, documentación necesaria y cualquier otra pregunta que tengas.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          ¿Ofrecen servicios de envío y entrega?
        </h2>
        <p>
          Sí, ofrecemos servicios de envío y entrega a diversas ubicaciones en
          Europa. Nuestro equipo se encarga de todo el proceso de envío,
          asegurando que tu juego o consola llegue de manera segura y a tiempo.
          Proporcionamos información detallada de seguimiento y actualizaciones
          regulares a lo largo del proceso de envío. Para obtener más
          información sobre tarifas de envío y tiempos de entrega, por favor,
          contacta con nuestro equipo de soporte.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          ¿Proporcionan inspecciones de los productos?
        </h2>
        <p>
          Ofrecemos inspecciones opcionales de productos después de la compra si
          el cliente lo desea. Este servicio te permite tener la tranquilidad de
          conocer el estado de los productos. Nuestro equipo te proporcionará
          detalles sobre el proceso de inspección y los costos asociados. Por
          favor, háznoslo saber si estás interesado en este servicio cuando
          consultes sobre un producto.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          ¿Cómo puedo contactar con el soporte al cliente?
        </h2>
        <p>
          Nuestro equipo de soporte al cliente está disponible para asistirte
          con cualquier duda o consulta. Puedes ponerte en contacto con nosotros
          a través de nuestro formulario en línea, por correo electrónico o por
          teléfono. Estamos aquí para ayudarte con cualquier problema
          relacionado con tu compra o cualquier otra consulta.
        </p>
      </div>
    </div>
  );
};

export default FAQs;
