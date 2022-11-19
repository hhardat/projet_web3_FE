import { useState, useEffect } from "react";
import Product from "components/Product/Product";
import axios from 'axios'

const HomePage = () => {
  const [products, setProducts] = useState([]);

  // recupération de la dat GET
  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/products").then((response) => {
      console.log("promise fulfilled", response.data);
      //setTimeout(() => setNotes(response.data), 5000)
      setProducts(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((p) => (
            // <Note key={note.id} note={note} />
            <Product  key={p.id} product={p} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
