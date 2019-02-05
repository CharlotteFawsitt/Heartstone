import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class CardBackViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { back: this.props.location.state.back };
  }

  render() {
    const cardBack = (
      <div className="column is-3">
        <figure className="image">
          <img
            alt="CardBack"
            src={this.state.back.imgAnimated}
            style={{ width: "253px", height: "340px" }}
          />
        </figure>
        <div className="column">
          <p
            dangerouslySetInnerHTML={{
              __html: `<b>Card Name</b>: ${this.state.back.name}`
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: `<b>Description</b>: ${this.state.back.description}`
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: `<b>How to obtain</b>: ${this.state.back.howToGet}`
            }}
          />
        </div>
      </div>
    );

    return (
      <div>
        <div className="columns is-multiline is-centered">{cardBack}</div>
      </div>
    );
  }
}

export default CardBackViewer;
