import React from 'react'
import products from "../../data/products.json";
import Container from "react-bootstrap/Container";
import Product from '../Product';

const HighlightedProduct :React.FC= () => {
  return (
    <Container>
        <div className='highlightedProduct'>
            {products.map((product)=>(
                <Product  name={product.name} details={product.details} imageUrl={product.imageUrl} minimumBid={product.minimumBid}/>
            ))}
        </div>
    </Container>
  )
}

export default HighlightedProduct