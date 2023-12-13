import React from "react";

type PostCardProps = {
  title: string;
  content: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
