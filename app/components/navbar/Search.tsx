"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] w-1/2 md:w-auto py-2 rounded-full shadow-md sm:shadow-sm  hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold pl-5 pr-4">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-2 md:px-4 border-x-[1px] flex-1 text-center ">
          Any week
        </div>
        <div className="text-sm pl-4 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
