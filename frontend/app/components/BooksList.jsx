import React, { Component } from "react";
import Book from "Book";
import { connect } from "react-redux";

class BooksList extends Component {
    constructor(props) {
        super(props);
    }

    renderBooks() {
        let { books } = this.props;
        if (!books.length) {
            return <h3>Книг пока нет.</h3>
        }
        return books.map((book) => {
            return <Book {...book} key={book.id} />
        });

    }

    render() {



        return (
            <div className="books-list">
                {this.renderBooks()}
            </div>
        );
    }
}
export default connect((state) => {
    return {
        books: state.books
    };
})(BooksList);
