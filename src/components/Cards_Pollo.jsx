import React from 'react'
import like from '../images/amor.png'
import { Link } from 'react-router-dom'

export const Cards_Pollo = ({pollo}) => {
  return (
    <>
            <article className='Cards_hamburguesas'>
                <div className='Card_arriba_hamburguesa'>
                    <header>
                        <span><img src={like} /></span>
                    </header>
                    <a href="#"><img className='img_promos_hamburguesa' src={pollo.img} /></a>
                </div>
                <div className='Card_abajo'>
                    <div className='Contenido_abajo_hamburguesa'>
                        <div className='nombre_prom'>
                            <h3>{pollo.nombre}</h3>
                        </div>
                        <div className='precios_promos_hamburguer'>
                            <p>S/. { pollo.precio}</p>
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
