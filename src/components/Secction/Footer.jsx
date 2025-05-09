import React from "react";
import styled from "styled-components";
import Logofooter from "../../assets/img/tree.png";

import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Wrapper = styled.footer`
  width: 100%;
  background: #fff;
  padding: -60px 130px;  /* Ajusté el padding para hacer el footer más compacto */
  color: #333;
  font-family: 'Khula', sans-serif;
  border-top: 3px solid #ffbf00; /* Línea amarilla */
  margin-top: 30px;  /* Deja un espacio entre el contenido y el footer */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px; /* Espacio adicional entre el logo y el contenido */
  img {
    width: 100px; /* Reduje el tamaño del logo */
    margin-bottom: 10px;
  }
`;

const RightSection = styled.div`
  margin-top: -60px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;

  svg {
    color: #ffbf00;
    font-size: 18px;
  }

  span {
    transition: color 0.3s ease;
  }

  &:hover span {
    color: #ffbf00;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const StyledIconButton = styled(IconButton)`
  color: #ffbf00;

  &:hover {
    color: #ffffff;
    background-color: #ffbf00;
    transform: scale(1.1);
  }
`;

const Copyright = styled.p`

  text-align: center;
  font-size: 12px;
  color: #888;
  margin-top: 0 px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <LeftSection>
          <img src={Logofooter} alt="Logo Municipalidad" />
          <SocialIcons>
            <StyledIconButton><InstagramIcon /></StyledIconButton>
            <StyledIconButton><FacebookIcon /></StyledIconButton>
            <StyledIconButton><WhatsAppIcon /></StyledIconButton>
          </SocialIcons>
        </LeftSection>

        <RightSection>
          <InfoRow>
            <EmailIcon />
            <span>oficinadepartes@municholchol.cl</span>
          </InfoRow>
          <InfoRow>
            <LocationOnIcon />
            <span>JOSÉ JOAQUÍN PEREZ, 449, Cholchol</span>
          </InfoRow>
          <InfoRow>
            <CallIcon />
            <span>Teléfono: 452 734200</span>
          </InfoRow>
        </RightSection>
      </Container>

      <Copyright>
        © {new Date().getFullYear()} Municipalidad de Cholchol. Todos los derechos reservados.
      </Copyright>
    </Wrapper>
  );
}
