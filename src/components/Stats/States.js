import React from "react";
import CountUp from "react-countup";
const Stats = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url(https://cdn.dribbble.com/users/823352/screenshots/2927297/bleu-rose-0.1.gif)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center border-b  pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-slate-50">
              <CountUp start={0} end={11} delay={1} duration={1}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />B
                  </div>
                )}
              </CountUp>
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div className="text-center border-b  pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-slate-50">
              <CountUp start={0} end={9} delay={1} duration={1}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />B
                  </div>
                )}
              </CountUp>
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Humans
            </p>
          </div>
          <div className="text-center border-b  pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-slate-50">
              <CountUp start={0} end={2} delay={1} duration={1}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />B
                  </div>
                )}
              </CountUp>
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Aliens
            </p>
          </div>
          <div className="text-center border-b pb-3 mx-2 md:border-b-0 md:mx-0  ">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-slate-50">
              <CountUp start={0} end={150} delay={1} duration={1}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />K
                  </div>
                )}
              </CountUp>
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Sellers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
