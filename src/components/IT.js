import React, { Component } from "react";

export default class IT extends Component {

    constructor(props) {
        super(props);


    }
    render() {
        // const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";
        // const message = this.props.isFave ? "remove_from_queue" : "add_to_queue";

        let ITbook = [
            {
                id: 1,
                title: 'CompTIA A+ Certification Study Guide',
                img: <img class='img-books' src='https://cdn.waterstones.com/bookjackets/large/9781/1195/9781119515968.jpg'></img>,
                author: "Jane Holcomb",
                summary: " With hundreds of accurate practice questions and hands-on exercises, CompTIA A+ Certification Study Guide, Tenth Edition (Exams 220-1001 & 220-1002) teaches you what you need to know―and shows you how to prepare―for these challenging exams. This bestselling self-study guide has been fully revised to offer 100% coverage of all current objectives for both exams.  "
            },


            {
                id: 2,
                title: 'Cloud Management and Security',
                img: <img class='img-books' src='https://images-na.ssl-images-amazon.com/images/I/51po-MUjjEL._SX328_BO1,204,203,200_.jpg' />,
                author: 'Imad Abbadi',
                summary: " In this book, the author begins with an introduction to Cloud computing, presenting fundamental concepts such as analyzing Cloud definitions, Cloud evolution, Cloud services, Cloud deployment types and highlighting the main challenges. Following on from the introduction, the book is divided into three parts: Cloud management, Cloud security, and practical examples. "

            },


            {
                id: 3,
                title: " Introduction to Programming with Java - A Problem Solving Approach ",
                img: <img class='img-books' src='https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/2590/9781259025952.jpg' />,
                author: 'John Dean',
                summary: " Introduction to Programming with Java"
            },


            {
                id: 4,
                title: 'Information Systems',
                img: <img class='img-books' src='https://images-na.ssl-images-amazon.com/images/I/51KKeH0XKKL._SX379_BO1,204,203,200_.jpg' />,
                author: 'S. A. Kelkar',
                summary: ' Here is a comprehensive book that serves as a one-stop overview forunderstanding, developing, and deploying Information Systems. It aimsto provide the students with a conceptual framework to understand InformationSystems (IS) '


            }
        ]

        return (

            <div class='list'>
                {ITbook.map(item => {
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


