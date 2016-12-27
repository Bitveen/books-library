import { createStore, combineReducers } from "redux";
import { booksReducer, searchReducer } from "reducers";

export const configureStore = () => {
    const reducer = combineReducers({
        books: booksReducer,
        searchText: searchReducer
    });
    return createStore(reducer);
};
