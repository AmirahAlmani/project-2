import React, { Component } from 'react';
import Home from './components/Home';
import BusinessAndManagement from './components/BusinessAndManagement';
import IT from './components/IT';
import Law from './components/Law';
import BeatSeller from './components/BeatSeller';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };


  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Book website</h1>


        <form>
          <label>
            Search:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>





        <Router>
          <nav>
            <Link to="/components/Home">Home</Link>
            <Link to="/components/BusinessAndManagement">Business And Management</Link>
            <Link to="/components/IT">IT</Link>
            <Link to="/components/Law">Law</Link>
            <Link to="/components/BeatSeller">Beat Seller</Link>
          </nav>


          <div>
            <Route path="/components/Home" component={Home} />
            <Route path="/components/BusinessAndManagement" component={BusinessAndManagement} />
            <Route path="/components/IT" component={IT} />
            <Route path="/components/Law" component={Law} />
            <Route path="/components/BeatSeller" component={BeatSeller} />
          </div>
        </Router>
      </div>

    );
  }
}

export default App;

