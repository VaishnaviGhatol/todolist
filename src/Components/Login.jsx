import React from 'react'
import  { useState } from 'react';

const Login = ({ onLogin }) => {
    
        const [formData, setFormData] = useState({ email: "", password: "" });
        const { email, password } = formData;
      
        const handleSubmit = (event) => {
          event.preventDefault();
          if (email === "abc@mail.com" && password === "password123") {
            onLogin(true);
          } else {
            alert("Invalid email or password");
          }
        };
      
        const handleChange = (event) => {
          const { name, value } = event.target;
          setFormData({ ...formData, [name]: value });
        };
  return (
    <div>
        <img src="https://i.pinimg.com/564x/26/eb/22/26eb22d0eaaa17711402da579f6b1a6d.jpg" alt="" style={{height:"80px", width:"80px"}} />
        {/* <h2>Please Log In</h2>
        <form>
        </form> */}
   <h1>Please Log In</h1>
    <form onSubmit={handleSubmit}>
      <div>
       
        <input name="email" placeholder='Email Address' onChange={handleChange} value={email} type="email"   required />
      </div>
      <div>
        
        <input name="password" placeholder='Password' onChange={handleChange} type="password" value={password}  required />
      </div>
      <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
      <button className="btn btn-primary" type="submit">Log In</button>
    </form>
    </div>
  )
}

export default Login