import * as types from "actionsConstants";


const defaultState = [
    {
        id: 1,
        title: "JavaScript",
        author: "Brandon Eich",
        pages: 300,
        pubDate: "30.11.2015",
        tags: ["js", "react", "dom"],
        editMode: false
    },
    {
        id: 2,
        title: "Python",
        author: "Guido Van Rossum",
        pages: 350,
        pubDate: "20.06.2014",
        tags: ["python", "sql", "pip"],
        editMode: false
    },
    {
        id: 3,
        title: "PHP",
        author: "Rasmus Lerdorf",
        pages: 400,
        pubDate: "15.05.2011",
        tags: ["php", "mysql", "apache"],
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
