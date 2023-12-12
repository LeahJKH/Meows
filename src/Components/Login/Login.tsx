import style from "./Login.module.css"
import userData from  "../../Data/user.json"
import { useState } from "react"

export default function Login() {
    
    function checkIfUser() {
        for (let i = 0; i <= 10; i++) {
            userData
        }
    }
    return (
        <>
        <div>
            <div className={style.logincontainer}>
                <input type="email" name="EmailLogin"  value={""} className="EmailLoginField"/>
                <input type="password" name="PassLogin" value={""} className="passLoginField"/>
                <button className={style.loginbtn} onClick={checkIfUser}>log in</button>
            </div>

            <div className={style.nonusercontainer}>
                <p>dont have a user?</p>
                <button className={style.signupbtn}>create one</button>
            </div>
        </div>
        </>
    )
}