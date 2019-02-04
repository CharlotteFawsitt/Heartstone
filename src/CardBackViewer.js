import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class CardBackViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {image: this.props.location.state.back.imgAnimated};
  }


  render() {
    const cardBack = (
      <div className="column is-narrow">
        <figure className="image">
          <img
            alt="CardBack"
            src={this.state.image}
            style={{ width: "253px", height: "340px" }}
          />
        </figure>
    </div>
    );

    return (
      <div>
        <div className="columns is-multiline is-centered">{cardBack}</div>
      </div>
    );
  }
}

export default CardBackViewer
