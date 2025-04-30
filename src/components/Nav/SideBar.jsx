import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../svg/CloseIcon";
import LogoIcon from "../../svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font21" style={{ marginLeft: "15px" }}>
            Parcelas Terrasol
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        {[
          { to: "home", label: "inicio" },
          { to: "services", label: "Parcelas" },
          { to: "projects", label: "Nosotros" },
          { to: "blog", label: "Preguntas Frecuentes" },
          { to: "pricing", label: "Contacto" },
        ].map(({ to, label }) => (
          <li key={to} className="semiBold font15 pointer">
            <Link
              onClick={() => toggleSidebar(!sidebarOpen)}
              activeClass="active"
              className="whiteColor"
              style={{ padding: "10px 15px" }}
              to={to}
              spy={true}
              smooth={true}
              offset={-60}
            >
              {label}
            </Link>
          </li>
        ))}
      </UlStyle>


    </Wrapper>
  );
}

// ------ ESTILOS CORREGIDOS ------
const Wrapper = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "sidebarOpen",
})`
  width: 350px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  transition: right 0.3s ease; /* <-- Añadí transición para animar */
  z-index: 9999;
  background-color: #111; /* Para que se vea el fondo oscuro */
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px 0;
`;

const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;


const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
    font-size: 25px; /* <-- Aquí puedes cambiar el tamaño */
  }
`;
