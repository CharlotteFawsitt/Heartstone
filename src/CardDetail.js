import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class CardDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { card: this.props.location.state.currentCard, image: null };
  }

  render() {
    const cardList = (
      <div className="column is-3">
        <figure className="image">
          <img
            alt="Card"
            src={this.state.card.imgGold}
            style={{ width: "253px", height: "340px" }}
          />
        </figure>
        <div className="column">
          {this.state.card.artist ? (
            <p><b>Card Artist</b>: {this.state.card.artist}</p>
          ) : (
            ""
          )}
          <p><b>Card Name</b>: {this.state.card.name}</p>
          <p><b>Player Class</b>: {this.state.card.playerClass}</p>
          <p><b>Card Set</b>: {this.state.card.cardSet}</p>
          {this.state.card.flavor ? (
            <p><b>Flavor</b>: {this.state.card.flavor}</p>
          ) : (
            ""
          )}
          {this.state.card.text ? (
            <p
              dangerouslySetInnerHTML={{
                __html: `<b>Card text</b>: ${this.state.card.text}`
              }}
            />
          ) : (
            ""
          )}
          <p><b>Card Type</b>: {this.state.card.type}</p>
        </div>
      </div>
    );

    return (
      <div>
        <div className="columns is-multiline is-centered">{cardList}</div>
      </div>
    );
  }
}
export default CardDetail;
