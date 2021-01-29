
1. set up create-react-app

2. Seutp Bootstrap 

3. Create component for Header,Footer and MainBody(About,Service etc.)

4. Creare a Router Component with name say - MyRoutes.js
============================================================
        MyRoutes.js
        -----------
import React from 'react'
import {Switch,Route} from 'react-router-dom';        
 function MyRoutes() {
    return (       
            <Switch>
                <Route path="/" exact component={MyComp}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={MyService}/>
            </Switch>
    )
}
export default MyRoutes;
============================================================

5. It has 2 steps :
(a) Header,MainContent(which is expected to change on route) should be wrapped 
    in <Router> - means <BrowserRouter>
Note : Here we are using BrowserRouter if needed we can use "HashRouter" also


(b) Include MyRoute in App.js in the section which has to be changed - between Header and Footer 
Note: Why Header and MyRoute inside <BrowserRouter> ?
- This is because :
(i) <Header> has navBar which will have <Link> see point 5 
so <Link> should be inside <BrowserRouter>

and
(ii) <Switch> which is in "MyRoutes.js" will also be inside  <BrowserRouter>
Both (i) and (ii) are manadatory else error
============================================================
            App.js
           --------
import MyRoutes from './components/MyRoutes';
import {BrowserRouter as Router} from 'react-router-dom';           
    <div className="App">
          <div className="container">
              <Router>
                  <HeaderComp/>
                  <MyRoutes/>
                  <FooterComp/>
              </Router>
          </div>
    </div>
============================================================

6. By above changes it will work but page will reload everytime we click on About,Services,Home etc
for this follow below : 
In the Navigation Bar do following:
-  Replace all <a> in Navbar with <Link> of react-router-dom
-  replace all href with to 
example : 
  {/* <a class="nav-link" href="/about">About</a> */}
      <Link class="nav-link" to="/about">About</Link>
Note: whatever is after to (here "/about") should match corresponding to 
path value in MyRoutes.js ==>  <Route path="/about" component={About}/>

============================================================

                       
