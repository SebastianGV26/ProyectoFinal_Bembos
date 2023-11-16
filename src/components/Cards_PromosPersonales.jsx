import React, { useEffect, useState } from "react";

export const Cards_PromosPersonales = ({ personales }) => {
    const [descuento, setDescuento] = useState("");
    const [validaprecio, setValidaPrecio] = useState("");
    useEffect(() => {
        const formula = () => {
            const res = Math.round(
                ((personales.precio_antiguo - personales.precio_actual) / personales.precio_antiguo) * 100);
                if(res){
                    setDescuento(`-${res}%`);
                }else{
                    ""
                }
            return;
        };
        formula();
        const validarPrecio_antiguo = () =>{
            const valida = personales.precio_antiguo;
            if(valida){
                setValidaPrecio(`S/.${valida}`)
            }else{
                ""
            }
            return
        };
        validarPrecio_antiguo();
    });
    return (
        <article className="container_card_promo">
            <div className="container_izq_promo">
                <header>
                    <h3>{personales.nombre}</h3>
                </header>
                <div className="contenido_izq_promo">
                    <p className="desc">{personales.desc}</p>
                    <p className="desc_promo">{personales.desc_promo}</p>
                </div>
                <div className="precios_izq">
                    <p>S/.{personales.precio_actual}</p>
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
                    <img className="img_cyber" src={personales.img} alt="" />
                </div>
                <footer>
                    <a className="terminos_personales" href="#">Términos y condiciones</a>
                </footer>
            </div>
        </article>
    );
};