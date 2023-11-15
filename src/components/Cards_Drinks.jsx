import React from 'react'
import like from '../images/amor.png'
import { Link } from 'react-router-dom'

export const Cards_Drinks = ({drinks}) => {
  return (
    <>
            <article className='Cards_drinks'>
                <div className='Card_top_drinks'>
                    <header>
                        <span><img src={like} /></span>
                    </header>
                    <a href="#"><img className='img_drinks' src={drinks.img} /></a>
                </div>
                <div className='Card_abajo'>
                    <div className='Contenido_abajo_hamburguesa'>
                        <div className='nombre_prom'>
                            <h3>{drinks.nombre}</h3>
                        </div>
                        <div className='precios_promos_hamburguer'>
                            <p>S/. { drinks.precio}</p>
                        </div>
                        <div className='terminos_hamburguesa'><Link>Términos y condiciones</Link></div>
                        <div className="btn_promo">
                            <button className='Vermas'>Ver más</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
  )
}
