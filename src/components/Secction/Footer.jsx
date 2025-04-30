import React from "react";
import styled from "styled-components";
// Importa la imagen y los íconos de Material UI
import Logofooter from "../../assets/img/footer.png";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';


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

const InstagramButton = styled(IconButton)`
  color: #E1306C; /* Color de Instagram */
  font-size: 30px;

  &:hover {
    color: #bc2a8d; /* Color cuando el mouse pasa sobre el ícono */
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <LeftSection>
          {/* Usamos la imagen como fuente */}
          <img
            src={Logofooter}
            alt="Logo"
            width="250"
            style={{ position: "absolute", top: "-70px" }}
          />
        </LeftSection>

        <RightSection>
          <InfoRow>
          <EmailIcon style={{ color: "#424242" }} />
            <span>info@parcelasterrasol.com</span>
          </InfoRow>

          <InfoRow>
          <LocationOnIcon style={{ color: "#E53935" }} />
            <span>Entre Talca y La Región de los Lagos</span>
          </InfoRow>

          <InfoRow>
          <CallIcon style={{ color: "#2196F3" }} />
            <span>Teléfono: +56 9 5018 6583</span>
          </InfoRow>

          <InfoRow>
          <WhatsAppIcon style={{ color: "#25D366" }} />
           <span>WhatsApp: +56 9 5018 6583</span>
          </InfoRow>


          <InfoRow>
  <InstagramButton href="https://www.instagram.com" target="_blank">
    <InstagramIcon style={{ color: "#E1306C" }} /> {/* Rosa Instagram */}
  </InstagramButton>
  <InstagramButton href="https://www.facebook.com" target="_blank">
    <FacebookIcon style={{ color: "#1877F2" }} /> {/* Azul Facebook */}
  </InstagramButton>
</InfoRow>


        </RightSection>
      </Container>
    </Wrapper>
  );
}
