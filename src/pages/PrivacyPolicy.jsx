const PrivacyPolicy = () => {
  return (
    <div className='container mx-auto mt-24 px-10 py-10 text-gray-300'>
      <h1
        className='text-3xl text-gray-200 font-racing mb-16'
        style={{
          textShadow:
            '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
          WebkitTextStroke: '1px rgba(0,0,0,0.8)',
        }}
      >
        Política de Privacidad
      </h1>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Introducción
        </h2>
        <p>
          En Retro Games Japan, nos comprometemos a proteger tu privacidad. Esta
          Política de Privacidad explica cómo recopilamos, usamos y protegemos tu
          información personal cuando visitas nuestro sitio web o realizas una
          compra con nosotros. Al utilizar nuestro sitio web, aceptas los términos
          de esta política.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Información que Recopilamos
        </h2>
        <p>
          Recopilamos la información que nos proporcionas directamente, como cuando
          creas una cuenta, realizas una compra o contactas a nuestro equipo de
          soporte. Esta información puede incluir tu nombre, dirección de correo
          electrónico, número de teléfono, dirección de envío y detalles de pago.
          También recopilamos información sobre tu uso de nuestro sitio web, como
          tu dirección IP, tipo de navegador y comportamiento de navegación.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Cómo Usamos Tu Información
        </h2>
        <p>
          Usamos tu información para procesar tus pedidos, proporcionar soporte al
          cliente y mejorar nuestros servicios. Esto incluye usar tu información
          para comunicarte sobre tus pedidos, responder a tus consultas y enviarte
          actualizaciones y ofertas promocionales. También podemos utilizar tu
          información para analizar el uso del sitio web y mejorar la funcionalidad
          de nuestro sitio web y la experiencia del usuario.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Cómo Compartimos Tu Información
        </h2>
        <p>
          No vendemos ni alquilamos tu información personal a terceros. Podemos
          compartir tu información con proveedores de servicios de confianza que
          nos ayudan a operar nuestro negocio y proporcionar servicios. Estos
          proveedores están contractualmente obligados a proteger tu información y
          usarla solo para los fines para los que fue divulgada. También podemos
          divulgar tu información si lo exige la ley o para proteger nuestros
          derechos y propiedad.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Tus Opciones
        </h2>
        <p>
          Tienes el derecho de acceder, actualizar y eliminar tu información
          personal. Puedes hacerlo iniciando sesión en tu cuenta...
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

