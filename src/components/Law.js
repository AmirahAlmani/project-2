import React, { Component } from "react";

export default class Law extends Component {

    render() {

        let lowBook = [
            {
                id: 1,
                title: 'Law of International Trade',
                author: "Jason Chuah",
                summary: " Law of International Trade is now a well-established textbook on this complicated and fast moving area of law. This book offers the reader a comprehensive and solid explanation of law and practice with an analysis of the theoretical and doctrinal issues, thus, making it an ideal textbook for students on both academic and professional courses. It is also an invaluable resource for practitioners and those engaged in international commercial operations, such as shipping, trade finance, cargo insurance, cross border litigation, international sales, etc. "
            },


            {
                id: 2,
                title: 'Public International Law',
                author: ' Alina Kaczorowska ',
                summary: " The fourth edition of Public International Law provides a very readable, lively, detailed and easily understood introduction to the fundamental principles and structures of international law without compromising on analysis and depth of coverage. "

            },


            {
                id: 3,
                title: " Business Law ",
                author: ' David Kelly ',
                summary: " Business Law offers comprehensive coverage of the key aspects of business law in a straightforward manner that is easy to understand for non-law students. "
            },


            {
                id: 4,
                title: 'Dictionary of Law',
                author: ' Jonathan Law',
                summary: " Described by leading university lecturers as 'the best law dictionary' and 'excellent for non-law students as well as law undergraduates', this classic dictionary is an invaluable source of legal reference for professionals, students, and anyone else needing succinct clarification of legal terms. Focusing primarily on English law, it also provides a one-stop source of information for any of the many countries that base their legal system on English law. "

            }
        ]




        return (
            <div class='list'>
                {lowBook.map(item => {
                    return <li>{item.title}</li>;
                })}
            </div>
        )
    }

}