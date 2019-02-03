import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
  Route,
  Link
} from "react-router-dom";
import CardDetail from './CardDetail';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {image: null};
  }

  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/schmich/hearthstone-card-images/4.12.2/rel/${this.props.image}.png`)
    .then( response => {
      this.setState({image: `https://raw.githubusercontent.com/schmich/hearthstone-card-images/4.12.2/rel/${this.props.image}.png`})
    })
    .catch( error => {
      this.setState({image: null})
    });
  }

  render() {
  const currentCard = this.props.currentCard;
  console.log(currentCard);
    if(this.state.image === null) {
        return null
    }
    else {
    return (

      <div className="column is-narrow">
            <figure className="image">
            <Link to={{ pathname:`/card/${this.props.name}`, state: {currentCard} }}>
                          <img alt="Card" src={this.state.image} style={{width: '253px', height: '340px'}} />
            </Link>
            <Route path="/card/:name" Component={CardDetail}/>
          </figure>
      </div>
    );
  }
  }
}


export default Card;
