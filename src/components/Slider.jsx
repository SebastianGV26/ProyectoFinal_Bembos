import React, { useEffect, useRef, useState } from 'react'
import '../index.css'
import izquierda from '../images/izquierda.png'
import derecha from '../images/derecha.png'
import slider1 from '../images/slider1.jpg'
export const Slider = () => {
    return (
        <section className='main-container'>
            <div className='slider-container'>
                <div className='container-images'>
                        <img className='slide' src={slider1} alt="" />
                </div>
            </div>
            <div className='controles' id='controles'>
                <button className='prev'>
                    <img src={izquierda} alt="" />
                </button>
                <button className='next'>
                    <img src={derecha} alt="" />
                </button>
            </div>
        </section>

    )
}
