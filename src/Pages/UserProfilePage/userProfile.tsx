import { useState, useEffect, ChangeEvent } from "react";
import PostCard from "../../Components/PostCard/Postcard";
import styles from "./userProfile.module.css";
import { PostInfo } from "../../Data/posts";
import { useTheme } from "../../ThemeContext";
import EditSvg from "../../assets/Icons/Edit";
import MoreSvg from "../../assets/Icons/More";
import userData from "../../Data/user.json"

export function UserProfile() {
  // State for darkMode theme
  const { darkMode } = useTheme();

  // State for user information
  const [username, setUsername] = useState("@USERNAME");
  const [nameGender, setNameGender] = useState("Name/Gender");

  // State for the bio content
  const [bio, setBio] = useState(() => {
    const storedBio = localStorage.getItem("userBio");
    return storedBio || "Fill in bio";
  });

  // State to track whether user info is in edit mode
  const [isEditingInfo, setIsEditingInfo] = useState(false);

  // Handler for updating the bio
  const handleBioChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  // Handler for updating username and name/gender
  const handleInfoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "nameGender") {
      setNameGender(value);
    }
  };

  // Handler for toggling edit mode
  const handleEditClick = () => {
    setIsEditingInfo(!isEditingInfo);
  };

  // Save changes
  const handleSaveClick = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("nameGender", nameGender);
    setIsEditingInfo(false);
  };

  useEffect(() => {
    localStorage.setItem("userBio", bio);
  }, [bio]);

  useEffect(() => {
    // Load user information from local storage

    const storedUsername = localStorage.getItem("username");
    const storedNameGender = localStorage.getItem("nameGender");

    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (storedNameGender) {
      setNameGender(storedNameGender);
    }

    const storedBio = localStorage.getItem("userBio");
    setBio(storedBio || "Fill in bio");
  }, []);

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
      <div className={containerClass}>
        <h2 className={styles.HeadingCol}>
          {isEditingInfo ? (
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInfoChange}
            />
          ) : (
            username
          )}
        </h2>
        <div className={styles.icons}>
          {isEditingInfo ? (
            <button className={styles.saveButton} onClick={handleSaveClick}>
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
        <h2 className={styles.HeadingCol}>
          {isEditingInfo ? (
            <input
              type="text"
              name="nameGender"
              value={nameGender}
              onChange={handleInfoChange}
            />
          ) : (
            nameGender
          )}
        </h2>
        {isEditingInfo ? (
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
          username={userData[1].username}
          name={userData[1].name}
          key={PostInfo[1].id}
          title={PostInfo[1].title}
          content={PostInfo[1].content}
        />
      </div>
    </div>
  );
}

 /*
import { useEffect  } from "react";
import PostCard from "../../Components/PostCard/Postcard";
import styles from "./userProfile.module.css";
import { PostInfo } from "../../Data/posts";
import { useTheme } from "../../ThemeContext";
import HeadUserProfile from "../../Components/HeadUserProfile/HeadUserProfile";
import  UserData  from "../../Data/user.json"
export function UserProfile() {
  const { darkMode } = useTheme();

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
  const UsersNameLocal = sessionStorage.getItem("username") || ""
  const NameLocal = sessionStorage.getItem("name") || ""
 
  const storedPostsString = sessionStorage.getItem("Posts") || ""
  const storedPostIds = storedPostsString ? JSON.parse(storedPostsString) : [];
  
  // Assuming UserData is an object that contains username and posts array
  const storedPosts = storedPostIds.map(postId => {
    const user = UserData.find(user => user.username === UsersNameLocal);
    if (user && user.posts.includes(postId)) {
      return (
        <div key={PostInfo[postId].id}>
          <PostCard
            username={NameLocal}
            nickname={UsersNameLocal}
            title={PostInfo[postId].title}
            content={PostInfo[postId].content}
          />
          <p>Index: {storedPostIds.indexOf(postId)}</p>
        </div>
      );
    }
    return null; // If the username doesn't match or post is not in the user's posts array, return null
  });
  if (!sessionStorage.getItem("username")) {
    location.href ="/LogIn"
  } 
  return (
    <div className={wholeUserProfileClass}>
      <HeadUserProfile/>
      <div className={headerClass}>
        <h1>YOUR ACTIVITY</h1>
      </div>
      <div className={styles.userActivityFeed}>
        {storedPosts}
      </div>
    </div>
  );
}
 */
