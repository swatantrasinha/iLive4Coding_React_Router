import React from 'react';
//import {Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

 function MyMovies() {
    return (
        <div>
            <h1> This is Movie Section  </h1>
            <hr/>
            
 <Link className="nav-link" to="/movies/hindi">Hindi</Link>
 <Link className="nav-link" to="/movies/english">English</Link>
            
        </div>
    )
}

export default MyMovies;
