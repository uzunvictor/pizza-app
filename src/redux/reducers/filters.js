
const initialState = {
    sortBy: 'popular',
    visibleSort: false,
    category: 0,
}

export default function filters( state = initialState, action ) {
    if ( action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload,
            visibleSort: false
        };
    }
    if ( action.type === 'SET_CATEGORY') {
    return {
        ...state,
        category: action.payload
    }
    };
    if ( action.type === 'SET_VISIBLE_SORT') {
    return {
        ...state,
        visibleSort: action.payload
    }
    }
    
    return state
    
};

