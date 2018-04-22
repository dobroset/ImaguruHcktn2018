import React, { Component } from 'react';
import App from './App';
import Createvolonteer from './Createvolonteer';
import Createpoluchatel from "./Createpoluchatel";
import Createrequest from './Createrequest';
import RequestList from './RequestList';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';



//const wrapper = (Component)=>{return <App><Component/></App>}

class Routes extends Component {
render(){
    return(
  <div>
      <BrowserRouter>
      <App>
     
      
      <Route  path='/createvolonteer' component={Createvolonteer} />
      <Route  path='/createpoluchatel' component={Createpoluchatel} />
      <Route path="/createrequest" component={Createrequest} />
      <Route path ="/requests" component={RequestList} />
    
    </App>
    </BrowserRouter>
      
     
  </div>);
}
}

export default Routes;