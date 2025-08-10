import React, { useState } from 'react';
import './CSS/ProductCard.css';

// Função para pegar o valor de um cookie pelo nome
function getCookie(nome) {
  const cookies = document.cookie.split(';').map(c => c.trim());
  for (let cookie of cookies) {
    if (cookie.startsWith(nome + '=')) {
      return cookie.substring(nome.length + 1);
    }
  }
  return null;
}

const ProductCard = ({ produto }) => { 
  //armazena o produto no carrinho através do localstorage
  const [carrinho, setCarrinho] = useState(() => {
    const salvo = localStorage.getItem('carrinho');
    return salvo ? JSON.parse(salvo) : [];
  });

  const adicionarAoCarrinho = (produto) => {
    const usuario = getCookie('usuario'); // verifica se existe o cookie "usuario"

    if (!usuario) { //verifica se o usuário está logado para poder adicionar produto no carrinho
      alert('Você precisa estar logado para adicionar produtos ao carrinho.');
      return;
    }

    const salvo = localStorage.getItem('carrinho');
    const carrinhoAtual = salvo ? JSON.parse(salvo) : [];

    const novoCarrinho = [...carrinhoAtual, produto];
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));

    alert('Produto adicionado ao carrinho!');
    console.log(localStorage.getItem('carrinho'));
  };
  // Criação do card do produto
  return (
    <div key={produto.id} className="product-card">
      <img
        src={`/imagens/${produto.imagem}`}
        alt={produto.nome}
        className="product-image"
      />

      <div className="product-info">
        <h3 className="product-name">{produto.nome}</h3>
        <p className="product-description">{produto.descricao}</p>
        <p className="product-price">
          R$ {produto.preco.toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => adicionarAoCarrinho(produto)}
        className="add-to-cart-button"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;
