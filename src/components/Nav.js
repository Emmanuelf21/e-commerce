import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
  return (
    <>
    <NavLink to='/produtos?q=Cadeira' className="dropdown-menu-categorias menu-categorias">
        <p>Cadeiras</p>
    </NavLink >
    <NavLink to='/produtos?q=Teclado' className="dropdown-menu-categorias menu-categorias" >
        <p>Teclados</p>
    </NavLink >
    <NavLink to='/produtos?q=Monitor' className="dropdown-menu-categorias menu-categorias">
        <p>Monitores</p>
    </NavLink >
    <NavLink to='/produtos?q=Headset' className="dropdown-menu-categorias menu-categorias">
        <p>Fones de ouvido</p>
    </NavLink >
    <NavLink to='/produtos?q=SSD' className="dropdown-menu-categorias menu-categorias">
        <p>SSDs</p>
    </NavLink >
    </>
  )
}

export default Nav