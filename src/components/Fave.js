import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="list">
        <div>
          <button onClick={() => this.props.deleteAll()}>Delete All</button>
        </div>

        {this.props.faves.map(oneBookjObj => {
          return (
            <div>
              <div class="books">
                <h4>{oneBookjObj.title}</h4>
                <h5>{oneBookjObj.author}</h5>
                <p>{oneBookjObj.summary}</p>
                <div className={`book-row-fave }`}>
                  <button onClick={() => this.props.addFavFunc(oneBookjObj)}>
                    Delete
                  </button>
                </div>
              </div>
              <div class="img-books">{oneBookjObj.img}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
