import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
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
