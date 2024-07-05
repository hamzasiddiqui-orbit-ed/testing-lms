import React, { useEffect } from "react";
import Nav from "../components/Nav";
import AdminPanel from "../components/AdminPanel";
import SideNavButton from "../components/SideNavButton";
import { IoLogOutOutline } from "react-icons/io5";
import { logoutUser } from "../api/auth";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";


function DashboardAdmin() {
  const { state, dispatch } = useAuth();

  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: (data) => {
      dispatch({ type: "LOGOUT", payload: data });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleLogOut = async (e) => {
    logoutMutation.mutate();
  };

  useEffect(() => {
    if (!state.userInfo) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="flex flex-row">
        
        <div
          className="bg-white text-black absolute right-2 bottom-2 rounded-[12px]"
          style={{
            width: 'calc(100% - 17rem)',
            height: 'calc(100% - 5.5rem)',
          }}
        >
          <SideNavButton
            icon={IoLogOutOutline}
            text="Log Out"
            onClick={handleLogOut}
          />
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;
