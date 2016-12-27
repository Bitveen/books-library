import * as types from "actionsConstants";


const defaultState = [
    {
        id: 1,
        title: "JavaScript",
        author: "Brandon Eich",
        pages: 300,
        pubDate: "30.11.2015",
        tags: ["js", "react", "dom"]
    },
    {
        id: 2,
        title: "Python",
        author: "Guido Van Rossum",
        pages: 350,
        pubDate: "20.06.2014",
        tags: ["python", "sql", "pip"]
    },
    {
        id: 3,
        title: "PHP",
        author: "Rasmus Lerdorf",
        pages: 400,
        pubDate: "15.05.2011",
        tags: ["php", "mysql", "apache"]
    }

];

export const booksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.ADD_BOOK:
            return state.concat([action.book]);
            break;
        default:
            return state;
    }
};
