import React from "react";
import styled from "styled-components";
// Importa la imagen
import Logofooter from "../../assets/img/footer.png";


// Styled components y demás...

const Wrapper = styled.footer`
  width: 100%;
  border-top: 2px solid #ccc;
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;



const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  font-size: 16px;
`;

const CopyrightText = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 20px;
  text-align: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  position: relative;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <LeftSection>
          {/* Usamos la imagen como fuente */}
          <img src={Logofooter} alt="Logo" width="250" style={{ position: "absolute", top: "-70px" }} />
        </LeftSection>

        <RightSection>
          <InfoRow>
            <span>info@parcelasterrasol.com</span>
          </InfoRow>

          <InfoRow>
            <span>Entre Talca y La Región de los Lagos</span>
          </InfoRow>

          <InfoRow>
            <span>Teléfono: +56 9 5018 6583</span>
          </InfoRow>

          <InfoRow>
            <span>WhatsApp: +56 9 5018 6583</span>
          </InfoRow>
        </RightSection>
      </Container>
    </Wrapper>
  );
}
