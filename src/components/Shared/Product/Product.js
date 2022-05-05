import React from "react";
import { Link } from "react-router-dom";
import solds from "../../../assets/images/sold.png";
import available from "../../../assets/images/available.png";
import Swal from "sweetalert2";
const Product = (props) => {
  const { _id, img, name, description, price, supplier, quantity, sold } =
    props.data;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure to delete this?",
      text: "Please don't delete any product if you are here just for visiting. It will also delete from the database 🥶",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "The product delted successfully from the database",
          "success"
        );
      }
    });
  };
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 px-3  transition-all ">
      <div className="bg-[#001d3d] rounded-lg overflow-hidden mb-10">
        <img
          src={img}
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
            {name}
          </h3>
          <p className="text-base text-slate-200 leading-relaxed mb-7">
            {description}
          </p>
          <hr className="w-2/3 mx-auto mb-3" />
          <div className="flex justify-center items-center md:flex-row flex-col">
            <div className="w-1/2 md:pl-16 ">
              <p
                className="font-medium
                             text-white text-lg
                             mb-4
                             "
              >
                Price : <span className="text-green-300">${price}</span>
              </p>
              <p
                className="font-medium
                             text-white text-lg
                             mb-4
                             "
              >
                Supplier : <span className="text-cyan-300">{supplier}</span>
              </p>
              <p
                className="font-medium
                             text-white text-lg
                             mb-4
                             "
              >
                Quantity : <span className="text-yellow-300">{quantity}</span>
              </p>
            </div>
            <div className="w-1/2">
              {sold ? (
                <img src={solds} alt="" className="md:w-2/3 w-full " />
              ) : (
                <img src={available} alt="" className="md:w-2/3 w-full " />
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <Link
              to={"/product/" + _id}
              data-mdb-ripple="true"
              data-mdb-ripple-color="white"
              className=" py-3 px-10 w-full lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-100 font-semibold text-base bg-darku rounded-lg hover:bg-opacity-90 mx-2 mb-4 md:mb-0"
            >
              Manage
            </Link>
            <button
              onClick={handleDelete}
              data-mdb-ripple="true"
              data-mdb-ripple-color="white"
              className=" py-3 px-10 w-full lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-100 font-semibold text-base bg-[#c9184a] rounded-lg hover:bg-opacity-90 mx-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
