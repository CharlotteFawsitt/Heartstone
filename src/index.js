import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter} from "react-router-dom";
import Main from './Main';
import CardDetail from './CardDetail';
import logo from './images/hearthstone.png'
import CardBacks from './CardBacks';
import CardBackViewer from './CardBackViewer';
import CardForBack from './CardForBack';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<BrowserRouter>
      <div>
        <nav className="navbar" role="navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://playhearthstone.com/en-us/">
              <img src={logo} width="112" height="28" /></a>

                <Link to="/" className="navbar-item">Home</Link>

                <Link to="/about/" className="navbar-item">About</Link>

                <Link to="/CardBacks/" className="navbar-item">CardBacks</Link>
            </div>
          </nav>
          <Route exact path="/" component={Main}/>
          <Route path="/about/" component={About}/>
          <Route path="/CardBacks/" component={CardBacks}/>
          <Route path="/cardBack/:name/" component={CardBackViewer}/>
          <Route path="/card/:name" component={CardDetail}/>
        </div>
      </BrowserRouter>); } } const About = () =>
      <h2>About</h2>; const Users = () =>
      <h2>Users</h2>; ReactDOM.render(
      <Home/>,
  document.getElementById('root')
);
