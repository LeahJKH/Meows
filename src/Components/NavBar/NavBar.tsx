import MeowsLogo from "../../assets/MeowsLogo";
import styles from "./NavBar.module.css";
import MoonSvg from "../../assets/Icons/Moon";
import SunSvg from "../../assets/Icons/Sun";
import LogoutSvg from "../../assets/Icons/Logout";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.leftNav}>
          <MeowsLogo />
          <MoonSvg />
          <SunSvg />
        </div>
        <div className={styles.rightNav}>
          <button>Search.....</button>
          <LogoutSvg />
        </div>
      </nav>
    </>
  );
}
