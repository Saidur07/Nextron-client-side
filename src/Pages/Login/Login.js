import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Shared/Loader/Loader";
import bar from "../../components/Shared/Progress/Progress";
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
  bar();
  if (user) {
    navigate(from, { replace: true });
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
    <div className="bg-realBlack">
      <h1 className="md:text-5xl text-3xl text-center py-8 text-gray-300">
        HEY! LOGIN!!
      </h1>
      <hr className="container mx-auto w-full lg:w-1/3" />
      <form onSubmit={handleSubmit} className="container mx-auto md:w-2/5 mt-8">
        <div className="mb-6 w-3/4 mx-auto md:w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-300"
          >
            Your email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="shadow-md bg-gray-700  border border-gray-900 text-gray-300 text-md rounded-md block w-full p-3 "
            required
          />
        </div>
        <div className="mb-6 w-3/4 mx-auto md:w-full">
          <label
            htmlFor="password"
            className="block mb-2 text-md font-medium text-gray-300"
          >
            Your password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="shadow-md bg-gray-700  border border-gray-900 text-gray-300 text-md rounded-md block w-full p-3 "
            required
          />
        </div>

        <div className="text-md block mb-4 w-3/4 mx-auto md:w-full">
          <p className="font-medium text-gray-300 ">
            Don't Have an Account?{" "}
            <Link
              to="/register"
              className="text-sky-500 hover:tracking-widest transition-all hover:scale-x-105 hover:ml-1"
            >
              Register!
            </Link>
          </p>
          <p className="font-medium text-gray-300 mt-4">
            Forgot Password?{" "}
            <button
              data-mdb-ripple="true"
              data-mdb-ripple-color="white"
              onClick={resetPassword}
              className="text-sky-500 hover:tracking-widest transition-all hover:scale-x-105 hover:ml-1 "
            >
              Reset it!
            </button>
          </p>
        </div>
        {loading || sending ? <Loader></Loader> : ""}

        <button
          data-mdb-ripple="true"
          data-mdb-ripple-color="white"
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none  font-medium rounded-lg text-md px-5 py-4 text-center block mx-auto w-1/2"
        >
          Login
        </button>
      </form>
      <Social></Social>
    </div>
  );
};

export default Login;
