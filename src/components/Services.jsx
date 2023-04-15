import React from "react";
import { BiYen } from "react-icons/bi";
import { services } from "../constants";

const Services = () => {
  return (
    <div id="services">
      <div className=" text-center mt-20 ">
        <h1 id="title" className="text-5xl sm:text-6xl font-bold border-b-4 pb-4 mx-6">
        すること
        </h1>
      </div>
      <div className="mt-20 flex flex-col w-[80%] justify-center mx-auto">
        {services.map((item) => (
          <div
            className="card lg:card-side mb-12 shadow-xl border-2 mx-4 bg-white"
            key={item.id}
          >
            <div className="">
              <h2 id="card-title" className="text-2xl sm:text-3xl font-bold text-center pb-10 pt-6">
                {item.title}
              </h2>
              <div>
                <img
                  src={item.image}
                  alt="/"
                  className="w-full h-[200px] object-cover px-2 mb-8"
                />
              </div>
              <p className="tracking-wide mx-4 text-lg ">{item.description}</p>
            </div>
            <div className="py-8 flex items-center mx-4 ">
              <BiYen size={20} />
              <p className="text-blue-400 font-bold text-sm">{item.price}</p>
            </div>
            <div className="flex justify-end pr-8 pb-4">
              <a href="#contact">
                <p id="services-btn" className="border-2 w-[150px] text-center rounded p-4 bg-blue-600 text-white font-semibold hover:cursor-pointer hover:bg-blue-500">
                今すぐ問い合わせ
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
