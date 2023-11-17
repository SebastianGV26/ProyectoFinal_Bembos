import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { NavBar_Hamburguesas } from '../../components/NavBar_Hamburguesas'
import { Footer } from '../../components/Footer'
import { Derechos_footer } from '../../components/Derechos_footer'
import { api } from '../../api/axios'
import { Cards_Combos } from '../../components/Cards_Combos'

export const Combos = () => {
  const [combos, setCombos] = useState([]);
    useEffect(()=>{
        const readCombos = async () =>{
            const {data} = await api.get('/combos');
            setCombos(data);
        };
        readCombos();
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
      <main className="container_main_hamburguesas" id='combos'>
        <section className="container_lista_hamburguesas">
          <div className="titulo_card">CONSIGUE LOS COMPLEMENTOS BEMBOS EN TU CASA</div>
          <div className="container_hamburguesas">
            {
                combos.map((combos) =>(
                    <Cards_Combos combos = {combos} key={combos}/>
                ))
            }
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
  )
}
