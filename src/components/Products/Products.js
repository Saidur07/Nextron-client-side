import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Product from "../Shared/Product/Product";

const Products = () => {
  const [products] = useProducts();
  console.log(products);
  return (
    <div>
      <section className="bg-darka pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] px-4 lg:px-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-sky-400 mb-2 block">
                  Our Products
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-white
                  mb-4
                  "
                >
                  Products in the Warehouse
                </h2>
                <p className="text-base text-slate-200">
                  There are some of the products from nextron warehouse.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="flex flex-wrap -mx-4">
              {products.slice(2, 8).map((product) => (
                <Product data={product} key={product._id}></Product>
              ))}
              <Link
                to="/products"
                className="w-2/3 mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-darki border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-xl tracking-wider"
                data-mdb-ripple="true"
                data-mdb-ripple-color="white"
              >
                Manage Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
