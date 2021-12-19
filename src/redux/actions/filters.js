export function setSortBy(name) {
    return {
        type: 'SET_SORT_BY',
        payload:name,
    }
};

export function setVisibleSort(payload) {
    return {
        type: 'SET_VISIBLE_SORT',
        payload
    }
};

export function setCategory(index) {
    return {
        type: 'SET_CATEGORY',
        payload: index
    }
};

