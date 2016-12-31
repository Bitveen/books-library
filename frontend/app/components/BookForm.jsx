import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { cancelEditBook } from "actions";

class BookForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title, id, author, dispatch} = this.props;
        return (

            <div className="col s12 m4 l4">
                <form>
                    <input type="text" id="title" defaultValue={title} ref="title" placeholder="Название книги" />
                    <input type="text" id="author" defaultValue={author} ref="author" placeholder="Автор книги" />
                    <button type="submit" className="waves-effect waves-light btn">Сохранить</button>
                    <button type="button" className="waves-effect waves-light btn" onClick={() => {
                            dispatch(cancelEditBook(id));
                        }}>Отмена</button>
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
