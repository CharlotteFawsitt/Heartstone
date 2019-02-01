import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "./Card";
import Main from "./Main";

// this.props.match.params.id => card's name

class CardDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { card: {}, image: null};
  }

  componentDidMount() {
    axios
      .get(
        `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${
          this.props.match.params.name
        }`,
        {
          headers: {
            "X-RapidAPI-Key":
              "CjLDo3YPhsmshbDUUlm6Vc3Ej1Mop1JXzNPjsnDoAPPgzoHuRn"
          }
        }
      )
      .then(response => {
        this.setState({ card: response.data["0"] });
        console.log(this.props);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const cardList = (
      <div className="column is-narrow">
        <figure className="image">
          <img
            alt="Card"
            src={`https://raw.githubusercontent.com/schmich/hearthstone-card-images/4.12.2/rel/${
              this.state.card.dbfId
            }.png`}
            style={{ width: "253px", height: "340px" }}
          />
        </figure>
        <div className="card-content">
          {(this.state.card.artist ? <p dangerouslySetInnerHTML={{__html: `<b>Card artist</b>: ${this.state.card.artist}`}} /> : "")}
          <p dangerouslySetInnerHTML={{__html: `<b>Card name</b>: ${this.state.card.name}`}} />
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
