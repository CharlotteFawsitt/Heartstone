import React, {Component} from "react";
import CardView from './CardView';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      cards: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    let name = this.state.search.charAt(0).toUpperCase() + this.state.search.slice(1);
    console.log(name);
    axios.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`, {
      'headers': {
        'X-RapidAPI-Key': 'CjLDo3YPhsmshbDUUlm6Vc3Ej1Mop1JXzNPjsnDoAPPgzoHuRn'
      }
    }).then(response => {
      this.setState({cards: response.data});
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.submit();

  }

  render() {
    return (<div>

      <div className="columns is-centered">
        <div className="column is-3">
        <form onSubmit={this.handleSubmit}>

          <input className="input" value={this.state.search} onChange={this.handleChange} type="text" placeholder="Search.."/>
        </form>
        </div>
      </div>
      <div className="column">
      <CardView cards={this.state.cards}/>
      </div>
    </div>);
  }
}

export default Main;
