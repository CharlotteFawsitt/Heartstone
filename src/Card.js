import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import CardDetail from "./CardDetail";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleError = this.handleError.bind(this);
    this.state = { image: null, errored: false };
  }

  getInitialState(event) {
    return { errored: true };
  }

  handleError(error) {
    this.setState({ errored: true });
  }

  render() {
    const currentCard = this.props.currentCard;
    if (!this.props.currentCard.hasOwnProperty("img")) {
      return null;
    } else if (this.state.errored) {
      return null;
    } else {
      return (
        <div className="column is-narrow">
          <figure className="image">
            <Link
              to={{
                pathname: `/card/${this.props.name}`,
                state: { currentCard }
              }}
            >
              <img
                alt="Card"
                onError={this.handleError}
                src={this.props.currentCard.img}
                style={{ width: "253px", height: "340px" }}
              />
            </Link>
            <Route path="/card/:name" Component={CardDetail} />
          </figure>
        </div>
      );
    }
  }
}

export default Card;
