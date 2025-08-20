import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'
import lupa from '../assets/icones/search-icon.png'
import perfil from '../assets/icones/perfil.png'
import banner from '../assets/imagens/banner.png'
import carrinho from '../assets/icones/carrinho.png'
import './CSS/Header.css'
import './CSS/Dropdown.css'
import NavDrop from './NavDrop'
import Nav from './Nav'


const Header = ({abrirLogin, abrirCart}) => {
    const [usuario, setUsuario] = useState('');
    
    const handleLogout = () => {
        // Pega todos os cookies
        const cookies = document.cookie.split(";");
      
        // Percorre e expira cada cookie
        for (let cookie of cookies) {
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      
          // Apaga o cookie setando expiração no passado
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        }
      
        // Redireciona para login
        window.location.href = "/";
      };
    useEffect(()=>{
        const getCookie = (nome) => {
            const cookies = document.cookie.split("; ").find((row) => row.startsWith(nome + "="));
            return cookies ? cookies.split("=")[1] : null;
          };
      
          const nomeUsuario = getCookie("usuario"); // nome do cookie
          if (nomeUsuario) {
            setUsuario(decodeURIComponent(nomeUsuario)); // decode se tiver caracteres especiais
          }   
    },[])
  return (
    <>
    <header className="container-header flex">
        <div className="container-search flex">
            <div className="flex">
                <div className="flex">
                    <div className="flex flex-logo">
                        <NavLink to='/'><h1>E-commerce</h1></NavLink>
                        <div>
                            <div className="search-bar flex">
                                <input className="input-search" type="text" placeholder="Digite aqui o que você procura"/>
                                <button className="btn-search"><img src={lupa} alt="lupa"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="user flex">
                        <div className="flex">
                            {usuario ? <>
                            <img src={perfil} alt="icone-perfil"/> 
                            <p>Bem-vindo, <br/>{usuario}!</p>
                            <button className="car" onClick={abrirCart}> 
                                <img src={carrinho} alt="carrinho"/>
                            </button>
                            <button className='btn-sair' onClick={()=>handleLogout()}>sair</button>
                            </> : <button className='login' onClick={abrirLogin}>Logar</button>}
                        </div>
                        
                    </div>
                </div>
                <menu className="container-menu flex">
                    <div className="dropdown-menu-categorias">
                        <div className="flex">
                            <div className="image-burger"></div>
                            <p><b>Todas as Categorias</b></p>
                        </div>       
                        <div className="dropdown-departamentos-categorias flex">
                            <div className="departamentos-categorias flex">
                                <div className="departamentos flex">
                                    <NavDrop/>   
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Nav/>
                </menu>
            </div>
            
        </div>
    </header>
    <div className='flex'>
        <img className="banner" src={banner} alt="Banner" />
    </div>
    </>
  )
}

export default Header