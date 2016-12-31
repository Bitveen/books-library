import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleAddBookForm } from "actions";

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <nav>
                <div className="nav-wrapper">
                  <a href="#" className="brand-logo">Library</a>
                </div>
             </nav>
        );
    }

}

export default connect()(Nav);
