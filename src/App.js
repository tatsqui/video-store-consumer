import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import './App.css';
import CustomerList from './components/CustomerList'
import Library from './components/Library'


class App extends Component {
  state = {
    selectedCustomer: null,
    selectedMovie: null,
  }

  selectCustomer = (customerID) => {
    console.log('select Customer in App')
    
  }

    // Grace's suggested edits for this portion, starting with line 9:
    // constructor() {
    //   super();
    //   this.state = {
    //     selectedMovie: null,
    //     selectedCustomer: null,
    //   };
    // }

    // selectMovieForRental = (movieTitle) => {
    //   this.setState({
    //     selectedMovie: movieTitle
    //   })
    // }
  
    // selectCustomerForRental = (customerObject) => {
    //   this.setState({
    //     selectedCustomer: customerObject
    //   })
    // }
  
  render() {
    return (
      <div>
        <h1> Rewind Movies Home Page </h1>
      </div>
    );
  }
}

export default App;
