import React, { Component } from "react";
import { editBook } from "actions";
import { connect } from "react-redux";


class Book extends Component {
    constructor(props) {
        super(props);
    }

    renderTags() {
        let { tags } = this.props;
        if (tags.length) {
            return tags.map((tag, key) => {
                return <a key={key} href="#" className="button tiny hollow">{tag}</a>;
            });
        }
    }

    render() {
        let {title, author, pubDate, pages, id, dispatch} = this.props;
        return (
            <div className="callout book" onClick={() => {
                    dispatch(editBook(id));
                }}>
                <h3>Название: {title}</h3>
                <h4>Автор: {author}</h4>
                <h5>Дата издания: {pubDate}</h5>
                <h5>Количество страниц: {pages}</h5>
            </div>
        );
    }

}


export default connect()(Book);
