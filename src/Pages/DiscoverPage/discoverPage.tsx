import styles from "./discoverPage.module.css";

export function Discover() {
  return (
    <div className={styles.discoverContainer}>

      <h1>DISCOVER</h1>

      <div className={styles.boxContainer}>
        <div className={styles.boxesLeftContainer}>
          <div className={styles.boxes}>
            <h3>TOP MEOW THIS WEEK</h3>
            <div></div>
          </div>
          <div className={styles.boxes}>
            <h3>TOP ALL TIME</h3>
            <div></div>
          </div>
          <div className={styles.boxes}>
            <h3>TOP USERS</h3>
            <div></div>
          </div>
        </div>

        <div className={styles.boxesRightContainer}>
          <div className={styles.boxes}>
            <h3>TRENDING TOPICS</h3>
            <div></div>
          </div>
          <div className={styles.boxes}>
            <h3>HASHTAGS</h3>
            <div></div>
          </div>
          <div className={styles.boxes}>
            <h3>USERS</h3>
            <div></div>
          </div>
        </div>


      </div>

    </div>
  );
}
