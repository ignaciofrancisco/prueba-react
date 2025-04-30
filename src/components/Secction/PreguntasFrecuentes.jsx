// src/components/Secction/PreguntasFrecuentes.jsx
import React, { useState } from "react";
import TopNavbar from "../Nav/TopNavBar";
import styled from "styled-components";

const PreguntasFrecuentes = () => {
  const preguntas = [
    {
      pregunta: "¿Qué tipo de parcelas ofrece Terrasol?",
      respuesta:
        "En Terrasol ofrecemos parcelas de diferentes tamaños y ubicaciones, tanto para uso residencial como comercial. Nuestras propiedades están seleccionadas para brindarte la mejor experiencia en conexión con la naturaleza.",
    },
    {
      pregunta: "¿Cómo puedo comprar una parcela?",
      respuesta:
        "Puedes adquirir una parcela contactándonos directamente a través de nuestro sitio web, redes sociales o llamando a nuestro equipo de ventas. Te acompañamos en cada paso del proceso para asegurar una compra segura y clara.",
    },
    {
      pregunta: "¿Ofrecen financiamiento?",
      respuesta:
        "Sí, contamos con opciones de financiamiento directo sin necesidad de pasar por bancos. Nuestro equipo te guiará para encontrar la opción que mejor se adapte a tus necesidades.",
    },
    {
      pregunta: "¿Puedo visitar las parcelas antes de comprar?",
      respuesta:
        "Por supuesto. Coordinamos visitas guiadas para que conozcas en terreno las características de cada parcela antes de tomar una decisión.",
    },
  ];

  const [activa, setActiva] = useState(null);

  const toggle = (index) => {
    setActiva((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <TopNavbar />
      <Wrapper>
        <HeaderSection>
          <h1>Preguntas Frecuentes</h1>
          <p>Resuelve tus dudas sobre nuestras parcelas y servicios</p>
        </HeaderSection>

        <ContentSection>
          {preguntas.map((item, index) => (
            <Accordion key={index}>
              <Pregunta onClick={() => toggle(index)}>
                {item.pregunta}
                <span>{activa === index ? "▲" : "▼"}</span>
              </Pregunta>
              {activa === index && <Respuesta>{item.respuesta}</Respuesta>}
            </Accordion>
          ))}
        </ContentSection>
      </Wrapper>
    </>
  );
};

// Estilos
const Wrapper = styled.div`
  font-family: 'Khula', sans-serif;
  padding: 20px;
`;

const HeaderSection = styled.section`
  text-align: center;
  margin-top: 60px;
  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 30px;
  }
  p {
    font-size: 18px;
    color: #555;
  }
`;

const ContentSection = styled.section`
  margin-top: 40px;
`;

const Accordion = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

const Pregunta = styled.button`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  padding: 15px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: #007bff;
  }

  span {
    font-size: 18px;
    margin-left: 10px;
  }
`;

const Respuesta = styled.p`
  font-size: 16px;
  color: #555;
  margin: 10px 0 20px 0;
  transition: all 0.3s ease-in-out;
`;

export default PreguntasFrecuentes;

