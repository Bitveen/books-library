import * as types from "actionsConstants";


const defaultState = [
    {
        id: 1,
        title: "JavaScript",
        author: "Brandon Eich",
        editMode: false
    },
    {
        id: 2,
        title: "Python",
        author: "Guido Van Rossum",
        editMode: false
    },
    {
        id: 3,
        title: "PHP",
        author: "Rasmus Lerdorf",
        editMode: false
    }
];

export const booksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.ADD_BOOK:
            return state.concat([action.book]);
            break;
        case types.EDIT_BOOK:
            var books = state.concat([]);
            books.forEach((book) => {
                if (book.id == action.id) {
                    book.editMode = true;
                }
            });
            return books;
        case types.CANCEL_EDIT_BOOK:
            var books = state.concat([]);
            books.forEach((book) => {
                if (book.id == action.id) {
                    book.editMode = false;
                }
            });
            return books;
        case types.SAVE_BOOK:
            var books = state.concat([]);
            books.forEach((book) => {
                if (action.book.id == book.id) {
                    book.title = action.book.title,
                    book.author = action.book.author;
                    return;
                }
            });
            return books;
            break;
        default:
            return state;
    }
};



export const searchReducer = (state = "", action) => {
    switch (action.type) {
        case types.SET_SEARCH_VALUE:
            let searchValue = action.text;
            return searchValue;
            break;
        default:
            return state;
    }
};


export const addBookReducer = (state = false, action) => {
    switch (action.type) {
        case types.TOGGLE_ADD_BOOK_FORM:
            let newState = !state;
            return newState;
            break;
        default:
            return state;
    }
};
