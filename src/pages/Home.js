import { useEffect, useState } from 'react';
import data from '../data/dbTeste.json';

const Home = () => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
        // Ou para evitar duplicatas:
        // setCarrinho(prev => [...prev, produto]);

        console.log('Produto adicionado:', produto);
        console.log('Carrinho atual:', carrinho);
    };
    useEffect(()=>{
        
    }, [carrinho])
    return (
        <main style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
            {data.produtos.map((produto) => (
                <div
                    key={produto.id}
                    className='flex flex-column'
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '15px',
                        width: '250px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}
                >
                    <img
                        src={`/imagens/${produto.imagem}`}
                        alt={produto.nome}
                        style={{
                            width: '100%',
                            height: '250px',
                            objectFit: 'cover',
                            borderRadius: '5px'
                        }}
                    />
                    <div className='flex flex-column' style={{gap:'10px'}}>
                        <h3 style={{ margin: '10px 0' }}>{produto.nome}</h3>
                        <p style={{ color: '#666' }}>{produto.descricao}</p>
                        <p style={{ fontWeight: 'bold', color: '#333' }}>
                            R$ {produto.preco.toFixed(2)}
                        </p>
                    </div>
                    <div className='flex flex-column' style={{justifyContent:'flex-end', width:'100%', bottom: '0'}}>

                        <button
                            onClick={() => adicionarAoCarrinho(produto)}
                            style={{
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                padding: '10px 15px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '100%',
                                marginTop: '10px',
                                marginBottom: '0px'
                            }}
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default Home;