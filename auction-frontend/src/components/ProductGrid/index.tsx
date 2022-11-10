import React from 'react';
import "./productGrid.css";
import products from "../../data/products.json";
import ProductPreview from '../ProductPreview';

const ProductGrid = () => {
  return (
    <div>
      {products.map((product)=>(
        <ProductPreview name={product.name} minBid={product.minimumBid} imageUrl={product.imageUrl}/>
      ))}
    </div>
  )
}

export default ProductGrid