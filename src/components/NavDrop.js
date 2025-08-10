import React from 'react'
import { NavLink } from 'react-router'
import arrow from '../assets/icones/gray-arrow-dropdown.png'

const NavDrop = () => {
    //Dropdown da navbar
  return (
    <>
    <NavLink to='/produtos?q=Cadeira' className="departamento">
        <p>Cadeiras</p>
        <img src={arrow} alt=""/>
    </NavLink>
    <NavLink to='/produtos?q=Teclado' className="departamento">
        <p>Teclados</p>
        <img src={arrow} alt=""/>
    </NavLink>
    <NavLink to='/produtos?q=Monitor' className="departamento">
        <p>Monitores</p>
        <img src={arrow} alt=""/>
    </NavLink>

    <NavLink to='/produtos?q=Headset' className="departamento">
        <p>Fones de Ouvido</p>
        <img src={arrow} alt=""/>
    </NavLink>
    <NavLink to='/produtos?q=SSD' className="departamento">
        <p>SSDs</p>
        <img src={arrow} alt=""/>
    </NavLink>
    </>
  )
}

export default NavDrop