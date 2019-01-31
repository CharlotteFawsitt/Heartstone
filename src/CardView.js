import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from './Card';
import Main from './Main';



class CardView extends React.Component {
  constructor(props) {
    super(props);

  }


//   submit() {
//   let name = this.props.search.charAt(0).toUpperCase() + this.props.search.slice(1);
//     this.props.submit = false;
//     axios.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`,
//     {'headers': {'X-RapidAPI-Key': 'CjLDo3YPhsmshbDUUlm6Vc3Ej1Mop1JXzNPjsnDoAPPgzoHuRn'}})
//     .then(response => {
//       this.setState({card: response.data});
//       console.log(response);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

  render() {
    const cardList = this.props.cards.map(c => (
       <Card
    key={c.cardId}
    name={c.name}
    image={c.dbfId} />

));
    return (
      <div>
        <div className="columns is-multiline">{cardList}</div>

      </div>
    )
  }
}
export default CardView;
