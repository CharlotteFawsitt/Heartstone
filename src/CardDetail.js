import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// this.props.match.params.id => card's name

class CardDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { card: this.props.location.state.currentCard, image: null};
  }


  render() {
    const cardList = (
      <div className="column is-narrow">
        <figure className="image">
          <img
            alt="Card"
            src={
              this.state.card.img}
            style={{ width: "253px", height: "340px" }}
          />
        </figure>
        <div className="card-content">
          {(this.state.card.artist ? <p dangerouslySetInnerHTML={{__html: `<b>Card artist</b>: ${this.state.card.artist}`}} /> : "")}
          <p dangerouslySetInnerHTML={{__html: `<b>Card name</b>: ${this.state.card.name}`}} />
          <p>{this.state.card.playerClass}</p>
          {(this.state.card.flavor ? <p dangerouslySetInnerHTML={{__html: `<b>Flavor</b>: ${this.state.card.flavor}`}}/> : "")}
          {(this.state.card.mechanics ? <p dangerouslySetInnerHTML={{ __html: this.state.card.text }} /> : "")}
          <p dangerouslySetInnerHTML={{__html: `<b>Card text</b>: ${this.state.card.text}`}} />




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
