import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/data.json"; 

export default function ProductDetails() {
  const { id } = useParams(); 
  const product = products.find((p) => p.id === parseInt(id)); 

  if (!product) {
    return <div>Product not found.</div>; 
  }

  return (
    <div className="product-landing mt-4  mx-auto d-flex justify-content-center align-content-center" style={{maxWidth:'50rem'}}>
      <div>
        <h1>{product.title}</h1>
        <img src={product.productImage} alt={product.title} />
      </div>
      <div>
        <p>{product.description}</p>
        <p className="fw-semibold">Price: ₹ {product.price}</p>
      </div>
      {/* Add more details here as needed */}
    </div>
  );
}
