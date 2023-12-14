import { useState } from "react";
import PostCard from "../Components/PostCard/Postcard.tsx";
import Searchbar from "../Components/srcbar/SrcBar";
import {PostInfo}  from "../Data/posts.ts";

import Signup from "../Components/Signup/Signup.tsx";
import styles from "./LandingPage.module.css";



export function LandingPage() {
  const [searchTerm, setSearchTerm] = useState<string>(""); //this makes so the searchterm will get logged if you enter in words

  const filteredPosts = PostInfo.filter((post: { title: string }) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) //this will remove anything that doesnt include what you searched for
  );

  return (

    <main>

      <Searchbar setSearchTerm={setSearchTerm}></Searchbar>
      {filteredPosts.map( //this goes through all the posts and creates card depending on what searchterm you have
        (post: { id: number; title: string; content: string }) => (
          <PostCard key={post.id} title={post.title} content={post.content} />
        )
      )}

    <main className={styles.feedContainer}>

      <div className={styles.feedLeftContainer}>

        <div className={styles.userContainer}>
          <div className={styles.imageNameContainer}>
            <img src="/images/userimage.png" alt="image" />
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
          <img className={styles.catImage} src="/images/cat.svg" alt="cat" />
          <ul className={styles.navLinkContainer}>
            <li><img src="/images/house.svg" alt="house" />Home</li>
            <li><img src="/images/hashtag.svg" alt="hashtag" />Explore</li>
            <li>Natifications</li>
            <li>Messages</li>
            <li>Bookmarks</li>
            <li><img src="/images/image-11.png" alt="image" /> Profile</li>
            <li><img src="/images/circle.svg" alt="circle" /> More</li>
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
            )
          )}
        </div>
      </div>

      <div className={styles.feedRightContainer}>
       

      </div>

    </main>
  );
}
