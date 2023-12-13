import style from "./Login.module.css";
import userData from "../../Data/user.json";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState(""); //this sets the email
  const [password, setPassword] = useState("");//this sets the password
  const [loginError, setLoginError] = useState(false); //this sets the error you will get

  function checkIfUser() {
    if (email !== "" && password !== "") {//this checks if email and password fields are empty
      for (const user of userData.users) {//this goes through all the exsisting users 
        if (user.email === email && user.password === password) {//this checks if you have entered an exsisting user
          console.log("Logged in as:", user.name);
          setLoginError(false);
          return;
        }
      }
      setLoginError(true);
    } else {
      console.log("Fields are empty");
      setLoginError(true);
    }
  }
  return (
    <>
      <div>
        <div className={style.logincontainer}>
          <input
            type="email"
            name="EmailLogin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="EmailLoginField"
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="PassLogin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="passLoginField"
            placeholder="Enter your password"
          />
          <button className={style.loginbtn} onClick={checkIfUser}>
            Log In
          </button>
          {loginError && <p>Incorrect email or password</p>} {/* this will make an object if loginError is true */}
        </div>

        <div className={style.nonusercontainer}>
          <p>Don't have a user?</p>
          <button className={style.signupbtn}>Create one</button>
        </div>
      </div>
    </>
  );
}