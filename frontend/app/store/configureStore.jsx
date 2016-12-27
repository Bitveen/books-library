import { createStore, combineReducers } from "redux";
import { booksReducer } from "reducers";

export const configureStore = () => {
    const reducer = combineReducers({
        books: booksReducer
    });
    return createStore(reducer);
};
