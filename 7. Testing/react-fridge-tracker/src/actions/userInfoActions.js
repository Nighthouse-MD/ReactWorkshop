import * as types from "./actionTypes";

function nameEntered(name) {
    return {
        type: types.USERNAME_ENTERED,
        body: name
    };
}

export function storeUserName(name) {
    return function (dispatch) {
        return dispatch(nameEntered(name));
    };
}