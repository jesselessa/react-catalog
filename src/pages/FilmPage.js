import React, { Component } from "react";
import films from "../films.json";
import "../App.css";

export default class FilmPage extends Component {
  constructor() {
    super();
    this.state = {
      film: {},
    };
  }
  componentDidMount() {
    let film = films[this.props.match.params.id - 1]; //     // films
    this.setState({ film });
    // ici, clé porte le même nom que la valeur
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.state.film.title}</li>
          <li>{this.state.film.director}</li>
          <li>{this.state.film.stars}</li>
          <li className="poster">
            <img src={this.state.film.image} alt="image film"></img>
          </li>
        </ul>
      </div>
    );
  }
}
