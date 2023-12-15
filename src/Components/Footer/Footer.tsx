import styles from "./Footer.module.css";
import { useTheme } from '../../ThemeContext';

export default function Footer() {
  const { darkMode } = useTheme();
  const footerCol = darkMode ? styles.footerdark : styles.footer;
  return (
    <>
      <footer className={footerCol}>
        <h3 className={styles.headingMeow}>🐾 Welcome to Meows! 🐾</h3>
        <p className={styles.pFooter}>
          Purr-fectly connecting the feline community! 🐱✨ <br />
          Share your whisker-worthy moments, exchange meow-tastic thoughts, and
          let the purr-sonalities shine! 🌟 <br></br> #MeowLife
          #PurrfectionInEveryTweet 🐾
        </p>
      </footer>
    </>
  );
}
