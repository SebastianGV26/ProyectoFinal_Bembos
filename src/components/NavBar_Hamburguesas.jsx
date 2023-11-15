import React from "react";
import "../index.css";
import { Link } from "react-router-dom";


export const NavBar_Hamburguesas = () => {
  const scrollUp = () =>{
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <>
      <nav className="navbar_hamburguesas">
        <ul className="nav_list_hamburguesas">
          <li>
            <Link to="/menu/combos" onClick={scrollUp()}>Combos</Link>
          </li>
          <li>
            <Link to="/menu/lista-hamburguesas" onClick={scrollUp()}>Hamburguesas</Link>
          </li>
          <li>
            <Link to="/menu/pollo" onClick={scrollUp()}>Pollo</Link>
          </li>
          <li>
            <Link to="/menu/loncheritas" onClick={scrollUp()}>Loncheritas</Link>
          </li>
          <li>
            <Link to="/menu/complementos" onClick={scrollUp()}>Complementos</Link>
          </li>
          <li>
            <Link to="/menu/bebidas" onClick={scrollUp()}>Bebidas</Link>
          </li>
          <li>
            <Link to="/menu/helados" onClick={scrollUp()}>Helados</Link>
          </li>
          <li>
            <Link to="/menu/inka-chips" onClick={scrollUp()}>Inka Chips</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
