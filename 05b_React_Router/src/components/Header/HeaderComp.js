import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu,MenuItem,Button } from '@material-ui/core';

function HeaderComp() {

 const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log('handleClick ==> event.currentTarget ==> ' , event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log('handleClose !!!!');
    setAnchorEl(null);
  };


    return (
        <div>
            This is Header Section
            <br/>
{/* Header Bootstrap Code Starts */}

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
  <Link className="navbar-brand" to="#">Navbar</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item active">
        {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      
      <li className="nav-item">
        {/* <a className="nav-link" href="/about">About</a> */}
        <Link className="nav-link" to="/about">About</Link>
      </li>

      <li className="nav-item">
        {/* <a className="nav-link" href="/services">Services</a> */}
        <Link className="nav-link" to="/movies">Movies</Link>
      </li>

      <li className="nav-item">        
        <Link className="nav-link" to="/review">Write Movie Review</Link>
      </li>
      
      <li className="nav-item">        
        <Link className="nav-link" to="/search">Search Movies</Link>
      </li>

      <li className="nav-item">        
        <Link className="nav-link" to="/assign">Assign Movie Rating</Link>
      </li>

      {/* <li className="nav-item">
           <MyCustomDropDown/>
     </li>  */}
        <li className="nav-item">
    
            <Button onClick={handleClick}>Award</Button>
                      <Menu anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                          
                          <MenuItem key={1} onClick={handleClose}>
                              <Link to="/national?language=kanada"> National</Link>
                          </MenuItem>

                          <MenuItem key={2} onClick={handleClose}>
                              <Link to="/international?language=french">International</Link>
                          </MenuItem>

                      </Menu>
                       
      </li>
      
    </ul>
  </div>
</nav>
  {/* Header Bootstrap Code Ends */}
        </div>
    )
}

export default HeaderComp;