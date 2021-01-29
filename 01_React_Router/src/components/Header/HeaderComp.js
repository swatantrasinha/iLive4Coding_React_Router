import React from 'react';
import {Link} from 'react-router-dom';
function HeaderComp() {
    return (
        <div>
            This is Header Section
            <br/>
{/* Header Bootstrap Code Starts */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <Link className="navbar-brand" to="#">Navbar</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item active">
        {/* <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a> */}
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      
      <li className="nav-item">
        {/* <a class="nav-link" href="/about">About</a> */}
        <Link className="nav-link" to="/about">About</Link>
      </li>

      <li className="nav-item">
        {/* <a class="nav-link" href="/services">Services</a> */}
        <Link className="nav-link" to="/services">Services</Link>
      </li>
      
    </ul>
  </div>
</nav>
  {/* Header Bootstrap Code Ends */}
        </div>
    )
}

export default HeaderComp;