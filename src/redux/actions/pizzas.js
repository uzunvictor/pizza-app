import axios from 'axios';

export const setPizzas = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items,
    }
}

export const setLoaded = payload => ({
    type:"SET_LOADED",
    payload
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    
    dispatch(setLoaded(false))
    axios.get(category === 0 ? `http://localhost:3001/pizzas?_sort=${sortBy}&_order=desc`
        :`http://localhost:3001/pizzas?category=${category}&_sort=${sortBy}&_order=desc`).then(({data}) => {
            dispatch(setPizzas(data))}
    )
}