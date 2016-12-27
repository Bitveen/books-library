import React, { Component } from "react";
import Book from "Book";
import BookForm from "BookForm";
import { connect } from "react-redux";



class BooksList extends Component {
    constructor(props) {
        super(props);
    }


    renderBooks() {
        let { books, searchText } = this.props;

        // Поиск книг
        books = books.filter((book) => {
            let lowerCaseTitle = book.title.toLowerCase();
            return lowerCaseTitle.indexOf(searchText.toLowerCase()) != -1;
        });

        if (!books.length) {
            return <h3>Книг не найдено.</h3>
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

        return (
            <div className="books-list">
                {this.renderBooks()}
            </div>
        );
    }
}
export default connect((state) => {
    return {
        books: state.books,
        searchText: state.searchText
    };
})(BooksList);
