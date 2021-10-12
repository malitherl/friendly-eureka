
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
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
