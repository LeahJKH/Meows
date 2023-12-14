// import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

import { Outlet } from "react-router-dom";

export function LayoutBase() {
  return (
    <>
      <NavBar />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

//<Outlet />
