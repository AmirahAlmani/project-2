import React, { Component } from "react";

export default class List extends Component {

    constructor(props) {
        super(props);


    }
    render() {
        return (

            <div class='list'>
                {this.props.bookList.map(item => {
                    return <div>
                        <div class='books'>
                            <h4>{item.title}</h4>
                            <h5>{item.author}</h5>
                            <p>{item.summary}</p>
                            <div className={`book-row-fave }`}> <button onClick={() => this.props.addFavFunc(item)} >Fave</button> </div>

                        </div>
                        <div class='img-books'>{item.img}</div>


                    </div>;
                })}
            </div>
        )
    }

}


