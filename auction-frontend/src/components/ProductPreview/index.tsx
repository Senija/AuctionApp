import React from "react";
import "./productPreview.css";
import image from "../../assets/images/runningShoes2.webp";
interface ProductProps {
  name: string;
  minBid: number;
  imageUrl: string;
}
const ProductPreview: React.FC<ProductProps> = ({ name, minBid, imageUrl }) => {
  return (
    <>
      {/* <div className="productPreviewDiv"> */}
        <img className="productPreviewImg" src={image} alt="image" />
        <p className="nameP">{name} <br/>
        <small className="bidSmall">Start from ${minBid}</small>
        </p>
        
      {/* </div> */}
    </>
  );
};

export default ProductPreview;
