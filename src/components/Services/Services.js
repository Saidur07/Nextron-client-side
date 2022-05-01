import React from "react";

const Services = () => {
  const allServices = [
    {
      id: 1,
      title: "Thunder Server",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus asperiores perspiciatis provident distinctio error quis, commodi molestias adipisci, illum suscipit, placeat consequatur illo doloribus quaerat similique recusandae aperiam repellat.",
      img: "https://i.ibb.co/BnNfxpC/550-5504898-lightning-bolt-thunder-png-clipart-removebg-preview.png",
    },
    {
      id: 2,
      title: "Rocket like Delivery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus asperiores perspiciatis provident distinctio error quis, commodi molestias adipisci, illum suscipit, placeat consequatur illo doloribus quaerat similique recusandae aperiam repellat.",
      img: "https://i.ibb.co/qd1VWB8/images-removebg-preview.png",
    },
    {
      id: 3,
      title: "Invincible Security",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus asperiores perspiciatis provident distinctio error quis, commodi molestias adipisci, illum suscipit, placeat consequatur illo doloribus quaerat similique recusandae aperiam repellat.",
      img: "https://i.ibb.co/BTFHzVv/2454556-removebg-preview.png",
    },
    {
      id: 4,
      title: "Infinity Support",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus asperiores perspiciatis provident distinctio error quis, commodi molestias adipisci, illum suscipit, placeat consequatur illo doloribus quaerat similique recusandae aperiam repellat.",
      img: "https://i.ibb.co/qDQSptb/207-2071237-customer-service-icon-customer-service-flat-icon-png-removebg-preview.png",
    },
    {
      id: 5,
      title: "Most Profitable Deals",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus asperiores perspiciatis provident distinctio error quis, commodi molestias adipisci, illum suscipit, placeat consequatur illo doloribus quaerat similique recusandae aperiam repellat.",
      img: "https://i.ibb.co/16H2q02/5221076-removebg-preview.png",
    },
    {
      id: 6,
      title: "Planet to Planet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus asperiores perspiciatis provident distinctio error quis, commodi molestias adipisci, illum suscipit, placeat consequatur illo doloribus quaerat similique recusandae aperiam repellat.",
      img: "https://i.ibb.co/Mn74YZr/1024px-Archlinux-icon-crystal-64-svg-removebg-preview.png",
    },
  ];
  return (
    <div>
      <section className="bg-darku pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] px-4 lg:px-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-sky-400 mb-2 block">
                  Our Services
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-white
                  mb-4
                  "
                >
                  What We Offer
                </h2>
                <p className="text-base text-slate-200">
                  We offer various types of services to make our clients happy.
                  Here are some of them.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {allServices.map((service) => (
              <div
                className="w-full md:w-1/2 lg:w-1/3 px-4  hover:scale-105 transition-all"
                key={service.id}
              >
                <div className="p-10 md:px-7 xl:px-10 rounded-[10px] bg-gray-200 shadow-md  hover:shadow-lg mb-8 ">
                  <div className=" w-[80px] h-[80px] flex items-center justify-center mx-auto rounded-2xl mb-8 ">
                    <img src={service.img} alt="" />
                  </div>
                  <h4 className="font-semibold text-xl text-dark mb-3 text-center">
                    {service.title}
                  </h4>
                  <p className="text-body-color text-center">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
