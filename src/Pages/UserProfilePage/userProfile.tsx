import styles from "./userProfile.module.css"

export function UserProfile(){
  
  return(
    <div className={styles.profilePageContainer}>

      <div>
        <div className={styles.profileImage}></div> 
        <h2>Name/Gender</h2>
        <p>Bio---------------</p>
      </div>

      <div>
        <div>
          <h2>Egne tweeets/meows</h2>
        </div>
      </div>

    </div>
  )
}