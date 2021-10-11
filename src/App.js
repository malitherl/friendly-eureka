
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>   
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Shop path="/shop" component={Shop}/>
        </Switch>
      </Router>
    </div>
  
  );
}



export default App;
