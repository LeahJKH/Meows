import { useState, useEffect } from "react";
import MeowModal from "../Components/MeowModal/MeowModal.tsx";
import PostCard from "../Components/PostCard/Postcard.tsx";
import { PostInfo } from "../Data/posts.ts";
import UserData from "../Data/user.json"
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import MeowsHead from "../assets/Icons/meowshead.tsx";
import Searchbar from "../Components/srcbar/SrcBar.tsx";

export default function LandingPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  


 

  const { darkMode } = useTheme();
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode-body");
    } else {
      document.body.classList.remove("dark-mode-body");
    }
    return () => {
      document.body.classList.remove("dark-mode-body");
    };
  }, [darkMode]);
  const containerClass = darkMode ? styles.userContainerdark : styles.userContainer;
  const mailClass = darkMode ? styles.userMaildark : styles.userMail;
  const nameClass = darkMode ? styles.userNamedark : styles.userName;
  const buttonsClass = darkMode ? styles.userButtonsdark : styles.userButtons;
  const navContainerClass = darkMode ? styles.navContainerdark : styles.navContainer;
  const navLinkContainerClass = darkMode ? styles.navLinkContainerdark : styles.navLinkContainer;
  const linkDecorationClass = darkMode ? styles.linkDecorationdark : styles.linkDecoration;
  const meowButtonClass = darkMode ? styles.meowButtondark : styles.meowButton;
  const feedTitleClass = darkMode ? styles.feedTitledark : styles.feedTitle;
  const feedRightInputClass = darkMode ? styles.feedRightInputdark : styles.feedRightInput;
  const feedTrendsContainerClass = darkMode ? styles.feedTrendsContainerdark : styles.feedTrendsContainer;
  const feedTitleIconContainerClass = darkMode ? styles.feedTitleIconContainerdark : styles.feedTitleIconContainer;
  const trendBoxClass = darkMode ? styles.trendBoksdark : styles.trendBox;
  const grayTextClass = darkMode ? styles.grayTextdark : styles.grayText;
  const blueTextClass = darkMode ? styles.blueTextdark : styles.blueText;
  const showButtonClass = darkMode ? styles.showButtondark : styles.showButton;

  const UsersNameLocal = sessionStorage.getItem("username")
  const NameLocal =  sessionStorage.getItem("name")
  
  const renderFilteredPosts = () => {
    // Apply the search term filter here
    const filtered = PostInfo.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.map(post => {
      const user = UserData.find(userData => userData.posts.includes(post.id));

      if (user) {
        return (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            username={user.username}
            nickname={user.name}
          />
        );
      }
      return null;
    });
  };


  return (
    <main className={styles.feedContainer}>
      <div className={styles.feedLeftContainer}>
      <Searchbar setSearchTerm={setSearchTerm} />
        <div className={containerClass}>
          <div className={styles.imageNameContainer}>
            <img src="public/image-11.png" alt="image" />
            <div>
              <p className={mailClass}>@{UsersNameLocal}</p>
              <h2 className={nameClass}>{NameLocal}</h2>
            </div>
          </div>
          <button className={buttonsClass}>Following</button>
          <button className={buttonsClass}>Followers</button>
          <button className={buttonsClass}>Likes</button>
          <button className={buttonsClass}>Reports</button>
        </div>

        <div className={navContainerClass}>
          <MeowsHead />
          <ul className={navLinkContainerClass}>
            <li>
              <Link className={linkDecorationClass} to={"/"}>
                <img
                  className={styles.linkImage}
                  src="public/house.svg"
                  alt="house"
                />
                Home
              </Link>
            </li>
            <li>
              <Link className={linkDecorationClass} to={"/discover"}>
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
              <Link className={linkDecorationClass} to={"/userprofile"}>
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
          <button
            className={meowButtonClass}
            onClick={() => setModalOpen(true)}
          >
            Meow
          </button>
        </div>
      </div>

      {isModalOpen && <MeowModal onClose={() => setModalOpen(false)} />}
      <div className={styles.feedMiddleContainer}>
        <h1 className={feedTitleClass}>FEED</h1>
        <div className={styles.postCardContainer}>
        {renderFilteredPosts()}
        </div>
      </div>

      <div className={styles.feedRightContainer}>
        <input
          className={feedRightInputClass}
          type="text"
          placeholder="Search Meows"
        />

        <div className={feedTrendsContainerClass}>
          <div className={feedTitleIconContainerClass}>
            <h1>Paris Trend</h1>
            <img src="public/icon.svg" alt="icon" />
          </div>

          <div className={styles.trendsContainer}>
            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={grayTextClass}>1. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={blueTextClass}>#JessieMueller</p>
              <p className={grayTextClass}>456K Tweets</p>
            </div>

            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={grayTextClass}>2. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={blueTextClass}>#ThelmaJones</p>
              <p className={grayTextClass}>456K Tweets</p>
            </div>

            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={grayTextClass}>3. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={blueTextClass}>#LoisPearson</p>
              <p className={grayTextClass}>456K Tweets</p>
            </div>

            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={grayTextClass}>4. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={blueTextClass}>#WilmaBody</p>
              <p className={grayTextClass}>456K Tweets</p>
            </div>

            <div className={styles.trendBoks}>
              <div className={styles.trendingAndIcon}>
                <p className={grayTextClass}>5. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={blueTextClass}>#WilmaBody</p>
              <p className={grayTextClass}>456K Tweets</p>
            </div>

            <div className={trendBoxClass}>
              <div className={styles.trendingAndIcon}>
                <p className={grayTextClass}>6. Trending</p>
                <img src="public/icon2.svg" alt="icon2" />
              </div>
              <p className={blueTextClass}>#ErikBaker</p>
              <p className={grayTextClass}>456K Tweets</p>
            </div>

            <button className={showButtonClass}>Show more</button>
          </div>
        </div>
      </div>
    </main>
  );
}
