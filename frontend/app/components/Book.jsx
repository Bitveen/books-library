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
        let {title, author, id, dispatch} = this.props;
        return (
            <div className="col s12 m4 l4" onClick={() => {
                    dispatch(editBook(id));
                }}>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <h4 className="card-title">{title}</h4>
                        <h6>{author}</h6>
                    </div>
                    <div className="card-action">

                    </div>
                </div>
            </div>
        );
    }

}


export default connect()(Book);
