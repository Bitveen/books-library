import React from "react";
import { render } from "react-dom";
import BooksLibrary from "BooksLibrary";
import { configureStore } from "configureStore";
import { Provider } from "react-redux";


const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});



render(
    <Provider store={store}>
        <BooksLibrary />
    </Provider>
    ,document.getElementById("app"));
