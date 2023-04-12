import React from "react";

const Contact = () => {
  return (
    <div>

      <h1 className="pt-4 pb-4 text-4xl font-bold text-center ">Contact Us</h1>
      <h3 className="text-center text-sm sm:text-md font-semibold tracking-wide border-b-4 mx-6 pb-4">Want to place a custom order or have a question for us, please fill out the form below!</h3>
    <div id="contact" className="w-[75%] m-auto p-4 py-10">
      <form action="#">
        <div className="grid gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex bg-transparent"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex bg-transparent"
              type="text"
              name="Phone"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex bg-transparent"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex bg-transparent"
              type="text"
              name="Subject"
            />
          </div>

          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 flex bg-transparent"
              name="Message"
              rows="10"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">

          <button type="submit" className="text-2xl border border-black rounded p-4 hover:bg-gray-100 hover:cursor-pointer">Submit</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
