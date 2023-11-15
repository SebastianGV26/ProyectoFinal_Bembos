import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { NavBar_Hamburguesas } from '../../components/NavBar_Hamburguesas'
import { Cards_InkaChips } from '../../components/Cards_InkaChips'
import { Footer } from '../../components/Footer'
import { Derechos_footer } from '../../components/Derechos_footer'
import { api } from '../../api/axios'

export const InkaChips = () => {
  const [inkaChips, setIncaChips] = useState([]);
  useEffect(()=>{
    const readInkaChips = async() =>{
      const {data} = await api.get('/inkachips');
      setIncaChips(data);
    };
    readInkaChips();
  }, [])
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
          <div className="titulo_card">COMPRA LAS DELICIOSAS INKA CHIPS</div>
          <div className="container_hamburguesas">
            {inkaChips.map((inka) => (
              <Cards_InkaChips
                inka={inka}
                key={inka.nombre}
              />
            ))}
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
