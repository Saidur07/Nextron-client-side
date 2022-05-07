import React from "react";
import solds from "../../../assets/images/sold.png";
import available from "../../../assets/images/available.png";
const MyProduct = (props) => {
  const { _id, img, name, description, price, supplier, quantity } = props.data;
  const handleDelete = props.button;
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
            <div className="w-2/3 md:pl-16 ">
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
            <div className="w-1/3">
              {quantity < 1 ? (
                <img src={solds} alt="" className="w-full " />
              ) : (
                <img src={available} alt="" className="w-full " />
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <button
              onClick={() => handleDelete(_id)}
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

export default MyProduct;
