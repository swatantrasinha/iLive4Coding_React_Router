This is : 03_React_Router
Note : First see :-
        ==>  01_React_Router -  static routing  
        ==>   02_React_Router - dynamic routing

Dynamic Routing - Nested Routes 
================================
In earlier section we saw 
in MyMovies component which is displayed on /movies has content :

1. The heading :
<h1> This is Movie Section  </h1>

2. Links for language:
 <Link className="nav-link" to="/movies/hindi">Hindi</Link>
 <Link className="nav-link" to="/movies/english">English</Link> 

Now when we click in Hindi - we get list of Hindi movies from component - "Movie_List_Lang_Filtered"
but the above 2 content of MyMovies is not there although logically thinking these are needed
because 
Hindi Movie List page is also Movie section
and we may need to see English movie list from Hindi Movie List Page so Hindi and English links are good to have 

In this section we will see how to implement this.

Check the changes :
1. exact removed in MyRoutes 
<Route path="/movies" exact component={MyMovies}/> ==>  changed to below :
<Route path="/movies" component={MyMovies}/> 

2. In MyRoutes - this is cut  <Route path="/movies/:lang" component={Movie_List_Lang_Filtered}/>
and added in MyMovies.js as below (<Switch> is also added) :
 <Switch>
 <Route path="/movies/:lang" component={Movie_List_Lang_Filtered}/>
 </Switch>



 