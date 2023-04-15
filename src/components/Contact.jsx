import React from "react";

const Contact = () => {
  return (
    <div>

      <h1 id="title" className="pt-4 pb-4 text-5xl font-bold text-center ">問い合わせ</h1>
      <h3 className="text-center text-sm sm:text-md font-semibold tracking-wide border-b-4 mx-6 pb-4">To place a custom order inquiry please fill out the form below. For all other inquiries please <a className="text-blue-500 hover:cursor-pointer hover:text-blue-400" href="mailto:sen-2010@oasis.ocn.ne.jp">send us an email</a>.</h3>
    <div id="contact" className="w-[85%] m-auto p-4 py-10">
      <form action="#">
        <div className="grid gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase py-2">名前</label>
            <input
              className="border-2 rounded-lg p-3 flex bg-transparent"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase py-2">電話番号</label>
            <input
              className="border-2 rounded-lg p-3 flex bg-transparent"
              type="text"
              name="Phone"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase py-2">メーイル</label>
            <input
              className="border-2 rounded-lg p-3 flex bg-transparent"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase py-2">件名</label>
            <input
              className="border-2 rounded-lg p-3 flex bg-transparent"
              type="text"
              name="Subject"
            />
          </div>

          <div className="flex flex-col">
            <label className="uppercase py-2">メッセージ</label>
            <textarea
              className="border-2 rounded-lg p-3 flex bg-transparent"
              name="Message"
              rows="10"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">

          <button type="submit" className="text-2xl border border-black rounded p-4 hover:bg-gray-100 hover:cursor-pointer">送る</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
