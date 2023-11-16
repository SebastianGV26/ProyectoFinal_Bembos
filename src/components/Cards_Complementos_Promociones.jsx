import React from 'react'


export const Cards_Complementos_Promociones = ({complementos}) => {
  return (
    <>
            <article className='Cards_promos_complementos'>
                <div className='Card_arriba_promo_complemento'>
                    <a href="#"><img className='img_promos_complementos' src={complementos.img} /></a>
                </div>
                <div className='Card_abajo'>
                    <div className='Contenido_abajo_hamburguesa'>
                        <div className='nombre_prom'>
                            <h3>{complementos.nombre}</h3>
                        </div>
                        <div className='precios_promos_hamburguer'>
                            <p>S/. {complementos.precio}</p>
                        </div>
                        <div className="btn_promo">
                            <button className='Vermas'>Ver más</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
  )
}
