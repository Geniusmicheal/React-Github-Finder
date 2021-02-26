import Header from './components/layout/Header';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import Singleuser from './components/pages/Singleuser';
import About from './components/pages/About';
import './App.css';

import GithubState from "./components/context/github/GithubState";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlertContextState_ from './components/context/alert/AlertContext';
import Notfound from './components/pages/Notfound';


const App = () => {

   return (
      <GithubState>
         
         <Router>
            <AlertContextState_>
               <div className="App">
                  <Header/>
                  
                  <div className="container">
                     <Alert/>
                     <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/user/:login' component= {Singleuser} />
                        <Route component={Notfound} />
                     </Switch>

                  </div>
               </div>
               </AlertContextState_>
         </Router>
        
      </GithubState>
   );
}

export default App;
