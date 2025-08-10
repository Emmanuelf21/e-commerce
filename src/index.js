import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router';
import FilteredProducts from './pages/FilteredProducts';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import CartModal from './components/CartModal';

const RootComponent = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <BrowserRouter>
      {/* Passa função para o Header abrir o modal */}
      <Header abrirLogin={() => setShowLogin(true)} abrirCart={()=>setShowCart(true)}/>

      {/* Exibe o modal somente se showLogin for true */}
      {showLogin && (
        <LoginModal fecharLogin={() => setShowLogin(false)} />
      )}
      {/* Exibe o modal somente se showCart for true */}
      {showCart &&(
      <CartModal fecharCart={()=>setShowCart(false)}/>
      )}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/produtos" element={<FilteredProducts />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RootComponent/>
  </React.StrictMode>
);

reportWebVitals();
