import React, { Component } from "react";

export default class AddNewBook extends Component {

    render() {



        return (
            <div class='list'>

                <form>

                    <label for="fname">Book Titile :</label>

                    <input type="text" value=""></input>
                    <br></br>
                    <label for="fname">Book Auther :</label>

                    <input type="text" value=""></input>
                    <br></br>
                    <label for="fname">Book Description :</label>

                    <input type="text" value=""></input><br></br>
                    <input class='button' type="submit" value="Submit" />


                </form>

            </div>
        )
    }

}