import {
    ACTION_NUMBER_0,
    ACTION_NUMBER_1,
    ACTION_NUMBER_2,
    ACTION_NUMBER_3,
    ACTION_NUMBER_4,
    ACTION_NUMBER_5,
    ACTION_NUMBER_6,
    ACTION_NUMBER_7,
    ACTION_NUMBER_8,
    ACTION_NUMBER_9,
} from "../../actions/main/actionTypes";
import mainState from "./mainState";

const initialState = mainState


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const handlers = {
    [ACTION_NUMBER_0]: (state, action) => ({
        ...state,
    }),
    [ACTION_NUMBER_1]: (state, action) => ({
        ...state,
    }),
    [ACTION_NUMBER_2]: (state, action) => ({
        ...state,
    }),
    [ACTION_NUMBER_3]: (state, action) => ({
        ...state,
    }),
    [ACTION_NUMBER_4]: (state, action) => ({
        ...state,
    }),
    [ACTION_NUMBER_5]: (state, action) => ({
        ...state,
    }),
    [ACTION_NUMBER_6]: (state, action) => ({
        ...state,
    }),
    [ACTION_NUMBER_7]: (state, action) => ({
        ...state,
    }),
    [ACTION_NUMBER_8]: (state, action) => ({
        ...state,
    }),
    [ACTION_NUMBER_9]: (state, action) => ({
        ...state,
    }),
    DEFAULT: state => state,
}


const mainReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export default mainReducer