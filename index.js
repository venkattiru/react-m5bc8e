import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Organization from './Organization/Organization';
import AddEmp from './Employee/AddEmp/AddEmp';
import Header from './Header/Header';
import ViewEmployee from './Employee/ViewEmployee/ViewEmployee';
import Login from './Login/Login';
import ReactDOM,{render} from 'react-dom';   
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducer/index';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
    <div >
      <p className="d-none">Login here</p>
    </div>  
    <Switch>
    
              <Route path='/login' component ={Login} />
              <Route  path='/organize' component={Organization} />
              <Route  path='/addemp' component={AddEmp} />
              <Route  path='/viewemp' component={ViewEmployee} /> 
              <Route path='/header' component={Header}/>
          </Switch>
    </Router>
    );
  }
}

const store = createStore(reducer);
console.log(store.getState())

 ReactDOM.render(<Provider store = {store}>
    <App />
 </Provider>, document.getElementById('root'))  
