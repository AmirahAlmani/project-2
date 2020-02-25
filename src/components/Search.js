import React, { Component } from "react";

export default class Search extends Component {

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log(this.state.value);
        let newData = this.state.allData.filter(
            (book) => {
                return book.title.includes(this.state.value);
            }
        )
        this.setState({ searchData: newData })

    }
    render() {


        return (



            <div >

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
    <input class='box' type="text" id="filter" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input class='submit' type="submit" value="Search" />
                </form>

            </div>
        )



    }
}
