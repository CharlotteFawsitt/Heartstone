import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "./Card";
import Main from "./Main";

// this.props.match.params.id => card's name

class CardDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { card: {}, image: null };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    axios
      .get(
        `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${
          params.name
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
        console.log(this.state.card.name);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const cardList = (
      <div className="column is-3">
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
          <p>{`Card name: ${this.state.card.name}`}</p>
        </div>
      </div>
    );

    return (
      <div>
        <div className="columns is-multiline">{cardList}</div>
      </div>
    );
  }
}
export default CardDetail;
