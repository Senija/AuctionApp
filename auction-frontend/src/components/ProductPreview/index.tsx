import React from "react";
import "./productPreview.css";
import image from "../../assets/images/runningShoes2.webp";
interface ProductProps {
  name: string;
  minBid: number;
  imageUrl: string;
}
const ProductPreview: React.FC<ProductProps> = ({ name, minBid, imageUrl}) => {
  return (
    <>
      <img src={image} alt="image"/>
      <h1>{name}</h1>
      <p>Start from {minBid}</p>
    </>
  );
};

export default ProductPreview;
