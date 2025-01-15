// import logo from './logo.svg';
import './App.css';
import house from './statics/house.png';
import paymentondelivery from './statics/payment-on-delivery.png';
import delivery from './statics/delivery.png';
import growth from './statics/growth.png';


function App() {
  return (
    <div className="app">
    <header className="app-header">
      <div className="app-header-title">
        <h1 className="app-header-title-text">NombreEmpresa</h1>
      </div>
      <div className="app-header-logo">Hola2</div>
    </header>
  
    <div className="app-services">
      <div className="app-services-images">
        <div className="app-services-description">
          <b>¡Tu solución confiable para envíos y recolecciones rápidas!</b> <br />
          En <b>NombreEmpresa</b>, hacemos que tus envíos sean más fáciles que nunca. Recogemos tus paquetes directamente donde estés y los llevamos a su destino de forma segura y puntual. 
          Además, ofrecemos el servicio de pago contra entrega, para que tú y tus clientes tengan la tranquilidad de realizar transacciones sin preocupaciones.
          Ya sea que necesites enviar documentos, productos o cualquier tipo de paquete, estamos aquí para ayudarte con un servicio amable, eficiente y accesible. <br />
          <b>¡Cuenta con nosotros para conectar distancias y facilitar tu día a día!</b>
        </div>
        <div className="app-services-image"></div>
      </div>
    </div>
    
    <div className="grid-container">
      <div className="grid-item">
        <article className="teaser">
          <figure className="teaser-image">
            <img src={house} alt="Entregas en casa" />
          </figure>
          <div className="teaser-content">
            <h3 className="teaser-title">Recogida en casa</h3>
            <p className="teaser-description">Nuestros mensajeros realizan la recogida de los productos en la puerta de tu casa o tu negocio.</p>
            <a href="/es-CO/Servicios/certificacion/" className="teaser-link">Conozca más &gt;</a>
          </div>
        </article>
      </div>
      
      <div className="grid-item">
        <article className="teaser">
          <figure className="teaser-image">
            <img src={paymentondelivery} alt="Pago contra entrega" />
          </figure>
          <div className="teaser-content">
            <h3 className="teaser-title">Recaudación</h3>
            <p className="teaser-description">Recibimos pagos en efectivo y/o transferencia de los productos y servicios.</p>
            <a href="/es-CO/Servicios/Capacitacion/" className="teaser-link">Conozca más &gt;</a>
          </div>
        </article>
      </div>
  
      <div className="grid-item">
        <article className="teaser">
          <figure className="teaser-image">
            <img src={delivery} alt="Envíos rápidos" />
          </figure>
          <div className="teaser-content">
            <h3 className="teaser-title">Se realizan envíos</h3>
            <p className="teaser-description">Se realizan los envíos de los paquetes al siguiente día.</p>
            <a href="/es-CO/Servicios/certificacion/directorio-de-clientes-certificados/" className="teaser-link">Conozca más &gt;</a>
          </div>
        </article>
      </div>
  
      <div className="grid-item">
        <article className="teaser">
          <figure className="teaser-image">
            <img src={growth} alt="Crecimiento tecnológico y empresarial" />
          </figure>
          <div className="teaser-content">
            <h3 className="teaser-title">Crecimiento tecnológico</h3>
            <p className="teaser-description">Invertimos en tecnología avanzada para optimizar nuestras operaciones, garantizando innovación constante y un crecimiento sostenible.</p>
            <a href="/es-CO/Servicios/Crecimiento/" className="teaser-link">Conozca más &gt;</a>
          </div>
        </article>
      </div>
    </div>
  </div>
      
  );
}

export default App;
