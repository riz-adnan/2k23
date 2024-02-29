import React, { useEffect, useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from "../../axios";
import Input from "./Input/Input";
import "./register.css";


function Register() {
  useEffect(() => {
    document.body.classList.add('registerPage');
    return () => {
      document.body.classList.remove('registerPage');
    };
  }, []);
  const [submitTrue,setSubmitTrue] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pnumber, setPnumber] = useState('');
  const [cstate, setCstate] = useState('');
  const [ccity, setCcity] = useState('');
  const [cname, setCname] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');
  const [rid, setRid] = useState('');
  const [instaId,setInstaId] = useState('');
  const [isRPasswordDirty, setIsRPasswordDirty] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [rpasswordClass, setRPasswordClass] = useState('form-control');

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePnumber = (e) => {
    setPnumber(e.target.value);
  }

  const handleCstate = (e) => {
    setCstate(e.target.value);
  }

  const handleCname = (e) => {
    setCname(e.target.value);
  }

  const handleCcity = (e) => {
    setCcity(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleRpassword = (e) => {
    setRpassword(e.target.value);
    setIsRPasswordDirty(true);
  }

  const handleRid = (e) => {
    setRid(e.target.value);
  }
  const handleInstaId = (e) => {
    setInstaId(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      phone_number: pnumber,
      username: email,
      college_state: cstate,
      college_name: cname,
      college_city: ccity,
      password: password, 
      referral_code: rid,
    };

    console.log(newUser);
    const resp = axios.post('signup', newUser);
    const respData = resp.then((response) => response.data);
    console.log(respData);
    ///window.location.reload(true);
  }
  const notifications = (event) => {
    event.preventDefault();
    const newUser = {
      name: name,
      phone_number: pnumber,
      username: email,
      college_state: cstate,
      college_name: cname,
      college_city: ccity,
      password: password,
      rpassword: rpassword, 
      referral_code: rid,
      instaId : instaId,    
    };
  
    for (let key in newUser){
        if(key==="referral_code" || key==="instaId") continue;
        if(newUser[key]==="") return NotificationManager.warning('Fill in all the required fields to continue', 'Warning', 3000);
    }
    setSubmitTrue(true);
    axios.post('/signup', newUser).then(
      function(response){
        setTimeout(() => {
          // code to be executed after 2 seconds
          window.location.href = "/login";
        }, 1000); // wait for 2 seconds (2000 milliseconds)
        
        return NotificationManager.success('You have successfully registered!', 'Success');
      }
    ).catch(function(err){
      return NotificationManager.error('Oops!! something went wrong', 'Try Again!', 5000);
    });

  };

  useEffect(() => {
    if(isRPasswordDirty) {
    if (password === rpassword) {
      setShowErrorMessage(false);
      setRPasswordClass("form-control is-valid");
    } else {
      setShowErrorMessage(true);
      setRPasswordClass("form-control is-invalid");
    }
  }
}, [rpassword]);

  return (
    
    <div className="formClass">
      <form>
      {/* method="POST" action="http://localhost:5050/signup" */}
        <div className="image">
          <h1>REGISTER</h1>
        </div>
        <div className="inputElements">
          <Input placeholder="Name*" name="name" id="name" value={name} func={handleName} icon="fa-solid fa-user" />
          <Input
            placeholder="Phone no*"
            name="phone_number"
            value={pnumber}
            func={handlePnumber}
            id="pnumber"
            type="number"
            icon="fa-solid fa-phone"
          />
          <Input
            placeholder="Email Id*"
            name="username"
            id="username"
            value={email} 
            func={handleEmail}
            type="email"
            icon="fa-solid fa-envelope"
          />
          <Input
            placeholder="College State*"
            name="college_state"
            value={cstate}
            func={handleCstate}
            id="cstate"
            icon="fa-solid fa-building-columns"
          />
          <Input
            placeholder="College City*"
            name="college_city"
            value={ccity}
            func={handleCcity}
            id="ccity"
            icon="fa-solid fa-building-columns"
          />
          <Input
            placeholder="College Name*"
            name="college_name"
            value={cname}
            func={handleCname}
            id="cname"
            icon="fa-solid fa-building-columns"
          />
          <Input

            placeholder="Password*"
            name="password"
            type="password"
            value={password}
            func={handlePassword}
            id="password"
            icon="fa-solid fa-lock"
          />
          <Input
            placeholder="Re-enter password*"
            name="Re-enter password"
            type="password"
            value={rpassword}
            func={handleRpassword}
            id="rpassword"
            icon="fa-solid fa-lock"
          />
                    <Input placeholder="Instagram id" name="Instagram Id" value={instaId} func={handleInstaId} id="instaId" icon = "fa-brands fa-instagram"/>
          <Input placeholder="Referral id" name="Referral Id" value={rid} func={handleRid} id="rid" />
        </div>

        <div className="btn">
          <input type="submit" name="submit" value="SUBMIT" id="submit"
            icon="fa-solid fa-lock" onClick={notifications} />
        </div>
        </form>
        <NotificationContainer/>
        
    </div>
  );
}
export default Register;