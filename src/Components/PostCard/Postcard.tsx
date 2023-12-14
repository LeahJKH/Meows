import React from "react";
import styles from "./Postcard.module.css"

type PostCardProps = {
  title: string;
  content: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <div className={styles.postCard}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;