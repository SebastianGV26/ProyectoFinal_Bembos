import React from 'react'
import banner from '../images/banner_bajo_principal.png'
import '../index.css'
export const Promociones_Canjear = () => {
    return (
        <>
            <article className='contenido_banner'>
                <div className='banner_bajo'>
                    <a href="#"><img className='img_banner' src={banner} alt="" /></a>
                </div>
            </article>
        </>
    )
}
