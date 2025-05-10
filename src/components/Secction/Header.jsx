import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PollIcon from "@mui/icons-material/Poll";
import PermisoCirculacion from "../../assets/img/permiso.jpg";
import TallerImg from "../../assets/img/taller.jpg"; // Ruta de la imagen del taller
import TallerImg2 from "../../assets/img/taller2.jpg"; // Ruta de la imagen del taller
import TallerImg3 from "../../assets/img/bus.jpg"; // Ruta de la imagen del taller
import WelcomeImage from "../../assets/img/horario.jpg"; // Ruta de la imagen de bienvenida

export default function Header() {
  const [showWelcome, setShowWelcome] = useState(true);

  // Función para cerrar la pantalla de bienvenida
  const closeWelcome = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {/* Pantalla de bienvenida */}
      {showWelcome && (
        <WelcomeWrapper>
          <WelcomeImageContainer>
            <WelcomeImageStyled src={WelcomeImage} alt="Bienvenida" />
            <CloseButton onClick={closeWelcome}>Cerrar</CloseButton>
          </WelcomeImageContainer>
        </WelcomeWrapper>
      )}

      {/* Contenido principal */}
      <Wrapper id="home" className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <ContentWrapper>
            <h1 className="extraBold font60" style={{ marginBottom: "10px" }}>
              ENCUESTAS CIUDADANAS
            </h1>
            <HeaderP className="font23 semiBold">
              "Estás a un paso de transformar tu voz en acción; cada respuesta que entregas nos ayuda a construir un mejor futuro para nuestra comuna."
            </HeaderP>
            <BtnWrapper>
              <Button
                variant="contained"
                endIcon={<PollIcon />}
                sx={{
                  backgroundColor: "#2D2D2D",
                  "&:hover": { backgroundColor: "#1a1a1a" },
                  borderRadius: "8px",
                  padding: "10px 20px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
                href="https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform"
                target="_blank"
              >
                Gustos y actividades deportivas
              </Button>
              <Button
                variant="contained"
                endIcon={<PollIcon />}
                sx={{
                  backgroundColor: "#2D2D2D",
                  "&:hover": { backgroundColor: "#1a1a1a" },
                  borderRadius: "8px",
                  padding: "10px 20px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
                href="https://docs.google.com/forms/d/e/1FAIpQLScbQ-UPctjQiDLlZRugqqbz1XkY-YPuxFAHfcySveaAMzvBkw/viewform"
                target="_blank"
              >
                Cambio climático, sus impactos y medidas
              </Button>
            </BtnWrapper>
          </ContentWrapper>
        </LeftSide>

        <RightSide>
          <ImageLink
            href="https://portalweb.insico.cl/Cholchol/Permisos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={PermisoCirculacion} alt="Permiso de Circulación" />
          </ImageLink>
        </RightSide>
      </Wrapper>

      {/* NUEVA SECCIÓN DE MAPA DE GOOGLE */}
      <GoogleMapSection>
        <MapTitle>Paga tu permiso presencial aquí</MapTitle>
        <IframeMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.333612458033!2d-72.84995468474608!3d-38.599995779584455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15.5!3m3!1m2!1s0x966ad10b1449a223%3A0xdfca7343a9f39e4!2sAv.%20Lastarria%20127%2C%20504%200000%2C%20Cholchol%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1715278792932!5m2!1ses-419!2scl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></IframeMap>
      </GoogleMapSection>

      {/* NUEVA SECCIÓN DE IMAGEN DE TALLER */}
      <TallerImagesWrapper>
        <Taller src={TallerImg} alt="Taller" />
        <Taller src={TallerImg2} alt="Taller2" />
        <Taller src={TallerImg3} alt="bus" />
      </TallerImagesWrapper>
    </>
  );
}

// Styled Components

const WelcomeWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Fondo oscuro semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Asegura que la pantalla de bienvenida esté encima de todo */
  opacity: 1;
  transition: opacity 1s ease-out; /* Animación de transición */
`;

const WelcomeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const WelcomeImageStyled = styled.img`
  width: 100%;
  max-width: 600px; /* Limita el tamaño de la imagen */
  height: auto;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #2d2d2d;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a1a1a;
  }
`;

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  display: flex;
  position: relative;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  margin-top: -240px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 500px;
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const HeaderP = styled.div`
  padding: 0 0 40px 0;
  line-height: 1.6rem;
  text-align: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const ImageLink = styled.a`
  display: block;
  margin-top: -300px;
  width: 100%;
  text-align: center;
  @media (max-width: 960px) {
    margin-top: -40px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

// Contenedor del mapa
const GoogleMapSection = styled.div`
  width: 100%;
  margin-top: 60px;
  text-align: center;
`;

// Contenedor de la imagen del taller
const TallerImagesWrapper = styled.div`
  display: flex; /* Alineación horizontal de las imágenes */
  gap: 20px; /* Espacio entre las imágenes */
  justify-content: center; /* Centrar las imágenes dentro del contenedor */
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column; /* Cambia a columna en pantallas pequeñas */
    gap: 15px; /* Menos espacio entre las imágenes en pantallas pequeñas */
  }
`;

const Taller = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1); /* Sombra sutil para la imagen */
  transition: transform 0.3s ease;
  object-fit: cover; /* Esto ayudará a recortar la imagen y hacerla del mismo tamaño si sus proporciones son diferentes */
  &:hover {
    transform: scale(1.02);
  }
`;

const IframeMap = styled.iframe`
  width: 100%;
  height: 250px;
  border: 0;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil para el mapa */
  margin-top: 20px; /* Ajuste del margen superior */
`;

const MapTitle = styled.h2`
  margin-top: -260px;
  font-family: 'Khula', sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #fff; /* Texto blanco para mayor contraste */
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  background-color: #2D2D2D; /* Fondo oscuro para el título */
  padding: 15px 30px; /* Espaciado interno para que el texto no esté pegado al borde */
  border-radius: 8px; /* Bordes redondeados para un toque moderno */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15); /* Sombra sutil para profundidad */
  max-width: 90%; /* Limitar el tamaño del título */
  margin-left: auto;
  margin-right: auto;

  /* Ocultar el título en pantallas pequeñas */
  @media (max-width: 768px) {
    display: none;
  }
`;




