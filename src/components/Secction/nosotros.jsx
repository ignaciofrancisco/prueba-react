import React from "react";
import styled from "styled-components";
import TopNavbar from "../Nav/TopNavBar";
import { useNavigate } from "react-router-dom";

const unidades = [
  {
    nombre: "Alcaldía",
    descripcion:
      "Encargada de liderar la gestión municipal y representar a la comuna. Supervisa las políticas públicas locales.",
    correo: "alcaldia@municholchol.cl",
    telefono: "+56 45 2734201",
    horario: "Lunes a Viernes, 08:30 a 14:00 hrs",
  },
  {
    nombre: "Secretaría Municipal",
    descripcion:
      "Redacta actas, decretos y documentos oficiales. Custodia la documentación y apoya al Concejo Municipal.",
    correo: "secretaria@municholchol.cl",
    telefono: "+56 45 2734202",
    horario: "Lunes a Viernes, 08:30 a 14:00 hrs",
  },
  {
    nombre: "Dirección de Desarrollo Comunitario (DIDECO)",
    descripcion:
      "Gestiona ayudas sociales, programas comunitarios, subsidios y apoyo a organizaciones locales.",
    correo: "dideco@municholchol.cl",
    telefono: "+56 45 2734203",
    horario: "Lunes a Viernes, 08:30 a 14:00 hrs",
  },
  {
    nombre: "Dirección de Obras Municipales (DOM)",
    descripcion:
      "Otorga permisos de edificación, supervisa obras y regula el desarrollo urbano en la comuna.",
    correo: "dom@municholchol.cl",
    telefono: "+56 45 2734204",
    horario: "Lunes a Viernes, 08:30 a 14:00 hrs",
  },
  {
    nombre: "Finanzas",
    descripcion:
      "Administra el presupuesto municipal, recauda pagos, permisos y maneja la contabilidad.",
    correo: "finanzas@municholchol.cl",
    telefono: "+56 45 2734205",
    horario: "Lunes a Viernes, 08:30 a 14:00 hrs",
  },
  {
    nombre: "Tránsito y Transporte Público",
    descripcion:
      "Gestiona el permiso de circulación, señalización vial y seguridad en el tránsito.",
    correo: "transito@municholchol.cl",
    telefono: "+56 45 2734206",
    horario: "Lunes a Viernes, 08:30 a 14:00 hrs",
  },
  {
    nombre: "Medio Ambiente, Aseo y Ornato",
    descripcion:
      "Se encarga del cuidado de áreas verdes, limpieza urbana y gestión de residuos.",
    correo: "medioambiente@municholchol.cl",
    telefono: "+56 45 2734207",
    horario: "Lunes a Viernes, 08:30 a 14:00 hrs",
  },
  {
    nombre: "OMIL (Oficina Municipal de Información Laboral)",
    descripcion:
      "Apoya la empleabilidad local con orientación y vinculación con empresas.",
    correo: "omil@municholchol.cl",
    telefono: "+56 45 2734208",
    horario: "Lunes a Viernes, 08:30 a 14:00 hrs",
  },
  {
    nombre: "Cultura, Deportes y Juventud",
    descripcion:
      "Organiza talleres, actividades culturales y deportivas, especialmente para jóvenes.",
    correo: "cultura@municholchol.cl",
    telefono: "+56 45 2734209",
    horario: "Lunes a Viernes, 08:30 a 14:00 hrs",
  },
];

const UnidadesMunicipales = () => {
  const navigate = useNavigate();

  const handleContacto = (unidad) => {
    navigate(`/contacto?motivo=${encodeURIComponent(unidad)}`);
  };

  return (
    <>
      <TopNavbar />
      <Wrapper>
        <h1>Unidades Municipales</h1>
        <p>
          Conoce las áreas que componen el municipio y los servicios que ofrecen
          a la comunidad de Cholchol.
        </p>
        <Grid>
          {unidades.map((unidad, index) => (
            <Card key={index}>
              <h3>{unidad.nombre}</h3>
              <p>{unidad.descripcion}</p>
              <Info><strong>Correo:</strong> {unidad.correo}</Info>
              <Info><strong>Teléfono:</strong> {unidad.telefono}</Info>
              <Info><strong>Horario:</strong> {unidad.horario}</Info>
              <Boton onClick={() => handleContacto(unidad.nombre)}>Contactar unidad</Boton>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default UnidadesMunicipales;

// --- ESTILOS ---
const Wrapper = styled.div`
  font-family: 'Khula', sans-serif;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 80px auto 0;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 48px;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #555;
    margin-bottom: 40px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;  /* Fija una altura para que el contenido no altere la ubicación del botón */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 24px;
    color: #1d3557;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #333;
    margin-bottom: 12px;
    flex-grow: 1;
  }
`;

const Info = styled.p`
  font-size: 14px;
  color: #444;
  margin: 6px 0;
`;

const Boton = styled.button`
  background-color: #1d3557;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: auto;  /* Asegura que el botón esté al fondo, sin importar el contenido */

  &:hover {
    background-color: #27496d;
  }
`;
