import React from 'react'
import { Slider } from './Slider'
import { Promociones_Hamburguesas } from './Promociones_Hamburguesas'
import { Promociones_Online } from './Promociones_Online';
import { Promociones_Canjear } from './Promociones_Canjear';
import { Social_Bembos } from './Social_Bembos';
import { Footer } from './Footer';
import { Derechos_footer } from './Derechos_footer';

export const Principal = ({ promos, menu_online }) => {
    return (
        <>
            <Slider />
            <section className='container_promociones'>
                <div className='container_titulo_promo'><h2 className='titulo_promo'>PROMOCIONES DE HAMBURGUESAS ONLINE</h2></div>
                <div className='container_cards'>
                    {promos.map((promo) =>
                        <Promociones_Hamburguesas promo={promo} key={promo.nombre} />
                    )}
                </div>
            </section>
            <section className='container_promociones'>
                <div className='container_titulo_promo'><h2 className='titulo_promo'>MENU DE HAMBURGUESAS ONLINE</h2></div>
                <div className='container_cards'>
                    {menu_online.map((online) =>
                        <Promociones_Online online={online} key={online} />
                    )}
                </div>
            </section>
            <section className='Container_banner'>
                <Promociones_Canjear/>
            </section>
            <section className='Container_social'>
                <Social_Bembos/>
            </section>
            <section className='Container_footer'>
                <Footer/>
                <Derechos_footer/>
            </section>
        </>
    )
}
