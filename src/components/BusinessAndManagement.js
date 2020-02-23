import React, { Component } from "react";

export default class BusinessAndManagement extends Component {

    render() {

        let businessBook = [
            {
                id: 1,
                title: 'Human Resource Management',
                author: "Gary Dessler",
                summary: " Modern Human Resources: Technology, Social Media, and Management Human Resource Management provides readers with the daily tools and skills they need to function as successful managers--in both human resources and business in general. With a practical approach, the text explores the evolution of the field, highlighting the introduction of revolutionary new technologies and social media platforms such as LinkedIn and cloud computing.  "
            },


            {
                id: 2,
                title: 'Implementing Organizational Change - Theory Into Practise',
                author: 'Bert Spector',
                summary: " For both practitioners and students of change management. Traditionally texts presented change as a compilation of theories and ideas. SpectorImplementing Organizational Change: Theory and Practice is the only text that provides a clear sequential framework to help students and practitioners understand, analyze and implement change. Spector's sequential framework guides students in orchestrating intervention that is proven to maximize the likelihood of successful implementation. "

            },


            {
                id: 3,
                title: " Marketing ",
                author: 'Paul Baines',
                summary: "Review and discussion questions conclude each chapter, prompting readers to examine the themes discussed in more detail and encouraging them to engage critically with the theory. Links to seminal papers throughout each chapter also present the opportunity to take learning further; with a suite of online resources designed to stimulate, assess, and consolidate learning, Marketing is the complete package for any introductory marketing module."
            },


            {
                id: 4,
                title: 'International Business',
                author: ' John Wild ',
                summary: " International Business: The Challenges of Globalization uses the ever-present and salient subject of culture to present real-world examples and engaging features to bring international business to life and pique student interest . The 9th Edition uses a unique organizing framework that helps students to understand how the elements of international business are related and with a focus on employability skills, students understand how the concepts learned in this course will be relevant to their future careers.The material has been thoroughly updated based on ongoing changes in the international business world to ensure that it remains up-to-date with the rapidly changing world.  "


            }
        ]



        return (
            <ul>
                {businessBook.map(item => {
                    return <li>{item.title}</li>;
                })}
            </ul>


        )
    }

}