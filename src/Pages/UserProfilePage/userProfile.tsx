import PostCard from "../../Components/PostCard/Postcard";
import styles from "./userProfile.module.css";
import { PostInfo } from "../../Data/posts";

export function UserProfile() {
  return (
    <div className={styles.wholeUserProfile}>
      <div className={styles.profilePageContainer}>
        <img
          className={styles.profileImage}
          src="public/Alicia.jpg"
          alt="Pretty Alien makeup look"
        />
        <h2>Name/Gender</h2>
        <p>Bio---------------</p>
      </div>
      <div className={styles.userActivityHeader}>
        <h1>YOUR ACTIVITY</h1>
      </div>
      <div className={styles.userActivityFeed}>
        <PostCard
          key={PostInfo[1].id}
          title={PostInfo[1].title}
          content={PostInfo[1].content}
        />
      </div>
    </div>
  );
}
