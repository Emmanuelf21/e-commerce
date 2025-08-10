import React, { useEffect, useState } from 'react';
import './CSS/CartModal.css';

const CartModal = ({ fecharCart }) => {
  const [carrinho, setCarrinho] = useState([]);

  const onRemoverItem = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const total = carrinho.reduce(
    (soma, item) => soma + Number(item.preco), 
    0
  );

  useEffect(() => {
    const salvo = localStorage.getItem('carrinho');
    if (salvo) {
      setCarrinho(JSON.parse(salvo));
    }
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Carrinho de Compras</h2>

        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {carrinho.map((item, index) => (
              <li key={index}>
                {item.nome} - R$ {Number(item.preco).toFixed(2)}{' '}
                <button onClick={() => onRemoverItem(index)}>Remover</button>
              </li>
            ))}
          </ul>
        )}

        <p>
          <strong>Total:</strong> R$ {total.toFixed(2)}
        </p>
        <button onClick={fecharCart}>Fechar</button>
      </div>
    </div>
  );
};

export default CartModal;
