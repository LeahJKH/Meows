import { useState, Dispatch, SetStateAction } from "react";
import NavBar from "../Components/NavBar/NavBar.tsx";
import PostCard from "../Components/PostCard/Postcard.tsx";
import { PostInfo } from "../Data/posts.ts";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import { useTheme } from '../ThemeContext';
import { useState, useEffect } from "react";

export function LandingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = PostInfo.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  {
    <NavBar
      setSearchTerm={setSearchTerm as Dispatch<SetStateAction<string>>}
    />;
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
                username=""
                nickname=""
              />
            )
          )}
        </div>
      </div>

      <div className={styles.feedRightContainer}>

        <input className={styles.feedRightInput} type="text" placeholder="Search Meows" value="Search Meows"  />

        <div className={styles.feedTrendsContainer}>

          <div className={styles.feedTitleIconContainer}>
            <h1>Paris Trend</h1>
            <img src="public/icon.svg" alt="icon" />
          </div>

          <div className={styles.trendsContainer}>

            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={styles.grayText}>1. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={styles.blueText}>#JessieMueller</p>
              <p className={styles.grayText}>456K Tweets</p>
            </div>

            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={styles.grayText}>2. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={styles.blueText}>#ThelmaJones</p>
              <p className={styles.grayText}>456K Tweets</p>
            </div>

            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={styles.grayText}>3. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={styles.blueText}>#LoisPearson</p>
              <p className={styles.grayText}>456K Tweets</p>
            </div>

            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={styles.grayText}>4. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={styles.blueText}>#WilmaBody</p>
              <p className={styles.grayText}>456K Tweets</p>
            </div>

            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={styles.grayText}>5. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={styles.blueText}>#WilmaBody</p>
              <p className={styles.grayText}>456K Tweets</p>
            </div>

            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={styles.grayText}>6. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={styles.blueText}>#ErikBaker</p>
              <p className={styles.grayText}>456K Tweets</p>
            </div>

            <button className={styles.showButton}>Show more</button>
          </div>

          

        </div>
      </div>
    </main>
  );
}
