import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Shared/Loader/Loader";
import Social from "../../components/Shared/SocialSignIn/Social";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast.warning("Passwords needs at least 6 characters");
      return;
    }
    if (error || updateError) {
      toast.error("ERROR : ", error?.code || updateError?.code);
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast.success("Verfication email Sent!");
    toast.info(
      "Go to your Gmail, then click on the link of the email that we sent to you"
    );

    navigate(from, { replace: true });
  };

  if (user) {
    console.log(user);
  }
  return (
    <div className="bg-realBlack">
      <h1 className="md:text-5xl text-3xl text-center py-8 text-gray-300">
        HEY! REGISTER!!
      </h1>
      <hr className="container mx-auto w-full lg:w-1/2" />
      <form
        onSubmit={handleRegister}
        className="container mx-auto md:w-2/5 mt-8"
      >
        <div className="mb-6 w-3/4 mx-auto md:w-full ">
          <label
            htmlFor="name"
            className="block mb-2 text-md font-medium text-gray-300 "
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-md bg-gray-700  border border-gray-900 text-gray-300 text-md rounded-md block w-full p-3"
            required
          />
        </div>
        <div className="mb-6 w-3/4 mx-auto md:w-full ">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-md bg-gray-700  border border-gray-900 text-gray-300 text-md rounded-md block w-full p-3"
            required
          />
        </div>
        <div className="mb-6 w-3/4 mx-auto md:w-full ">
          <label
            htmlFor="password"
            className="block mb-2 text-md font-medium text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow-md bg-gray-700  border border-gray-900 text-gray-300 text-md rounded-md block w-full p-3"
            required
          />
        </div>

        <div className="flex items-start mb-6  w-3/4 mx-auto md:w-full">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-medium text-gray-300 ">
              I agree with the{" "}
              <Link
                to="/terms"
                className="text-sky-500 hover:tracking-widest transition-all hover:scale-x-105 hover:ml-1 "
              >
                terms and conditions
              </Link>
            </label>
          </div>
        </div>
        <div className="text-sm block mb-4  w-3/4 mx-auto md:w-full">
          <p className="font-medium text-gray-300 ">
            Already Have an Account?{" "}
            <Link
              to="/login"
              className="text-sky-500 hover:tracking-widest transition-all hover:scale-x-105 hover:ml-1 "
            >
              Login!
            </Link>
          </p>
        </div>
        {loading || updating ? <Loader></Loader> : ""}
        {error ? (
          <p className="my-6 text-center text-red-500">
            ERROR : {error?.code} {updateError?.code}
          </p>
        ) : (
          ""
        )}
        <button
          data-mdb-ripple="true"
          data-mdb-ripple-color="white"
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none  font-medium rounded-lg text-md px-5 py-4 text-center block mx-auto w-1/2"
        >
          Register
        </button>
      </form>
      <Social></Social>
    </div>
  );
};

export default Register;
