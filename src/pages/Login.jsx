import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Derechos_footer } from "../components/Derechos_footer";
import { ScrollTop } from "../components/ScrollTop";
import user from "../images/user.svg";
import candado from "../images/candado.png";

export const Login = () => {
  return (
    <>
      <ScrollTop />
      <header>
        <Header />
      </header>
      <section className="container_main">
        <article className="container_login">
          <header>
            <h1>INGRESA A BEMBOS</h1>
          </header>
          <div className="mensaje_login">
            <p>
              ¡Si tienes una cuenta con nosotros, ingresa tus datos para
              comenzar!
            </p>
          </div>
          <div className="container_form">
            <form action="">
              <div className="container_form_izq">
                <div className="container_form_sup">
                  <label htmlFor="">Usuario</label>
                  <span>*</span>
                </div>
                <div className="container_form_inf">
                  <img src={user} alt="" />
                  <input type="text" placeholder="Ingrese usuario" />
                </div>
              </div>
              <div className="container_form_der">
                <div className="container_form_sup">
                  <label htmlFor="">Contraseña</label>
                  <span>*</span>
                </div>
                <div className="container_form_inf">
                  <img src={candado} alt="" />
                  <input type="password" placeholder="Ingrese contraseña" />
                </div>
              </div>
            </form>
          </div>
          <div className="btn_form">
            <button className="btn_ingresar">INGRESAR</button>
            <button className="btn_crear">CREAR CUENTA</button>
          </div>
          <div className="container_recuperar"><a href="#">Recuperar Clave</a></div>
          <div className="container_recuperar"><p>Inicia también a través de:</p></div>
          <div className="btn_opciones_login">
            <button className="btn_google">Inicia con Google</button>
            <button className="btn_facebook">Inicia con Facebook</button>
          </div>
        </article>
      </section>
      <section className="container_bajo">
        <footer className="Container_footer">
          <Footer />
          <Derechos_footer />
        </footer>
      </section>
    </>
  );
};
