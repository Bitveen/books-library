import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { cancelEditBook } from "actions";

class BookForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title, id, author, pubDate, pages, dispatch} = this.props;
        return (
            <div className="callout clearfix">
                <form>
                    <div className="row">
                        <div className="small-3 large-3 columns">
                          <label htmlFor="title" className="text-right middle">Название книги:</label>
                        </div>
                        <div className="small-9 large-9 columns">
                          <input type="text" id="title" defaultValue={title} ref="title" placeholder="Название книги" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-3 columns">
                          <label htmlFor="author" className="text-right middle">Автор книги:</label>
                        </div>
                        <div className="small-9 columns">
                          <input type="text" id="author" defaultValue={author} ref="author" placeholder="Автор книги" />
                        </div>
                    </div>

                    <div className="button-group float-right">
                        <button type="submit" className="button success small">Сохранить</button>
                        <button type="button" className="button alert small" onClick={() => {
                                dispatch(cancelEditBook(id));
                            }}>Отмена</button>
                    </div>

                </form>
            </div>

        );
    }
}

BookForm.defaultProps = {
    title: "",
    author: "",
    pubDate: "",
    pages: ""
};
BookForm.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pubDate: PropTypes.string,
    pages: PropTypes.number
};






export default connect()(BookForm);
