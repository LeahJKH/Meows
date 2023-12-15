import MeowsLogo from "../../assets/MeowsLogo";
import styles from "./NavBar.module.css";
import MoonSvg from "../../assets/Icons/Moon";
import SunSvg from "../../assets/Icons/Sun";
import LogoutSvg from "../../assets/Icons/Logout";
import { useTheme } from '../../ThemeContext';
import Searchbar from "../srcbar/SrcBar";

interface NavBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavBar({ setSearchTerm }: NavBarProps) {
  const { darkMode, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  const containerClass = darkMode ? styles.profilePageContainerdark : styles.profilePageContainer;
  const imageClass = darkMode ? styles.profileImagedark : styles.profileImage;
  const headerClass = darkMode ? styles.userActivityHeaderdark : styles.userActivityHeader;
  const wholeUserProfileClass = darkMode ? styles.wholeUserProfiledark : styles.wholeUserProfile;
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.leftNav}>
          <MeowsLogo />
          {darkMode ? <SunSvg onClick={handleToggle} /> : <MoonSvg onClick={handleToggle} />}
        </div>
        <div className={styles.rightNav}>
          <Searchbar setSearchTerm={setSearchTerm} />
          <LogoutSvg />
        </div>
      </nav>
    </>
  );
}