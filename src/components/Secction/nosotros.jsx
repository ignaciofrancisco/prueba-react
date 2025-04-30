import React from "react";
import TopNavbar from "../Nav/TopNavBar";
import styled from "styled-components";

const Nosotros = () => {
  return (
    <>
      <TopNavbar />
      <Wrapper>
        <HeaderSection>
          <h1>Nosotros</h1>
          <p>Conoce más sobre nuestra empresa y lo que hacemos</p>
        </HeaderSection>

        <ContentSection>
          <Section>
            <h2>¿Quiénes somos?</h2>
            <p>
              Somos Terrasol Parcelas, una empresa dedicada a ofrecer terrenos
              rurales de calidad para quienes buscan conectarse con la naturaleza y disfrutar de un entorno tranquilo.
            </p>
          </Section>

          <Section>
            <h2>Nuestra misión</h2>
            <p>
              Nuestra misión es ofrecer parcelas exclusivas en ubicaciones seleccionadas, con un servicio personalizado y de calidad. Nos destacamos por nuestra integridad y por identificar oportunidades de inversión de alto potencial.
            </p>
          </Section>

          <Section>
            <h2>Nuestra visión</h2>
            <p>
              Ser reconocidos como líderes en el mercado de parcelas de alto nivel, siendo un referente en integridad y excelencia. Queremos transformar el panorama inmobiliario ofreciendo oportunidades de inversión exclusivas y de alto valor.
            </p>
          </Section>
        </ContentSection>
      </Wrapper>
    </>
  );
};

// ESTILOS
const Wrapper = styled.div`
  font-family: 'Khula', sans-serif;
  padding: 40px 20px;
`;

const HeaderSection = styled.section`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
  h1 {
    font-size: 48px;
    font-weight: 800;
    color: #2c3e50;
  }
  p {
    font-size: 20px;
    color: #6c757d;
    margin-top: 10px;
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
`;

const Section = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  h2 {
    font-size: 28px;
    color: #1d3557;
    margin-bottom: 12px;
  }

  p {
    font-size: 17px;
    line-height: 1.6;
    color: #444;
  }
`;

export default Nosotros;



