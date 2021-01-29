This is : 03b_React_Router
Note : First see :-
        ==>   01_React_Router -  static routing  
        ==>   02_React_Router - dynamic routing
        ==>   03_React_Router - nested routing

Dynamic Routing - Nested Routes 
================================
In earlier section we saw Nested Routing . In MyMovies.js we saw below code :

--------------------------------------------------------------------
 <Link className="nav-link" to="/movies/hindi">Hindi</Link>
 <Link className="nav-link" to="/movies/english">English</Link>
 

 <Switch>
 <Route path="/movies/:lang" component={Movie_List_Lang_Filtered}/>
 </Switch>
 
 -----------------------------------------------------------------------
 We can see there are too many /movies here if at all API changes from /movies to /cinema then
 we have to make changes many places hence we can use "useRouteMatch"

 ## useRouteMatch - provide access to match object

 In MyMovies.js, we will write below code :

 function MyMovies() {    
      const {...myParams} = useRouteMatch();
     console.log('myParams is : ' , myParams);
    return (
            ..........

we can see myParams as below :
{
        path: "/movies",
         url: "/movies",
         isExact: true,
         params: {}
}

1. url is what it matched browserURL to come to this page 
  <Link className="nav-link" to="/movies">Movies</Link>
  the to values of "/movies" is from where it gets value

2. path is what it matched in Route 
 <Route path="/movies/:lang" component={Movie_List_Lang_Filtered}/>
the above /movies in Routh's path is from where it gets it value

So since useRouteMatch provide access to match object so obviously its a match hence
url and path are having same value - "/movies"
also isExact is true becones its complete match

Note: isexact will be false when we click on Hindi or English link
becuase /movies/:lang - here lang is dynamic and so isExact will be false
path and url will still have same value as "/match"

Now to get rid of /movies everywhere we will changes MyMovies as below :
--------------------------------------------------------------------
 <Link className="nav-link" to={`${url}/hindi`}>Hindi</Link>
 <Link className="nav-link" to={`${url}/english`}>English</Link>
 

 <Switch>
 <Route path={`${path}/:lang`} component={Movie_List_Lang_Filtered}/>
 </Switch>
 ------------------------------------------------------------------------

 So now if api changes from /movies to /cinema 
 we just need to change in 2 places as below :
 HeaderComp :   <Link className="nav-link" to="/movies">Movies</Link>
 and 
 MyRoute.js :   <Route path="/movies" component={MyMovies}/> 
/movies/hindi will be changed to /cinema/hindi 
and
/movies/english will be changed to /cinema/english automatically as its dynamic


