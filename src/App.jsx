import React, { useEffect, useState } from 'react'
import './index.css'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Principal } from './components/Principal'
import { Menu } from './pages/Menu'
import { api } from './api/axios'
export const App = () => {
  const [promociones_online, setPromocionesOnline] = useState([]);
  const [menu, setMenu] = useState([]);
  useEffect(()=>{
    const readPromos = async() =>{
      const {data} = await api.get('/promociones_online');
      setPromocionesOnline(data);
    };
    readPromos();
    const readMenu = async() =>{
      const {data} = await api.get('/menu');
      setMenu(data);
    }
    readMenu();
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <main><Principal promos={promociones_online} menu_online = {menu}/></main>
    </>
  )
}

