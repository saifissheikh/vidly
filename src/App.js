import './App.css';
import Movies from './components/movies';
import Counters from './components/counters';
import NavBar from './components/navbar';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Customers from './components/customers';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
        </main>
      </React.Fragment>
    );
  }
  
}

export default App;
