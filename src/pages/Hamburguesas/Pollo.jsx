import { NavBar } from "../../components/NavBar";
import "../../index.css";
import { Footer } from "../../components/Footer";
import { Derechos_footer } from "../../components/Derechos_footer";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Cards_Pollo } from "../../components/Cards_Pollo";
import { NavBar_Hamburguesas } from "../../components/NavBar_Hamburguesas";
import { api } from "../../api/axios";
import { useEffect, useState } from "react";

export const Pollo = () => {
  const [pollo, setPollo] = useState([]);
  useEffect(()=>{
    const readPollo = async() =>{
      const {data} = await api.get('/pollo');
      setPollo(data);
    };
    readPollo();
  }, []);
  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>
      <section className="container_navbar_hamburguesas">
        <NavBar_Hamburguesas/>
      </section>
      <main className="container_main">
        <section className="container_lista_hamburguesas">
          <div className="titulo_card">HAMBURGUESAS Y SÁNDWICHES DE POLLO</div>
          <div className="container_hamburguesas">
            {pollo.map((pollo) => (
              <Cards_Pollo
                pollo={pollo}
                key={pollo.nombre}
              />
            ))}
          </div>
          <div className="Titulo_Desc">SÁNDWICHES Y HAMBURGUESAS DE POLLO</div>
          <div className="container_desc">
            <p className="desc">
              En Bembos no solamente tenemos hamburguesas de carne, también
              tenemos hamburguesas y sándwiches de pollo broaster y grill.
              Tenemos las mejores combinaciones de ingredientes que hacen que
              nuestras hamburguesas tengan un sabor irresistible. Pídelas por
              delivery web y empieza a disfrutar de lo mejor en hamburguesas y
              sándwiches de Bembos.
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
