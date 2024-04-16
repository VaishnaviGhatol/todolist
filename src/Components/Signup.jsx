import React from 'react'

const Signup = () => {
  return (
    <div>

        
          <img src="https://i.pinimg.com/564x/26/eb/22/26eb22d0eaaa17711402da579f6b1a6d.jpg" alt="" style={{height:"80px", width:"80px"}} />
        {/* <h2>Please Log In</h2>
        <form>
        </form> */}
   <h1>Sign Up</h1>
    <form>
    <div>
        <input name="First Name" placeholder='First Name'   type="First Name"   required />
      </div>
      <div>
        <input name="Last Name" placeholder='Last Name'   type="Last Name"   required />
      </div>
      <div>
        <input name="email" placeholder='Email Address'   type="email"   required />
      </div>
      <div>
        
        <input name="password" placeholder='Password'  type="password"  required />
      </div>
      <div>
        <input name="email" placeholder='Confirm Password'   type="email"   required />
      </div>
      <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
       I accept the terms and conditions.
      </label>
    </div>
   
      <button className="btn btn-primary" type="submit">Sign Up</button>
      <div>Already have an acoount? <a href="">Login Here.</a></div>
      
    </form>
    </div>
  )
}

export default Signup