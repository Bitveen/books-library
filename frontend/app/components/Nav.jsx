import React, { Component } from "react";
import { connect } from "react-redux";


class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { dispatch } = this.props;
        return (
            <nav>
                <div className="nav-wrapper">
                  <a href="#" className="brand-logo">Library</a>
                  <ul className="right hide-on-med-and-down">
                    <li><a className="waves-effect waves-light btn" onClick={() => {
                            dispatch();
                        }}>Add book</a></li>
                  </ul>
                </div>
             </nav>
        );
    }

}

export default connect()(Nav);
