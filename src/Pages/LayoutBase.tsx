import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { PostInfo } from "../Data/posts";


export function LayoutBase() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = PostInfo.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()))
  console.log(filteredPosts)
  return (
    <>
      <NavBar setSearchTerm={setSearchTerm}/>
    
      <div>
        <Outlet/>
      </div>

      <Footer />
    </>
  );
}