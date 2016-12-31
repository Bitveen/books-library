module.exports = {
    entry: __dirname + "/app/app.jsx",
    output: {
        path: __dirname + "/../public",
        filename: "bundle.js"
    },
    resolve: {
        root: __dirname + "/app",
        alias: {
            BooksLibrary: "components/BooksLibrary.jsx",
            actionsConstants: "constants/actionsConstants.jsx",
            actions: "actions/actions.jsx",
            Book: "components/Book.jsx",
            BooksList: "components/BooksList.jsx",
            BookForm: "components/BookForm.jsx",
            configureStore: "store/configureStore.jsx",
            reducers: "reducers/reducers.jsx",
            Search: "components/Search.jsx",
            Nav: "components/Nav.jsx"
        },
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /.\jsx?$/,
                include: __dirname + "/app"
            }
        ]
    }
};
