import style from "./Signin.module.css"

export default function Signup() {
    return(
<>
<>
        <div>
            <div className={style.Signupcontainer}>
                <input type="email" name="EmailSignup"  />
                <input type="password" name="PassSignup" />
                <input type="date" name="Birthday"/>
                <select name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Nonbinary">Nonbinary</option>
                    <option value="None">None</option>
                    <option value="Dont wish too enter">Dont wish to enter</option>
                </select>
                <button className={style.signupbtn}>sign up</button>
            </div>
            
            <div className={style.usercontainer}>
                <p>have a user?</p>
                <button className={style.loginbtn}>loginn</button>
            </div>
        </div>
        </>
</>
    )
}