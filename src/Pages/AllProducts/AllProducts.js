import React from "react";
import Product from "../../components/Shared/Product/Product";
import useProducts from "../../hooks/useProducts";
import Loader from "../../components/Shared/Loader/Loader";
import { Link } from "react-router-dom";
import bar from "../../components/Shared/Progress/Progress";
import Swal from "sweetalert2";

const AllProducts = () => {
  const [products, setProducts] = useProducts();
  bar();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      text: "Please don't delete any product if you are here just for visiting. It will also delete from the database. Consider creating you own product and then delete 🥶",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://still-eyrie-22111.herokuapp.com/product/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          });
        Swal.fire(
          "Deleted!",
          "The product delted successfully from the database",
          "success"
        );
      }
    });
  };
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
              <Product
                key={product._id}
                data={product}
                button={handleDelete}
              ></Product>
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
