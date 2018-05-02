import React, { Component } from 'react'; //needed to use components in react

import './App.css';                       //needed to use CSS styles on this page(App.js)
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom';               //needed for routes to work
import Home from './Home';               //defines home page
import Gang from './Gang';               //defines gang page
import Contact from './Contact';         //defines contactus page

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <nav>
            <Link to='/'>Go To Home Page</Link>
            <Link to='/gang'>Go To Gang page</Link>
            <Link to='/contact'>Go To Contact Page</Link>
          </nav>

          <div className="App">
            <Route exact path='/' component={Home} />
            <Route path='/gang' component={Gang} />
            <Route path='/contact' component={Contact} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
