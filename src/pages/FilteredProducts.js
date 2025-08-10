import React, { useState } from 'react'
import { useSearchParams } from 'react-router';
import ProductCard from '../components/ProductCard';
import data from '../data/dbTeste.json'

const FilteredProducts = () => {
    const [searchParams] = useSearchParams();
    const categoria = searchParams.get("q");
    const produtosFiltrados = categoria ? data.produtos.filter(produto => produto.categoria === categoria)
    : data.produtos;

  return (
    <main style={{ display: 'flex', width: '80%', margin: 'auto', justifyContent: 'center' , flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
            {
            produtosFiltrados.map((produto) => (
                <ProductCard key={produto.id} produto={produto}/>
            ))}
    </main>
  )
}

export default FilteredProducts