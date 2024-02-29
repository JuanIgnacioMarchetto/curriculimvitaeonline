import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; 
function App() {
  const [popup, setPopup] = useState('');

  const togglePopup = (section) => {
    if (popup === section) {
      setPopup('');
    } else {
      setPopup(section);
    }
  };

  return (
    <div className="cv-container">
      <header>
        <h1>Juan Ignacio Marchetto</h1>
        <div style={{ textAlign: 'center' }}> {/* Div para centrar la imagen */}
          <img 
            src="url_de_tu_imagen.jpg" 
            alt="Foto de perfil" 
            style={{ borderRadius: '50%', width: '100px', height: '100px' }} 
          />
        </div>
        <br></br>
        <p>Chef profesional // Programador WEB Junior: HTML; CSS; JS; React //</p>
        <p>Bilingüe (Inglés/Español)</p>
        <p>Argentina</p>
      </header>
      <section className="extract">
        <h2>Extracto</h2>
        <p>
          Durante más de 15 años, he dedicado mi carrera profesional al mundo de la gastronomía, desempeñándome como chef en diversos entornos, desde clínicas psiquiátricas hasta restaurantes y eventos en la Embajada de los Estados Unidos. Sin embargo, recientemente ampliar mis conocimientos y adentrarme en el emocionante mundo del desarrollo web. A través del curso de Desarrollador Web Inicial de Argentina Programa y la UTN, he adquirido sólidos conocimientos en HTML, CSS y JavaScript, y actualmente estoy aprendiendo React. Soy un colaborador activo en GitHub, donde he subido y colaborado en varios proyectos. Además, tengo experiencia en trabajo remoto y hablo español e inglés con fluidez. Puedo destacar también que tengo mi propio sitio web donde he publicado proyectos desarrollados por mí.
        </p>
      </section>
      <section className="experience" onClick={() => togglePopup('experience')}>
        <h2>Experiencia</h2>
        <div className="job"> 
          <h3>Danke premium Burger - Jefe de cocina</h3>
          <p>noviembre de 2019 - marzo de 2022 (2 años 5 meses)</p>
          <p>Coordinación de ambos equipos (tarde y noche). Control de productos finales...</p>
        </div>
     
        <div class="job">
          <h3>Centro cultural Landa Sabaris - Jefe de cocina</h3>
          <p>Coordinación de ambos equipos (tarde y noche).</p>
          <p>Control de productos finales, desarrollo de nuevos platillos, stock y Control de materias primas</p>
        </div>
        <div class="job">
          <h3>Solution Group (EMBAJADA ESTADOS UNIDOS EN ARGENTINA) - Cocinero</h3>
          <p>septiembre de 2016 - enero de 2022 (5 años 5 meses)</p>
          <p>Buenos Aires y alrededores</p>
          <p>Ayudante de cocina eventual en eventos.</p>
          <p>Realización de catering, presentación y armado de platos.</p>
        </div>
        <div class="job">
          <h3>Famyl Medicina Prepaga - Reparto</h3>
          <p>enero de 2018 - enero de 2021 (3 años 1 mes)</p>
          <p>Junín, Provincia de Buenos Aires, Argentina</p>
          <p>Reparto de sobres con información o facturas a pagar</p>
        </div>
        <div class="job">
          <h3>Centro cultural Landa Sabaris - Jefe de cocina</h3>
          <p>mayo de 2018 - noviembre de 2019 (1 año 7 meses)</p>
          <p>Buenos Aires y alrededores</p>
          <p>Jefe de cocina.</p>
          <p>Desarrollo trimestral de menúes. Coordinación de materia prima y con proveedores, supervisión de despacho en galas multitudinarias</p>
        </div>
        <div class="job">
          <h3>Clínica “San Jorge” Lanús - Jefe de cocina</h3>
          <p>noviembre de 2017 - marzo de 2018 (5 meses)</p>
          <p>Buenos Aires y alrededores</p>
          <p>Jefe de cocina.</p>
          <p>Armado de menúes para cada tipo de paciente, compras de mercadería, control de stock, personal a cargo, cocina en general.</p>
        </div>
        <div class="job">
          <h3>Club nocturno “Kuma” - Jefe de cocina</h3>
          <p>agosto de 2015 - junio de 2017 (1 año 11 meses)</p>
          <p>Buenos Aires y alrededores</p>
          <p>Jefe de cocina</p>
          <p>Compras, personal a cargo, armado de menúes, emplatado, cocina en general.</p>
        </div>
        <div class="job">
          <h3>Club Nocturno “Liv” - Cocinero</h3>
          <p>mayo de 2013 - septiembre de 2015 (2 años 5 meses)</p>
          <p>Buenos Aires y alrededores</p>
          <p>Ayudante de cocina</p>
          <p>Presentación de platos, cocina en general, atención al público, dispendio de bebidas y control de caja</p>
        </div>
        <div class="job">
          <h3>Cinemarck Palermo - Vendedor/Pochoclero</h3>
          <p>diciembre de 2013 - abril de 2015 (1 año 5 meses)</p>
          <p>Buenos Aires y alrededores</p>
          <p>Atención público, ventas de snacks, producción nivel industrial de alimentos y snacks, control de caja</p>
        </div>
        <div class="job">
          <h3>Lubba Restaurant Kosher - Chef pastelero</h3>
          <p>enero de 2013 - noviembre de 2013 (11 meses)</p>
          <p>Buenos Aires y alrededores</p>
          <p>Ayudante de cocina</p>
          <p>Fabricación de pastas, cocina en general</p>
        </div>
        <div class="job">
          <h3>Ti voglio bene - Ayudante de cocina y fabricante de pastas</h3>
          <p>2010 - 2011 (1 año)</p>
        </div>
      </section>
      <section className="education" onClick={() => togglePopup('education')}>
        <h2>Educación</h2>
        <div class="education-item">
          <h3>Fundacion Telefonica</h3>
          <p>AR Diseño Web con HTML5 + CSS - FTM Ed 12, Programación informática · (junio de 2023 - julio de 2023)</p>
        </div>
        <div class="education-item">
          <h3>Argentina Programa</h3>
          <p>DESARROLLADOR WEB INICIAL, Programación informática, aplicaciones específicas · (febrero de 2023 - abril de 2023)</p>
        </div>
        <div class="education-item">
          <h3>Manipulación de alimentos (regularizado por el Gobierno de la Ciudad de Buenos Aires)</h3>
        </div>
        <div class="education-item">
          <h3>Instituto Superior ex Escuela Normal, Junín</h3>
          <p>Nivelación de lengua inglesa nivel profesional.</p>
        </div>
        <div class="education-item">
          <h3>AUTODIDACTA</h3>
        </div>
        <div class="education-item">
          <h3>TAILWIND</h3>
        </div>
      </section>
      <footer>
        <section class="contact">
          <h2>Contacto</h2>
          <div>
            <p>Teléfono: 161350960</p>
            <p>Facebook: <a href="https://www.facebook.com/juanignaciomarchetto/">Juan Ignacio Marchetto</a></p>
            <p>Github: <a href="https://github.com/JuanIgnacioMarchetto">JuanIgnacioMarchetto</a></p>
            <p>Twitter: <a href="https://twitter.com/JIMarchetto">@JIMarchetto</a></p>
            <p>Computrabajo: <a href="https://candidato.ar.computrabajo.com/candidate/home">Perfil en Computrabajo</a></p>
          </div>
        </section>
        <p>Contactar:</p>
        <p>juanignaciomarchetto@gmail.com</p>
        <a href="www.linkedin.com/in/juan-ignaciomarchetto-336a2a57">Perfil de LinkedIn</a>
      </footer>
    </div >
  );
}

export default App;
