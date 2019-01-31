import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Main from './Main';
import CardDetail from './CardDetail'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
       <Route exact path="/" component={Main} />
       <Route path="/about/" component={About} />
       <Route path="/users/" component={Users} />
       <Route path="/card/:name" component={CardDetail} />
     </div>
    </BrowserRouter>);
  }
}



const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
