import styles from "./discoverPage.module.css";
import PostCard from "../../Components/PostCard/Postcard";
import { PostInfo } from "../../Data/posts";
import FireSvg from "../../assets/Icons/Fire";

export function Discover() {
  return (
    <div className={styles.discoverContainer}>

      <h1>DISCOVER</h1>
<div className={styles.topside}>
          <div className={styles.MeowBox}>
            <h3>TOP MEOW THIS WEEK</h3>
            <div className={styles.MeowContainer}>
              <PostCard  {...PostInfo[1]}/> 
              <PostCard {...PostInfo[3]}/>
              <PostCard {...PostInfo[12]}/>
            </div>
          </div>  
         
          <div className={styles.HashTagBox}>
            <h3>HASHTAGS</h3>
            <div className={styles.HashTagContain}>

              <div className={styles.HashS}>
                <FireSvg />
                <p>#Cats</p>
              </div>

              <div className={styles.HashS}>
              <FireSvg />
                <p>#Paris</p>
              </div>

              <div className={styles.HashS}>
              <FireSvg />
                <p>#Astrology</p>
              </div>

              <div className={styles.HashS}>
              <FireSvg />
                <p>#Dream</p>
              </div>

              <div className={styles.HashS}>
              <FireSvg />
                <p>#Vocaloid</p>
              </div>

              <div className={styles.HashS}>
              <FireSvg />
                <p>#space</p>
              </div>
            </div>
          </div>
          </div>

          <div className={styles.bottomReco}>
            <h3>Recomended</h3>
            <div className={styles.userContain}>
              <div className={styles.UserProfile}>
                <img src="./Alicia.jpg" alt="" />
                <h4>user</h4>
              </div>
              <div className={styles.UserProfile}>
                <img src="./Alicia.jpg" alt="" />
                <h4>user</h4>
              </div>
              <div className={styles.UserProfile}>
                <img src="./Alicia.jpg" alt="" />
                <h4>user</h4>
              </div>
              <div className={styles.UserProfile}>
                <img src="./Alicia.jpg" alt="" />
                <h4>user</h4>
              </div>
              <div className={styles.UserProfile}>
                <img src="./Alicia.jpg" alt="" />
                <h4>user</h4>
              </div>
            </div>
          </div>
       
      </div>
  );
}
