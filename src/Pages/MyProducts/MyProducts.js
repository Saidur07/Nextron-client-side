import React from "react";
import Loader from "../../components/Shared/Loader/Loader";
import Product from "../../components/Shared/Product/Product";
import bar from "../../components/Shared/Progress/Progress";
import useProducts from "../../hooks/useProducts";

const MyProducts = () => {
  const [products] = useProducts();
  bar();
  return (
    <div>
      <section className="bg-realBlack pt-4 px-4 lg:px-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-sky-400 mb-2 block">
                  Your Products
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
                  There are some of the products provided by you.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="flex flex-wrap -mx-4">
              {products.length === 0 ? (
                <Loader></Loader>
              ) : (
                products
                  .slice(3, 6)
                  .map((product) => (
                    <Product key={product._id} data={product}></Product>
                  ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProducts;
