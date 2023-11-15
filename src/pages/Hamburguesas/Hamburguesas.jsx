import { NavBar } from "../../components/NavBar";
import "../../index.css";
import { Footer } from "../../components/Footer";
import { Derechos_footer } from "../../components/Derechos_footer";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Cards_Hamburguesas } from "../../components/Cards_Hamburguesas";
import { NavBar_Hamburguesas } from "../../components/NavBar_Hamburguesas";
import { useEffect, useState } from "react";
import { api } from "../../api/axios";

export const Hamburguesas = ({ prod }) => {
  const [hamburguer, setHamburguer] = useState([]);
  useEffect(()=>{
    const readHamburguers = async() =>{
      const {data} = await api.get('/hamburguesas');
      setHamburguer(data);
    };
    readHamburguers();
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
          <div className="titulo_card">
            ¡DISFRUTA DE NUESTRAS HAMBURGUESAS A LA PARRILLA!
          </div>
          <div className="container_hamburguesas">
            {hamburguer.map((hamburguer) => (
              <Cards_Hamburguesas
                hamburguer={hamburguer}
                key={hamburguer.nombre}
              />
            ))}
          </div>
          <div className="Titulo_Desc">HAMBURGUESAS A LA PARRILLA</div>
          <div className="container_desc">
            <p className="desc">
              Sabemos que la preparación de la carne de una hamburguesa es una
              de las partes más importantes. Por ello, Bembos te ofrece una
              técnica de cocción única en la que la mantenemos suspendida sobre
              el fuego para otorgarle la jugosidad perfecta que nos caracteriza.
              Combina tu hamburguesa de carne a la parrilla con los mejores
              ingredientes que hemos elegido para ti: tocino, plátano, tomate,
              lechuga, huevo, queso y mucho más. ¡No esperes más y empieza a
              disfrutar de lo mejor del sabor peruano!
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
