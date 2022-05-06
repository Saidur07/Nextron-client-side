import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Loader from "../../components/Shared/Loader/Loader";

import solds from "../../assets/images/sold.png";
import available from "../../assets/images/available.png";

const Products = () => {
  const [products] = useProducts();
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
              {products.length === 0 ? (
                <Loader></Loader>
              ) : (
                products.slice(0, 6).map((product) => (
                  <div
                    className="w-full md:w-1/2 xl:w-1/3 px-3  transition-all"
                    key={product._id}
                  >
                    <div className="bg-[#001d3d] rounded-lg overflow-hidden mb-10">
                      <img
                        src={product.img}
                        className="w-full h-72 hover:scale-110 transition-all"
                        alt="Product"
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
                        <div className="flex justify-center items-center md:flex-row flex-col">
                          <div className="w-2/3 md:pl-16 ">
                            <p
                              className="font-medium
                             text-white text-lg
                             mb-4
                             "
                            >
                              Price :{" "}
                              <span className="text-green-300">
                                ${product.price}
                              </span>
                            </p>
                            <p
                              className="font-medium
                             text-white text-lg
                             mb-4
                             "
                            >
                              Supplier :{" "}
                              <span className="text-cyan-300">
                                {product.supplier}
                              </span>
                            </p>
                            <p
                              className="font-medium
                             text-white text-lg
                             mb-4
                             "
                            >
                              Quantity :{" "}
                              <span className="text-yellow-300">
                                {product.quantity}
                              </span>
                            </p>
                          </div>
                          <div className="w-1/3">
                            {product.quantity < 1 ? (
                              <img src={solds} alt="" className="w-full " />
                            ) : (
                              <img src={available} alt="" className="w-full " />
                            )}
                          </div>
                        </div>
                        <div className="flex ">
                          <Link
                            to={"/product/" + product._id}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="white"
                            className=" py-3 px-10 w-full lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-100 font-semibold text-base bg-darku rounded-lg hover:bg-opacity-90 mx-2"
                          >
                            Manage
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex items-center justify-center">
              <Link
                to="/products"
                className="w-2/3 mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-darku border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-lg md:text-xl md:tracking-wide"
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
