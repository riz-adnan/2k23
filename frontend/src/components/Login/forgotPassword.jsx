import React, { useEffect, useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from '../../axios';
import Input from "../RegistrationPage/Input/Input";
import { useNavigate } from 'react-router-dom';
import "./login.css";



function Forgot() {
  useEffect(() => {
    document.body.classList.add('loginPage');
    return () => {
      document.body.classList.remove('loginPage');
    };
  }, []);
  const [username, setUsername] = useState('');
  const [password,setPassword] =useState('')
  const [rPassword,setRPassword] =useState('')
  const [otp,setOtp]=useState('')
  const [otpSent,setOtpSent]=useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleRPassword=(e)=>{
    setRPassword(e.target.value);
  }
  
  const handleOtp=(e)=>{
    setOtp(e.target.value);
  }


  const handleSubmit = async (e) => {

    if (!otp){

      if (password === rPassword) {
        console.log("No Issues")

      } 
      else {
        return NotificationManager.error('New Password and Re-Entered Password must match', 'Failure');
      }

      const user = {
        username: username
      };
      for (let x in user){
        if(user[x]==="") return NotificationManager.warning('Fill in all the required fields to continue', 'Warning', 3000);
      } 
      console.log(user);
      const res = axios.post('otp', user).then((response) => {setOtpSent(response.data)}
        ).catch(function (error) {
        console.log(error.response);
      });
      

      if (res) {
        setOtpSent(res)
        return NotificationManager.success('OTP is sent successfully', 'Success');
      }
      return NotificationManager.error('You have to sign up first !!', 'Failure');
    }

    else{

      e.preventDefault();
      if (password === rPassword) {
          console.log("No Issues")

      } 
      else {
        return NotificationManager.error('New Password and Re-Entered Password must match', 'Failure');
      }

        console.log(otpSent)
        console.log(otp)
        if(otp==otpSent){
          console.log("En");
          const user = {
            username: username,
            password:password,
          };

          for (let x in user){
            if(user[x]==="") return NotificationManager.warning('Fill in all the required fields to continue', 'Warning', 3000);
          }    
        console.log(user);
          const res = axios.post('forgot', user).then((response) => response.data).catch(function (error) {
            console.log(error.response);
          });

          if (res) {
              setTimeout(() => {
                window.location.href = "/login";
              }, 1000);
              
            return NotificationManager.success('Your password is successfully changed!', 'Success');
          }
          return NotificationManager.error('You have to sign up first !!', 'Failure');
        }
        else{
          return NotificationManager.warning('OTP is not matching!', 'Warning');
        }

    }

  };
const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/register');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="LoginformClass">
      <form className="loginForm2">
        <div className="image">
          <h3>FORGOT PASSWORD</h3>
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
            placeholder=" New Password"
            name="Password"
            type="password"
            id="password"
            icon="fa-solid fa-lock"
            value={password}
            func={handlePassword}
          />
            <Input
            placeholder="Re-enter password"
            name="Re-enter password"
            type="password"
            value={rPassword}
            func={handleRPassword}
            id="rpassword"
            icon="fa-solid fa-lock"
          />
          
          {otpSent && (
            <Input
              placeholder="OTP"
              name="OTP"
              type="text"
              value={otp}
              func={handleOtp}
              id="otp"
              icon="fa-solid fa-lock"
            />
        )}
        </div>
        <div className="btnn">
          <input type="submit" value="SIGN UP" onClick={navigateToSignup} />
          <input type="submit" value="SUBMIT" onClick={handleSubmit} />
          <input type="submit" value="LOGIN" onClick={navigateToLogin} />
        </div>
        <NotificationContainer />
      </form>
    </div>

  );


}
export default Forgot;