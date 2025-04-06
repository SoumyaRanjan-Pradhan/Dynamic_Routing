import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return data.length > 0 ? (
    <>
      <div className="card-container">
        {console.log(data)}
        {data.map((val) => {
          return (
            <div className="card" key={val.id}>
              {console.log(val)}
              <h5 className="card-title">{val.title}</h5>
              <img src={val.image} alt="Card Image" className="card-img" />
              <div className="card-content">
                <Link to={`/product-details/${val.id}`} className="card-button">
                  Product Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <h2>Loading...</h2>
  );
};
export default ProductList;
