import React from "react";
import TopNavbar from "../Nav/TopNavBar"; // Asegúrate de que el componente de Navbar esté bien importado
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
              rurales de calidad para aquellos que buscan conectarse con la
              naturaleza y disfrutar de un entorno tranquilo.
            </p>
          </Section>

          <Section>
            <h2>Nuestra misión</h2>
            <p>
              Nuestra misión es proporcionar a nuestros clientes parcelas de
              terreno que les permitan tener una vida más tranquila y natural,
              brindándoles un servicio de calidad.
            </p>
          </Section>

          <Section>
            <h2>Nuestra visión</h2>
            <p>
              Ser la empresa líder en venta de parcelas rurales en el país,
              creando un impacto positivo en la vida de las personas.
            </p>
          </Section>

          <Section>
            <h2>Valores</h2>
            <ul>
              <li>Compromiso</li>
              <li>Transparencia</li>
              <li>Innovación</li>
              <li>Responsabilidad ambiental</li>
            </ul>
          </Section>
        </ContentSection>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  font-family: 'Khula', sans-serif;
  padding: 20px;
`;

const HeaderSection = styled.section`
  text-align: center;
  margin-top: 60px;
  h1 {
    font-size: 48px;
    font-weight: 800;
  }
  p {
    font-size: 18px;
    color: #555;
  }
`;

const ContentSection = styled.section`
  margin-top: 40px;
`;

const Section = styled.div`
  margin-bottom: 40px;
  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #333;
  }
  p {
    font-size: 16px;
    color: #555;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      font-size: 16px;
      color: #555;
      margin-bottom: 10px;
    }
  }
`;

const Footer = styled.footer`
  margin-top: 50px;
  text-align: center;
  padding: 20px 0;
  background-color: #f1f1f1;
`;

export default Nosotros;




