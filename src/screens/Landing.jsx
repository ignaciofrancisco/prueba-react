import React from "react";
import TopNavBar from "../components/Nav/TopNavBar"; // 
import Footer from "../components/Secction/Footer"; // 
import Header from "../components/Secction/Header"; // 
import Nosotros from "../components/Secction/nosotros";


export default function Landing() {
  return (
    <>
      <TopNavBar />
      <Header />
      <Nosotros />

      <Footer />
    </>
  );
}


