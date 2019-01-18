import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import CardView from './CardView';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="./CardView">Classic Cards</NavLink></li>
            <Route path="/CardView" component={CardView}/>
            <li><a href="/stuff">Basic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
            <li><a href="/stuff">Classic Cards</a></li>
          </ul>
          <div className="content">

          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
