import * as types from "./ActionsTypes";

const InitialData = {
    allusers: [],
    isLoading: false,
    isError: false,
}

export default function Reducer(state = InitialData, action) {
    const { type, payload } = action;
    switch (type) {
        case types.GET_USERS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        };
        case types.GET_USERS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                allusers: payload
            }
        };
        case types.GET_USERS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                allusers: [],
                isError: true
            }
        };
        default:
            return state;
    }
}