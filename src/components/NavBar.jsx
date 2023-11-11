import React from 'react'
import '../index.css'
import tiendas from '../images/tiendas.png'
import shop from '../images/carrito.png'
import bmb_menu from '../images/bmb_menu.png'
import bmb_promociones from '../images/bmb_promociones.png'
import bmb_hamburguesa from '../images/bmb_hamburguesa.png'
import bmb_beneficios from '../images/bmb_beneficios.png'
export const NavBar = () => {
    return (
        <section className='container_nav'>
            <nav className='navigation'>
                <ul className='nav_list'>
                    <div className='nav_izq'>
                    <li><a href="#"><img className='img_navbar1' src={bmb_menu} alt="" />Menú</a></li>
                    <li><a href="#"><img className='img_navbar2' src={bmb_promociones} alt="" />Promociones</a></li>
                    <li><a href="#"><img className='img_navbar3' src={bmb_hamburguesa} alt="" />Hamburguesas</a></li>
                    <li><a href="#"><img className='img_navbar4' src={bmb_beneficios} alt="" />Beneficios</a></li>
                    </div>
                    <div className='nav_der'>
                    <div className='sincolas'>
                        <button className='btn_sincolas'>
                            <img src={tiendas} alt="" />
                            <div>
                                <p>Pide en tiendas <span>sin</span></p>
                                <span>colas</span>
                            </div>
                        </button>
                    </div>
                    <div className='carrito'>
                        <button className='btn_carrito'>
                            <img src={shop} alt="" />
                        </button>
                    </div>
                    </div>
                </ul>
            </nav>
        </section>
    )
}
