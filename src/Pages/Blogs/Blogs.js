import React from "react";
import "flowbite";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-6">Blogs Section </h1>
      <hr className="container mx-auto w-2/5" />
      <div className="container mx-2 md:w-2/4 md:mx-auto mt-6">
        <h1>
          <strong>
            Q1 : What is the difference between authorization and
            authentication?
          </strong>
        </h1>
        <p className="border-4 p-4 rounded-md mt-4 font-medium text-base">
          Authentication is identifying users by confirming who they say they
          are, while authorization is the process of establishing the rights and
          privileges of a user. Both processes play equally important roles in
          securing sensitive data assets from breaches and unauthorized access.
        </p>
        <br />
        <h1>
          <strong>
            Q2: Why are you using firebase? What other options do you have to
            implement authentication?
          </strong>
        </h1>
        <div className="border-4 p-4 rounded-md mt-4">
          <p className="text-base font-medium">
            I use Firebase because it provides multiple ways of authenticating
            users. I can choose from email authentication, federated identity
            provider integration like Google, Facebook or Twitter or I can
            implement authentication on custom server.
          </p>
          <br />
          <p className="text-base font-medium">Alternates of Firebase : </p>
          <ul className="list-disc ml-8">
            <li className="font-normal font-serif">Auth0 </li>
            <li className="font-normal font-serif">Passport </li>
            <li className="font-normal font-serif">Amazon Cognito </li>
            <li className="font-normal font-serif">MongoDb </li>
            <li className="font-normal font-serif">Okta </li>
            <li className="font-normal font-serif">JSON web token </li>
            <li className="font-normal font-serif">Keycloak </li>
          </ul>
        </div>
        <br />
        <h1>
          <strong>
            Q3: What other services does firebase provide other than
            authentication?
          </strong>
        </h1>
        <div className="border-4 p-4 rounded-md mt-4">
          <p className="text-base font-medium">Other Services of Firebase : </p>
          <ul className="list-disc ml-8">
            <li className="font-normal font-serif">Realtime Database </li>
            <li className="font-normal font-serif">Remote Config </li>
            <li className="font-normal font-serif">Firebase Ml </li>
            <li className="font-normal font-serif">Cloud Functions </li>
            <li className="font-normal font-serif">Cloud Messaging </li>
            <li className="font-normal font-serif">Cloud Storage </li>
            <li className="font-normal font-serif">Hosting </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
