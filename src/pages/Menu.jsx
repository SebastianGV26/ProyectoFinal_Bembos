import React from 'react'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { Slider } from '../components/Slider'

export const Menu = () => {
  return (
    <>
    <header>
        <Header/>
        <NavBar/>
    </header>
    <main>
        <section className='container_ubicacion_menu'>

        </section>
        <section className='container_slider_menu'>
            <Slider/>
        </section>
    </main>
    </>
  )
}
