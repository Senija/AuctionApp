import React from "react";
import image from "../../assets/images/runningShoes2.webp";
import Button from "@mui/material/Button";
import "./Product.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Product {
  name: string;
  details: string;
  minimumBid: number;
  imageUrl: string;
}

const Product: React.FC<Product> = ({
  name,
  details,
  minimumBid,
  imageUrl,
}) => {
  return (
    <>
      <div className="containerProduct">
        <div className="nmdContainer">
          <h1 className="productName">{name}</h1>
          <h2 className="productName">Start from ${minimumBid}</h2>
          <p>{details}</p>
          <Button variant="outlined" color="secondary" sx={{width:"fit-content", verticalAlign: "middle"}} endIcon={<ArrowForwardIosIcon />}>BID NOW </Button>
        </div>
        <div className="imgContainer">
          <img className="image" src={image} alt="shoes" />
        </div>
      </div>
    </>
  );
};

export default Product;
