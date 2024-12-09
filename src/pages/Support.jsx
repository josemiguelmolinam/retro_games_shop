import React from 'react';

const Support = () => {
  return (
    <div className='container mx-auto mt-36 px-10 py-10 text-gray-300'>
      <h1
        className='text-3xl text-gray-200 font-racing mb-16'
        style={{
          textShadow:
            '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
          WebkitTextStroke: '1px rgba(0,0,0,0.8)',
        }}
      >
        Soporte al Cliente
      </h1>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          ¿Cómo puedo ponerme en contacto con el soporte al cliente?
        </h2>
        <p>
          Puedes ponerte en contacto con nuestro equipo de soporte al cliente a
          través de múltiples canales. Para asistencia inmediata, puedes llamarnos
          a nuestra línea de soporte dedicada. Alternativamente, puedes enviarnos un
          correo electrónico o utilizar el formulario de contacto en nuestro sitio web.
          Nuestro equipo de soporte está disponible de lunes a viernes, de 9 AM a 6 PM
          hora en Japón, para atender tus consultas.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          ¿Cómo puedo hacer un seguimiento del estado de mi envío de automóvil?
        </h2>
        <p>
          Una vez que tu automóvil haya sido enviado, te proporcionaremos la
          documentación de envío y la fecha estimada de llegada. Puedes hacer un
          seguimiento del estado de tu automóvil a través de varias aplicaciones y
          el sitio web de la empresa de envíos. Ten en cuenta que, aunque proporcionamos
          una fecha estimada de llegada, pueden ocurrir retrasos debido a condiciones
          meteorológicas u otros incidentes imprevistos. Si tienes alguna pregunta o
          inquietud acerca de tu envío, por favor contacta a nuestro equipo de soporte
          para obtener más ayuda.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          ¿Ofrecen inspecciones de vehículos?
        </h2>
        <p>
          Sí, ofrecemos inspecciones opcionales de vehículos después de la compra.
          Este servicio te permite tener tranquilidad al asegurarte del estado de tu
          vehículo. Nuestro equipo te proporcionará información detallada sobre el
          proceso de inspección y los costos asociados. Por favor, háznoslo saber si
          estás interesado en este servicio cuando consultes sobre un automóvil.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          ¿Cuáles son las opciones de pago disponibles?
        </h2>
        <p>
          En Retro Games Japan, ofrecemos varios métodos de pago seguros y convenientes para que puedas realizar tu compra sin inconvenientes. Puedes elegir entre las siguientes opciones:
        </p>
        <ul className='list-disc pl-6'>
          <li>
            <strong className='text-pink-600'>Transferencia Bancaria:</strong> Realiza el pago directamente desde tu cuenta bancaria. Te proporcionaremos los detalles necesarios para completar la transferencia de manera segura.
          </li>
          <li>
            <strong className='text-pink-600'>Wise:</strong> Utiliza Wise para realizar pagos internacionales de forma rápida y con tasas de cambio competitivas.
          </li>
          <li>
            <strong className='text-pink-600'>PayPal:</strong> Utiliza tu cuenta de PayPal para realizar el pago de manera rápida y segura. Puedes usar tu saldo de PayPal o vincular tu cuenta bancaria para completar el pago.
          </li>
        </ul>
        <p>
          Si tienes alguna pregunta sobre las opciones de pago o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte. ¡Estamos aquí para ayudarte!
        </p>
      </div>
    </div>
  );
};

export default Support;






