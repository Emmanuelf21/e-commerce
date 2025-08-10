import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
    //navbar normal
  return (
    <>
    <NavLink to='/produtos?q=Cadeira' className=" menu-categorias">
        <p>Cadeiras</p>
    </NavLink >
    <NavLink to='/produtos?q=Teclado' className=" menu-categorias" >
        <p>Teclados</p>
    </NavLink >
    <NavLink to='/produtos?q=Monitor' className=" menu-categorias">
        <p>Monitores</p>
    </NavLink >
    <NavLink to='/produtos?q=Headset' className=" menu-categorias">
        <p>Fones de ouvido</p>
    </NavLink >
    <NavLink to='/produtos?q=SSD' className=" menu-categorias">
        <p>SSDs</p>
    </NavLink >
    </>
  )
}

export default Nav