import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from './Card';

class CardGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { basic: [], classic : [] };
  }

  componentDidMount() {
    axios.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
    {'headers': {'X-RapidAPI-Key': '3f9bd9ae02msh6a507606fd65436p1465ecjsnaaea94210d18'}})
    .then(response => {
      this.setState({basic : response.data.Basic });
      this.setState({classic : response.data.Classic})
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const cardListBasic = this.state.basic.map( b => (
      <Card
      key={b.cardId}
      name={b.name}
      image={b.dbfId}
      />

    ));
    const cardListClassic = this.state.classic.map( c => (
      <Card
      key={c.cardId}
      name={c.name}
      image={c.dbfId}
      />

    ));


    return (
      <div>
        <h1>Classic cards</h1>
        <div className="columns is-multiline">{cardListClassic}</div>
        <h1>Basic Cards</h1>
        <div className="columns is-multiline">{cardListBasic}</div>
      </div>
    )
  }
}


ReactDOM.render(
  <CardGrid />,
  document.getElementById('root')
);
