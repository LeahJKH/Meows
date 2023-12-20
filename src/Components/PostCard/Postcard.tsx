import React from "react";
import styles from "./Postcard.module.css";
import HeartSvg from "../../assets/Icons/Heart";
import SavedSvg from "../../assets/Icons/Saved";
import { useTheme } from "../../ThemeContext";
type PostCardProps = {
  title: string;
  content: string;
  username: string;
  nickname: string;
};






const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  username,
  nickname,
  
}) => {
  const { darkMode } = useTheme();
  const PostCol = darkMode ? styles.postCarddark : styles.postCard;
 const HeadCol = darkMode ? styles.HeadingColdark : styles.HeadingCol;    

  return (
    
    <div className={styles.postCardContainer}>
       <div className={PostCol}>
        <div className={styles.postHeader}>
          <img
            className={styles.postPic}
            src="public/Alicia.jpg"
            alt="Pretty Alien makeup look"
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>{username}</span>
            <span className={styles.nickname} >{nickname}</span>
          </div>
        </div>
        <h2 className={HeadCol}>{title}</h2>

        <p>{content}</p>
        <footer className={styles.postFooter}>
          <HeartSvg />
          <SavedSvg />
        </footer>
      </div>
    </div>
  );
}

export default PostCard;
