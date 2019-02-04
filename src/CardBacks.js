import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "./Card";
import Main from "./Main";
import CardForBack from "./CardForBack"

class CardBacks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {backs: []};
  }

  componentDidMount() {
    axios
      .get(
        "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks", {
          'headers': {
            'X-RapidAPI-Key': 'CjLDo3YPhsmshbDUUlm6Vc3Ej1Mop1JXzNPjsnDoAPPgzoHuRn'
          }
        })
      .then(response => {
        this.setState({ backs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render(){
    const cardList = this.state.backs.map( (b,i) => (
       <CardForBack
    key={b.cardBackId}
    image={b.img}
    name={b.name}
    back={this.state.backs[i]} />

));
    return(
      <div>
        <div className="columns is-multiline is-centered">{cardList}</div>
      </div>
    )
  }
}
export default CardBacks;
