import React, { Component } from "react";
import BooksList from "BooksList";
import Search from "Search";


export default class BooksLibrary extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-title">
                        <strong>Книжная библиотека</strong>
                    </div>
                </div>
                <div className="row">
                    <div className="columns small-centered medium-6 large-6">
                        <Search />
                        <hr/>
                        <BooksList />
                    </div>
                </div>
            </div>
        );
    }
}
