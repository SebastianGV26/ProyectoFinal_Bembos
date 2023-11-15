import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { NavBar_Hamburguesas } from '../../components/NavBar_Hamburguesas'
import { Footer } from '../../components/Footer'
import { Derechos_footer } from '../../components/Derechos_footer'
import { api } from '../../api/axios'
import { Cards_Complements } from '../../components/Cards_Complements'

export const Complementos = () => {
    const [complements, setComplements] = useState([]);
    useEffect(()=>{
        const readComplements = async () =>{
            const {data} = await api.get('/complementos');
            setComplements(data);
        };
        readComplements();
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
          <div className="titulo_card">CONSIGUE LOS COMPLEMENTOS BEMBOS EN TU CASA</div>
          <div className="container_hamburguesas">
            {
                complements.map((complements) =>(
                    <Cards_Complements complements={complements} key={complements.nombre}/>
                ))
            }
          </div>
          {/* <div className="Titulo_Desc">SÁNDWICHES Y HAMBURGUESAS DE POLLO</div> */}
          {/* <div className="container_desc">
            <p className="desc">
              En Bembos no solamente tenemos hamburguesas de carne, también
              tenemos hamburguesas y sándwiches de pollo broaster y grill.
              Tenemos las mejores combinaciones de ingredientes que hacen que
              nuestras hamburguesas tengan un sabor irresistible. Pídelas por
              delivery web y empieza a disfrutar de lo mejor en hamburguesas y
              sándwiches de Bembos.
            </p>
          </div> */}
        </section>
      </main>

      <section className="container_bajo">
        <footer className="Container_footer">
          <Footer />
          <Derechos_footer />
        </footer>
      </section>
    </>
  )
}
