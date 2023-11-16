import React, { useEffect, useState } from "react";
import "../index.css";
export const Cards_CyberBuenazos = ({ cyber }) => {
  const [descuento, setDescuento] = useState("");
  const [validaprecio, setValidaPrecio] = useState("");
  useEffect(() => {
    const formula = () => {
      const res = Math.round(
        ((cyber.precio_antiguo - cyber.precio_actual) / cyber.precio_antiguo) *
          100
      );
      if (res) {
        setDescuento(`-${res}%`);
      } else {
        ("");
      }
      return;
    };
    formula();
    const validarPrecio_antiguo = () => {
      const valida = cyber.precio_antiguo;
      if (valida) {
        setValidaPrecio(`S/.${valida}`);
      } else {
        ("");
      }
      return;
    };
    validarPrecio_antiguo();
  });
  return (
    <>
      <article className="container_card_promo">
        <div className="container_izq_promo">
          <header>
            <h3>{cyber.nombre}</h3>
          </header>
          <div className="contenido_izq_promo">
            <p className="desc">{cyber.desc}</p>
            <p className="desc_promo">{cyber.desc_promo}</p>
          </div>
          <div className="precios_izq">
            <p>S/.{cyber.precio_actual}</p>
            <span>{validaprecio}</span>
          </div>
          <footer>
            <button>Agregar</button>
          </footer>
        </div>
        <div className="container_der_promo">
          <header>
            <p>{descuento}</p>
          </header>
          <div className="contenido_der_promo">
            <img className="img_cyber" src={cyber.img} alt="" />
          </div>
          <footer>
            <a href="#">Términos y condiciones</a>
          </footer>
        </div>
      </article>
    </>
  );
};
