import { LayoutBase } from "./Pages/LayoutBase";
import { LandingPage } from "./Pages/LandingPage";
import { Discover } from "./Pages/DiscoverPage/discoverPage";
import { UserProfile } from "./Pages/UserProfilePage/userProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route index element={<LandingPage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
