import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopNavbar from "../Nav/TopNavBar";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    motivo: "",
    mensaje: "",
    aceptaTerminos: false,
  });

  const [resultado, setResultado] = useState("");

  const query = useQuery();
  const unidadDesdeURL = query.get("motivo");

  useEffect(() => {
    if (unidadDesdeURL) {
      setFormData((prev) => ({ ...prev, motivo: unidadDesdeURL }));
    }
  }, [unidadDesdeURL]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.nombre &&
      formData.email &&
      formData.mensaje &&
      formData.motivo &&
      formData.aceptaTerminos
    ) {
      setResultado("✅ Mensaje enviado exitosamente.");
    } else {
      setResultado(
        "❌ Mensaje no enviado, verifica los campos y acepta los términos."
      );
    }
  };

  return (
    <>
      <TopNavbar />
      <Wrapper>
        <h1>Contáctanos</h1>
        <Formulario onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Dirección:
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </label>

          <label>
            Motivo de Consulta:
            <select
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una unidad</option>
              <option value="Alcaldía">Alcaldía</option>
              <option value="Secretaría Municipal">Secretaría Municipal</option>
              <option value="Dirección de Desarrollo Comunitario (DIDECO)">Dirección de Desarrollo Comunitario (DIDECO)</option>
              <option value="Dirección de Obras Municipales (DOM)">Dirección de Obras Municipales (DOM)</option>
              <option value="Finanzas">Finanzas</option>
              <option value="Tránsito y Transporte Público">Tránsito y Transporte Público</option>
              <option value="Medio Ambiente, Aseo y Ornato">Medio Ambiente, Aseo y Ornato</option>
              <option value="OMIL (Oficina Municipal de Información Laboral)">OMIL (Oficina Municipal de Información Laboral)</option>
              <option value="Cultura, Deportes y Juventud">Cultura, Deportes y Juventud</option>
              <option value="otro">Otro</option>
            </select>
          </label>

          <label>
            Mensaje:
            <textarea
              name="mensaje"
              rows="3"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Enviar</button>
        </Formulario>

        <CheckboxContainer>
          <label>
            <input
              type="checkbox"
              name="aceptaTerminos"
              checked={formData.aceptaTerminos}
              onChange={handleChange}
            />
            Acepto los términos y condiciones
          </label>
        </CheckboxContainer>

        {resultado && <Resultado>{resultado}</Resultado>}
      </Wrapper>
    </>
  );
};

// --- ESTILOS ---
const Wrapper = styled.div`
  font-family: 'Khula', sans-serif;
  padding: 10px 20px;
  max-width: 600px;
  margin: 80px auto 0;

  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 30px;
  }
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  label {
    font-weight: 600;
    color: #444;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input[type="text"],
  input[type="email"],
  select,
  textarea {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  button {
    background-color: #1d3557;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #27496d;
    }
  }
`;

const CheckboxContainer = styled.div`
  margin-top: 25px;
  font-size: 14px;
  color: #444;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    margin: 0;
  }
`;

const Resultado = styled.p`
  margin-top: 20px;
  padding: 10px;
  background-color: #f1f1f1;
  border-left: 5px solid #ccc;
  font-weight: bold;
  color: #333;
`;

export default Contacto;
