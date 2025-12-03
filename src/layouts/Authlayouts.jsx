import React from "react";
import NAvbar from "../components/NAvbar";
import { Outlet } from "react-router";

const Authlayouts = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-5">
        <NAvbar></NAvbar>
      </header>
      <main className="w-11/12 mx-auto py-5">
            <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Authlayouts;
