import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from './Card';
import Main from './Main';



class CardView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { basic: [], classic : [], card: []};
  }

  componentDidMount() {
    let _name = document.getElementById("search").value;
    let name = _name.charAt(0).toUpperCase() + _name.slice(1);
    console.log(name);
    axios.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`,
    {'headers': {'X-RapidAPI-Key': 'CjLDo3YPhsmshbDUUlm6Vc3Ej1Mop1JXzNPjsnDoAPPgzoHuRn'}})
    .then(response => {
      // this.setState({basic : response.data.Basic });
      this.setState({classic : response.data.Classic});
      this.setState({card: response.data})
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    // const cardListBasic = this.state.basic.map( b => (
    //   <Card
    //   key={b.cardId}
    //   name={b.name}
    //   image={b.dbfId}
    //   />
    //
    // ));
    // const cardListClassic = this.state.classic.map( c => (
    //   <Card
    //   key={c.cardId}
    //   name={c.name}
    //   image={c.dbfId}
    //   />
    //
    // ));
    const cardList = this.state.card.map(c => (
       <Card
    key={c.cardId}
    name={c.name}
    image={c.dbfId} />

));
    return (
      <div>
        <h1>Classic cards</h1>
        <div className="columns is-multiline">{cardList}</div>

      </div>
    )
  }
}
// <h1>Basic Cards</h1>
// <div className="columns is-multiline">
//   {cardListBasic}
// </div>
export default CardView;
