import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      
      <div className="column is-3">
            <figure className="image">
              <img alt="Card" src={`https://raw.githubusercontent.com/schmich/hearthstone-card-images/4.12.2/rel/${this.props.image}.png`} style={{width: '253px', height: '340px'}} />
          </figure>
      </div>
    );
  }
}


export default Card;
