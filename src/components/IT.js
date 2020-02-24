import React, { Component } from "react";

export default class IT extends Component {

    render() {

        let ITbook = [
            {
                id: 1,
                title: 'CompTIA A+ Certification Study Guide',
                author: "Jane Holcomb",
                summary: " With hundreds of accurate practice questions and hands-on exercises, CompTIA A+ Certification Study Guide, Tenth Edition (Exams 220-1001 & 220-1002) teaches you what you need to know―and shows you how to prepare―for these challenging exams. This bestselling self-study guide has been fully revised to offer 100% coverage of all current objectives for both exams.  "
            },


            {
                id: 2,
                title: 'Cloud Management and Security',
                author: 'Imad Abbadi',
                summary: " In this book, the author begins with an introduction to Cloud computing, presenting fundamental concepts such as analyzing Cloud definitions, Cloud evolution, Cloud services, Cloud deployment types and highlighting the main challenges. Following on from the introduction, the book is divided into three parts: Cloud management, Cloud security, and practical examples. "

            },


            {
                id: 3,
                title: " Introduction to Programming with Java - A Problem Solving Approach ",
                author: 'John Dean',
                summary: " Introduction to Programming with Java"
            },


            {
                id: 4,
                title: 'Information Systems',
                author: 'S. A. Kelkar',
                summary: ' Here is a comprehensive book that serves as a one-stop overview forunderstanding, developing, and deploying Information Systems. It aimsto provide the students with a conceptual framework to understand InformationSystems (IS) ',


            }
        ]

        return (

            <div class='list'>
                {ITbook.map(item => {
                    return <div>{item.title}</div>;
                })}
            </div>
        )
    }

}


