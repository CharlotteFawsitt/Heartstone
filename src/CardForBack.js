import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
  Route,
  Link
} from "react-router-dom";
import CardDetail from './CardDetail';

class CardForBack extends React.Component {
  constructor(props) {
    super(props);

    this.handleError = this.handleError.bind(this)
    this.state = {image: this.props.image, errored: false};
  }

  getInitialState(event) {
  return {errored: true};
}

handleError(error) {
  this.setState({errored: true});
}

  render() {
    console.log(this.state.image);
      if(this.state.errored) {
          return null
      }
    else {
    return (

      <div className="column is-narrow">
            <figure className="image">
                          <img alt="Card" onError={this.handleError} src={this.state.image} style={{width: '253px', height: '340px'}} />
          </figure>
      </div>
    );
  }
  }
}


export default CardForBack;
