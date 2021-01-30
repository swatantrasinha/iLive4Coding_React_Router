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
import Natinal_Award_Comp from './Awards/Natinal_Award_Comp';
import International_Award_Comp from './Awards/International_Award_Comp';
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

                <Route path="/national" component={Natinal_Award_Comp}/> 
                <Route path="/international" component={International_Award_Comp}/> 
                
            </Switch>
    )
}

export default MyRoutes;

