import React, { useState } from "react";
import styled from "styled-components";
import TopNavbar from "../Nav/TopNavBar";
import alcaldeImg from "../../assets/img/alcalde.jpg";
import concejoImg from "../../assets/img/concejo.jpg";
import organigramaImg from "../../assets/img/organigrama.jpg";
import imagen1 from "../../assets/img/cruce_en_balsa.jpg";
import imagen2 from "../../assets/img/puentesdesdeabajoinvierno.jpg";
import imagen3 from "../../assets/img/rukabuena.jpg";
import imagen4 from "../../assets/img/puenteviejo.jpg";


const Municipio = () => {
  // Estado para las secciones abiertas
  const [openSection, setOpenSection] = useState(null);

  // Función para alternar la visibilidad de una sección
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <TopNavbar />
      <Wrapper>
        <h1>Municipio de Cholchol</h1>
        <p>
          Bienvenido al portal del municipio de Cholchol. Aquí podrás conocer la
          historia, la organización y los principales responsables de nuestra
          comuna.
        </p>

        {/* Sección del Alcalde */}
        <Section>
          <SectionTitle onClick={() => toggleSection("alcalde")}>Alcalde</SectionTitle>
          {openSection === "alcalde" && (
            <AlcaldeContainer>
              <AlcaldeImage src={alcaldeImg} alt="Alcalde de Cholchol" />
              <AlcaldeInfo>
                <h3>ÁLVARO LABRAÑA OPAZO</h3>
                <p>Alcalde de Cholchol</p>
                <p>
                  El alcalde es el responsable de la administración de la comuna,
                  velando por el desarrollo y bienestar de los habitantes de Cholchol.
                </p>
              </AlcaldeInfo>
            </AlcaldeContainer>
          )}
        </Section>

        {/* Sección del Consejo Municipal */}
        <Section>
  <SectionTitle onClick={() => toggleSection("consejo")}>
    Consejo Municipal
  </SectionTitle>
  {openSection === "consejo" && (
    <ConsejoContainer>
      <p>
        El Consejo Municipal está compuesto por los concejales elegidos por
        la comunidad, quienes colaboran con el alcalde en la toma de decisiones
        y políticas públicas para el desarrollo de la comuna.
      </p>

      <ConcejoImg src={concejoImg} alt="Concejo Municipal de Cholchol" />

      <ConsejoTexto>
        <h3>ALCALDE</h3>
        <p>ÁLVARO LABRAÑA OPAZO</p>

        <h3>CONCEJALES</h3>
        <ul>
          <li>BERNARDITA VISCARRA ASTUDILLO</li>
          <li>DIEGO MILLAO COLLIO</li>
          <li>ISMAEL CAYUL COÑUENAO</li>
          <li>ALEJANDRA NATALY MELLICO CONTRERAS</li>
          <li>ANDRÉS NAVARRETE PAINEMAL</li>
          <li>GONZALO TROPA HUIRCALAF</li>
        </ul>

        <ActaLink
          href="https://drive.google.com/file/d/1DTO9gATt2UBJpYZRx8fCc7TwW1iiK13_/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Acta de Proclamación
        </ActaLink>
      </ConsejoTexto>
    </ConsejoContainer>
  )}
</Section>



        {/* Sección del Organigrama */}
          <Section>
            <SectionTitle onClick={() => toggleSection("organigrama")}>
              Organigrama
            </SectionTitle>
            {openSection === "organigrama" && (
              <>
                <p>
                  El organigrama del municipio de Cholchol representa la estructura organizativa
                  de las distintas unidades y departamentos que conforman la administración municipal.
                  Este esquema permite visualizar cómo se distribuyen las funciones y responsabilidades
                  dentro del municipio, asegurando un funcionamiento ordenado y eficiente.
                </p>
                <OrganigramaImage src={organigramaImg} alt="Organigrama Municipal" />

              </>
            )}
          </Section>


        {/* Sección de las Ordenanzas Municipales */}
        <Section>
  <SectionTitle onClick={() => toggleSection("ordenanzas")}>
    Ordenanzas Municipales
  </SectionTitle>
  {openSection === "ordenanzas" && (
    <>
      <p>
        Las ordenanzas municipales son leyes locales que regulan diferentes
        aspectos de la vida comunal. Estas ordenanzas son aprobadas por el
        consejo municipal y son de cumplimiento obligatorio para los habitantes
        de Cholchol.
      </p>

      <OrdenanzaLista>
        <OrdenanzaItem
          href="https://drive.google.com/file/d/1lhXfI9-e6XiJROtFgoQD9iL7FFKXBoKs/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORDENANZA MUNICIPAL DE DERECHOS MUNICIPALES POR CONCESIONES, PERMISOS, PROPAGANDA, OCUPACIÓN DE BIENES Y OTROS SERVICIOS
        </OrdenanzaItem>

        <OrdenanzaItem
          href="https://drive.google.com/file/d/1LrjmWTfXl-XY5RRVZ4xtSmRXACQihfil/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORDENANZA MUNICIPAL DE GESTIÓN Y PROTECCIÓN AMBIENTAL
        </OrdenanzaItem>

        <OrdenanzaItem
          href="https://drive.google.com/file/d/1voRBMhuAKavVZyxyGeMhi_f6bIojxzDQ/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORDENANZA MUNICIPAL DE PATENTES CIPA
        </OrdenanzaItem>

        <OrdenanzaItem
          href="https://drive.google.com/file/d/1aCs3SCr_Cs_MB6cSImF7GVGSSGGbINj9/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORDENANZA MUNICIPAL DE PARTICIPACIÓN CIUDADANA
        </OrdenanzaItem>

        <OrdenanzaItem
          href="https://drive.google.com/file/d/1tHetqMWeKcbZN8Og-lsg5Oui1DA0fGsJ/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORDENANZA QUE FIJA PATENTES LIMITADAS DE ALCOHOLES
        </OrdenanzaItem>
      </OrdenanzaLista>
    </>
  )}
</Section>



        {/* Sección del Reglamento Municipal */}
        <Section>
  <SectionTitle onClick={() => toggleSection("reglamento")}>
    Reglamento Municipal
  </SectionTitle>
  {openSection === "reglamento" && (
    <>
      <p>
        El reglamento establece las normas y procedimientos para el
        funcionamiento del municipio, y es fundamental para el buen orden de
        nuestras actividades.
      </p>

      <ul>
        <li>
          <ReglamentoLink
            href="https://drive.google.com/file/d/1ViKcbh8TAHr_4shZczUGtQ-IUxUcPt66/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            COSOC 2024-2028
          </ReglamentoLink>
        </li>
        <li>
          <ReglamentoLink
            href="https://drive.google.com/file/d/1aEImRDtT3p80mmVl4UVnB_owa6AWxi4K/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGLAMENTO INTERNO MUNICIPAL
          </ReglamentoLink>
        </li>
        <li>
          <ReglamentoLink
            href="https://drive.google.com/file/d/1KU-1LskVMrBZbwzAMgbMoyblZg2lW6un/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGLAMENTO DE CONCURSOS PÚBLICOS
          </ReglamentoLink>
        </li>
        <li>
          <ReglamentoLink
            href="https://drive.google.com/file/d/1inkkqa9EGw5_OPZIS7Qv27saOZMBxzdG/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            MANUAL DE PROCEDIMIENTO DE ADQUISICIONES
          </ReglamentoLink>
        </li>
        <li>
          <ReglamentoLink
            href="https://drive.google.com/file/d/1gMI8XPlf4lT5XFcOdE7yPdsIo8n5xKgD/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTRUCTIVO DE PROCESOS INTERNOS
          </ReglamentoLink>
        </li>
        <li>
          <ReglamentoLink
            href="https://drive.google.com/file/d/1Ts89HehCiXWcN19l8W0HBA7GWlGvaTR_/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            PLAN DE DESARROLLO COMUNAL
          </ReglamentoLink>
        </li>
        <li>
          <ReglamentoLink
            href="https://drive.google.com/file/d/1f9lfaMqRYj_8K6g6G5pe_fjKa5jiXxaT/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGLAMENTO DE ASIGNACIÓN DE AYUDAS SOCIALES MUNICIPALIDAD DE CHOLCHOL
          </ReglamentoLink>
        </li>
        <li>
          <ReglamentoLink
            href="https://drive.google.com/file/d/1Xsm609MThAR7oBljWsXNIUqN5LD-xK7E/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGLAMENTO DE USO Y CIRCULACIÓN DE VEHÍCULOS MUNICIPALES Y BITÁCORAS
          </ReglamentoLink>
        </li>
        <li>
          <ReglamentoLink
            href="https://drive.google.com/file/d/1o_S1VXQjkCpxgQ5GOEtT-KEaQr99-eFP/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGLAMENTO DE CAPACITACIÓN MUNICIPAL
          </ReglamentoLink>
        </li>
        <li>
          <ReglamentoLink
            href="https://drive.google.com/file/d/17e3_aFiaOI4eSP-3jgAKi3A4HejkeIsY/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            PLAN COMUNAL PARA LA REDUCCIÓN DEL RIESGO DE DESASTRES 2024-2027
          </ReglamentoLink>
        </li>
      </ul>
    </>
  )}
</Section>




        {/* Sección de Historia */}
        <Section>
  <SectionTitle onClick={() => toggleSection("historia")}>Historia de Cholchol</SectionTitle>
  {openSection === "historia" && (
    <>
      <p>
        Cholchol es una comuna rica en historia, con una fuerte identidad
        cultural y un legado de lucha y progreso. A lo largo de los años, la
        comuna ha experimentado un notable crecimiento y hoy en día se
        destaca por su comunidad unida y sus paisajes naturales.
      </p>

      <ImageGallery>
        <img src={imagen1} alt="Cholchol Paisaje 1" />
        <img src={imagen2} alt="Cholchol Paisaje 2" />
        <img src={imagen3} alt="Cholchol Paisaje 3" />
        <img src={imagen4} alt="Cholchol Paisaje 4" />
      </ImageGallery>
    </>
  )}
</Section>


      </Wrapper>
    </>
  );
};

