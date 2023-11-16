import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

export const Navbar_Promociones = () => {
  return (
    <>
      <section className="container_Nav_Promos">
        <nav className="container_Lista_Promos">
          <ul className="lista_Promos">
            <li>
              <Link>CyberBuenazo</Link>
            </li>
            <li>
              <Link>Promociones Personales</Link>
            </li>
            <li>
              <Link>Promociones para 2</Link>
            </li>
            <li>
              <Link>Promociones para compartir</Link>
            </li>
            <li>
              <Link>Cupones</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};
