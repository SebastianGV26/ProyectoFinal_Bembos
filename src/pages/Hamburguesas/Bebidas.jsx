import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { NavBar_Hamburguesas } from '../../components/NavBar_Hamburguesas'
import { Footer } from '../../components/Footer'
import { Derechos_footer } from '../../components/Derechos_footer'
import { api } from '../../api/axios'
import { Cards_Drinks } from '../../components/Cards_Drinks'

export const Bebidas = () => {
    const [drinks, setDrinks] = useState([]);
    useEffect(()=>{
        const readDrinks= async() => {
            const {data} = await api.get('/bebidas');
            setDrinks(data);
        };
        readDrinks();
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
          <div className="titulo_card">CONSIGUE LAS BEBIDAS BEMBOS EN TU CASA</div>
          <div className="container_hamburguesas">
            {
                drinks.map((drinks) =>(
                    <Cards_Drinks drinks={drinks} key={drinks}/>
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
