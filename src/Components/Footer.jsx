import React from 'react'

export const Footer = () => {
  return (
    <div id='footer'>
      <footer class="d-flex  justify-content-center align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
    <img className='me-5' src="https://media.licdn.com/dms/image/D4D03AQHcrQY8fFLCiQ/profile-displayphoto-shrink_800_800/0/1695812897190?e=2147483647&v=beta&t=bUXzcberuH7v5lcyt3TYCaEs48qXv13ONXLBugg8HbY" alt=""  id='brand-logo'/>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><i class="bi bi-twitter h3"></i></li>
      <li class="ms-3"><i class="bi bi-instagram h3"></i></li>
      <li class="ms-3"><i class="bi bi-facebook h3"></i></li>
    </ul>
  </footer>
    </div>
  )
}
