import React from 'react'
import {Switch,Route, Redirect} from 'react-router-dom';
import About from './MainBody/About';
import MyComp from './MainBody/MyComp';
import MyMovies from './MainBody/MyMovies';
import MyReview from './MainBody/MyReview';
import Movie_List_Lang_Filtered from './Movie/Movie_List_Lang_Filtered';
import MyLogin from './MainBody/MyLogin';
import NotAvailablePage from './MainBody/NotAvailablePage';
import MyRating from './MainBody/MyRating';
 function MyRoutes() {
     const isLoggedIn = false;

    return (       
            <Switch>
                <Route path="/" exact component={MyComp}/>
                <Route path="/ABOUT" exact component={About} />
                <Route path="/movies" component={MyMovies}/> 
                <Route path="/login" component={MyLogin}/> 
                <Route path="/unavailable" component={NotAvailablePage}/> 
               
                <Route path="/review" >
                    {isLoggedIn ? <MyReview/> : <Redirect to="/login" />}
                </Route> 
                <Redirect from="/SEARCH" to='/unavailable' />

                <Route path="/assign" >
                    {isLoggedIn ? <MyRating/> : <Redirect to="/login" push />}
                </Route> 
            </Switch>
    )
}

export default MyRoutes;

