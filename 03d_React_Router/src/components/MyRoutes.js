import React from 'react'
import {Switch,Route} from 'react-router-dom';
import About from './MainBody/About';
import MyComp from './MainBody/MyComp';
import MyMovies from './MainBody/MyMovies';
import Movie_List_Lang_Filtered from './Movie/Movie_List_Lang_Filtered';

 function MyRoutes() {
    return (       
            <Switch>
                <Route path="/" exact component={MyComp}/>
                <Route path="/about" exact component={About}/>
                {/* <Route path="/movies" exact component={MyMovies}/> */}                    
                {/* <Route path="/movies/:lang" component={Movie_List_Lang_Filtered}/> */}
                <Route path="/movies" component={MyMovies}/> 
            </Switch>
    )
}

export default MyRoutes;

