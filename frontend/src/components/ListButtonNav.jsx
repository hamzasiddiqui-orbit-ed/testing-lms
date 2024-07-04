import React from "react";

function ListButtonNav() {
  return (
      <button className="btn btn-sm bg-brand sm:text-sm text-2xl text-[#EDE8E8] text-opacity-70 border-0 hover:text-highlight hover:bg-[#121F4F] px-3 w-full flex justify-start rounded-full">
        <RxDashboard className="size-7 sm:size-5 me-5" />
        <p className="font-light tracking-wide">My Dashboard</p>
      </button>
  );
}

export default ListButtonNav;
