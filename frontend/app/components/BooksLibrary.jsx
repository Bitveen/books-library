import React, { Component } from "react";
import BooksList from "BooksList";
import Search from "Search";
import Nav from "Nav";

export default class BooksLibrary extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                <Nav />
                <Search />
                <BooksList />
            </div>
        );
    }
}
