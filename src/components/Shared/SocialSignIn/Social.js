import React, { useEffect } from "react";
import google from "../../../assets/images/google.png";
import facebook from "../../../assets/images/facebook.png";
import github from "../../../assets/images/github.png";
import auth from "../../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, FacebookUser, FacebookLoading, FacebookError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  if (googleError || FacebookError || githubError) {
    toast.error(
      `ERROR : ${googleError?.code || FacebookError?.code || githubError?.code}`
    );
  }
  useEffect(() => {
    if (googleUser || FacebookUser || githubUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, FacebookUser, githubUser, navigate, from]);
  return (
    <div className="container lg:w-1/3 mx-auto my-6">
      <div className="flex justify-center items-center">
        <div
          style={{ height: "1px" }}
          className="bg-slate-500 w-3/4 md:w-1/2 sm:w-1/3"
        ></div>
        <p className="px-2 text-xl">or</p>
        <div
          style={{ height: "1px" }}
          className="bg-slate-500 w-3/4 md:w-1/2 sm:w-1/3"
        ></div>
      </div>
      {googleLoading || FacebookLoading || githubLoading ? (
        <Loader></Loader>
      ) : (
        ""
      )}

      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className=" bg-gray-100 hover:bg-gray-200 transition-all rounded-xl w-4/5 md:w-4/6 xl:w-1/2 flex justify-center items-center h-12 mx-auto my-8 "
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2 text-lg font-semibold text-slate-700">
            Login With Google
          </span>
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className=" bg-blue-400 hover:bg-blue-300 transition-all rounded-xl w-4/5 md:w-4/6 xl:w-1/2 flex justify-center items-center h-12 mx-auto my-8 "
        >
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2 text-lg font-semibold text-slate-700">
            Login With Facebook
          </span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className=" bg-slate-300 hover:bg-slate-200 transition-all rounded-xl w-4/5 md:w-4/6 xl:w-1/2 flex justify-center items-center h-12 mx-auto my-8 "
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2 text-lg font-semibold text-slate-700">
            Login With Github
          </span>
        </button>
      </div>
    </div>
  );
};

export default Social;
