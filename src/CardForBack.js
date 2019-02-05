import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import CardBackViewer from "./CardBackViewer";

class CardForBack extends React.Component {
  constructor(props) {
    super(props);

    this.handleError = this.handleError.bind(this);
    this.state = {
      image: this.props.image,
      errored: false,
      back: this.props.back
    };
  }

  getInitialState(event) {
    return { errored: true };
  }

  handleError(error) {
    this.setState({ errored: true });
  }

  render() {
    const back = this.state.back;
    if (this.state.errored) {
      return null;
    } else {
      return (
        <div className="column is-narrow">
          <figure className="image">
            <Link
              to={{ pathname: `/cardBack/${this.props.name}`, state: { back } }}
            >
              <img
                alt="CardBack"
                onError={this.handleError}
                src={this.props.image}
                style={{ width: "253px", height: "340px" }}
              />
            </Link>
            <Route path="/cardBack/:name" Component={CardBackViewer} />
          </figure>
        </div>
      );
    }
  }
}

export default CardForBack;
