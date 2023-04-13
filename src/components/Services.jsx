import React from "react";
import {BiYen} from 'react-icons/bi'
import { services } from "../constants";

const Services = () => {
  return (
    <div id="services">
      <div className=" text-center mt-20">
        <h1 className="text-5xl font-bold">Services We Offer</h1>
      </div>
      <div className="mt-20 flex flex-col w-[80%] justify-center mx-auto"> 
        {services.map((item) => (
          <div className="card lg:card-side mb-12 shadow-xl border-2 mx-4 bg-white" key={item.id}>
            <div className="">
              <h2 className="text-3xl font-bold text-center pb-10 pt-6">{item.title}</h2>
              <p className="tracking-wide mx-4 text-lg ">{item.description}</p>
            </div>
            <div className="py-8 flex items-center ml-10 ">
            <BiYen size={20}/><p className="text-blue-400 font-bold">{item.price}</p>
            </div>
            <div className="flex justify-end pr-8 pb-4">
                <p className='border-2 w-[150px] text-center rounded p-4 bg-blue-600 text-white font-semibold hover:cursor-pointer hover:bg-blue-500'>Contact Us Now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
