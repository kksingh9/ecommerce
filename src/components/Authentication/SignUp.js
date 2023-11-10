import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

//const instance = axios.create();

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async () => {
    // if (password !== confirmPassword){
    //   alert("wrong password");
    //   return;
    // }

    console.log("It came here");

    try {
      const res = await axios.post("https://fakestoreapi.com/users", {
        username: JSON.stringify(userName),
        password: JSON.stringify(password),
      });

      console.log(res);
    } catch (err) {
      debugger;
      console.log(err.message);
    }
  };

  return (
    <div className="singhup">
      <form onSubmit={submitHandler} className="form-control">
        <label htmlFor="email">UserName</label>
        <br></br>
        <input
          type="text"
          id="email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <br></br>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmpassword">confirmPassword</label>
        <br></br>
        <input
          type="confirmpassword"
          id="confirmpassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className="btn">
          <button>SignUp</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;