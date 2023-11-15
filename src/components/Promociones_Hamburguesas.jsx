import "../index.css";
import like from "../images/amor.png";
import { useEffect, useState } from "react";

export const Promociones_Hamburguesas = ({ promo }) => {
  const [descuento, setDescuento] = useState("");
  useEffect(() => {
    const formula = () => {
      const res = Math.round(((promo.precio_antiguo - promo.precio_actual) / promo.precio_antiguo) * 100);
      setDescuento(res);
      return;
    };
    formula();
  });
  return (
    <>
      <article className="Cards">
        <div className="Card_arriba">
          <header>
            <p>{descuento}%</p>
            <span>
              <img src={like} />
            </span>
          </header>
          <a href="#">
            <img className="img_promos" src={promo.img} />
          </a>
        </div>
        <div className="Card_abajo">
          <div className="Contenido_abajo">
            <div className="nombre_prom">
              <h3>{promo.nombre}</h3>
            </div>
            <div className="precios_promos">
              <p>S/. {promo.precio_actual}</p>
              <span>S/. {promo.precio_antiguo}</span>
            </div>
            <div className="btn_promo">
              <button className="Vermas">Ver más</button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
