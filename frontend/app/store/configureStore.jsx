import { createStore, combineReducers } from "redux";
import { booksReducer, searchReducer, addBookReducer } from "reducers";

export const configureStore = () => {
    const reducer = combineReducers({
        books: booksReducer,
        searchText: searchReducer,
        showAddBookForm: addBookReducer
    });
    return createStore(reducer);
};
