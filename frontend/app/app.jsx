import React from "react";
import { render } from "react-dom";
import BooksLibrary from "BooksLibrary";
import { configureStore } from "configureStore";
import { Provider } from "react-redux";


const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});


// Foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");

require("style!css!sass!styles/app.scss");




render(
    <Provider store={store}>
        <BooksLibrary />
    </Provider>
    ,document.getElementById("app"));
