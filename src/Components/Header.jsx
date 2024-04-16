import React from 'react'

const Header = () => {
  return (
    <div>
     <header class="p-3 text-bg-dark" id='welcome'>
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <img className='me-4' src="https://media.licdn.com/dms/image/D4D03AQHcrQY8fFLCiQ/profile-displayphoto-shrink_800_800/0/1695812897190?e=2147483647&v=beta&t=bUXzcberuH7v5lcyt3TYCaEs48qXv13ONXLBugg8HbY" alt=""  id='brand-logo'/>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 menu">
          <li><a href="/Home" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="/About" class="nav-link px-2 text-white">About</a></li>
          <li><a href="/CreateArea" class="nav-link px-2 text-white">CreateNotes</a></li> 
          <li><a href="/Features" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="/Support" class="nav-link px-2 text-white">Support</a></li>
        
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
          {/* <button type="button" href="/Login" class="btn btn-outline-light me-2 bg-danger"> Log In </button> */}
          <button type="button" class="btn btn-outline-light me-2 bg-danger"><a href="/Login">Log In</a>  </button>
          <button type="button" class="btn btn-warning"><a href="/SignUp">Sign Up</a></button>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Header