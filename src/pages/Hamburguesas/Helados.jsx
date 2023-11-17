import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { NavBar_Hamburguesas } from "../../components/NavBar_Hamburguesas";
import { Footer } from "../../components/Footer";
import { Derechos_footer } from "../../components/Derechos_footer";
import { api } from "../../api/axios";
import { Cards_Helados } from "../../components/Cards_Helados";

export const Helados = () => {
  const [helados, setHelados] = useState([]);
  useEffect(() => {
    const readHelados = async () => {
      const { data } = await api.get("/helados");
      setHelados(data);
    };
    readHelados();
  }, []);
  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>
      <section className="container_navbar_hamburguesas">
        <NavBar_Hamburguesas />
      </section>
      <main className="container_main_hamburguesas">
        <section className="container_lista_hamburguesas">
          <div className="titulo_card">
            ¿PROBASTE LOS POSTRES HELADOS DE BEMBOS?
          </div>
          <div className="container_hamburguesas">
            {helados.map((helados) => (
              <Cards_Helados helados={helados} key={helados.nombre} />
            ))}
          </div>
          <div className="Titulo_Desc">POSTRES HELADOS</div>
          <div className="container_desc">
            <p className="desc">
              Cualquier momento es ideal para un postre helado. Conoce las
              variedades que tenemos en Bembos. Distintos sabores de helados,
              salsas y topping para que disfrutes. ¡Puedes elegir el tuyo,
              pedirlo online y recibirlo en tu hogar!
            </p>
          </div>
        </section>
      </main>

      <section className="container_bajo">
        <footer className="Container_footer">
          <Footer />
          <Derechos_footer />
        </footer>
      </section>
    </>
  );
};
