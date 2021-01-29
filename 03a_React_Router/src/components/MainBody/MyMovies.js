import React from 'react';
import {Link, Switch,Route} from 'react-router-dom';
import Movie_List_Lang_Filtered from '../Movie/Movie_List_Lang_Filtered';

 function MyMovies() {
    return (
        <div>
            <h1> This is Movie Section  </h1>
            <hr/>
            
 <Link className="nav-link" to="/movies/hindi">Hindi</Link>
 <Link className="nav-link" to="/movies/english">English</Link>
 
{/*Section 03 Starts */}
 <Switch>
 <Route path="/movies/:lang" component={Movie_List_Lang_Filtered}/>
 </Switch>
 {/*Section 03 Starts */}
            
        </div>
    )
}

export default MyMovies;
