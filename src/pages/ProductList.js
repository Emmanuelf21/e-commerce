import { useEffect, useState } from 'react';
import data from '../data/dbTeste.json';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
   
    return (
        <main style={{ display: 'flex', width: '80%', margin: 'auto', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
            {data.produtos.map((produto) => (
                <ProductCard key={produto.id} produto={produto}/>
            ))}
        </main>
    );
};

export default ProductList;