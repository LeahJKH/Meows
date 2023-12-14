import { useState, useEffect, ChangeEvent } from "react";
import PostCard from "../../Components/PostCard/Postcard";
import styles from "./userProfile.module.css";
import { PostInfo } from "../../Data/posts";
import EditSvg from "../../assets/Icons/Edit";
import MoreSvg from "../../assets/Icons/More";

export function UserProfile() {
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

  return (
    <div className={styles.wholeUserProfile}>
      <div className={styles.profilePageContainer}>
        <h2>@USERNAME</h2>
        <div className={styles.icons}>
          {/* Conditionally render the EditSvg or SaveSvg based on edit mode */}
          {isEditingBio ? (
            <button onClick={handleEditClick}>Save</button>
          ) : (
            <EditSvg onClick={handleEditClick} />
          )}
          <MoreSvg />
        </div>
        <img
          className={styles.profileImage}
          src="public/Alicia.jpg"
          alt="Pretty Alien makeup look"
        />
        <h2>Name/Gender</h2>
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
      <div className={styles.userActivityHeader}>
        <h1>YOUR ACTIVITY</h1>
      </div>
      <div className={styles.userActivityFeed}>
        <PostCard
          key={PostInfo[1].id}
          title={PostInfo[1].title}
          content={PostInfo[1].content}
        />
      </div>
    </div>
  );
}
