import React from "react";
import CardView from "./CardView";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      cards: [],
      searchType: "Name",
      info: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);

    this.info = (
      <div className="column is-4">
      <p>You can search by name or type. Just select which one you would like to search by
         in the drop down menu. Press enter when you have finished typing</p>
       </div>
    );
  }

  submit() {
    let name =
      this.state.search.charAt(0).toUpperCase() + this.state.search.slice(1);
    console.log(name);
    if(this.state.searchType === "Name"){
      axios
        .get(
          `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`,
          {
            headers: {
              "X-RapidAPI-Key":
                "CjLDo3YPhsmshbDUUlm6Vc3Ej1Mop1JXzNPjsnDoAPPgzoHuRn"
            }
          }
        )
        .then(response => {
          this.setState({ cards: response.data });
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    } else if(this.state.searchType === "Race"){
      axios
        .get(
          `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/${name}`,
          {
            headers: {
              "X-RapidAPI-Key":
                "CjLDo3YPhsmshbDUUlm6Vc3Ej1Mop1JXzNPjsnDoAPPgzoHuRn"
            }
          }
        )
        .then(response => {
          this.setState({ cards: response.data });
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  handleDropDown(event){
    (event.target.value === "Name" ? this.setState({searchType: "Name" }): this.setState({searchType: "Race"}))
    console.log(this.state.searchType);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
    console.log(this.state.searchType);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({info: false});
    console.log(this.state.info);
    this.submit();
  }


  render() {
    const style = !this.state.info ? {display: "none"} : {};
    return (
      <div>
        <div className="text columns is-centered" style={style}>
          {this.info}
        </div>

        <div className="columns is-centered">
          <div className="column is-3">
            <form onSubmit={this.handleSubmit}>
              <input
                className="input"
                value={this.state.search}
                onChange={this.handleChange}
                type="text"
                placeholder="Search.."
              />
              <div className="select">
                <select
                  name="Search By..."
                  value={this.state.searchType}
                  onChange={this.handleDropDown}
                >
                  <option value="Name">
                    Name
                  </option>
                  <option value="Race">Race</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="column">
          <CardView cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default Main;
