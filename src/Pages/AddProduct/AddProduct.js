import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import bar from "../../components/Shared/Progress/Progress";
import auth from "../../firebase.init";
const AddProduct = () => {
  bar();
  const [user] = useAuthState(auth);
  const productRef = useRef("");
  const supplierRef = useRef("");
  const emailRef = useRef("");
  const priceRef = useRef(0);
  const quantityRef = useRef(0);
  const imgRef = useRef("");
  const descRef = useRef("");

  const handleAddProduct = (event) => {
    event.preventDefault();
    const product = productRef.current.value;
    const supplier = supplierRef.current.value;
    const email = emailRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const img = imgRef.current.value;
    const desc = descRef.current.value;
    if (quantity <= 0 || price <= 0) {
      Swal.fire({
        icon: "error",
        title: "Hey!",
        text: "Enter a valid number",
      });
      return;
    }
    console.log(product, supplier, email, price, quantity, img, desc);
    Swal.fire("Done!", "Your Product added!", "success");
    productRef.current.value = "";
    supplierRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
    imgRef.current.value = "";
    descRef.current.value = "";
  };
  return (
    <div>
      <div className="p-5">
        <div className="mx-4 p-4">
          <div className="flex items-center md:px-48 ">
            <div className="flex items-center text-sky-500 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-sky-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bookmark "
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="absolute top-0 md:-ml-10 -ml-4 text-center mt-16  md:w-32 text-xs font-medium uppercase text-sky-500">
                Visit Warehouse
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-sky-500"></div>
            <div className="flex items-center text-sky-500 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-sky-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user-plus "
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </div>
              <div className="absolute top-0 md:-ml-10 text-center mt-16  md:w-32 text-xs font-medium uppercase text-sky-500">
                Create Account
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-sky-500"></div>
            <div className="flex items-center text-white relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-sky-500 border-sky-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-mail "
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="absolute top-0 md:-ml-10 text-center mt-16  md:w-32 text-xs font-medium uppercase text-sky-500">
                Enter Data
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div className="flex items-center text-gray-500 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-database "
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                Add Product
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-center px-1 md:px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-white hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage: `url(https://i.pinimg.com/originals/54/ab/7c/54ab7c13a16478beb0ddfec0af299b6c.jpg)`,
                }}
              ></div>
              <div className="w-full lg:w-7/12 bg-white p-3 md:p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Add New Product!</h3>
                <form
                  className="md:px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={handleAddProduct}
                >
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="ProductName"
                      >
                        Product Name
                      </label>
                      <input
                        ref={productRef}
                        className="w-full px-6 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="ProductName"
                        type="text"
                        placeholder=" Product Name"
                        required
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="supplierName"
                      >
                        Supplier Name
                      </label>
                      <input
                        ref={supplierRef}
                        className="w-full px-6 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="supplierName"
                        type="text"
                        placeholder="Supplier Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="Email"
                    >
                      Supplier Email
                    </label>
                    <input
                      ref={emailRef}
                      className="w-full px-6 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="Email"
                      type="email"
                      placeholder="Email"
                      value={user.email}
                      required
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="Price"
                      >
                        Price
                      </label>
                      <input
                        ref={priceRef}
                        className="w-full px-6 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Price"
                        type="number"
                        placeholder=" Price"
                        required
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="Quantity"
                      >
                        Quantity
                      </label>
                      <input
                        ref={quantityRef}
                        className="w-full px-6 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Quantity"
                        type="number"
                        placeholder="Quantity"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="Image"
                    >
                      Image
                    </label>
                    <input
                      ref={imgRef}
                      className="w-full px-6 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="Image"
                      type="url"
                      placeholder="Image Link"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="Description"
                    >
                      Description
                    </label>
                    <textarea
                      ref={descRef}
                      className="w-full px-6 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="Description"
                      rows={5}
                      placeholder="Description"
                    />
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="mb-6 text-center">
                    <input
                      type="submit"
                      value="Add Product"
                      className="w-full mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-realBlack border-0 hover:bg-opacity-95 focus:shadow-outline focus:outline-none active:scale-90 text-xl  cursor-pointer md:ml-4 hover:text-gray-300 md:mt-0 mt-4"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
