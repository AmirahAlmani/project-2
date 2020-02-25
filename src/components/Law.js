import React, { Component } from "react";

export default class Law extends Component {

    render() {

        let lowBook = [
            {
                id: 1,
                img: <img class='img-books' src='https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4140/9780414023253.jpg' />,
                title: 'Law of International Trade',
                author: "Jason Chuah",
                summary: " Law of International Trade is now a well-established textbook on this complicated and fast moving area of law. This book offers the reader a comprehensive and solid explanation of law and practice with an analysis of the theoretical and doctrinal issues, thus, making it an ideal textbook for students on both academic and professional courses. It is also an invaluable resource for practitioners and those engaged in international commercial operations, such as shipping, trade finance, cargo insurance, cross border litigation, international sales, etc. "
            },


            {
                id: 2,
                img: <img class='img-books' src='data:image/jpeg;base64,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' />,
                title: 'Public International Law',
                author: ' Alina Kaczorowska ',
                summary: " The fourth edition of Public International Law provides a very readable, lively, detailed and easily understood introduction to the fundamental principles and structures of international law without compromising on analysis and depth of coverage. "

            },


            {
                id: 3,
                img: <img class='img-books' src='https://prodimage.images-bn.com/pimages/9780415723060_p0_v2_s550x406.jpg' />,
                title: " Business Law ",
                author: ' David Kelly ',
                summary: " Business Law offers comprehensive coverage of the key aspects of business law in a straightforward manner that is easy to understand for non-law students. "
            },


            {
                id: 4,
                img: <img class='img-books' src='https://global.oup.com/academic/covers/pdp/9780198802525' />,
                title: 'Dictionary of Law',
                author: ' Jonathan Law',
                summary: " Described by leading university lecturers as 'the best law dictionary' and 'excellent for non-law students as well as law undergraduates', this classic dictionary is an invaluable source of legal reference for professionals, students, and anyone else needing succinct clarification of legal terms. Focusing primarily on English law, it also provides a one-stop source of information for any of the many countries that base their legal system on English law. "

            }
        ]




        return (

            <div class='list'>
                {lowBook.map(item => {
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