import React from 'react'
import '../index.css'
export const Promociones_Online = ({ online }) => {
    return (
        <>
            <article className='Cards_PromOnline'>
                <div className='Card_arribaOnline'>
                    <a href="#"><img className='img_PromOnline' src={online.img} /></a>
                </div>
                <div className='Card_abajoOnline'>
                    <div className='Contenido_abajoOnline'>
                        <div className='nombre_PromOnline'>
                            <h3>{online.nombre}</h3>
                        </div>
                        <div className="btn_PromOnline">
                            <button className='VertodosOnline'>Ver todos</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
