import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from './Card';
import Main from './Main';



class CardView extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const cardList = this.props.cards.map((c,i) => (
       <Card
    key={c.cardId}
    id={c.cardId}
    name={c.name}
    image={c.dbfId}
    currentCard={this.props.cards[i]} />

));
    return (
      <div>
        <div className="columns is-multiline is-centered">{cardList}</div>

      </div>
    )
  }
}
export default CardView;
