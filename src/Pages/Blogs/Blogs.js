import React from "react";
import "flowbite";
import bar from "../../components/Shared/Progress/Progress";

const Blogs = () => {
  bar();
  return (
    <div className="bg-realBlack">
      <h1 className="text-center text-4xl py-6 font-serif text-white">
        {" "}
        Blogs Section{" "}
      </h1>
      <hr className="w-2/3 md:w-1/2 mx-auto border-white" />
      <div
        className="accordion w-full px-4 md:w-1/2 mx-auto py-6 mt-12"
        id="accordionExample"
      >
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Question #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <h2 className="font-semibold text-3xl mb-5">
                  What is the difference between javascript and nodejs ?{" "}
                  <div className="tags flex justify-center items-center my-4">
                    <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                      JS
                    </span>
                    <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                      NodeJS
                    </span>
                  </div>
                </h2>
                <p>
                  JavaScript VS Node.js boils down to the matter of a flexible
                  and simple frontend programming language versus the framework
                  that allows it to extend into the backend realm.
                </p>
                <hr className="my-6 border-gray-300" />
                <p>
                  JavaScript is a scripting language upon which most websites
                  are based. It is often used in combination with HTML and CSS
                  to render web pages, as JavaScript can be used to dynamically
                  update HTML elements. It allows you to automatically refresh
                  the page to update data, display information using cool
                  visuals, and create interactive elements.
                </p>
                <hr className="my-6 border-gray-300" />
                <p>
                  Node.js is an environment that can run JavaScript code without
                  a browser. It is built on Chrome’s V8 JavaScript engine. The
                  Node.js environment can be run on OS X, Windows, and Linux. It
                  also includes a multitude of JavaScript libraries, which allow
                  developers to leverage open source components and tools to get
                  their applications built faster.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Question #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <h2 className="font-semibold text-3xl mb-5">
                  What is the differences between sql and nosql databases?
                </h2>
                <div className="tags flex justify-center items-center my-4">
                  <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                    SQL
                  </span>
                  <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                    NoSQL
                  </span>
                </div>
                <p>
                  Here is the some of the key differences between SQL and NoSQL
                  databases.
                </p>
                <hr className="my-6 border-gray-300" />
                <p>
                  SQL or the Structured Query Language is the most common and
                  popular programming language for the relational database
                  management system. It is a language designed to extract,
                  store, insert, delete, update and manage data for structured
                  data and strategic analysis.
                </p>
                <h2 className="text-3xl my-4">Features of SQL : </h2>

                <ul className="list-disc ml-8">
                  <li>Provide High-Performance Capabilities</li>
                  <li>Handle Large Transactions with efficiency</li>
                  <li>SQL is easy to learn and manage</li>
                  <li>Open Source Programming Language</li>
                  <li>
                    Supports Data Definition Language and Data Manipulation
                    Language to query the databases
                  </li>
                  <li>
                    Suitable for every type of organization – large or small.{" "}
                  </li>
                </ul>
                <hr className="my-6 border-gray-300" />
                <p>
                  NoSQL database provides a mechanism for storage and retrieval
                  of data that is modelled other than tabular form. It was
                  introduced by Carl Stroz in the year 1998 called a
                  Non-relational database. Now, it stands for Not only SQL. It
                  is not limited to storing data in tables, instead, enables the
                  big data to be stored in the structured, unstructured,
                  semi-structured or polymorphic form.
                </p>
                <h2 className="text-3xl my-4">Features of NoSQL : </h2>

                <ul className="list-disc ml-8">
                  <li>
                    {" "}
                    NoSQL has higher scalability than other database management
                    systems
                  </li>
                  <li>
                    NoSQL allows the distribution of data on more than just one
                    device.{" "}
                  </li>
                  <li>
                    With NoSQL Database, you do not require specialized or
                    complex hardware or storage solutions.
                  </li>
                  <li>Does not require data normalization</li>
                  <li>Simple API for easy user interfaces</li>
                  <li>
                    Can store unstructured, semi-structured, or structured data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Question #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <h2 className="font-semibold text-3xl mb-5">
                  What is the purpose of JWT and how does it work?
                </h2>
                <div className="tags flex justify-center items-center my-4">
                  <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                    JWT
                  </span>
                </div>
                <p>
                  JSON Web Token (JWT) is an open standard for securely
                  transmitting information between parties as JSON object.
                </p>
                <hr className="my-6 border-gray-300" />
                <p>
                  The purpose of using JWT is not to hide data but to ensure the
                  authenticity of the data. JWT is signed and encoded, not
                  encrypted. JWT is a token based stateless authentication
                  mechanism. Since it is a client-side based stateless session,
                  server doesn’t have to completely rely on a
                  datastore(database) to save session information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
