import { useNavigate } from "react-router-dom";
import MeowsLogo from "../../assets/MeowsLogo";
import styles from "./NavBar.module.css";
import MoonSvg from "../../assets/Icons/Moon";
import SunSvg from "../../assets/Icons/Sun";
import LogoutSvg from "../../assets/Icons/Logout";
import { useTheme } from "../../ThemeContext";
import Searchbar from "../srcbar/SrcBar";
import { SetStateAction } from "react";

interface NavBarProps {
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
}

export default function NavBar({ setSearchTerm }: NavBarProps) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  {
    const { darkMode, toggleTheme } = useTheme();

    const handleToggle = () => {
      toggleTheme();
    };

    const navBarCol = darkMode ? styles.navBardark : styles.navBar;

    return (
      <>
        <nav className={navBarCol}>
          <div className={styles.leftNav}>
            <MeowsLogo onClick={handleLogoClick} />
            {darkMode ? (
              <SunSvg onClick={handleToggle} />
            ) : (
              <MoonSvg onClick={handleToggle} />
            )}
          </div>
          <div className={styles.rightNav}>
            <Searchbar setSearchTerm={setSearchTerm} />
            <LogoutSvg />
          </div>
        </nav>
      </>
    );
  }
}
