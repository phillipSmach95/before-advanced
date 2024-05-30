import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import useFetch from "./hooks";
import { getProducts } from "./services/productService";

export default function App() {
  const [url, setUrl] = useState("/");
  async function getUrl() {
    setUrl(await getProducts("boards"));
  }
  getUrl()
  const p = useFetch(url);

console.log(p);

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
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
      {renderProduct(p)}
      <Footer />
    </>
  );
}
