// import logo from './logo.svg';
import './App.css';
import house from './statics/house.png';
import paymentondelivery from './statics/payment-on-delivery.png';
import delivery from './statics/delivery.png';


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
              <b>¡Tu solución confiable para envíos y recolecciones rápidas!</b> <br></br>
              En <b>NombreEmpresa</b>, hacemos que tus envíos sean más fáciles que nunca. Recogemos tus paquetes directamente donde estés y los llevamos a su destino de forma segura y puntual. 
              Además, ofrecemos el servicio de pago contra entrega, para que tú y tus clientes tengan la tranquilidad de realizar transacciones sin preocupaciones.
              Ya sea que necesites enviar documentos, productos o cualquier tipo de paquete, estamos aquí para ayudarte con un servicio amable, eficiente y accesible. <br></br>
              <b>¡Cuenta con nosotros para conectar distancias y facilitar tu día a día!</b>
            </div>
          <div className="app-services-image"></div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <article class="teaser">
            <figure class="teaser-image">
              <img src={house} alt="Entregas en casa" />
            </figure>
            <div class="teaser-content">
              <h2 class="teaser-title">Certificación</h2>
              <p class="teaser-description">La certificación BSI muestra al mundo que usted trabaja de la manera más inteligente y eficiente, y que mejora continuamente su rendimiento.</p>
              <a href="/es-CO/Servicios/certificacion/" class="teaser-link">Conozca más &gt;</a>
            </div>
          </article>
        </div>
        <div class="grid-item">
          <article class="teaser">
            <figure class="teaser-image">
              <img src={paymentondelivery} alt="Capacitación" />
            </figure>
            <div class="teaser-content">
              <h2 class="teaser-title">Capacitación</h2>
              <p class="teaser-description">BSI ha dado forma a muchos de los estándares más importantes del mundo, y nuestros tutores le ayudarán a obtener las mejores prácticas.</p>
              <a href="/es-CO/Servicios/Capacitacion/" class="teaser-link">Conozca más &gt;</a>
            </div>
          </article>
        </div>
                
        <div class="grid-item">
          <article class="teaser">
            <figure class="teaser-image">
              <img src={delivery} alt="Certificación de productos" />
            </figure>
            <div class="teaser-content">
              <h2 class="teaser-title">Certificación de productos</h2>
              <p class="teaser-description">Probar y certificar sus productos les da una garantía de calidad, tranquiliza a los clientes y les abre a nuevos mercados.</p>
              <a href="/es-CO/Servicios/certificacion/directorio-de-clientes-certificados/" class="teaser-link">Conozca más &gt;</a>
            </div>
          </article>
        </div>
      </div>

    </div>
  );
}

export default App;
