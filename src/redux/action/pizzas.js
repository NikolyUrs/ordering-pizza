import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3004/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then((resp) => {
        dispatch(setPizzas(resp.data));
    });
}

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items
});

export const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload
})