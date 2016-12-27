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
