import React, { useState } from "react";
 
import { useNavigate } from "react-router-dom";
import './Multi.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [err, setErr] = useState("");

  const [arr, setArr] = useState("");
  const navigate = useNavigate('');

  const onSubmitHandler = (e) => {
    e.preventDefault(); 
    
	var value = password;
   const sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

console.log(sum, "sugsu");
    

    if (email === "") {
      setEmailErr("please enter valid email");
      setPassErr("");
      setErr("");
    } else if (password === "") {
      setPassErr("please enter valid password");
      setErr("");
      setEmailErr("");
    } else if (sum !== 10) {
      setEmailErr("");
      setPassErr("password overall  value should be 10 ");
      setErr("");
    } else {
      setPassErr("");
      setEmailErr("");
      setErr("email and password successful");
       navigate('/home')
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={onSubmitHandler} className="loginform">
        Enter your Email:
          <input
          className="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> 
        Enter your Password:
          <input
           className="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxlength="4"
          />
          <br />
          <button className="button" type="submit"> submit</button>
          <br />
          <h4>{emailErr}</h4>
          <h4>{passErr}</h4>
          <h3>{err} </h3>
        </form>
      </div>
    </>
  );
};

export default Login;
