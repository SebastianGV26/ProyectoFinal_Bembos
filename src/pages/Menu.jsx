import React, { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import arrowUp from '../images/arrowUp.png'
import ubicacion from "../images/ubicacion.png";
import { Cards_Menu } from "../components/Cards_Menu";
import { Footer } from "../components/Footer";
import "../index.css";
import { Derechos_footer } from "../components/Derechos_footer";
import { api } from "../api/axios";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ScrollTop } from "../components/ScrollTop";

export const Menu = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const readMenu = async () => {
            const { data } = await api.get("/menu");
            setMenu(data);
        };
        readMenu();
    });
    
    return (
        <>
        <ScrollTop/>
            <header>
                <Header />
                <NavBar />
            </header>
            <main>
                <section className="container_ubicacion_menu">
                    <div className="contenido_ubicacion_izq">
                        <div className="contenido_ubicacion_izq1">
                            <p>Se está mostrando el menú del restaurante</p>
                        </div>
                        <div className="contenido_ubicacion_izq2">
                            <img src={ubicacion} alt="" />
                            <p>GENERAL</p>
                        </div>
                    </div>
                    <div className="contenido_ubicacion_der">
                        <button>Cambiar</button>
                    </div>
                </section>
                <section className="container_titulo_menu">
                    <h2>ELIGE TU MENÚ BEMBOS</h2>
                </section>
                <section className="container_slider_menu">
                    <div className="slider-container">
                        <div className="container-images">
                            <div className="embla" ref={emblaRef}>
                                <div className="embla__container">
                                    <div className="embla__slide">
                                        <img className="slider_en_menu" src={slider1} alt="" />
                                    </div>
                                    <div className="embla__slide">
                                        <img className="slider_en_menu" src={slider2} alt="" />
                                    </div>
                                    <div className="embla__slide">
                                        <img className="slider_en_menu" src={slider3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="container_cards_menu">
                {menu.map((prod) => (
                    <Cards_Menu prod={prod} key={prod.nombre} />
                ))}
            </section>
            <section className="container_arrowUp">
                <button className="btn_arrowUp">
                    <img src={arrowUp} alt="" />
                </button>
            </section>
        </main >
            <section className="container_bajo">
                <footer className="Container_footer">
                    <Footer />
                    <Derechos_footer />
                </footer>
            </section>
    </>
  );
};
