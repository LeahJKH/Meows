
import NavBar from "../Components/NavBar/NavBar.tsx";
import PostCard from "../Components/PostCard/Postcard.tsx";
import { PostInfo } from "../Data/posts.ts";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import { useTheme } from '../ThemeContext';
import { useState, useEffect } from "react";

export function LandingPage() {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  const filteredPosts = PostInfo.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  {
    <NavBar setSearchTerm={setSearchTerm} />;
  }
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
  return (
    <main className={styles.feedContainer}>
      <div className={styles.feedLeftContainer}>
        <div className={styles.userContainer}>
          <div className={styles.imageNameContainer}>
            <img src="public/image-11.png" alt="image" />
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
            <li>
              <Link className={styles.linkDecoration} to={"/"}>
                <img
                  className={styles.linkImage}
                  src="public/house.svg"
                  alt="house"
                />
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.linkDecoration} to={"/discover"}>
                <img
                  className={styles.linkImage}
                  src="public/hashtag.svg"
                  alt="hashtag"
                />
                Explore
              </Link>
            </li>
            <li className={styles.withoutIcon}>Notifications</li>
            <li className={styles.withoutIcon}>Messages</li>
            <li className={styles.withoutIcon}>Bookmarks</li>
            <li>
              <Link className={styles.linkDecoration} to={"/userprofile"}>
                <img
                  className={styles.linkImage}
                  src="public/image.png"
                  alt="image"
                />{" "}
                Profile
              </Link>
            </li>
            <li>
              <img
                className={styles.linkImage}
                src="public/circle.svg"
                alt="circle"
              />{" "}
              More
            </li>
            <li>
              <img src="/images/house.svg" alt="house" />
              Home
            </li>
            <li>
              <img src="/images/hashtag.svg" alt="hashtag" />
              Explore
            </li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Bookmarks</li>
            <li>
              <img src="/images/image-11.png" alt="image" /> Profile
            </li>
            <li>
              <img src="/images/circle.svg" alt="circle" /> More
            </li>
          </ul>
          <button className={styles.meowButton}>Meow</button>
        </div>
      </div>

      <div className={styles.feedMiddleContainer}>
        <h1 className={styles.feedTitle}>FEED</h1>
        <div className={styles.postCardContainer}>
          {filteredPosts.map(
            (post: { id: number; title: string; content: string }) => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.content}
              />
            )
          )}
        </div>
      </div>

      <div className={styles.feedRightContainer}>
        <input type="text" value="Search Meows"/>
        <div>
          <div className={styles.feedTitleIconContainer}>
            <h1>Paris Trend</h1>
            <img src="public/icon.svg" alt="icon" />
          </div>
          <div className={styles.trendsContainer}>
            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p>1. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p>#JessieMueller</p>
              <p>456K Tweets</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
