import React, { Component } from "react";
import { searchBooks } from "actions";
import { connect } from "react-redux";

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        let { dispatch } = this.props;
        let searchText = this.refs.searchText.value.trim();
        dispatch(searchBooks(searchText));
    }


    render() {
        return (
            <div className="search">
                <div className="divider"></div>
                <input type="text" ref="searchText" placeholder="Начните вводить название книги..." onChange={this.handleSearch}/>
            </div>
        );
    }
}


export default connect()(Search);
