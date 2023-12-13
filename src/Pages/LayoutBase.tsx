// import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { UserProfile } from "./UserProfilePage/userProfile";

export function LayoutBase() {
  return (
    <>
      <NavBar />

      <div>
        <UserProfile />
      </div>

      <Footer />
    </>
  );
}

//<Outlet />
