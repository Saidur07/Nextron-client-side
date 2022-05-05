import React from "react";
import Product from "../../components/Shared/Product/Product";
import useProducts from "../../hooks/useProducts";
import Loader from "../../components/Shared/Loader/Loader";
import { Link } from "react-router-dom";
import bar from "../../components/Shared/Progress/Progress";

const AllProducts = () => {
  const [products] = useProducts();
  bar();
  return (
    <div className="bg-realBlack py-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-6 max-w-[510px]">
            <span className="font-semibold text-lg text-sky-400 mb-2 block">
              All Products
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
              Products of the Warehouse
            </h2>
            <p className="text-base text-slate-200">
              Here are all of the products of the warehouse.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {products.length === 0 ? (
            <Loader></Loader>
          ) : (
            products.map((product) => (
              <Product key={product._id} data={product}></Product>
            ))
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="/addproducts"
          className="w-2/3 mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-darku border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-lg md:text-xl md:tracking-wider "
          data-mdb-ripple="true"
          data-mdb-ripple-color="white"
        >
          Add New Products
        </Link>
      </div>
    </div>
  );
};

export default AllProducts;
