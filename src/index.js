import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from './Card';

class CardGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cards: [] };
  }

  componentDidMount() {
    axios.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
    {'headers': {'X-RapidAPI-Key': '3f9bd9ae02msh6a507606fd65436p1465ecjsnaaea94210d18'}})
    .then(response => {
      this.setState({cards : response.data.Basic });
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const cardList = this.state.cards.map( c => (
      <Card
      key={c.cardId}
      name={c.name}
      image={c.dbfId}
      />
    ));

    return <div className="columns is-multiline">{cardList}</div>
  }
}


ReactDOM.render(
  <CardGrid />,
  document.getElementById('root')
);
