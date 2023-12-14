import MeowsLogo from "../../assets/MeowsLogo";
import styles from "./NavBar.module.css";
import MoonSvg from "../../assets/Icons/Moon";
import SunSvg from "../../assets/Icons/Sun";
import LogoutSvg from "../../assets/Icons/Logout";

import Searchbar from "../srcbar/SrcBar";

export default function NavBar({ setSearchTerm }) {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.leftNav}>
          <MeowsLogo />
          <MoonSvg />
          <SunSvg />
        </div>
        <div className={styles.rightNav}>
          <Searchbar setSearchTerm={setSearchTerm} />
          <LogoutSvg />
        </div>
      </nav>
    </>
  );
}