import React, { Component } from "react";


export default class Book extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title, author, pubDate, pages, id} = this.props;
        return (
            <div className="callout book">
                <h3>Название: {title}</h3>
                <h4>Автор: {author}</h4>
                <h5>Дата издания: {pubDate}</h5>
                <h5>Количество страниц: {pages}</h5>
            </div>
        );
    }

}
