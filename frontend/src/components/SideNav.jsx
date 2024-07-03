import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import OrbitEdLogoWhite from "../assets/Orbit-Ed-logo-white.svg";
import { RxDashboard } from "react-icons/rx";
import { PiGraduationCap } from "react-icons/pi";
import {
  HiOutlineUserGroup,
  HiOutlineFolderMinus,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";

function SideNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const handleLogOut = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-brand text-base-content min-h-full w-full lg:w-52 lg:rounded-e-3xl flex flex-col items-center justify-between">
        {/* Sidebar content here */}
        <img src={OrbitEdLogoWhite} alt="Orbit-Ed" className="size-24 mt-5" />

        <div className="pb-32 w-50 sm:w-full px-2">
          <li className="mb-3 w-100">
            <button className="btn btn-sm bg-brand sm:text-sm text-2xl text-[#EDE8E8] text-opacity-70 border-0 hover:text-highlight hover:bg-[#121F4F] px-3 w-full flex justify-start rounded-full">
              <RxDashboard className="size-7 sm:size-5 me-5" />
              <p className="font-light">My Dashboard</p>
            </button>
          </li>
          <li className="mb-3 w-100">
            <button className="btn btn-sm bg-brand sm:text-sm text-2xl text-[#EDE8E8] text-opacity-70 border-0 hover:text-highlight hover:bg-[#121F4F] px-3 w-full flex justify-start rounded-full">
              <PiGraduationCap className="size-7 sm:size-5 me-5" />
              <p className="font-light">Learner Board</p>
            </button>
          </li>
          <li className="mb-3 w-100">
            <button className="btn btn-sm bg-brand sm:text-sm text-2xl text-[#EDE8E8] text-opacity-70 border-0 hover:text-highlight hover:bg-[#121F4F] px-3 w-full flex justify-start rounded-full">
              <HiOutlineUserGroup className="size-7 sm:size-5 me-5" />
              <p className="font-light">Team Board</p>
            </button>
          </li>
          <li className="mb-3 w-100">
            <button className="btn bg-brand sm:text-sm text-2xl text-[#EDE8E8] text-opacity-70 border-0 hover:text-highlight hover:bg-[#121F4F] px-3 w-full flex justify-start rounded-full">
              <HiOutlineFolderMinus className="size-7 sm:size-5 me-5" />
              <p className="font-light text-left leading-5">
                Course
                <br />
                Management
              </p>
            </button>
          </li>
          <li className="mb-3 w-100">
            <button className="btn btn-sm bg-brand sm:text-sm text-2xl text-[#EDE8E8] text-opacity-70 border-0 hover:text-highlight hover:bg-[#121F4F] px-3 w-full flex justify-start rounded-full">
              <IoSettingsOutline className="size-7 sm:size-5 me-5" />
              <p className="font-light">Settings</p>
            </button>
          </li>
        </div>

        <div className="mb-5 w-50 sm:w-full px-2">
          <li className="mb-3 w-100">
            <button className="btn btn-sm bg-brand sm:text-sm text-2xl text-[#EDE8E8] text-opacity-70 border-0 hover:text-highlight hover:bg-[#121F4F] px-3 w-full flex  justify-start rounded-full">
              <HiOutlineUserCircle className="size-7 sm:size-5 me-5" />
              <p className="font-light">My Profile</p>
            </button>
          </li>
          <li className="mb-3 w-100">
            <button
              className="btn btn-sm bg-brand sm:text-sm text-2xl text-[#EDE8E8] text-opacity-70 border-0 hover:text-highlight hover:bg-[#121F4F] px-3 w-full flex  justify-start rounded-full"
              onClick={handleLogOut}
            >
              <IoLogOutOutline className="size-7 sm:size-5 me-5" />
              <p className="font-light">Log Out</p>
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default SideNav;
