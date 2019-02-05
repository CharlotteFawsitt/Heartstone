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
            <p
              dangerouslySetInnerHTML={{
                __html: `<b>Card artist</b>: ${this.state.card.artist}`
              }}
            />
          ) : (
            ""
          )}
          <p
            dangerouslySetInnerHTML={{
              __html: `<b>Card name</b>: ${this.state.card.name}`
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: `<b>Player Class</b>: ${this.state.card.playerClass}`
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: `<b>Card Set</b>: ${this.state.card.cardSet}`
            }}
          />
          {this.state.card.flavor ? (
            <p
              dangerouslySetInnerHTML={{
                __html: `<b>Flavor</b>: ${this.state.card.flavor}`
              }}
            />
          ) : (
            ""
          )}
          {this.state.card.mechanics ? (
            <p dangerouslySetInnerHTML={{ __html: this.state.card.text }} />
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
          <p
            dangerouslySetInnerHTML={{
              __html: `<b>Card type</b>: ${this.state.card.type}`
            }}
          />
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
