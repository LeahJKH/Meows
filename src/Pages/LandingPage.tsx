import { useState } from "react";
import NavBar from "../Components/NavBar/NavBar.tsx";
import PostCard from "../Components/PostCard/Postcard.tsx";
import {PostInfo}  from "../Data/posts.ts";
import styles from "./LandingPage.module.css";



export function LandingPage() {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  const filteredPosts = PostInfo.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  {<NavBar setSearchTerm={setSearchTerm}/>}
  return (
    <main className={styles.feedContainer}>

      <div className={styles.feedLeftContainer}>
        <div className={styles.userContainer}>
          <div className={styles.imageNameContainer}>
            <img src="public/Alicia.jpg" alt="image" />
            <div>
              <p className={styles.userMail}>@intergalacticBaddie</p>
              <h2 className={styles.userName}>Alicia</h2>
            </div>
          </div>
          <button className={styles.userButtons}>Following</button>
          <button className={styles.userButtons}>Followers</button>
          <button className={styles.userButtons}>Likes</button>
          <button className={styles.userButtons}>Reports</button>
        </div>

        <div className={styles.navContainer}>
          <img className={styles.catImage} src="/cat.svg" alt="cat" />
          <ul className={styles.navLinkContainer}>
            <li><img src="public/house.svg" alt="house" />Home</li>
            <li><img src="public/hashtag.svg" alt="hashtag" />Explore</li>
            <li>Natifications</li>
            <li>Messages</li>
            <li>Bookmarks</li>
            <li><img src="public/image-11.png" alt="image" /> Profile</li>
            <li><img src="public/circle.svg" alt="circle" /> More</li>
          </ul>
          <button className={styles.meowButton}>Meow</button>
        </div>
        </div>

      <div className={styles.feedMiddleContainer}>
        <h1 className={styles.feedTitle}>FEED</h1>
        <div className={styles.postCardContainer}>
          {filteredPosts.map(
            (post: { id: number; title: string; content: string }) => (
              <PostCard key={post.id} title={post.title} content={post.content} />
            ))}
        </div>
      </div>
      <div className={styles.feedRightContainer}>
      </div>
    </main>
  );
}
