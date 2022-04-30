import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="px-4 pb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-24 md:px-8">
      <div className="grid gap-x-28 gap-y-8 lg:grid-cols-2">
        <div className="flex items-center justify-center md:pl-12">
          <div className="flex flex-col items-center px-0 sm:px-3">
            <div className="w-32 h-44 p-2 sm:w-44 sm:h-44  hover:scale-110 transition duration-300 linear md:w-60 md:h-60 rounded-md md:rounded-2xl flex justify-center items-center flex-col bg-gray-50">
              <div
                className="radial-progress text-red-500"
                style={{
                  "--value": "70",
                }}
              >
                <p className="text-lg md:text-2xl">70%</p>
              </div>
              <h1 className="text-lg md:text-2xl mt-4 font-sans font-semibold tracking-wider">
                Graphic Design
              </h1>
            </div>
            <div className="w-32 h-44 p-2 sm:w-44 sm:h-44  hover:scale-110 transition duration-300 linear md:w-60 md:h-60 rounded-md md:rounded-2xl flex justify-center items-center flex-col bg-gray-50 mt-8">
              <div
                className="radial-progress text-sky-400"
                style={{
                  "--value": "90",
                }}
              >
                <p className=" text-lg md:text-2xl">90%</p>
              </div>
              <h1 className="text-lg md:text-2xl mt-4 font-sans font-semibold tracking-wider">
                Web Designing
              </h1>
            </div>
          </div>
          <div className="px-3">
            <div className="w-32 h-44 p-2 sm:w-44 sm:h-44  hover:scale-110 transition duration-300 linear md:w-60 md:h-60 rounded-md md:rounded-2xl flex justify-center items-center flex-col bg-gray-50 mt-12">
              <div
                className="radial-progress text-amber-300"
                style={{
                  "--value": "80",
                }}
              >
                <p className=" text-lg md:text-2xl">80%</p>
              </div>{" "}
              <h1 className="text-lg md:text-2xl mt-4 font-sans font-semibold tracking-wider">
                Branding Design
              </h1>
            </div>
            <div className="w-32 h-44 p-2 sm:w-44 sm:h-44  hover:scale-110 transition duration-300 linear md:w-60 md:h-60 rounded-md md:rounded-2xl flex justify-center items-center flex-col bg-gray-50 mt-6">
              <div
                className="radial-progress text-emerald-400"
                style={{
                  "--value": "60",
                }}
              >
                <p className=" text-lg md:text-2xl">60%</p>
              </div>
              <h1 className="text-lg md:text-2xl mt-4 font-sans font-semibold tracking-wider">
                Web Development
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:mx-auto md:max-w-lg">
          <div className="flex items-center justify-center w-36 h-6 mb-4 rounded-full bg-teal-accent-400">
            <h2 className="text-xl text-gray-500 text-center">My Skills</h2>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Skills of{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Alex Johnson
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-xl">
              Alex Johnson is a specialist of Graphic designing, Video Editing,
              Games Development, App Development etc.
            </p>
          </div>
          <div>
            <Link
              to="/about"
              aria-label=""
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none active:scale-90"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
