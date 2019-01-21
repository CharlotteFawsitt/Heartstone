import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
      // https://via.placeholder.com/150
      this.setState({image: null})
    })
  }

  render() {
    if(this.state.image === null) {
        return null
    }
    else {
    return (

      <div className="column is-3">
            <figure className="image">
              <img alt="Card" src={this.state.image} style={{width: '253px', height: '340px'}} />
          </figure>
      </div>
    );
  }
  }
}


export default Card;
