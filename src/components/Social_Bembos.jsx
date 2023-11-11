import React from 'react'
import '../index.css'
import fb_logo from '../images/facebook.png'
import twitter_logo from '../images/twitter.png'

export const Social_Bembos = () => {
  return (
    <>
            <article className='contenido_social'>
                <div className='social_izq'>
                    <div className='contenido_izq'>
                        <header>
                            <h2>Social Bembos</h2>
                            <p>Compartir en:</p>
                            <div className='botones_social'>
                                <a href="#"><button className='btn_twitter'><img className='img_tw' src={twitter_logo} alt="" />TWITTER</button></a>
                                <a href="#"><button className='btn_facebook'><img className='img_fb' src={fb_logo} alt="" />FACEBOOK</button></a>
                            </div>
                        </header>
                    </div>
                </div>
                <div className="social_der">
                    <div className='container_social_der'>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </article>
        </>
  )
}
