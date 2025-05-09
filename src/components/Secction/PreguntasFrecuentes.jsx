// src/components/Secction/PreguntasFrecuentes.jsx
import React, { useState } from "react";
import TopNavbar from "../Nav/TopNavBar";
import styled from "styled-components";

const PreguntasFrecuentes = () => {
  const preguntas = [
    {
      pregunta: "¿Dónde se encuentra ubicada la Municipalidad de Cholchol?",
      respuesta:
        "La Municipalidad de Cholchol está ubicada en Calle José Joaquín Pérez 449, Cholchol, Región de La Araucanía, Chile. Puedes comunicarte al teléfono +56 45 2734200 para más información.",
    },
    {
      pregunta: "¿Cuáles son los horarios de atención al público?",
      respuesta:
        "El horario de atención al público es de lunes a viernes, desde las 08:30 hasta las 14:00 horas.",
    },
    {
      pregunta: "¿Cómo puedo obtener información sobre licencias de conducir en Cholchol?",
      respuesta:
        "Actualmente, la Municipalidad de Cholchol no tiene la facultad para emitir licencias de conducir. Para realizar este trámite, debes dirigirte a la municipalidad más cercana que ofrezca este servicio.",
    },
    {
      pregunta: "¿Dónde puedo pagar el permiso de circulación en Cholchol?",
      respuesta:
        "Puedes pagar tu permiso de circulación en las oficinas de la Municipalidad de Cholchol o a través de plataformas en línea habilitadas para este propósito. Asegúrate de tener al día tu revisión técnica, seguro obligatorio y el último permiso de circulación cancelado.",
    },
    {
      pregunta: "¿Qué servicios ofrece la Oficina Municipal de Información Laboral (OMIL) en Cholchol?",
      respuesta:
        "La OMIL de Cholchol ofrece servicios de intermediación laboral, orientación y capacitación para mejorar las oportunidades de empleo de los habitantes de la comuna.",
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
        <p>Resuelve tus dudas sobre los servicios, trámites y atención de la Municipalidad de Cholchol</p>

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

