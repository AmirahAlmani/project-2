import React, { Component } from "react";

export default class AddNewBook extends Component {
  render() {
    return (
      <div class="list">
        <form>
          <label class="h3">Book Titile :</label>
          <br></br>
          <input
            class="box"
            name="bookTitle"
            type="text"
            value={this.props.bookTitle}
            onChange={this.props.onchang}
            placeholder="Book Title"
          ></input>
          <br></br>
          <label class="h3">Book Auther :</label>
          <br></br>
          <input
            class="box"
            name="bookAuther"
            type="text"
            value={this.props.bookAuther}
            onChange={this.props.onchang}
            placeholder="Book Auther"
          ></input>
          <br></br>
          <label class="h3">Book Description :</label>
          <br></br>
          <textarea
            class="box"
            id="textarea"
            name="bookDescription"
            type="text"
            value={this.props.bookDescription}
            onChange={this.props.onchang}
            placeholder="Book Description"
          ></textarea>
          <br></br>

          <button id="addbook" onClick={this.props.addBook}>
            Add
          </button>
        </form>

        <div class="list">
          {this.props.newBooks.map(item => {
            return (
              <div>
                <div>
                  <button onClick={() => this.props.delete(item)}>
                    Delete
                  </button>
                </div>
                <h2>{item[0]}</h2>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
