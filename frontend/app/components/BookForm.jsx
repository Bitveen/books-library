import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { cancelEditBook, saveBook } from "actions";

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.saveBook = this.saveBook.bind(this);
    }

    saveBook() {
        let { dispatch, id } = this.props;
        let title = this.refs.title.value;
        let author = this.refs.author.value;
        if (title && author) {
            dispatch(saveBook({ id, title, author }));
            dispatch(cancelEditBook(id));
        }

    }


    render() {
        let {title, author, id, dispatch} = this.props;
        return (

            <div className="col s12 m4 l4">
                <div className="card hovered">
                    <div className="card-content">
                        <form>
                            <input type="text" id="title" defaultValue={title} ref="title" placeholder="Book title" />
                            <input type="text" id="author" defaultValue={author} ref="author" placeholder="Book author" />
                            <button type="button" className="waves-effect waves-light btn" onClick={this.saveBook}>Save</button>
                            <button type="button" className="waves-effect waves-light btn" onClick={() => {
                                        dispatch(cancelEditBook(id));
                            }}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

BookForm.defaultProps = {
    title: "",
    author: ""
};
BookForm.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string
};






export default connect((state) => {
    return {
        showAddBookForm: state.showAddBookForm
    };
})(BookForm);
