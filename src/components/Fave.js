import React, { Component } from "react";

export default class Fave extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isFave: false
        // };
    }



    render() {
        // const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
        // const message = this.state.isFave ? "remove_from_queue" : "add_to_queue";
        return (
            <div>
                {this.props.faves.map((oneBookjObj) => {
                    return <div class='list'>
                        <h4>{oneBookjObj.title}</h4>
                        <h5>{oneBookjObj.author}</h5>
                        <p>{oneBookjObj.summary}</p>
                        <div class='img-books'>{oneBookjObj.img}
                        </div></div>
                })}
            </div>
        );
    }
}