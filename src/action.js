// ------------------------------------
// Constants
// ------------------------------------
export const typeActions = {
    INITIALIZE_PARAGRAPH: 'INITIALIZE_PARAGRAPH',
    SET_USER_INPUT: 'SET_USER_INPUT',
    SET_WPM: 'SET_WPM',
    SET_TEXT_TYPED: 'SET_TEXT_TYPED',
    SET_TEXT_REMAINING: 'SET_TEXT_REMAINING'
}

// ------------------------------------
// Actions
// ------------------------------------
export const setParagraph = value => {
    return {
        type: typeActions.INITIALIZE_PARAGRAPH,
        payload: value
    }
}

export const setUserInput =  value => {
    return{
        type: typeActions.SET_USER_INPUT,
        payload: value
    }
}

export const setWPM = value => {
    return {
        type: typeActions.SET_WPM,
        payload: value
    }
}

export const setTextTyped = value => {
    return {
        type: typeActions.SET_TEXT_TYPED,
        payload: value
    }
}

export const setTextRemaining = value => {
    return {
        type: typeActions.SET_TEXT_REMAINING,
        payload: value
    }
}


