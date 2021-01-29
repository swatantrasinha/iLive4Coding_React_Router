import React from 'react'
import {Switch,Route} from 'react-router-dom';
import About from './MainBody/About';
import MyComp from './MainBody/MyComp';
import MyService from './MainBody/MyService';

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

