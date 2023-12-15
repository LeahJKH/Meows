// import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

import { Outlet } from "react-router-dom";
import { useState } from "react";

import { PostInfo } from "../Data/posts";

export function LayoutBase() {
  const [searchTerm, setSearchTerm] = useState(""); 
 
  const filteredPosts = PostInfo.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>

        <NavBar setSearchTerm={setSearchTerm} />
    
      
      <div>
       
        <Outlet />
      </div>

      <Footer />
    </>
  );
}