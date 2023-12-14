import { useState } from "react";

interface BioContainerProps {
  profilePicture: string;
  username: string;
  nickname: string;
  bio: string;
}

export default function EditableBioContainer({
  profilePicture,
  username,
  nickname,
  bio,
}: BioContainerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNickname, setEditedNickname] = useState(nickname);
  const [editedBio, setEditedBio] = useState(bio);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      // Assuming saveUserInformation is a function that sends a request to the backend
      await saveUserInformation({
        nickname: editedNickname,
        bio: editedBio,
      });

      // Set isEditing to false to exit the editing mode after successful save
      setIsEditing(false);
    } catch (error) {
      // Handle error during save (e.g., show an error message)
      console.error("Error saving user information:", error);
    }
  };

  const saveUserInformation = async (data: {
    nickname: string;
    bio: string;
  }) => {
    // Simulate an API request to save user information
    // Replace this with your actual backend endpoint and method (POST, PUT, etc.)
    const response = await fetch("/api/saveUserInformation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to save user information");
    }

    // You can handle the response data here if needed
    const responseData = await response.json();
    console.log("User information saved successfully:", responseData);
  };

  return (
    <div className="bio-container">
      <div className="edit-icons">
        {isEditing ? (
          <button onClick={handleSaveClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </button>
        ) : (
          <button onClick={handleEditClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3a2 2 0 100 4 2 2 0 000-4zM8 21a2 2 0 100-4 2 2 0 000 4zM21 13a2 2 0 100-4 2 2 0 000 4zM15 21a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        )}
      </div>
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile" />
      </div>
      <div className="user-info">
        <h2>{username}</h2>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedNickname}
              onChange={(e) => setEditedNickname(e.target.value)}
            />
            <textarea
              value={editedBio}
              onChange={(e) => setEditedBio(e.target.value)}
            />
          </>
        ) : (
          <>
            <p>{editedNickname}</p>
            <p>{editedBio}</p>
          </>
        )}
      </div>
    </div>
  );
}
