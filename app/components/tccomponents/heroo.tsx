import React from "react";

export const Heroo = () => {
  return (
    <div className="px-4 py-2 flex items-center my-20 flex-col w-full">
      <button className="border rounded-full border-gray-200 hover:bg-gray-200 transition cursor-pointer duration-200 px-4 py-1 bg-gray-100 text-gray-600 ">
        The complete checklist for incorporating
      </button>

      <div className="">
        <h1 className="font-medium mt-10 text-7xl text-black tracking-tighter text-center">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-neutral-700 text-center">
          Automated bookkeeping, effortless tax filing, real-time insights. Set
          up in 10 mins. Back to building by 12:43pm.
        </p>
      </div>
      <div className="flex mt-10 items-center gap-4 relative z-10">
        <button className="bg-[#2579F4] px-4 py-2 rounded-lg font-bold text-white shadow-lg text-shadow-md tracking-wide cursor-pointer">
          Get started
        </button>
        <button className=" cursor-pointer px-4 py-2 rounded-lg font-regular text-black tracking-wide">
          Pricing &rarr;
        </button>
      </div>
    </div>
  );
};
