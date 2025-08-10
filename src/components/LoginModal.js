import React, { useState } from 'react';
import './CSS/LoginModal.css';
import data from '../data/dbTeste.json'; // seu JSON com usuarios

const LoginModal = ({ fecharLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    const usuarioEncontrado = data.usuarios.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha
    );

    if (usuarioEncontrado) { //verifica se existe o usuário e armazena ele nos cookies
      // Cria cookie compatível com o getCookie do Header
      document.cookie = `usuario=${encodeURIComponent(usuarioEncontrado.nome)}; path=/`;

      // Atualiza página para que o Header já exiba o nome
      window.location.reload();
    } else {
      alert('Email ou senha inválidos!');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <div className="modal-actions">
          <button className="btn-close" onClick={fecharLogin}>Fechar</button>
          <button className="btn-login" onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
