import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Menu } from './pages/Menu.jsx'
import { Hamburguesas } from './pages/Hamburguesas/Hamburguesas.jsx'
import { Pollo } from './pages/Hamburguesas/Pollo.jsx'
import { Loncheritas } from './pages/Hamburguesas/Loncheritas.jsx'
import { InkaChips } from './pages/Hamburguesas/InkaChips.jsx'
import { Complementos } from './pages/Hamburguesas/Complementos.jsx'
import { Bebidas } from './pages/Hamburguesas/Bebidas.jsx'
import { Helados } from './pages/Hamburguesas/Helados.jsx'
import { Combos } from './pages/Hamburguesas/Combos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <h1>Error inesperado</h1>
  },
  {
    path: '/menu',
    element: <Menu/>,
    errorElement: <h1>Error inesperado</h1>
  },
  {
    path: '/menu/lista-hamburguesas',
    element: <Hamburguesas/>,
    errorElement: <h1>Error inesperado</h1>
  },
  {
    path: '/menu/pollo',
    element: <Pollo/>,
    errorElement: <h1>Error inesperado</h1>
  },
  {
    path: '/menu/loncheritas',
    element: <Loncheritas/>,
    errorElement: <h1>Error inesperado</h1>
  },
  {
    path: '/menu/inka-chips',
    element: <InkaChips/>,
    errorElement: <h1>Error inesperado</h1>
  },
  {
    path: '/menu/complementos',
    element: <Complementos/>,
    errorElement: <h1>Error inesperado</h1>
  },
  {
    path: '/menu/bebidas',
    element: <Bebidas/>,
    errorElement: <h1>Error inesperado</h1>
  },
  {
    path: '/menu/helados',
    element: <Helados/>,
    errorElement: <h1>Error inesperado</h1>
  },
  {
    path: '/menu/combos',
    element: <Combos/>,
    errorElement: <h1>Error inesperado</h1>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
