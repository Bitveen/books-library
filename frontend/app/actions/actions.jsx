import * as types from "actionsConstants";

export const editBook = (id) => {
    return {
        type: types.EDIT_BOOK,
        id
    };
};
export const cancelEditBook = (id) => {
    return {
        type: types.CANCEL_EDIT_BOOK,
        id
    };
};

export const searchBooks = (text) => {
    return {
        type: types.SET_SEARCH_VALUE,
        text
    };
};

export const toggleAddBookForm = () => {
    return {
        type: types.TOGGLE_ADD_BOOK_FORM
    };
};
