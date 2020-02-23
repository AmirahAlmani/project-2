import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';


export default class BeatSeller extends Component {


    state = {
        books: []
    }

    componentDidMount() {
        axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=JAPA6ks1pZrvUfvD7KTx6kJlRuzuMHHZ`)
            .then(res => {
                const books = res.data.results;
                this.setState({ books });
            })
    }

    render() {
        return (
            <ul>
                {this.state.books.map(book => <li key={book.id}>{book.byline}{book.summary}</li>)}
            </ul>
        )
    }





}

// export default BeatSeller;