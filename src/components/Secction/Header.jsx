import React from "react";
import styled from "styled-components";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import FullButton from "../Buttons/FullButton";
import QuotesIcon from "../../svg/Quotes";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60" style={{ marginBottom: "20px" }}>
            ¡Estás a un clic del proyecto que buscas!
          </h1>
          <br />
          <HeaderP className="font23 semiBold text-justify">
            "Estás a un paso de transformar tus ideas en soluciones reales; en
            cada línea de código, trabajamos para acercarte al éxito que
            imaginas."
          </HeaderP>

          <BtnWrapper>
            <FullButton title="¡Contáctanos!" />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src={HeaderImage}
            alt="office"
            style={{ zIndex: 9 }}
          />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>
                  Terrasol es una empresa innovadora y 100% enfocada al cliente.
                  Ubicada en la zona centro sur de Chile, ofrecemos
                  oportunidades únicas para aquellos que buscan invertir en la
                  naturaleza.
                </em>
              </p>
            </div>
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  display: flex;
  position: relative;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 80%;
  height: auto;

  @media (max-width: 960px) {
    width: 60%;
  }

  @media (max-width: 560px) {
    width: 80%;
  }
`;


const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  display: flex;
  gap: 10px;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;

const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;

