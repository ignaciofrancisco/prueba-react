import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "./Sidebar";
import '../../app.css';

import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../svg/Logo";
import BurgerIcon from "../../svg/BurgerIcon";


export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceBetween"> {/* Cambiamos a flexSpaceBetween */}
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "5px" }} className="font30 extraBold">
              Terrasol Parcelas
            </h1>
          </Link>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Inicio
              </Link>
            </li>

            {/* Dropdown para Parcelas */}
            <li className="semiBold font15 pointer dropdown" style={{ position: "relative" }}>
              <span style={{ padding: "10px 15px", cursor: "pointer" }}>
                Parcelas
              </span>
      
            </li>


            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="nosotros" spy={true} smooth={true} offset={-80}>
                Nosotros
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="preguntas_frecuentes" spy={true} smooth={true} offset={-80}>
                Preguntas Frecuentes
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contacto" spy={true} smooth={true} offset={-80}>
                Contacto
              </Link>
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
  justify-content: space-between; /* Cambiamos a space-between */
  align-items: center; /* Para alinear verticalmente los elementos */
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  align-items: center; /* Para alinear verticalmente los items del menú */
  li {
    font-size: 18px; /* Aumenta aquí el tamaño */
  }
  @media (max-width: 760px) {
    display: none;
  }
`;