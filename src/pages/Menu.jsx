import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import slider1 from '../images/slider1.jpg'
import ubicacion from '../images/ubicacion.png'
import { Cards_Menu } from '../components/Cards_Menu'
import { Footer } from '../components/Footer'
import '../index.css'
import { Derechos_footer } from '../components/Derechos_footer'
import { api } from '../api/axios'

export const Menu = () => {
    let menu = [
        {
            "nombre": "Promociones Exclusivas Web",
            "img": "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/promociones-bembos-delivery.webp"
        },
        {
            "nombre": "Hamburguesas",
            "img": "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/hamburguesas_2.webp"
        },
        {
            "nombre": "Pollo",
            "img": "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/pollo_2.webp"
        },
        {
            "nombre": "Loncheritas",
            "img": "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/loncheritas_1.webp"
        },
        {
            "nombre": "Complementos",
            "img": "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/complementos_1.webp"
        },
        {
            "nombre": "Bebidas ",
            "img": "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-gaseosas.webp"
        },
        {
            "nombre": "Helados",
            "img": "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-mini-princesa.webp"
        },
        {
            "nombre": "Inka Chips",
            "img": "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-inka-chips-1.webp"
        }
    ];
    return (
        <>
            <header>
                <Header />
                <NavBar />
            </header>
            <main>
                <section className='container_ubicacion_menu'>
                    <div className='contenido_ubicacion_izq'>
                        <div className='contenido_ubicacion_izq1'>
                            <p>Se está mostrando el menú del restaurante</p>
                        </div>
                        <div className='contenido_ubicacion_izq2'>
                            <img src={ubicacion} alt="" /><p>GENERAL</p>
                        </div>
                    </div>
                    <div className='contenido_ubicacion_der'>
                        <button>Cambiar</button>
                    </div>
                </section>
                <section className='container_titulo_menu'>
                    <h2>ELIGE TU MENÚ BEMBOS</h2>
                </section>
                <section className='container_slider_menu'>
                    <div className='slider-container'>
                        <div className='container-images'>
                            <img className='slide' src={slider1} alt="" />
                        </div>
                    </div>

                </section>
                <section className='container_cards_menu'>
                    {
                        menu.map((prod) =>
                            <Cards_Menu prod={prod} key={prod.nombre} />
                        )
                    }
                </section>
            </main>
            <section className='container_bajo'>
                <footer className='Container_footer'>
                    <Footer />
                    <Derechos_footer />
                </footer>
            </section>
        </>
    )
}
