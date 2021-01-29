In this we will see :
1.  how to redirect based on flag
----------------------------------
We have a new link in TopNav called "Write Movie Review" to aceess this user should be loggedin
for simplicity we will create a boolean value "isLoggedIn" and assign as false 
Now when user click on this link "Write Movie Review" then check if
"isLoggedIn" is true ==> then ok - access the page 
else if "isLoggedIn" is false ==> redirect to LoginPage

---------------------------------------------------------------------------
 <Route path="/review" >
        {isLoggedIn ? <MyReview/> : <Redirect to="/login" />}
  </Route> 
-----------------------------------------------------------------------------                

2. how to redirect using from this to this
-------------------------------------------
Say we also have a link in top-nav called "Search Movies".
For some reason the api for search is not working so what we need is that when user click on 
this Search link in top-nav ,he/she should redirct from Search page i.e "/search" to Not_Available page - "/unavailable"  

-----------------------------------------------
 <Redirect from="/search" to='/unavailable' />
 ----------------------------------------------


3. Redirect using "push" and back button working
------------------------------------------------
In Point 1 we saw :
  <Route path="/review" >
      {isLoggedIn ? <MyReview/> : <Redirect to="/login" />}
</Route> 

Say we are in "About" page ==> "/about" and click on "Write Movie Review" ==> "/review" 
Since isLoggedIn is false so it will redirect to Login Page .

So flow is /about ==> /review ==> /login
hence from login page if we click back button we should go one step back i.e /review
but its going to /about
This is because <Redirect to="/login" /> has replaced /review with /login 
so its like direct /about  ==> /login

If we want application to follow path on back button click then we should use "push" in Redirect
Click  on "Assign Movie Rating"  in top nav
------------------------------------------------------------------------  
  <Route path="/assign" >
      {isLoggedIn ? <MyRating/> : <Redirect to="/login" push />}
   </Route> 
------------------------------------------------------------------------
here "push" is used with <Redirect>" so now say we are at "About" page and clicked 
on "Assign Movie Rating". It will go to Login page as expected.

Now at Login Page when we click on back button then it will go to /assign which again 
redirects to /login
So at /login ==> back button ==> will take to /login only and back button - seems to be not working 


Note : Use of "sensitive" in <Redirect>
----------------------------------------
In HeaderComp ==>   <Link className="nav-link" to="/search">Search Movies</Link>
In MyRoute     ==>  <Redirect from="/SEARCH" to='/unavailable' />

The above will work even though /search is not exactly same as /SEARCH
so it ignores case. To make it match case we should use "sensitive" in <Redirect> as below :
  <Redirect from="/SEARCH" to='/unavailable' sensitive />

  With above code if we click on "Search Movies" it wont redirect as "sensitive" is added

## I think "sensitive" also work in <Route> just like above <Redirect>. I have checked it.
