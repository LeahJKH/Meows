
import { ThemeProvider } from './ThemeContext';
import { LayoutBase } from './Pages/LayoutBase';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import { Discover } from './Pages/DiscoverPage/discoverPage';
import { UserProfile } from './Pages/UserProfilePage/userProfile';
import './App.css';

export function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}