import React from 'react'
import '../index.css'
import social1 from '../images/social1.png'
import social2 from '../images/social2.png'
import social3 from '../images/social3.png'
import social4 from '../images/social4.png'
import visa from '../images/visa.png'
import mastercard from '../images/mastercard.png'
import american from '../images/american-express.png'
import safety from '../images/safety.png'
import boleta from '../images/boleta.png'
import reclamaciones from '../images/reclamaciones.png'
import bembos_blanco from '../images/bembos_logo_blanco.png'
export const Footer = () => {
  return (
        <div className='contenido_footer'>
            <header className='contenido_superior'>
                <ul>
                    <li><a href="#"><img className='social_icons' src={social1} alt="" /></a></li>
                    <li><a href="#"><img className='social_icons' src={social2} alt="" /></a></li>
                    <li><a href="#"><img className='social_icons' src={social3} alt="" /></a></li>
                    <li><a href="#"><img className='social_icons' src={social4} alt="" /></a></li>
                </ul>
            </header>
            <div className='contenido_inferior'>
                <div className='container_inf'>
                    <header className='header_container_inf1'>
                        <div className='contenido_inf1'>
                            <ul>
                                <li><a href="#">Locales</a></li>
                                <li><a href="#">Zonas de Reparto</a></li>
                                <li><a href="#">Nosotros</a></li>
                                <li><a href="#">Atención al Cliente</a></li>
                                <li><a href="#">Preguntas Frecuentes</a></li>
                                <li><a href="#">Mapa de sitio</a></li>
                            </ul>
                        </div>
                        <div className='contenido_inf1'>
                            <ul>
                                <li><a href="#">Política de Datos Personales</a></li>
                                <li><a href="#">Términos y condiciones de Promociones</a></li>
                                <li><a href="#">Derechos ARCO</a></li>
                            </ul>
                        </div>
                    </header>
                    <div className='contenido_inf1_img'>
                        <img className='img_logo_blanco' src={bembos_blanco} alt="" />
                    </div>
                </div>
                <div className='container_inf'>
                    <header className='header_container_inf2'>
                        <h4>Formas de Pago</h4>
                        <ul>
                            <li><img className='img_pagos' src={visa} alt="" /></li>
                            <li><img className='img_pagos' src={mastercard} alt="" /></li>
                            <li><img className='img_pagos' src={american} alt="" /></li>
                        </ul>
                        <img className='img_safety' src={safety} alt="" />
                    </header>
                    <div className='container_comprobante'>
                        <a href="#"><button className='btn_comprobante'><img className='img_comprobante' src={boleta} alt="" />Comprobantes</button></a>
                    </div>
                </div>
                <div className='container_inf'>
                    <header className='header_container_inf3'>
                        <p>¿Quieres recibir promociones y noticias?</p>
                        <div>
                        <input className='input_email' type="email" placeholder='Tu Correo'/><button className='btn_email'>Enviar</button>
                        </div>
                        <div className='container_terminos'>
                        <input type="checkbox"/><p>He leído y revisado los <a href="#">términos y condiciones</a></p>
                        </div>
                    </header>
                    <div className='container_reclamaciones'>
                        <a href="#"><img className='img_reclamaciones' src={reclamaciones} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
  )
}
