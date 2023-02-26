import * as types from "./ActionsTypes";

// GetRequest
export const GetUserRequest = () => {
    return {
        type: types.GET_USERS_REQUEST
    }
}

export const GetUserSuccess = (payload) => {
    return {
        type: types.GET_USERS_SUCCESS,
        payload
    }
}

export const GetUserFailure = () => {
    return {
        type: types.GET_USERS_FAILURE
    }
}

