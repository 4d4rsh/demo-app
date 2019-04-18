import { typeActions } from "./action";

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    masterPara: '',
    userInput: '',
    textRemaining: '',
    textTyped: '',
    wordsPerMinute: 0
};

const typeReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeActions.INITIALIZE_PARAGRAPH:
            return {
                ...state,
                masterPara: action.payload,
                textRemaining: action.payload
            }
        case typeActions.SET_USER_INPUT:
            return {
                ...state,
                userInput: action.payload
            }
        case typeActions.SET_WPM:
            return {
                ...state,
                wordsPerMinute: action.payload
            }
        case typeActions.SET_TEXT_TYPED:
            return {
                ...state,
                textTyped: action.payload
            }
        case typeActions.SET_TEXT_REMAINING:
            return {
                ...state,
                textRemaining: action.payload
            }
        default:
            return state;
    }
}

export default typeReducer;