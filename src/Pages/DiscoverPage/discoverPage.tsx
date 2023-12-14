import styles from "./discoverPage.module.css";
import PostCard from "../../Components/PostCard/Postcard";
import { PostInfo } from "../../Data/posts";

export function Discover() {
  return (
    <div className={styles.discoverContainer}>

      <h1>DISCOVER</h1>

          <div >
            <h3>TOP MEOW THIS WEEK</h3>
            <div className={styles.MeowContainer}>
              <PostCard  {...PostInfo[1]}/> 
              <PostCard {...PostInfo[3]}/>
              <PostCard {...PostInfo[12]}/>
            </div>
          </div>  
         
          <div className={styles.boxes}>
            <h3>HASHTAGS</h3>
            <div></div>
          </div>

          <div className={styles.boxes}>
            <h3>Recomended</h3>
            <div>
              <h1></h1>
            </div>
          </div>
       
      </div>
  );
}
