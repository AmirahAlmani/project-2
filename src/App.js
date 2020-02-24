import React, { Component } from 'react';
import Home from './components/Home';
import BusinessAndManagement from './components/BusinessAndManagement';
import IT from './components/IT';
import Law from './components/Law';
import BeatSeller from './components/BeatSeller';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ' ',
      allData: [
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


        },

        {
          id: 5,
          title: 'Human Resource Management',
          author: "Gary Dessler",
          summary: " Modern Human Resources: Technology, Social Media, and Management Human Resource Management provides readers with the daily tools and skills they need to function as successful managers--in both human resources and business in general. With a practical approach, the text explores the evolution of the field, highlighting the introduction of revolutionary new technologies and social media platforms such as LinkedIn and cloud computing.  "
        },


        {
          id: 6,
          title: 'Implementing Organizational Change - Theory Into Practise',
          author: 'Bert Spector',
          summary: " For both practitioners and students of change management. Traditionally texts presented change as a compilation of theories and ideas. SpectorImplementing Organizational Change: Theory and Practice is the only text that provides a clear sequential framework to help students and practitioners understand, analyze and implement change. Spector's sequential framework guides students in orchestrating intervention that is proven to maximize the likelihood of successful implementation. "

        },


        {
          id: 7,
          title: " Marketing ",
          author: 'Paul Baines',
          summary: "Review and discussion questions conclude each chapter, prompting readers to examine the themes discussed in more detail and encouraging them to engage critically with the theory. Links to seminal papers throughout each chapter also present the opportunity to take learning further; with a suite of online resources designed to stimulate, assess, and consolidate learning, Marketing is the complete package for any introductory marketing module."
        },


        {
          id: 8,
          title: 'International Business',
          author: ' John Wild ',
          summary: " International Business: The Challenges of Globalization uses the ever-present and salient subject of culture to present real-world examples and engaging features to bring international business to life and pique student interest . The 9th Edition uses a unique organizing framework that helps students to understand how the elements of international business are related and with a focus on employability skills, students understand how the concepts learned in this course will be relevant to their future careers.The material has been thoroughly updated based on ongoing changes in the international business world to ensure that it remains up-to-date with the rapidly changing world.  "


        },

        {
          id: 9,
          title: 'Law of International Trade',
          author: "Jason Chuah",
          summary: " Law of International Trade is now a well-established textbook on this complicated and fast moving area of law. This book offers the reader a comprehensive and solid explanation of law and practice with an analysis of the theoretical and doctrinal issues, thus, making it an ideal textbook for students on both academic and professional courses. It is also an invaluable resource for practitioners and those engaged in international commercial operations, such as shipping, trade finance, cargo insurance, cross border litigation, international sales, etc. "
        },


        {
          id: 10,
          title: 'Public International Law',
          author: ' Alina Kaczorowska ',
          summary: " The fourth edition of Public International Law provides a very readable, lively, detailed and easily understood introduction to the fundamental principles and structures of international law without compromising on analysis and depth of coverage. "

        },


        {
          id: 11,
          title: " Business Law ",
          author: ' David Kelly ',
          summary: " Business Law offers comprehensive coverage of the key aspects of business law in a straightforward manner that is easy to understand for non-law students. "
        },


        {
          id: 12,
          title: 'Dictionary of Law',
          author: ' Jonathan Law',
          summary: " Described by leading university lecturers as 'the best law dictionary' and 'excellent for non-law students as well as law undergraduates', this classic dictionary is an invaluable source of legal reference for professionals, students, and anyone else needing succinct clarification of legal terms. Focusing primarily on English law, it also provides a one-stop source of information for any of the many countries that base their legal system on English law. "

        }

      ],
      searchData: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {

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
      <div>


        <div class='head'>
          <h1>Book website</h1>


          <div class='search'>

            <form onSubmit={this.handleSubmit}>
              <label>
                Search:
            <input class='box' type="text" id="filter" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input class='submit' type="submit" value="Search" />
            </form>

          </div>

        </div>


        <div>
          <Router>
            <nav>
              <Link to="/components/Home">Home</Link>
              <Link to="/components/BusinessAndManagement">Business And Management</Link>
              <Link to="/components/IT">IT</Link>
              <Link to="/components/Law">Law</Link>
              <Link to="/components/BeatSeller">Beat Seller</Link>
            </nav>
            {this.state.searchData.map((elem) => {
              return <div> <h3>{elem.title}</h3> <h4>{elem.author}</h4> <p>{elem.summary}</p> </div>
            })}

            <div>
              <Route path="/components/Home" component={Home} />
              <Route path="/components/BusinessAndManagement" component={BusinessAndManagement} />
              <Route path="/components/IT" component={IT} />
              <Route path="/components/Law" component={Law} />
              <Route path="/components/BeatSeller" component={BeatSeller} />
            </div>
          </Router>


        </div>

      </div>

    );
  }
}

export default App;

