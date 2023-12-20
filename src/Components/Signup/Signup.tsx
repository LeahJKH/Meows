import { useState } from 'react';
import style from './Signin.module.css';
import usersData from '../../Data/user.json';
import { useTheme } from '../../ThemeContext';

interface User {
  name: string;
  email: string;
  Username: string
  password: string;
  Gender: string;
  Birthday: string; 
}

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('Male');
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState<User[]>(Array.isArray(usersData) ? (usersData as User[]) : []);

  function logEm() {
    location.href="/LogIn"
  }
  function sendToUser() {
    location.href ="/Userprofile"
  }
  const handleSignup = () => {
    const newUser: User = {
      name: name,
      Username: username,
      email: email,
      password: password,
      Gender: gender,
      Birthday: birthday,
    };// this is the setup for a new user so it uses less code too save a user

    if (name && email && password) {
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      console.log('New User:', newUser);
      console.log('All Users:', updatedUsers);
      sendToUser()
    } else {
      console.log('Name, email, and password are required fields.');
    }
  }; //this either creates a new user or throws an error depending if all the conditions are met

    const formatDate = (dateString: string) => {
        const [date, month, year] = dateString.split(',');
        return `${year}-${month}-${date}`; 
    }; // this is just a format so i get date then month then year

    const { darkMode } = useTheme();
    const SignUp = darkMode ? style.signupbtndark : style.signupbtn;
    const LogBtn = darkMode ? style.loginbtndark : style.loginbtn;
    const SignContain = darkMode ? style.Signupcontainerdark : style.Signupcontainer;
    return (
        <>
        <div className={style.FullLog}>
        <div className={style.Placements}>
            <div className={SignContain}>
            <input type="text" name="NameSignup" onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
            <input type="email" name="UsernameSignup" onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            <input type="email" name="EmailSignup" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" name="PassSignup" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="text" name="Birthday" onChange={(e) => setBirthday(formatDate(e.target.value))} placeholder="Birthday (DD,MM,YYYY)" />
                <select name="gender" onChange={(e) => setGender(e.target.value)}>
                    <option value="None">None</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Nonbinary">Nonbinary</option>
                    <option value="Dont wish too enter">Dont wish to enter</option>
                </select>
                <button className={SignUp} onClick={handleSignup}>sign up</button>
            </div>

            <div>
                <div className={style.usercontainer}>
                    <p>have a user?</p>
                    <button className={LogBtn} onClick={logEm}>loginn</button>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}