import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import bolt from "../../assets/images/bolt.gif";
import auth from "../../firebase.init";

const Newsletter = () => {
  const [user] = useAuthState(auth);
  const handleSubs = (e) => {
    e.preventDefault();
    if (!user) {
      toast.warn("Login first!");
      return;
    }
    toast.success("Ye! You will get updates!! (lies🙊)");
  };
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-t py-6 md:py-0 from-darki to-darku border-t-4 border-t-darki border-b-4 border-b-darku">
      <div>
        <h1 className="md:text-3xl text-xl text-white font-sans">
          Subscribe to get future updates
        </h1>
      </div>
      <div>
        <img src={bolt} alt="" width={"200px"} />
      </div>
      <div className="">
        <form
          onSubmit={handleSubs}
          className="flex flex-col md:flex-row justify-center items-center"
        >
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={user?.email}
            className="shadow-md bg-gray-700  p-4  text-gray-300 text-md rounded-md block md:w-96 w-72 h-14"
            required
            readOnly
          />
          <input
            data-mdb-ripple="true"
            data-mdb-ripple-color="white"
            type="submit"
            value="Subscribe"
            className="text-white bg-blue-600 cursor-pointer hover:bg-blue-700 md:mt-0 mt-4  focus:outline-none ml-6 font-medium rounded-lg text-md px-2 py-3 text-center block mx-auto w-1/2 active:scale-x-75"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
