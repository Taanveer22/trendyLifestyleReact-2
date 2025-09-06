import { useState, useEffect } from "react";
import OneProduct from "./OneProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full sm:w-3/5">
      <h1>total products : {products.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {products.map((element, index) => (
          <OneProduct element={element} key={index}></OneProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
