This is : 02_React_Router
Note : First see - 01_React_Router which was static routing

Dynamic Routing
===============
Here we will use "useParams" from react-router-dom

In earlier section we saw static routing
 <Route path="/services" component={MyService}/>

 means when /services is there in URL - go to MyService

Here in this section we will take movie example :

 Say we want like 
  <Route path="/movies/:lang" component={Movie_Lang-Filtered} />
  <Route path="/movies" component={Movie_List} />

  In Navigation Bar of Header when we click "Movies" - URL will changes to /movies 
  - /movies         ==> show component => Movie_List ==> Link to English and Hindi Movies

  - /movies/hindi   ==> show component => Movie_Lang-Filtered with list of Hindi movies
  - /movies/english ==> show component ==>  Movie_Lang-Filtered with list of English movies

import {useParams} from 'react-router-dom';

const params =useParams();
console.log(params);  //