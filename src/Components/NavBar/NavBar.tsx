import MeowsLogo from "../../assets/MeowsLogo";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navBar}>
        <MeowsLogo />
      </nav>
    </>
  );
}
