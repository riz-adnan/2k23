import React, { useEffect, useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from '../../axios';
import Input from "../RegistrationPage/Input/Input";
import { useNavigate } from 'react-router-dom';
import "./login.css";



function Login() {
  useEffect(() => {
    document.body.classList.add('loginPage');
    return () => {
      document.body.classList.remove('loginPage');
    };
  }, []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  }


  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log("En");
    const user = {
      username: username,
      password: password
    };

    console.log(user);
    const resp = await axios.post('login', user).then((response) => response.data).catch(function (error) {
      console.log(error.response);
    });


    if (resp) {
      console.log("IN");

      const resp1 = await axios.get('sess').then((res) => res.data).catch(function (error) {
        console.log(error.response);
      });
      console.log(resp1);
      localStorage.setItem('username', resp.username);
      
      setTimeout(() => {
        // code to be executed after 2 seconds
        window.location.href = "/cultural";
      }, 1000); // wait for 2 seconds (2000 milliseconds)

      return NotificationManager.success('You have successfully logged in!', 'Success');
    }

    return NotificationManager.error('There is a problem signing in! Please verify your Credentials', 'Failure');

  };
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/register');
  };

  const navigateToForgot = () => {
    navigate('/forgotPassword');
  };

  return (
    <div className="LoginformClass">
      <form className="loginForm">
        <div className="image">
          <h1>LOGIN</h1>
        </div>
        <div className="inputElements">
          <Input
            placeholder="Email id"
            name="Email Id"
            id="email"
            type="email"
            icon="fa-solid fa-envelope"
            value={username}
            func={handleUsername}
          />
          <Input
            placeholder="Password"
            name="Password"
            type="password"
            id="password"
            icon="fa-solid fa-lock"
            value={password}
            func={handlePassword}
          />
        </div>
        <div className="btnn">
          <input type="submit" value="SUBMIT" onClick={handleSubmit} />
          <input type="submit" value="SIGN UP" onClick={navigateToSignup} />
          <input type="submit" value="FORGOT PASSWORD" onClick={navigateToForgot} />
        </div>
        
        <NotificationContainer />
      </form>
    </div>

  );


}
export default Login;