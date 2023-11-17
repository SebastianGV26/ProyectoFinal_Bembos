import { NavBar } from "../../components/NavBar";
import "../../index.css";
import { Footer } from "../../components/Footer";
import { Derechos_footer } from "../../components/Derechos_footer";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Cards_Loncheritas } from "../../components/Cards_Loncheritas";
import { NavBar_Hamburguesas } from "../../components/NavBar_Hamburguesas";
import { useEffect, useState } from "react";
import { api } from "../../api/axios";

export const Loncheritas = () => {
  const [loncheritas, setLoncheritas] = useState([]);
  useEffect(()=>{
    const readLoncheritas = async() =>{
      const {data} = await api.get('/loncheritas');
      setLoncheritas(data);
    }
    readLoncheritas();
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
      <main className="container_main_hamburguesas">
        <section className="container_lista_hamburguesas">
          <div className="titulo_card">¿CONOCES LAS LONCHERITAS BEMBOS?</div>
          <div className="container_hamburguesas">
            {
              loncheritas.map((loncheras)=>(
              <Cards_Loncheritas loncheras={loncheras} key={loncheras.nombre}/>
              ))
            }
          </div>
          <div className="Titulo_Desc">LONCHERITAS DE BEMBOS</div>
          <div className="container_desc">
            <p className="desc">
              Las loncheritas infantiles son una opción ideal para los más
              chicos. Puedes pedir tu loncherita Bembos con hamburguesa o
              nuggets, y te incluye papas fritas y bebida.
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
