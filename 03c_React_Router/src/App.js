import logo from './logo.svg';
import './App.css';
import HeaderComp from './components/Header/HeaderComp';
import FooterComp from './components/Foooter/FooterComp';
import MyRoutes from './components/MyRoutes';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className="App">

          <div className="container">
             
              <Router>
                  <HeaderComp/>
                  <MyRoutes/>
                  <FooterComp/>
              </Router>
                   
          </div>
    </div>
  );
}

export default App;
