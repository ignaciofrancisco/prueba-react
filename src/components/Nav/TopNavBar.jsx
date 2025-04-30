import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"; // Solo importamos NavLink ahora

import Sidebar from "./Sidebar";
import '../../app.css';
import Backdrop from "../Elements/Backdrop";
import LogoIcon from "../../svg/Logo";
import BurgerIcon from "../../svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceBetween">
          <StyledLink to="/" className="pointer flexNullCenter">
            <LogoIcon />
            <h1 style={{ marginLeft: "5px" }} className="font30 extraBold">
              Terrasol Parcelas
            </h1>
          </StyledLink>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <StyledNavLink to="/" end>Inicio</StyledNavLink>
            </li>
            <li className="semiBold font15 pointer dropdown" style={{ position: "relative" }}>
              <StyledNavLink to="/parcelas">Parcelas</StyledNavLink>
            </li>
            <li className="semiBold font15 pointer">
              <StyledNavLink to="/nosotros">Nosotros</StyledNavLink>
            </li>
            <li className="semiBold font15 pointer">
              <StyledNavLink to="/PreguntasFrecuentes">Preguntas Frecuentes</StyledNavLink>
            </li>
            <li className="semiBold font15 pointer">
              <StyledNavLink to="/contacto">Contacto</StyledNavLink>
            </li>
          </UlWrapper>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

// --- ESTILOS ---
const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  align-items: center;
  li {
    font-size: 18px;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;

const StyledLink = styled.div` // Mantén esto si es necesario para el logo
  color: black;
  text-decoration: none;
  padding: 10px 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 10px 15px;

  &.active {
    color: #ffbf00; /* Color activo */
    border-bottom: 2px solid #ffbf00; /* Línea debajo del enlace activo */
  }

  &:hover {
    text-decoration: underline;
  }
`;


