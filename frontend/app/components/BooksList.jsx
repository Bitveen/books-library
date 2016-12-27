import React, { Component } from "react";
import Book from "Book";
import BookForm from "BookForm";
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

            if (book.editMode) {
                return <BookForm {...book} key={book.id} />
            } else {
                return <Book {...book} key={book.id} />
            }



        });

    }

    render() {

        let { books } = this.props;

        return (
            <div className="books-list">
                <h3>Количество книг: {books.length}</h3>
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
