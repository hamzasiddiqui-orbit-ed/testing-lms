import React from "react";

function SideNavButton({ icon: Icon, text, children, onClick, className = "" }) {
  return (
    <li className="mb-3 w-100 me-4">
      <button
        className={`btn sm:btn-sm bg-brand sm:text-sm text-2xl text-[#EDE8E8] text-opacity-70 border-0 hover:text-highlight hover:bg-[#121F4F] px-3 w-full flex justify-start rounded-full ${className}`}
        onClick={onClick}
      >
        <Icon className="size-7 sm:size-5 me-5" />
        {text ? (
          <p className="font-light tracking-wide">{text}</p>
        ) : (
          children
        )}
      </button>
    </li>
  );
}

export default SideNavButton;
