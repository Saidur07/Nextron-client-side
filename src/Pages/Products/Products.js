import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product.js";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2 className="mt-8 max-w-lg mb-6 font-sans text-2xl text-center font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto">
        <span>
          Products <br />
        </span>
        from Alex Johnson
      </h2>
      <p className="text-base text-gray-700 text-center font-semibold md:text-lg">
        Alex Johnson provides various courses. Here are some of them :
      </p>
      <hr className="w-2/3 mx-auto my-8" />
      <div className="mx-auto w-2/3 mt-4">
        <div className="grid gap-5 mb-8 md:grid-cols-2 ">
          {products.map((product) => (
            <Product key={product.id} data={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
