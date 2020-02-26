import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

export default class BeatSeller extends Component {
  state = {
    books: []
  };
  // API
  componentDidMount() {
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=JAPA6ks1pZrvUfvD7KTx6kJlRuzuMHHZ`
      )
      .then(res => {
        const books = res.data.results;
        this.setState({ books });
      });
  }

  render() {
    return (
      <div class="list">
        {/* map for show API information  */}
        {this.state.books.map(book => (
          <div class="best" key={book.id}>
            <h4>{book.byline}</h4>
            <h5>{book.book_author}</h5>
            <p>{book.summary}</p>
          </div>
        ))}
      </div>
    );
  }
}
