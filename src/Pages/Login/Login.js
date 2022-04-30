import React, { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Shared/Loader/Loader";
import Social from "../../components/Shared/SocialSignIn/Social";
import auth from "../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    if (user.user.emailVerified) {
      navigate(from, { replace: true });
    }
    if (!user.user.emailVerified) {
      toast.warning("Please verify your email first!");
    }
  }
  if (error) {
    toast.error(`ERROR : ${error}`);
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email!");
    } else {
      toast.warning("please enter your email address");
    }
  };

  return (
    <div>
      <h1 className="md:text-5xl text-3xl text-center my-8 text-gray-700">
        HEY! LOGIN!!
      </h1>
      <hr className="container mx-auto w-1/2 md:w-1/4" />
      <form onSubmit={handleSubmit} className="container mx-auto md:w-1/4 mt-8">
        <div className="mb-6 w-3/4 mx-auto md:w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6 w-3/4 mx-auto md:w-full">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            required
          />
        </div>

        <div className="text-sm block mb-4 w-3/4 mx-auto md:w-full">
          <p className="font-medium text-gray-900 ">
            Don't Have an Account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline ">
              Register!
            </Link>
          </p>
          <p className="font-medium text-gray-900 mt-4">
            Forgot Password?{" "}
            <button
              onClick={resetPassword}
              className="text-blue-600 hover:underline "
            >
              Reset it!
            </button>
          </p>
        </div>
        {loading || sending ? <Loader></Loader> : ""}

        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center block mx-auto w-1/2"
        >
          Login
        </button>
      </form>
      <Social></Social>
    </div>
  );
};

export default Login;
