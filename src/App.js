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


        },

        {
          id: 5,
          title: 'Human Resource Management',
          img: <img class='img-books' src="https://images-eu.ssl-images-amazon.com/images/I/51yuIWZHm9L._SX260_.jpg" />,
          author: "Gary Dessler",
          summary: " Modern Human Resources: Technology, Social Media, and Management Human Resource Management provides readers with the daily tools and skills they need to function as successful managers--in both human resources and business in general. With a practical approach, the text explores the evolution of the field, highlighting the introduction of revolutionary new technologies and social media platforms such as LinkedIn and cloud computing.  "
        },


        {
          id: 6,
          title: 'Implementing Organizational Change - Theory Into Practise',
          img: <img class='img-books' src="data:image/jpeg;base64,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" />,
          author: 'Bert Spector',
          summary: " For both practitioners and students of change management. Traditionally texts presented change as a compilation of theories and ideas. SpectorImplementing Organizational Change: Theory and Practice is the only text that provides a clear sequential framework to help students and practitioners understand, analyze and implement change. Spector's sequential framework guides students in orchestrating intervention that is proven to maximize the likelihood of successful implementation. "

        },


        {
          id: 7,
          title: " Marketing ",
          img: <img class='img-books' src="https://images-na.ssl-images-amazon.com/images/I/51bJeOEvg-L._SX366_BO1,204,203,200_.jpg" />,
          author: 'Paul Baines',
          summary: "Review and discussion questions conclude each chapter, prompting readers to examine the themes discussed in more detail and encouraging them to engage critically with the theory. Links to seminal papers throughout each chapter also present the opportunity to take learning further; with a suite of online resources designed to stimulate, assess, and consolidate learning, Marketing is the complete package for any introductory marketing module."
        },


        {
          id: 8,
          title: 'International Business',
          img: <img class='img-books' src="https://images-na.ssl-images-amazon.com/images/I/61gOjYQqdYL._AC_SY400_.jpg" />,
          author: ' John Wild ',
          summary: " International Business: The Challenges of Globalization uses the ever-present and salient subject of culture to present real-world examples and engaging features to bring international business to life and pique student interest . The 9th Edition uses a unique organizing framework that helps students to understand how the elements of international business are related and with a focus on employability skills, students understand how the concepts learned in this course will be relevant to their future careers.The material has been thoroughly updated based on ongoing changes in the international business world to ensure that it remains up-to-date with the rapidly changing world.  "


        },

        {
          id: 9,
          title: 'Law of International Trade',
          img: <img class='img-books' src='https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4140/9780414023253.jpg' />,
          author: "Jason Chuah",
          summary: " Law of International Trade is now a well-established textbook on this complicated and fast moving area of law. This book offers the reader a comprehensive and solid explanation of law and practice with an analysis of the theoretical and doctrinal issues, thus, making it an ideal textbook for students on both academic and professional courses. It is also an invaluable resource for practitioners and those engaged in international commercial operations, such as shipping, trade finance, cargo insurance, cross border litigation, international sales, etc. "
        },


        {
          id: 10,
          title: 'Public International Law',
          img: <img class='img-books' src='data:image/jpeg;base64,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' />,
          author: ' Alina Kaczorowska ',
          summary: " The fourth edition of Public International Law provides a very readable, lively, detailed and easily understood introduction to the fundamental principles and structures of international law without compromising on analysis and depth of coverage. "

        },


        {
          id: 11,
          title: " Business Law ",
          img: <img class='img-books' src='https://prodimage.images-bn.com/pimages/9780415723060_p0_v2_s550x406.jpg' />,
          author: ' David Kelly ',
          summary: " Business Law offers comprehensive coverage of the key aspects of business law in a straightforward manner that is easy to understand for non-law students. "
        },


        {
          id: 12,
          title: 'Dictionary of Law',
          img: <img class='img-books' src='https://global.oup.com/academic/covers/pdp/9780198802525' />,
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
              return <div class='list'>
                <h3>{elem.title}</h3>
                <h4>{elem.author}</h4>
                <p>{elem.summary}</p>
                <div class='img-books'>{elem.img}</div>
              </div>

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

