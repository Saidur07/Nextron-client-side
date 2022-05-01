import React from "react";
import { toast } from "react-toastify";
import graphic from "../../assets/images/bubbles.jpg";
const Checkout = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks! Your Informations recorded!");
  };
  return (
    <div>
      <h1 className="text-center my-4 text-4xl font-bold">
        Thanks For applying for this!
      </h1>
      <hr className="w-1/3 mx-auto" />
      <ul className="steps my-4 w-full">
        <li className="step step-info text-2xl font-medium">Visit Website</li>
        <li className="step step-info text-2xl font-medium">Choose a Course</li>
        <li className="step step-info text-2xl font-medium">Grab the Course</li>
        <li className="step step-error text-2xl font-medium" data-content="?">
          Start the course
        </li>
      </ul>
      <div className="w-2/3 mx-auto">
        <h1 className="text-center my-4 text-4xl font-bold">
          Submit the form for the payment!
        </h1>
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="mockup-phone mx-0">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <form className="p-2" onSubmit={formSubmit}>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="email"
                      name="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                    />
                    <label
                      htmlFor="floating_email"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="password"
                      name="floating_password"
                      id="floating_password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                    />
                    <label
                      htmlFor="floating_password"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="password"
                      name="repeat_password"
                      id="floating_repeat_password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                    />
                    <label
                      htmlFor="floating_repeat_password"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Confirm password
                    </label>
                  </div>
                  <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        htmlFor="floating_first_name"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        First name
                      </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="floating_last_name"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        htmlFor="floating_last_name"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Last name
                      </label>
                    </div>
                  </div>

                  <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="image my-4 md:w-1/2">
            <img src={graphic} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
