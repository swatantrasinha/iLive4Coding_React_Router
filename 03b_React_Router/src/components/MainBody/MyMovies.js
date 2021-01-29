import React from 'react';
import {Link, Switch,Route, useRouteMatch} from 'react-router-dom';
import Movie_List_Lang_Filtered from '../Movie/Movie_List_Lang_Filtered';

 function MyMovies() {
     const {url,path} = useRouteMatch();
     console.log('url is : ' , url);
     console.log('path is : ' , path);
     const {...myParams} = useRouteMatch();
     console.log('myParams is : ' , myParams);

    return (
        <div>
            <h1> This is Movie Section  </h1>
            <hr/>
            
 <Link className="nav-link" to={`${url}/hindi`}>Hindi</Link>
 <Link className="nav-link" to={`${url}/english`}>English</Link>
 

 <Switch>
 <Route path={`${path}/:lang`} component={Movie_List_Lang_Filtered}/>
 </Switch>
 
            
        </div>
    )
}

export default MyMovies;
