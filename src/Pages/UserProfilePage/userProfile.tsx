import { useState, useEffect, ChangeEvent } from "react";
import PostCard from "../../Components/PostCard/Postcard";
import styles from "./userProfile.module.css";
import { PostInfo } from "../../Data/posts";
import { useTheme } from "../../ThemeContext";
import EditSvg from "../../assets/Icons/Edit";
import MoreSvg from "../../assets/Icons/More";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";


export function UserProfile() {
  const { darkMode } = useTheme();

  // State for the bio content
  const [bio, setBio] = useState(() => {
    const storedBio = localStorage.getItem("userBio");
    return storedBio || "Fill in bio";
  });
  // State to track whether the bio is in edit mode
  const [isEditingBio, setIsEditingBio] = useState(false);

  // Handler for updating the bio
  const handleBioChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  // Handler for toggling edit mode
  const handleEditClick = () => {
    setIsEditingBio(!isEditingBio);
  };

  useEffect(() => {
    localStorage.setItem("userBio", bio);
  }, [bio]);

  const containerClass = darkMode
    ? styles.profilePageContainerdark
    : styles.profilePageContainer;
  const imageClass = darkMode ? styles.profileImagedark : styles.profileImage;
  const headerClass = darkMode
    ? styles.userActivityHeaderdark
    : styles.userActivityHeader;
  const wholeUserProfileClass = darkMode
    ? styles.wholeUserProfiledark
    : styles.wholeUserProfile;
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

  return (
    <div className={wholeUserProfileClass}>
      <Login></Login>
      <Signup></Signup>
      <div className={containerClass}>
        <h2 className={styles.HeadingCol}>@USERNAME</h2>
        <div className={styles.icons}>
          {isEditingBio ? (
            <button className={styles.saveButton} onClick={handleEditClick}>
              Save
            </button>
          ) : (
            <EditSvg onClick={handleEditClick} />
          )}
          <MoreSvg />
        </div>
        <img
          className={imageClass}
          src="public/Alicia.jpg"
          alt="Pretty Alien makeup look"
        />
        <h2 className={styles.HeadingCol}>Name/Gender</h2>
        {/* Conditionally render a textarea or a div based on edit mode */}
        {isEditingBio ? (
          <textarea
            className={styles.bioTextarea}
            value={bio}
            onChange={handleBioChange}
          />
        ) : (
          <div className={styles.bioText}>{bio}</div>
        )}
      </div>
      <div className={headerClass}>
        <h1>YOUR ACTIVITY</h1>
      </div>
      <div className={styles.userActivityFeed}>
        <PostCard
          username=""
          nickname=""
          key={PostInfo[1].id}
          title={PostInfo[1].title}
          content={PostInfo[1].content}
        />
      </div>
    </div>
  );
}
