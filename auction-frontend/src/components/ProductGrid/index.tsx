import React from 'react';
import "./productGrid.css";
import products from "../../data/products.json";
import ProductPreview from '../ProductPreview';

const ProductGrid = () => {
  return (
    <div className='productGridDiv'>
      {products.map((product)=>(
        <div className='gridItem'>
        <ProductPreview name={product.name} minBid={product.minimumBid} imageUrl={product.imageUrl}/>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid