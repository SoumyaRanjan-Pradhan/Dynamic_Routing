import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./productdetails.css"
// Sample product data (you would typically fetch this from an API)

function ProductDetails() {
  const [product, setProduct] = useState({});
  // Find the product based on the productId
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []); 
  return product.id ? (
    <>
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.catagory} />
        </div>

        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-category">
            Category: <span>{product.category}</span>
          </p>
          <p className="product-description">{product.description}</p>
          <div className="product-rating">
            ⭐ <strong>{product.rating.rate}</strong> / 5 —{" "}
            <span>{product.rating.count} reviews</span>
          </div>
          <div className="product-price">${product.price}</div>
          <Link to="/"><button className="add-to-cart">Product list</button></Link>
        </div>
      </div>
    </>
  ) : (
    <h2>Loading..</h2>
  );
}

export default ProductDetails;
