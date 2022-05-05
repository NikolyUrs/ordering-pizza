export const addPizzaCart = (obj) => ({
    type: "ADD_PIZZA_CART",
    payload: obj
});

export const clearCart = () => ({
    type: "CLEAR_CART"
});

export const removeCart = (id) => ({
    type: "REMOVE_CART",
    payload: id
});

export const minusPizza = (id) => ({
    type: "MINUS_PIZZA",
    payload: id
});