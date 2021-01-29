import React from 'react';
import {Link} from 'react-router-dom';
function HeaderComp() {
    return (
        <div>
            This is Header Section
            <br/>
{/* Header Bootstrap Code Starts */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <Link class="navbar-brand" href="#">Navbar</Link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      <li class="nav-item active">
        {/* <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a> */}
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      
      <li class="nav-item">
        {/* <a class="nav-link" href="/about">About</a> */}
        <Link class="nav-link" to="/about">About</Link>
      </li>

      <li class="nav-item">
        {/* <a class="nav-link" href="/services">Services</a> */}
        <Link class="nav-link" to="/services">Services</Link>
      </li>
      
    </ul>
  </div>
</nav>
  {/* Header Bootstrap Code Ends */}
        </div>
    )
}

export default HeaderComp;