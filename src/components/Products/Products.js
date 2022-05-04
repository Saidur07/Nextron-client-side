import React from "react";
import useProducts from "../../hooks/useProducts";

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

          <div class="container">
            <div class="flex flex-wrap -mx-4">
              {products.slice(2, 8).map((product) => (
                <div class="w-full md:w-1/2 xl:w-1/3 px-3">
                  <div class="bg-[#001d3d] rounded-lg overflow-hidden mb-10">
                    <img src={product.img} class="w-full h-72" alt="" />
                    <div class="p-8 sm:p-9 md:p-7 xl:p-9 ">
                      <h3>
                        <a
                          href="/"
                          class="
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
                        </a>
                      </h3>
                      <p class="text-base text-slate-200 leading-relaxed mb-7">
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
                          <span className="text-green-300">
                            {product.quantity}
                          </span>
                        </p>
                      </div>
                      <a
                        href="/"
                        class=" py-2 px-10 w-full lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-base bg-[#1e88e5] rounded-lg hover:bg-opacity-90 font-normal"
                      >
                        Update
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
