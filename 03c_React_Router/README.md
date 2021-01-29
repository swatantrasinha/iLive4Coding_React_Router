This is : 03c_React_Router
Note : First see :-
        ==>   01_React_Router -  static routing  
        ==>   02_React_Router - dynamic routing
        ==>   03_React_Router - nested routing
        ==>   03b_React_Router - use value of url and path from ueRouthMatch 
                                 so that /movies repition is not there and
                                 if /movies changes to /cinema we need least change in code

In "03b_React_Router" we saw below code in MyMovies.js
--------------------------------------------------------------------
 <Link className="nav-link" to={`${url}/hindi`}>Hindi</Link>
 <Link className="nav-link" to={`${url}/english`}>English</Link>
 

 <Switch>
 <Route path={`${path}/:lang`} component={Movie_List_Lang_Filtered}/>
 </Switch>
 ------------------------------------------------------------------------

 Now if we see above code <Switch> is kind of unnecessary as there is one option only
 SO we will try to remove it and change the above code to below in MyMovies.js :
  --------------------------------------------------------------
 /* when path is "/movies" then show below 2 links of English and Hindi movies 
 this will be true for pages like - /movies , /movies/hindi, /movies/english etc */
 <Route path={path}>   
    <Link className="nav-link" to={`${url}/hindi`}>Hindi</Link>
    <Link className="nav-link" to={`${url}/english`}>English</Link>
</Route>            

//when path is "/movies/something" we can route to "Movie_List_Lang_Filtered" component
 <Route path={`${path}/:lang`} component={Movie_List_Lang_Filtered}/> 
 -----------------------------------------------------------------
 It will work.