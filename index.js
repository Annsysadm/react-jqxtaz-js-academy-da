import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom"; // второй вариант
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Hello } from './Hello';
import { About } from './About';
import { Home } from './Home';
import { MovieList } from './MovieList';

import './style.css';
// import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import App from './App';

window.React = React;

/* Создаем стор. applyMiddleware позволяет использовать асинхронные действия, 
  оборачиваем в composeWithDevTools чтобы потом смотреть как меняются данные в разные промежутки времени */

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); 


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Anna'
    };
  }


  render() {

    return (
      <div>
        <Home name={this.state.name} />
        

       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">[About]</Link>
            </li>
            <li>
              <Link to="/movies/">MovieList</Link>
            </li>
            <li>
              <Link to="/hello/">Hello</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/movielist/" component={MovieList} />
        <Route path="/hello/" component={Hello} />
      </div>
    </Router>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

