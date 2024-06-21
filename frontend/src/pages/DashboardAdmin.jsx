import React from "react";
import Nav from "../components/Nav";
import AdminPanel from "../components/AdminPanel";

function DashboardAdmin() {
  return (
    <>
      <Nav />
      <div className="flex flex-row">
        <AdminPanel />
        <div
          className="bg-white text-black absolute right-2 bottom-2 rounded-[12px]"
          style={{
            width: 'calc(100% - 17rem)',
            height: 'calc(100% - 5.5rem)',
          }}
        >
          hello
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;
