import React from 'react'
import '../index.css'
import logo from '../images/bembos_logo.png'
import telefono from '../images/telefono.png'
import horario_delivery from '../images/horario_delivery.jpeg'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <section className='container_principal'>
            <div className='container_horario'>
                <img src={horario_delivery} alt="" />
            </div>
            <div className='container_header'>
                <div className='container_izq'>
                    <a href="/"><img className='logo' src={logo} alt="" /></a>
                </div>
                <div className='container_der'>
                    <div className='contenido_delivery'>
                        <img className='img_tel' src={telefono} alt="" />
                        <div className='info_delivery'>
                            <div>
                                <p>Delivery</p>
                                <select name="" id="">
                                    <option value="LIMA">LIMA</option>
                                </select>
                            </div>
                            <h4 className='telefono'>014191919</h4>
                        </div>
                        <div className='contenido_login'>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/5953/5953496.png" alt="" />Ingresar o crear tu cuenta</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
