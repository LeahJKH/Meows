import styles from "../../Pages/UserProfilePage/userProfile.module.css";
import { useEffect, useState, ChangeEvent } from "react";
import EditSvg from "../../assets/Icons/Edit";
import MoreSvg from "../../assets/Icons/More";
import { useTheme } from "../../ThemeContext";

export default function HeadUserProfile() {
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


      

  const containerClass = darkMode ? styles.profilePageContainerdark : styles.profilePageContainer;
  const imageClass = darkMode ? styles.profileImagedark : styles.profileImage;
    return(
        <>
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
        </>
    )
}