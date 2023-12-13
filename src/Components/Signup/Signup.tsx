import { useState } from 'react';
import style from './Signin.module.css';
import usersData from '../../Data/user.json';

interface User {
  name: string;
  email: string;
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
  const [users, setUsers] = useState<User[]>(Array.isArray(usersData) ? (usersData as User[]) : []);

  const handleSignup = () => {
    const newUser: User = {
      name: name,
      email: email,
      password: password,
      Gender: gender,
      Birthday: birthday,
    };

    if (name && email && password) {
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      console.log('New User:', newUser);
      console.log('All Users:', updatedUsers);
    } else {
      console.log('Name, email, and password are required fields.');
    }
  };

    const formatDate = (dateString: string) => {
        const [date, month, year] = dateString.split(',');
        return `${year}-${month}-${date}`; 
    };



    return (
        <>
            <div className={style.Signupcontainer}>
            <input type="text" name="NameSignup" onChange={(e) => setName(e.target.value)} placeholder="Name" />
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
                <button className={style.signupbtn} onClick={handleSignup}>sign up</button>
            </div>

            <div>
                <div className={style.usercontainer}>
                    <p>have a user?</p>
                    <button className={style.loginbtn}>loginn</button>
                </div>
            </div>
        </>
    );
}