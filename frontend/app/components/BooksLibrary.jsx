import React, { Component } from "react";
import BooksList from "BooksList";

export default class BooksLibrary extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="row">
                <div className="columns small-centered medium-6 large-6">
                    <BooksList />
                </div>
            </div>
        );
    }
}
