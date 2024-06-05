import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { getProducts } from "./services/productService";

export default function App() {
  const [products, setProducts]= useState([])
  useEffect(()=> {
    getProducts('boards').then((res)=>{setProducts(res)})
  },[])
  function renderProduct(product) {
    return (
      <div key={product.id} className="product">
        <a href="/">
          <img src={`/images/${product.image}`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </a>
      </div>
    );
  }
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size">
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </section>
        </main>
      </div>
      <section id="products">
      {products.map(renderProduct)}
      </section>
      <Footer />
    </>
  );
}
