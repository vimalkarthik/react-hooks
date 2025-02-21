import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
          <img src={product.images[0]} alt={product.title} width="100%" height="200px" style={{ objectFit: "cover" }} />
          <h3>{product.title}</h3>
          <p>💰 Price: ${product.price}</p>
          <button style={{ background: "green", color: "white", padding: "5px", border: "none", cursor: "pointer" }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
