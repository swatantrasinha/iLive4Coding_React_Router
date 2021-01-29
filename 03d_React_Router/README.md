This is : 03d_React_Router
Note : First see :-
        ==>   01_React_Router -  static routing  
        ==>   02_React_Router - dynamic routing
        ==>   03_React_Router - nested routing
        ==>   03b_React_Router - use value of url and path from ueRouthMatch 
                                 so that /movies repition is not there and
                                 if /movies changes to /cinema we need least change in code
        ==>   03c_React_Router - display contents based on path - "/movies" and/or 
                                 "/movies/something"                             

In "03c_React_Router" we saw below code in MyMovies.js
--------------------------------------------------------------------
 <Route path={path}>   
    <Link className="nav-link" to={`${url}/hindi`}>Hindi</Link>
    <Link className="nav-link" to={`${url}/english`}>English</Link>
</Route>            

 <Route path={`${path}/:lang`} component={Movie_List_Lang_Filtered}/> 
 -----------------------------------------------------------------
So when we click on Movies in top-nav - it takes "/movies" and displays
2 links for Hindi and English movies
and again when we click on Hindi - it takes /movies/hindi and display Hindi movie list

Now requirement is that we want when Movies is clicked on top-nav it should take
Hindi by default

For this we need to 
- remove both links of Eng and Hindi movies as separate code
- Add <Switch> and check for "/movies" with exact  or "/movies/something"
See below code :
--------------------------------------------------------------------
MyMovies.js
-----------
<Link className="nav-link" to={`${url}/hindi`}>Hindi</Link>
<Link className="nav-link" to={`${url}/english`}>English</Link>

<Switch>
    <Route exact path={path}>
        <Movie_List_Lang_Filtered defaultLang={'hindi'} />
    </Route>            

    <Route path={`${path}/:lang`} component={Movie_List_Lang_Filtered}/>
 
 </Switch> 
 --------------------------------------------------------------------
 Here defaultLang is passed as Hindi which will be used in Movie_List_Lang_Filtered
 as default language for "/movies"

 Movie_List_Lang_Filtered.js
 ---------------------------
 function Movie_List_Lang_Filtered(props) {
    const paramz = useParams();
    if(!paramz.lang){  //when only "/movies" no lang so assign lang as props.defaultLang
        paramz.lang = props.defaultLang;
    }
    .....
    .....

The above code works
