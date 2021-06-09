import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Switch,Redirect} from 'react-router-dom'; 
import Menu from "./components/Menu";
import Home from "./components/Home";
import MySkill from "./components/MySkill";
import MySkill2 from "./components/MySkill2";
import WhoIAm from "./components/WhoIAm";
import ERRORPages from "./components/ERRORPages";

function App() {
  return(

  <BrowserRouter>
          
    <Menu/>
       <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/myskill" component={MySkill}/>
              <Route path="/myskill2" component={MySkill2}/>
              <Route path="/whoiam" component={WhoIAm}/>
              <Route component={ERRORPages}/>
       </Switch>
  </BrowserRouter>

  )

}

  
 




export default App;
