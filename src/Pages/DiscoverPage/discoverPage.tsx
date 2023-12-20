import styles from "./discoverPage.module.css";
import PostCard from "../../Components/PostCard/Postcard";
import { PostInfo } from "../../Data/posts";
import FireSvg from "../../assets/Icons/Fire";
import userData from '../../Data/user.json';
import { useTheme } from '../../ThemeContext';
import {  useEffect } from "react";
export function Discover() {
  const users = userData.map(user => (
    <div className={styles.UserProfile} key={user.email}>
      <img src={`./Alicia.jpg`} alt="" />
      <h4>{user.name}</h4>
    </div>
  ));
  const { darkMode } = useTheme();
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode-body');
    } else {
      document.body.classList.remove('dark-mode-body');
    }
    return () => {
      document.body.classList.remove('dark-mode-body');
    };
  }, [darkMode]);

  const bottomRecoCol = darkMode ? styles.bottomRecodark : styles.bottomReco;
  return (
    <div className={styles.discoverContainer}>

      <h1 className={styles.discoverTitle}>DISCOVER</h1>
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

          <div className={bottomRecoCol}>
            <h3>Recomended</h3>
            <div className={styles.userContain}>
            {users}
            </div>
          </div>
       
      </div>
  );
}
