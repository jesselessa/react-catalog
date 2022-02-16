import React, { Component } from "react";
import films from "../films.json";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <ul>
          {films.map((film) => (
            <li>
              <Link to={`/filmpage/${film.id}`} key={film.id}>
                {/* Ajouter une key pour ne pas que s'affiche le message d'erreur */}
                <h2>{film.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
