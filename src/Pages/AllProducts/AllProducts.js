import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const AllProducts = () => {
  const [products] = useProducts();
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
          {products.map((product) => (
            <div
              className="w-full md:w-1/2 xl:w-1/3 px-3  transition-all"
              key={product.id}
            >
              <div className="bg-[#001d3d] rounded-lg overflow-hidden mb-10">
                <img
                  src={product.img}
                  className="w-full h-72 hover:scale-110 transition-all"
                  alt=""
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 ">
                  <h3
                    className="
                             font-semibold
                             text-white text-xl
                             sm:text-[22px]
                             md:text-xl
                             lg:text-[22px]
                             xl:text-xl
                             2xl:text-[22px]
                             mb-4
                             block
                             "
                  >
                    {product.name}
                  </h3>
                  <p className="text-base text-slate-200 leading-relaxed mb-7">
                    {product.description}
                  </p>
                  <hr className="w-2/3 mx-auto mb-3" />
                  <div>
                    <p
                      className="font-medium
                             text-white text-lg
                             mb-4
                             "
                    >
                      Supplier :{" "}
                      <span className="text-cyan-300">{product.supplier}</span>
                    </p>
                    <p
                      className="font-medium
                             text-white text-lg
                             mb-4
                             "
                    >
                      Quantity :{" "}
                      <span className="text-green-300">{product.quantity}</span>
                    </p>
                  </div>
                  <div className="flex ">
                    <Link
                      to="/"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="dark"
                      className=" py-3 px-10 w-full lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-700 font-semibold text-base bg-[#64dfdf] rounded-lg hover:bg-opacity-90 mx-2"
                    >
                      Update
                    </Link>
                    <Link
                      to="/"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="dark"
                      className=" py-3 px-10 w-full lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-100 font-semibold text-base bg-[#c9184a] rounded-lg hover:bg-opacity-90 mx-2"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
