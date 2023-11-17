import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Derechos_footer } from "../components/Derechos_footer";
import { Navbar_Promociones } from "../components/Navbar_Promociones";
import { api } from "../api/axios";
import { Cards_CyberBuenazos } from "../components/Cards_CyberBuenazos";
import { Cards_PromosPersonales } from "../components/Cards_PromosPersonales";
import user from "../images/user.svg";
import { ScrollTop } from "../components/ScrollTop";
import { Cards_Complementos_Promociones } from "../components/Cards_Complementos_Promociones";
import lupa from '../images/lupa.png'
export const Promociones = () => {
    const [cyberBuenazos, setCyberBuenazos] = useState([]);
    const [promosPersonales, setPromosPersonales] = useState([]);
    const [complementos, setComplementos] = useState([]);
    useEffect(() => {
        const readCyber = async () => {
            const { data } = await api.get("/cyberbuenazos");
            setCyberBuenazos(data);
        };
        readCyber();
        const readPromosPersonales = async () => {
            const { data } = await api.get("/promociones_personales");
            setPromosPersonales(data);
        };
        readPromosPersonales();
        const readComplementos = async () => {
            const { data } = await api.get("/complementos");
            setComplementos(data);
        };
        readComplementos();
    });
    return (
        <>
            <ScrollTop />
            <header>
                <Header />
                <NavBar />
                <Navbar_Promociones />
            </header>
            <section className="container_cyber_promos">
                <div className="contenido_promos_izq">
                    <p>Promos Delivery - Cyber Buenazo con hasta 40% dto.</p>
                </div>
                <div className="contenido_promos_der">
                    <input
                        className="input_buscar"
                        type="text"
                        placeholder="Buscar producto"
                    />
                    <img className="img_lupa" src={lupa} alt="" />
                </div>
            </section>
            <section className="container_titulo_pag_promos">
                <h2>PROMOCIONES DE HAMBURGUESAS PARA TI CON DELIVERY</h2>
            </section>
            <section className="container_cards_promos">
                <div className="container_titulo_promocionespersonales">
                    <h3>CyberBuenazo</h3>
                </div>
                <div className="container_cyberBuenazos">
                    {cyberBuenazos.map((cyber) => (
                        <Cards_CyberBuenazos cyber={cyber} key={cyber.nombre} />
                    ))}
                </div>
                <div className="container_titulo_promocionespersonales">
                    <img src={user} alt="" />
                    <h3>Promociones Personales</h3>
                </div>
                <div className="container_promocionesPersonales">
                    <div className="container_cards_promospersonales">
                    {promosPersonales.map((personales) => (
                        <Cards_PromosPersonales
                            personales={personales}
                            key={personales.nombre}
                        />
                    ))}
                    </div>
                </div>
                <div className="container_titulo_promocionespersonales">
                    <h3>Complementos:</h3>
                </div>
                <div className="container_complementos">
                    {complementos.map((complementos) => (
                        <Cards_Complementos_Promociones
                            complementos={complementos}
                            key={complementos.nombre}
                        />
                    ))}
                </div>
            </section>
            <section className="container_bajo">
                <footer className="Container_footer">
                    <Footer />
                    <Derechos_footer />
                </footer>
            </section>
        </>
    );
};