export default Municipio;

// --- ESTILOS ---
// Estilos para las imágenes pequeñas al final de la historia
const ImageGallery = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  
  img {
    width: 23%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
`;


const Wrapper = styled.div`
  font-family: 'Khula', sans-serif;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 80px auto 0;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 48px;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #555;
    margin-bottom: 40px;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1d3557;
  margin-bottom: 15px;
  cursor: pointer;  // Hacer clickeable
  transition: color 0.3s ease;

  &:hover {
    color: #27496d;
  }
`;

const AlcaldeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  // Mantener el texto centrado
  gap: 20px;
  margin-top: 20px;
`;

const AlcaldeImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 30%;
  object-fit: cover;
  clip-path: inset(1% 1% 1% 1%);  // Recorta el 10% superior de la imagen
  margin-left: 0;  // No agregar márgenes adicionales
  align-self: flex-start;  // Esto alinea la imagen hacia arriba dentro del contenedor
`;




const AlcaldeInfo = styled.div`
  max-width: 400px;
  text-align: left;

  h3 {
    font-size: 22px;
    color: #1d3557;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;

const OrganigramaImage = styled.img`
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Boton = styled.a`
  display: inline-block;
  background-color: #1d3557;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27496d;
  }
`;
const ConsejoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ConsejoImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ConsejoTexto = styled.div`
  text-align: center;

  h3 {
    margin-top: 20px;
    font-size: 22px;
    color: #1d3557;
  }

  p, li {
    font-size: 16px;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 10px 0 20px;
  }

  li {
    margin-bottom: 6px;
  }
`;


const ConcejoImg = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;
const OrdenanzaLista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

const OrdenanzaItem = styled.a`
  display: block;
  background-color: #1d3557;
  color: #fff;
  padding: 14px 20px;
  border-radius: 10px;
  text-align: left;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #27496d;
    transform: scale(1.02);
  }
`;

const ActaLink = styled.a`
  display: block;  // Asegura que ocupe todo el espacio disponible
  background-color: #1d3557;
  color: white;
  padding: 14px 20px;
  margin-top: 20px;
  margin-bottom: 20px;  // Añadimos margen para separar un poco
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27496d;
  }
`;
const ReglamentoLink = styled.a`
  display: block;  // Asegura que ocupe todo el espacio disponible
  background-color: #1d3557;
  color: white;
  padding: 14px 20px;
  margin-top: 10px;
  margin-bottom: 10px;  // Separar cada enlace con espacio
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-align: left;  // Alinea el texto a la izquierda
  padding-left: 20px;  // Añade un poco de espacio desde el borde izquierdo
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27496d;
  }
`;

