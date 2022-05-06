import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import bar from "../Shared/Progress/Progress";

const ProductDetail = () => {
  const confirmDeliver = () => {
    Swal.fire({
      title: "Are you sure its deliverd?",
      text: "Check once again!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deliverd!",
          "Product quantity decreased successfully",
          "success"
        );
      }
    });
  };

  const quantityRef = useRef(0);
  const handleQuantity = (event) => {
    event.preventDefault();
    const quantity = quantityRef.current.value;
    if (quantity <= 0) {
      Swal.fire({
        icon: "error",
        title: "Hey!",
        text: "Enter a valid quantity",
        footer: "<p>Enter a number avobe 0</p>",
      });
      quantityRef.current.value = "";
    } else {
      Swal.fire("Done!", "Quantity added successfully!", "success");
      quantityRef.current.value = "";
    }
  };

  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://still-eyrie-22111.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  bar();

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex flex-col md:flex-row">
            <div
              className="w-full md:h-auto h-64 bg-white block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url(${product.img})`,
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-darka p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center text-white">
                {product.name}
              </h3>
              <hr className="w-1/2 my-4 mx-auto" />
              <p className="md:mx-12  text-lg text-slate-300">
                {product.description}
              </p>
              <hr className="w-1/2 mx-auto my-4" />
              <div className="md:w-1/2 w-full md:mx-auto">
                <p
                  className="font-medium
                             text-gray-200 text-lg
                             mb-4
                             "
                >
                  ID : <span className="text-red-400">{product._id}</span>
                </p>
                <p
                  className="font-medium
                             text-gray-200 text-lg
                             mb-4
                             "
                >
                  Price :{" "}
                  <span className="text-purple-400">${product.price}</span>
                </p>
                <p
                  className="font-medium
                               text-gray-200 text-lg
                               mb-4
                               "
                >
                  Sold :{" "}
                  <span className="text-orange-400">
                    {product.quantity < 1 ? "Yes" : "No"}
                  </span>
                </p>
                <p
                  className="font-medium
                             text-gray-200 text-lg
                             mb-4
                             "
                >
                  Supplier :{" "}
                  <span className="text-sky-400">{product.supplier}</span>
                </p>
                <p
                  className="font-medium
                             text-gray-200 text-lg
                             "
                >
                  Quantity :{" "}
                  <span className="text-green-400">{product.quantity}</span>
                </p>

                <button
                  onClick={confirmDeliver}
                  className="w-2/3 mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-darki border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-xl  cursor-pointer ml-4 hover:text-gray-300  mt-4"
                >
                  Deliverd
                </button>
                <div className="mt-4">
                  <form
                    onSubmit={handleQuantity}
                    className="flex flex-col md:flex-row"
                  >
                    <input
                      ref={quantityRef}
                      type="number"
                      placeholder="Add More Quantity"
                      className="input w-full max-w-sm"
                      required
                    ></input>
                    <input
                      type="submit"
                      value="Add"
                      className="w-2/3 mt-4 md:mt-0 mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-darki border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-xl  cursor-pointer ml-4 hover:text-gray-300 "
                    />
                  </form>
                </div>
              </div>
              <div className="flex items-center justify-center mt-4">
                <Link
                  to="/products"
                  className="md:w-2/3 w-full mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-darki mt-6 border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-lg md:text-xl md:tracking-wider "
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="white"
                >
                  See All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
