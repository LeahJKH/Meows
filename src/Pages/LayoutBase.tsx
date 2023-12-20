import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";


export function LayoutBase() {
 /* const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = PostInfo.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
*/
  return (
    <>
      <NavBar />
    
      <div>
        <Outlet/>
      </div>

      <Footer />
    </>
  );
}