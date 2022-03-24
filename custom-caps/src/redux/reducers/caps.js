const initialState = {
    items: [],
    isLoaded: false
}

const Caps = (state = initialState, action) => {
    if(action.type === 'SET__CAPS') {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}

export default Caps;