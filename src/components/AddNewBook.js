import React, { Component } from "react";

export default class AddNewBook extends Component {
  render() {
    return (
      <div class="list">
        <form>
          <label for="fname">Book Titile :</label>

          <input
            name="bookTitle"
            type="text"
            value={this.props.bookTitle}
            onChange={this.props.onchang}
            placeholder="Book Title"
          ></input>
          <br></br>
          <label for="fname">Book Auther :</label>

          <input
            name="bookAuther"
            type="text"
            value={this.props.bookAuther}
            onChange={this.props.onchang}
            placeholder="Book Auther"
          ></input>
          <br></br>
          <label for="fname">Book Description :</label>

          <input
            name="bookDescription"
            type="text"
            value={this.props.bookDescription}
            onChange={this.props.onchang}
            placeholder="Book Description"
          ></input>
          <br></br>

          <button onClick={this.props.addBook}>Add </button>
        </form>

        <div class="list">
          {this.props.newBooks.map(item => {
            return <div>{item}</div>;
          })}
        </div>
      </div>
    );
  }
}
