import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
