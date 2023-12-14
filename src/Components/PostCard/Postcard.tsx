import React from "react";
import styles from "./Postcard.module.css";
import HeartSvg from "../../assets/Icons/Heart";
import SavedSvg from "../../assets/Icons/Saved";

type PostCardProps = {
  title: string;
  content: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <div className={styles.postCardContainer}>
      <div className={styles.postCard}>
        <img
          className={styles.postPic}
          src="public/Alicia.jpg"
          alt="Pretty Alien makeup look"
        />
        <h2>{title}</h2>
        <p>{content}</p>
        <footer className={styles.postFooter}>
          <HeartSvg />
          <SavedSvg />
        </footer>
      </div>
    </div>
  );
};

export default PostCard;
